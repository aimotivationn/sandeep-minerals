import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, test } from "bun:test";

const source = readFileSync(new URL("./site-data.ts", import.meta.url), "utf8");

describe("client-approved public company profile", () => {
  test("uses 2000 as the central founding year", () => {
    expect(source).toMatch(/founded:\s*2000/);
  });

  test("identifies the legal structure as a sole proprietorship", () => {
    expect(source).toMatch(/legalStatus:\s*"Sole Proprietorship"/);
  });

  test("stores the confirmed GSTIN and registration date centrally", () => {
    expect(source).toContain("08AFTPJ2006F1ZL");
    expect(source).toContain('gstRegistrationDate: "1 July 2017"');
  });

  test("uses the approved titles for both named leaders", () => {
    expect(source).toMatch(/name:\s*"Sandeep Jain",\s*role:\s*"Marketing Manager"/s);
    expect(source).toMatch(/name:\s*"Moti Lal Jain",\s*role:\s*"Proprietor"/s);
  });

  test("stores the exact headquarters address and the third-plant location", () => {
    expect(source).toContain("H-25/26, RIICO Industrial Area, Rajgarh, Alwar, Rajasthan 301408, India");
    expect(source).toContain("Sandeep Mineral Industries – 3rd Plant, Abu Road / Khara, Rajasthan 307026, India");
  });

  test("does not state turnover, employee count, ISO certification, or owned-mine claims", () => {
    expect(source).not.toMatch(/₹\s*5|11\s*[–-]\s*25\s*employees|ISO\s*9001|Owned Mines|owned mining sources/i);
  });
});