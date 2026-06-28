import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Target,
  Eye,
  Gem,
  CheckCircle2,
  Factory,
  Globe2,
  ArrowRight,
} from "lucide-react";
import aboutImg from "@/assets/about-quarry.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Sandeep Mineral Industries" },
      {
        name: "description",
        content:
          "Learn about Sandeep Mineral Industries — a leading manufacturer of baryte powder and calcium carbonate with advanced processing, precision and global supply capability.",
      },
      { property: "og:title", content: "About Sandeep Mineral Industries" },
      { property: "og:description", content: "Our mission, vision, values and manufacturing excellence." },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2005", title: "Founded", text: "Sandeep Mineral Industries established in Rajasthan with a single processing line." },
  { year: "2010", title: "Capacity Expansion", text: "Added micronizing technology and launched ultra-fine calcium carbonate grades." },
  { year: "2016", title: "Second Unit", text: "Commissioned our Makrana facility to serve growing paint and polymer demand." },
  { year: "2021", title: "Third Unit & Exports", text: "Opened Abu Road plant and began supplying international markets." },
  { year: "2026", title: "500+ Clients", text: "Trusted by hundreds of manufacturers across plastics, paints, rubber & construction." },
];

const values = [
  { icon: Gem, title: "Quality First", text: "Uncompromising standards in purity, brightness and particle precision." },
  { icon: CheckCircle2, title: "Consistency", text: "Reliable batch-to-batch performance you can build a process around." },
  { icon: Globe2, title: "Integrity", text: "Transparent partnerships built on trust and dependable supply." },
  { icon: Factory, title: "Innovation", text: "Continuous investment in processing technology and capability." },
];

const whyUs = [
  "Advanced micronizing & processing technology",
  "Strict particle-size precision control",
  "Certified purity and consistency",
  "Three manufacturing units for assured supply",
  "Export-ready logistics & packaging",
  "Dedicated technical support team",
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        crumb="About"
        title="A premium mineral partner built on precision and trust"
        subtitle="Sandeep Mineral Industries is a leading manufacturer and supplier of high-performance mineral products serving global industries since 2005."
      />

      {/* OVERVIEW */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={aboutImg}
                alt="Limestone quarry operations"
                loading="lazy"
                width={1000}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Company Overview</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Engineering minerals that elevate products</h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Sandeep Mineral Industries is a leading manufacturer and supplier of high-performance
                mineral products, specializing in baryte powder, ultra-fine calcium carbonate,
                super-fine calcium carbonate, and imported mineral powders.
              </p>
              <p>
                We serve industries including plastics, paints, coatings, rubber, construction, and
                other industrial applications.
              </p>
              <p>
                With advanced processing technology and a strong focus on particle size precision,
                purity, and consistency, our products are designed to enhance performance, durability,
                and cost efficiency.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Our Journey</span>
              <h2 className="mt-3 text-3xl md:text-4xl">Two decades of growth</h2>
            </Reveal>
          </div>
          <div className="mt-14 space-y-5 md:space-y-0">
            <div className="relative grid gap-5 md:grid-cols-5">
              {timeline.map((t, i) => (
                <Reveal key={t.year} delay={i * 0.08}>
                  <div className="card-elegant h-full p-6">
                    <div className="font-display text-2xl font-extrabold text-gold">{t.year}</div>
                    <h3 className="mt-2 text-base">{t.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="card-elegant h-full p-9">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl">Our Mission</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                To deliver consistently superior industrial minerals that enhance our customers'
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
                To be a globally recognised mineral manufacturer, setting the benchmark for purity,
                precision and trust across domestic and international markets.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-muted py-20 md:py-28">
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
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Why Choose Us</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Manufacturing excellence & global supply</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              From raw material selection to final packaging, every stage is engineered for
              performance — giving you a dependable, premium supply partner at scale.
            </p>
            <Link
              to="/manufacturing"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-navy-dark"
            >
              Explore Manufacturing <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-4 sm:grid-cols-2">
              {whyUs.map((w) => (
                <li key={w} className="flex items-start gap-3 rounded-xl bg-muted p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <span className="text-sm font-medium text-foreground">{w}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTABand />
    </>
  );
}
