import { createFileRoute } from "@tanstack/react-router";
import { Package, Ship, Truck, Container, ShieldCheck, Boxes, Globe2, Headphones } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { exportCapabilities } from "@/lib/site-data";

export const Route = createFileRoute("/export-packaging")({
  head: () => ({
    meta: [
      { title: "Export & Packaging | Bulk Mineral Supply — SMI" },
      {
        name: "description",
        content:
          "Export-ready packaging in 25 kg, 50 kg and 500 kg bags, bulk loading, container stuffing and international shipping support from Sandeep Mineral Industries.",
      },
      { property: "og:title", content: "Export & Packaging | Sandeep Mineral Industries" },
      { property: "og:description", content: "Export-ready packaging, container loading and global logistics support." },
      { property: "og:url", content: "/export-packaging" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/export-packaging" }],
  }),
  component: ExportPackaging,
});

const icons = [Package, Boxes, Container, Truck, Ship, Container, ShieldCheck, Headphones];

const packs = [
  { size: "25 kg", text: "HDPE laminated bags for controlled batch handling" },
  { size: "50 kg", text: "Standard industrial bags for high-volume plants" },
  { size: "500 kg", text: "Jumbo bags for bulk consumption and mechanised handling" },
];

function ExportPackaging() {
  return (
    <>
      <PageHero
        eyebrow="Export & Packaging"
        crumb="Export & Packaging"
        title="Export-ready supply, packed for the world"
        subtitle="From 25 kg bags to container-loaded bulk consignments, our packaging and logistics are built for safe, on-time delivery in India and across international markets."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Packaging Options</span>
              <h2 className="mt-3 text-3xl md:text-4xl">Three standard pack sizes</h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {packs.map((p, i) => (
              <Reveal key={p.size} delay={i * 0.09}>
                <div className="card-elegant h-full p-8 text-center hover:-translate-y-1.5 hover:shadow-elevated">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                    <Package className="h-8 w-8" />
                  </div>
                  <div className="mt-5 font-display text-3xl font-extrabold text-navy">{p.size}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Capabilities</span>
              <h2 className="mt-3 text-3xl md:text-4xl">Domestic dispatch to global shipping</h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {exportCapabilities.map((c, i) => {
              const Icon = icons[i] ?? Globe2;
              return (
                <Reveal key={c.title} delay={i * 0.06}>
                  <div className="card-elegant h-full p-7 hover:-translate-y-1.5 hover:shadow-elevated">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-base">{c.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
