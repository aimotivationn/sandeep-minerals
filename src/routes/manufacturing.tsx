import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Gauge, Truck, Ship, Network, Cog, Sparkles, Ruler, ShieldCheck, Layers, Factory } from "lucide-react";
import manufacturingImg from "@/assets/manufacturing.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { CTABand } from "@/components/CTABand";
import { ProcessFlow } from "@/components/ProcessFlow";
import { units, germanTechBenefits } from "@/lib/site-data";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing | 3 Plants, 36,000 MT Capacity — SMI" },
      {
        name: "description",
        content:
          "Three manufacturing units at Rajgarh, Makrana and Abu Road with 36,000 MT annual capacity, German processing technology and a fully controlled production flow.",
      },
      { property: "og:title", content: "Manufacturing | Sandeep Mineral Industries" },
      { property: "og:description", content: "Three plants across Rajasthan running German micronising technology." },
      { property: "og:url", content: "/manufacturing" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/manufacturing" }],
  }),
  component: Manufacturing,
});

const capabilities = [
  { icon: Gauge, title: "Manufacturing Capacity", text: "36,000 MT annual capacity across three units engineered for consistent bulk supply." },
  { icon: Network, title: "Supply Chain", text: "Owned mines to dispatch — an integrated flow ensuring reliability and traceability." },
  { icon: Truck, title: "Logistics", text: "Efficient road and rail logistics network for timely domestic deliveries." },
  { icon: Ship, title: "Export Readiness", text: "Export-grade packaging and documentation for seamless international supply." },
];

const techIcons = [Sparkles, Ruler, ShieldCheck, Layers, Cog, Factory];

function Manufacturing() {
  const [active, setActive] = useState(units[0].n);

  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        crumb="Manufacturing"
        title="Three Manufacturing Plants. One Standard of Excellence."
        subtitle="Strategically located across Rajasthan, our Rajgarh, Makrana and Abu Road plants combine German technology, scale and reliable logistics for domestic and export supply."
      />

      {/* UNITS + INTERACTIVE MAP */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-muted p-8 shadow-card">
              <div className="relative mx-auto aspect-square max-w-md">
                <svg viewBox="0 0 200 200" className="h-full w-full">
                  <path
                    d="M58 28 L92 22 L120 34 L138 30 L150 52 L142 78 L120 92 L116 120 L96 150 L70 168 L52 150 L44 118 L30 96 L36 70 L46 48 Z"
                    fill="var(--gold-soft)"
                    fillOpacity="0.25"
                    stroke="var(--navy)"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <text x="100" y="190" textAnchor="middle" className="fill-[var(--muted-foreground)]" style={{ fontSize: 9 }}>
                    Rajasthan, India
                  </text>
                </svg>
                {units.map((u) => {
                  const isActive = active === u.n;
                  return (
                    <button
                      key={u.n}
                      onMouseEnter={() => setActive(u.n)}
                      onFocus={() => setActive(u.n)}
                      onClick={() => setActive(u.n)}
                      aria-label={`${u.n} — ${u.city}`}
                      className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center outline-none"
                      style={{ left: u.x, top: u.y }}
                    >
                      <span className="relative flex h-3 w-3">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                        <span
                          className={`relative inline-flex rounded-full bg-gold ring-2 ring-navy transition-all ${
                            isActive ? "h-4 w-4" : "h-3 w-3"
                          }`}
                        />
                      </span>
                      <span
                        className={`mt-1 rounded px-1.5 py-0.5 text-[0.6rem] font-semibold transition-colors ${
                          isActive ? "bg-gold text-secondary-foreground" : "bg-navy text-primary-foreground"
                        }`}
                      >
                        {u.city}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">Our Plants</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Built for scale across Rajasthan</h2>
            <p className="mt-4 text-sm text-muted-foreground">
              Hover or tap a location on the map to highlight the unit.
            </p>
            <div className="mt-8 space-y-4">
              {units.map((u) => (
                <button
                  key={u.n}
                  onMouseEnter={() => setActive(u.n)}
                  onClick={() => setActive(u.n)}
                  className={`card-elegant flex w-full items-center gap-4 p-5 text-left transition-all ${
                    active === u.n ? "border-gold shadow-elevated" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy text-primary-foreground">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold">{u.n}</div>
                    <div className="text-lg font-bold text-navy">{u.city}</div>
                    <div className="text-sm text-muted-foreground">{u.region}</div>
                  </div>
                </button>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCTION FLOW */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Production Flow</span>
              <h2 className="mt-3 text-3xl md:text-4xl">From mining to dispatch</h2>
            </Reveal>
          </div>
          <ProcessFlow />
        </div>
      </section>

      {/* GERMAN TECHNOLOGY */}
      <section className="bg-navy py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Technology</span>
              <h2 className="mt-3 text-3xl text-primary-foreground md:text-4xl">
                German Technology Manufacturing
              </h2>
              <p className="mt-5 text-base leading-relaxed text-primary-foreground/75">
                SMI operates modern German technology manufacturing plants — precision classifiers,
                jet and ball mill circuits and automated packing lines — delivering micronised
                minerals with a level of consistency conventional grinding cannot match.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
            {/* machine illustration */}
            <Reveal>
              <div className="rounded-2xl border border-primary-foreground/12 bg-primary-foreground/5 p-8">
                <svg viewBox="0 0 320 220" className="h-auto w-full" role="img" aria-label="Illustration of a German technology micronising mill and classifier line">
                  <rect x="18" y="150" width="284" height="10" rx="4" fill="var(--gold)" opacity="0.5" />
                  {/* feed hopper */}
                  <path d="M30 40 L96 40 L80 86 L46 86 Z" fill="none" stroke="var(--gold)" strokeWidth="2.5" strokeLinejoin="round" />
                  <rect x="56" y="86" width="14" height="24" fill="none" stroke="var(--gold)" strokeWidth="2.5" />
                  {/* mill body */}
                  <rect x="34" y="110" width="90" height="40" rx="8" fill="none" stroke="var(--gold)" strokeWidth="2.5" />
                  {/* rotating classifier wheel */}
                  <g transform="translate(190 96)">
                    <motion.g
                      animate={{ rotate: 360 }}
                      transition={{ duration: 9, repeat: Infinity, ease: "linear" }}
                      style={{ originX: "0px", originY: "0px" }}
                    >
                      <circle r="30" fill="none" stroke="var(--gold)" strokeWidth="2.5" />
                      {Array.from({ length: 8 }).map((_, i) => (
                        <line
                          key={i}
                          x1="0"
                          y1="0"
                          x2={30 * Math.cos((i * Math.PI) / 4)}
                          y2={30 * Math.sin((i * Math.PI) / 4)}
                          stroke="var(--gold)"
                          strokeWidth="1.6"
                          opacity="0.7"
                        />
                      ))}
                    </motion.g>
                    <circle r="5" fill="var(--gold)" />
                  </g>
                  {/* classifier tower */}
                  <rect x="150" y="46" width="80" height="104" rx="10" fill="none" stroke="var(--gold)" strokeWidth="2.5" opacity="0.55" />
                  {/* duct */}
                  <path d="M124 126 L150 126" stroke="var(--gold)" strokeWidth="2.5" />
                  <path d="M230 96 L262 96 L262 150" fill="none" stroke="var(--gold)" strokeWidth="2.5" />
                  {/* bagging */}
                  <rect x="246" y="120" width="32" height="30" rx="5" fill="none" stroke="var(--gold)" strokeWidth="2.5" />
                  {/* moving particles */}
                  {[0, 1, 2].map((i) => (
                    <motion.circle
                      key={i}
                      r="3"
                      fill="var(--gold)"
                      animate={{ cx: [128, 150, 190, 232, 258], cy: [126, 126, 96, 96, 128], opacity: [0, 1, 1, 1, 0] }}
                      transition={{ duration: 3.2, repeat: Infinity, delay: i * 1.05, ease: "easeInOut" }}
                    />
                  ))}
                </svg>
              </div>
            </Reveal>

            <div className="grid gap-5 sm:grid-cols-2">
              {germanTechBenefits.map((b, i) => {
                const Icon = techIcons[i] ?? Cog;
                return (
                  <Reveal key={b} delay={i * 0.07}>
                    <div className="h-full rounded-2xl border border-primary-foreground/12 bg-primary-foreground/5 p-6 transition-transform duration-300 hover:-translate-y-1.5">
                      <Icon className="h-6 w-6 text-gold" />
                      <div className="mt-4 font-display text-base font-semibold text-primary-foreground">
                        {b}
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* IMAGE BANNER + STATS */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={manufacturingImg}
                alt="Micronised mineral processing facility interior"
                loading="lazy"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">By The Numbers</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Capacity you can count on</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              From 3,000 MT per annum in 2005 to more than 36,000 MT today — our integrated
              facilities are designed for high-throughput, consistent output and dependable delivery.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { v: 3, s: "", l: "Plants" },
                { v: 36000, s: "+", l: "MT Annual Capacity" },
                { v: 2, s: "", l: "Owned Mines" },
              ].map((m) => (
                <div key={m.l}>
                  <div className="font-display text-3xl font-extrabold text-navy">
                    <StatCounter value={m.v} suffix={m.s} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{m.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Capabilities</span>
              <h2 className="mt-3 text-3xl md:text-4xl">From plant to port</h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <div className="card-elegant h-full p-7 hover:-translate-y-1.5 hover:shadow-elevated">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-base">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
