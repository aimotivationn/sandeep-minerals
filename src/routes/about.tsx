import { createFileRoute, Link } from "@tanstack/react-router";
import { Target, Eye, Gem, CheckCircle2, Factory, Globe2, ArrowRight, Mountain, Cog } from "lucide-react";
import aboutImg from "@/assets/about-quarry.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { IsoBadge } from "@/components/IsoBadge";
import { overviewParagraphs, highlights, sourcing, COMPANY } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SMI | Micronised Mineral Manufacturer Since 2005" },
      {
        name: "description",
        content:
          "Sandeep Mineral Industries (SMI) manufactures premium micronised minerals from three Rajasthan plants with 36,000 MT annual capacity and German processing technology.",
      },
      { property: "og:title", content: "About Sandeep Mineral Industries (SMI)" },
      {
        property: "og:description",
        content:
          "Established 2005. Three plants, 36,000 MT annual capacity, owned mines and ISO 9001:2015 certified quality.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Gem, title: "Quality First", text: "Uncompromising standards in purity, brightness and particle precision." },
  { icon: CheckCircle2, title: "Consistency", text: "Reliable batch-to-batch performance you can build a process around." },
  { icon: Globe2, title: "Integrity", text: "Transparent partnerships built on trust and dependable supply." },
  { icon: Factory, title: "Innovation", text: "Continuous investment in processing technology and capability." },
];

const facts = [
  { label: "Company Name", value: COMPANY.name },
  { label: "Trade Name", value: COMPANY.tradeName },
  { label: "Established", value: COMPANY.established },
  { label: "Industry", value: COMPANY.industry },
  { label: "Headquarters", value: COMPANY.headquarters },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About SMI"
        crumb="About"
        title="A leading manufacturer of premium micronised minerals"
        subtitle="Established in 2005, Sandeep Mineral Industries manufactures world-class micronised minerals from three advanced plants across Rajasthan under the trusted trade name SMI."
      />

      {/* OVERVIEW */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={aboutImg}
                alt="Limestone mining operations supplying Sandeep Mineral Industries"
                loading="lazy"
                width={1000}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="card-elegant mt-6 divide-y divide-border">
              {facts.map((f) => (
                <div key={f.label} className="flex items-center justify-between gap-4 px-6 py-3.5 text-sm">
                  <span className="font-medium text-muted-foreground">{f.label}</span>
                  <span className="text-right font-semibold text-navy">{f.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Company Overview</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Mine to micron, engineered in Rajasthan</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              {overviewParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <IsoBadge />
            </div>
          </Reveal>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="bg-navy py-20 md:py-24">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Company Highlights</span>
              <h2 className="mt-3 text-3xl text-primary-foreground md:text-4xl">
                Scale, certification and reach
              </h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <Reveal key={h.label} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-primary-foreground/12 bg-primary-foreground/5 p-7 transition-transform duration-300 hover:-translate-y-1.5">
                  <div className="font-display text-3xl font-extrabold text-gold">{h.value}</div>
                  <div className="mt-2 text-sm font-medium uppercase tracking-wider text-primary-foreground/70">
                    {h.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OUR JOURNEY */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Our Journey</span>
              <h2 className="mt-3 text-3xl md:text-4xl">2005 → 2017 → 2024 → Future Expansion</h2>
            </Reveal>
          </div>
          <JourneyTimeline />
        </div>
      </section>

      {/* RAW MATERIAL SOURCING */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Raw Material Sourcing</span>
              <h2 className="mt-3 text-3xl md:text-4xl">Quality controlled from mine to micron</h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Owning our mining source and raw material processing unit means we control purity,
                brightness and consistency at every stage — long before the mineral reaches a
                micronising mill.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">
            <Reveal>
              <div className="card-elegant h-full p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                  <Mountain className="h-7 w-7" />
                </div>
                <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Step 01
                </span>
                <h3 className="mt-2 text-xl">{sourcing.mine.title}</h3>
                <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                  {sourcing.mine.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <div className="flex items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-navy text-primary-foreground">
                <ArrowRight className="h-5 w-5 text-gold" />
              </div>
            </div>

            <Reveal delay={0.1}>
              <div className="card-elegant h-full p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5 text-navy">
                  <Cog className="h-7 w-7" />
                </div>
                <span className="mt-5 block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Step 02
                </span>
                <h3 className="mt-2 text-xl">{sourcing.processing.title}</h3>
                <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
                  {sourcing.processing.lines.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-px grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-elegant h-full p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl">Our Mission</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To deliver consistently superior micronised minerals that enhance our customers'
                products — combining technical precision, reliable supply and genuine partnership.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-elegant h-full p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl">Our Vision</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To become a Global Leader in Micronised Mineral Manufacturing, setting the benchmark
                for purity, precision and trust across domestic and international markets.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Core Values</span>
              <h2 className="mt-3 text-3xl md:text-4xl">The principles behind every batch</h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="card-elegant h-full p-7 text-center hover:-translate-y-1.5 hover:shadow-elevated">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-navy/5 text-navy">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-base">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/our-goal"
              className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-navy-dark"
            >
              Read Our Goal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
