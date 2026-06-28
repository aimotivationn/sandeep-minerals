import { createFileRoute } from "@tanstack/react-router";
import { Layers, Beaker, Factory, Hammer, FlaskConical, Cog } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries Served | Sandeep Mineral Industries" },
      {
        name: "description",
        content:
          "Our industrial minerals serve plastics, paints & coatings, rubber, construction, chemical and industrial manufacturing sectors with reliable, high-performance grades.",
      },
      { property: "og:title", content: "Industries Served | Sandeep Mineral Industries" },
      { property: "og:description", content: "Minerals engineered for plastics, paints, rubber, construction and more." },
    ],
  }),
  component: Industries,
});

const industries = [
  {
    icon: Layers,
    name: "Plastics Industry",
    text: "Functional fillers and reinforcement for masterbatches, PVC, films and engineering polymers — improving stiffness, opacity and cost efficiency.",
  },
  {
    icon: Beaker,
    name: "Paints & Coatings",
    text: "Ultra-fine grades that boost opacity, sheen control and durability in decorative and industrial coating systems.",
  },
  {
    icon: Factory,
    name: "Rubber Industry",
    text: "Consistent fillers that enhance mechanical strength, processing and cost performance in rubber compounds.",
  },
  {
    icon: Hammer,
    name: "Construction",
    text: "Dependable mineral inputs for dry-mix mortars, putty, sealants and building products at scale.",
  },
  {
    icon: FlaskConical,
    name: "Chemical Industry",
    text: "High-purity minerals for chemical formulations, detergents and specialty processes.",
  },
  {
    icon: Cog,
    name: "Industrial Manufacturing",
    text: "Tailored mineral solutions supporting a broad range of industrial production processes.",
  },
];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries Served"
        crumb="Industries"
        title="Powering performance across diverse industries"
        subtitle="From plastics to construction, our precision-engineered minerals are trusted inputs in critical manufacturing processes worldwide."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-px grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.07}>
              <div className="card-elegant h-full p-8 hover:-translate-y-1.5 hover:shadow-elevated">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/5 text-navy">
                  <ind.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl">{ind.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
