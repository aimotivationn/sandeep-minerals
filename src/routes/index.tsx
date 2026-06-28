import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Microscope,
  Globe2,
  Factory,
  Layers,
  Beaker,
  Hammer,
  Truck,
  Quote,
  Search,
  Star,
} from "lucide-react";
import { useState } from "react";
import heroImg from "@/assets/hero-quarry.jpg";
import { Reveal } from "@/components/Reveal";
import { StatCounter } from "@/components/StatCounter";
import { CTABand } from "@/components/CTABand";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sandeep Mineral Industries | High-Performance Industrial Minerals" },
      {
        name: "description",
        content:
          "Delivering high-performance industrial minerals since 2005. Baryte powder, ultra-fine & super-fine calcium carbonate and imported mineral powders for global industries.",
      },
      { property: "og:title", content: "Sandeep Mineral Industries | Industrial Minerals" },
      {
        property: "og:description",
        content:
          "Premium mineral solutions for plastics, paints, rubber, construction and industrial applications.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: 20, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 3, suffix: "", label: "Manufacturing Units" },
  { value: 100, suffix: "%", label: "Quality Assured" },
];

const features = [
  {
    icon: Microscope,
    title: "Particle Size Precision",
    text: "Micronized control down to sub-micron grades for consistent, predictable performance.",
  },
  {
    icon: ShieldCheck,
    title: "Certified Purity",
    text: "Rigorous lab testing ensures every batch meets exacting purity and brightness standards.",
  },
  {
    icon: Factory,
    title: "Manufacturing Scale",
    text: "Three plants across Rajasthan delivering reliable, high-volume bulk supply.",
  },
  {
    icon: Globe2,
    title: "Global Supply",
    text: "Export-ready logistics serving domestic and international markets with confidence.",
  },
];

const industries = [
  { icon: Layers, name: "Plastics" },
  { icon: Beaker, name: "Paints & Coatings" },
  { icon: Hammer, name: "Construction" },
  { icon: Factory, name: "Rubber" },
  { icon: Beaker, name: "Chemical" },
  { icon: Truck, name: "Manufacturing" },
];

const testimonials = [
  {
    quote:
      "Their ultra-fine calcium carbonate transformed the finish quality of our coatings. Consistency batch after batch is exceptional.",
    name: "Procurement Head",
    company: "Leading Paints Manufacturer",
  },
  {
    quote:
      "Reliable bulk supply and tight specifications. Sandeep Mineral has become a core part of our polymer supply chain.",
    name: "Operations Director",
    company: "Polymer Compounding Co.",
  },
  {
    quote:
      "Excellent technical support and dependable logistics. A genuinely premium and trustworthy mineral partner.",
    name: "Sourcing Manager",
    company: "Construction Products Group",
  },
];

function Home() {
  const [search, setSearch] = useState("");
  const filtered = search
    ? products.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
    : products;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Open-pit limestone quarry with excavators and dump trucks"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        <div className="container-px relative py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="eyebrow">Industrial Minerals · Since 2005</span>
            <h1 className="mt-4 text-4xl leading-[1.08] md:text-6xl">
              Delivering High-Performance Industrial Minerals
              <span className="text-gradient-gold"> Since 2005</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/80">
              Premium mineral solutions for plastics, paints, rubber, construction and industrial
              applications.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-elevated transition-all hover:bg-navy-dark"
              >
                Explore Products <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-background/70 px-7 py-3.5 text-sm font-semibold text-navy backdrop-blur transition-all hover:border-gold hover:text-gold"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-b border-border bg-card">
        <div className="container-px grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1} className="text-center">
              <div className="font-display text-4xl font-extrabold text-navy md:text-5xl">
                <StatCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INTRO + FEATURES */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <span className="eyebrow">Who We Are</span>
              <h2 className="mt-3 text-3xl md:text-4xl">
                Precision-engineered minerals trusted by industry leaders
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Sandeep Mineral Industries manufactures and supplies high-performance mineral
                products built on particle-size precision, purity and consistency — enhancing the
                performance, durability and cost efficiency of your formulations.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.08}>
                <div className="card-elegant h-full p-7 hover:-translate-y-1.5 hover:shadow-elevated">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-px">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <Reveal>
              <span className="eyebrow">Our Products</span>
              <h2 className="mt-3 max-w-xl text-3xl md:text-4xl">
                Engineered mineral grades for every application
              </h2>
            </Reveal>
            <Reveal className="w-full md:w-72">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full rounded-full border border-border bg-card py-2.5 pl-10 pr-4 text-sm outline-none transition-colors focus:border-gold"
                />
              </div>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="card-elegant group block h-full overflow-hidden hover:-translate-y-1.5 hover:shadow-elevated"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.short}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                      View details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
            {filtered.length === 0 && (
              <p className="col-span-full text-center text-muted-foreground">No products found.</p>
            )}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Industries Served</span>
              <h2 className="mt-3 text-3xl md:text-4xl">Powering performance across sectors</h2>
            </Reveal>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {industries.map((ind, i) => (
              <Reveal key={ind.name} delay={i * 0.06}>
                <div className="card-elegant flex h-full flex-col items-center gap-3 p-6 text-center hover:-translate-y-1.5 hover:shadow-elevated">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/10 text-gold">
                    <ind.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-navy">{ind.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold"
            >
              View all industries <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Client Testimonials</span>
              <h2 className="mt-3 text-3xl md:text-4xl">Trusted by manufacturers worldwide</h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <figure className="card-elegant flex h-full flex-col p-7">
                  <Quote className="h-8 w-8 text-gold/40" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                    "{t.quote}"
                  </blockquote>
                  <div className="mt-5 flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <figcaption className="mt-4 border-t border-border pt-4">
                    <div className="text-sm font-semibold text-navy">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.company}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
