import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Ruler, ShieldCheck, Microscope, FlaskConical, Boxes } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Process | Sandeep Mineral Industries" },
      {
        name: "description",
        content:
          "Advanced processing technology, particle-size precision, purity standards, laboratory testing and batch consistency define quality at Sandeep Mineral Industries.",
      },
      { property: "og:title", content: "Quality & Process | Sandeep Mineral Industries" },
      { property: "og:description", content: "Our commitment to purity, precision and consistency." },
    ],
  }),
  component: Quality,
});

const pillars = [
  { icon: Cpu, title: "Advanced Processing Technology", text: "Modern micronizing and classification lines for precise, repeatable output." },
  { icon: Ruler, title: "Particle Size Precision", text: "Tight control of D50 and distribution for predictable formulation behaviour." },
  { icon: ShieldCheck, title: "Purity Standards", text: "Selected raw materials and refining for high brightness and low impurities." },
  { icon: FlaskConical, title: "Quality Assurance", text: "Defined QA protocols at every production stage, from intake to dispatch." },
  { icon: Microscope, title: "Laboratory Testing", text: "In-house lab analysis verifies whiteness, particle size, purity and moisture." },
  { icon: Boxes, title: "Batch Consistency", text: "Documented, traceable batches deliver dependable performance every time." },
];

const process = [
  { step: "01", title: "Raw Material Selection", text: "High-grade ore sourced and inspected for purity and suitability." },
  { step: "02", title: "Crushing & Grinding", text: "Primary size reduction prepares material for fine processing." },
  { step: "03", title: "Micronizing & Classification", text: "Precision milling achieves target particle-size distribution." },
  { step: "04", title: "Quality Testing", text: "Lab analysis confirms specifications against required standards." },
  { step: "05", title: "Packaging & Dispatch", text: "Controlled packing and export-ready logistics for reliable delivery." },
];

function Quality() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        crumb="Quality"
        title="Engineered quality at every stage"
        subtitle="Our quality framework combines advanced technology, precise control and rigorous testing to deliver minerals you can rely on."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Our Standards</span>
              <h2 className="mt-3 text-3xl md:text-4xl">Six pillars of mineral quality</h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.07}>
                <div className="card-elegant h-full p-8 hover:-translate-y-1.5 hover:shadow-elevated">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <p.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS TIMELINE */}
      <section className="bg-navy py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Manufacturing Process</span>
              <h2 className="mt-3 text-3xl text-primary-foreground md:text-4xl">
                From ore to engineered mineral
              </h2>
            </Reveal>
          </div>
          <div className="relative mt-16">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-primary-foreground/15 lg:block" />
            <div className="grid gap-8 lg:grid-cols-5">
              {process.map((p, i) => (
                <Reveal key={p.step} delay={i * 0.1}>
                  <div className="relative text-center">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-navy font-display text-lg font-bold text-gold">
                      {p.step}
                    </div>
                    <h3 className="mt-5 text-base text-primary-foreground">{p.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">
                      {p.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
