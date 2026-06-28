import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Gauge, Truck, Ship, Network } from "lucide-react";
import manufacturingImg from "@/assets/manufacturing.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { CTABand } from "@/components/CTABand";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing | Sandeep Mineral Industries" },
      {
        name: "description",
        content:
          "Three manufacturing plants across Rajasthan — Rajgarh, Makrana and Abu Road — delivering one standard of excellence with strong supply chain and export readiness.",
      },
      { property: "og:title", content: "Manufacturing | Sandeep Mineral Industries" },
      { property: "og:description", content: "Three plants. One standard of excellence." },
    ],
  }),
  component: Manufacturing,
});

const units = [
  { n: "Unit 1", city: "Rajgarh", region: "Alwar, Rajasthan", x: "30%", y: "42%" },
  { n: "Unit 2", city: "Makrana", region: "Rajasthan", x: "40%", y: "55%" },
  { n: "Unit 3", city: "Abu Road", region: "Rajasthan", x: "22%", y: "75%" },
];

const capabilities = [
  { icon: Gauge, title: "Manufacturing Capacity", text: "High-volume processing across three units engineered for consistent bulk supply." },
  { icon: Network, title: "Supply Chain", text: "Integrated raw material to dispatch flow ensuring reliability and traceability." },
  { icon: Truck, title: "Logistics", text: "Efficient road and rail logistics network for timely domestic deliveries." },
  { icon: Ship, title: "Export Readiness", text: "Export-grade packaging and documentation for seamless international supply." },
];

function Manufacturing() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing"
        crumb="Manufacturing"
        title="Three Manufacturing Plants. One Standard of Excellence."
        subtitle="Strategically located across Rajasthan, our plants combine scale, precision and reliable logistics to serve customers nationally and internationally."
      />

      {/* UNITS + MAP */}
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
                {units.map((u) => (
                  <div
                    key={u.n}
                    className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
                    style={{ left: u.x, top: u.y }}
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold opacity-60" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-gold ring-2 ring-navy" />
                    </span>
                    <span className="mt-1 rounded bg-navy px-1.5 py-0.5 text-[0.6rem] font-semibold text-primary-foreground">
                      {u.city}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">Our Plants</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Built for scale across Rajasthan</h2>
            <div className="mt-8 space-y-4">
              {units.map((u, i) => (
                <div key={u.n} className="card-elegant flex items-center gap-4 p-5">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-navy text-primary-foreground">
                    <MapPin className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gold">
                      {u.n}
                    </div>
                    <div className="text-lg font-bold text-navy">{u.city}</div>
                    <div className="text-sm text-muted-foreground">{u.region}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMAGE BANNER + STATS */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={manufacturingImg}
                alt="Mineral processing facility interior"
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
              Our integrated facilities are designed for high-throughput, consistent output and
              dependable delivery — at home and across borders.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[
                { v: 3, s: "", l: "Plants" },
                { v: 100, s: "k+", l: "MT Annual Capacity" },
                { v: 24, s: "/7", l: "Operations" },
              ].map((m) => (
                <div key={m.l}>
                  <div className="font-display text-3xl font-extrabold text-navy">
                    <StatCounter value={m.v} suffix={m.s} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {m.l}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-background py-20 md:py-28">
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
