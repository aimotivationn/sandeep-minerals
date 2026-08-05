import { createFileRoute } from "@tanstack/react-router";
import { Target, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { IsoBadge } from "@/components/IsoBadge";
import { goals } from "@/lib/site-data";

export const Route = createFileRoute("/our-goal")({
  head: () => ({
    meta: [
      { title: "Our Goal | Committed to Manufacturing Excellence — SMI" },
      {
        name: "description",
        content:
          "SMI is committed to becoming the leading manufacturer of micronised minerals through consistent quality, reliable supply, safe operations and continuous innovation.",
      },
      { property: "og:title", content: "Our Goal | Sandeep Mineral Industries" },
      { property: "og:description", content: "Committed to manufacturing excellence in micronised minerals." },
      { property: "og:url", content: "/our-goal" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/our-goal" }],
  }),
  component: OurGoal,
});

function OurGoal() {
  return (
    <>
      <PageHero
        eyebrow="Our Goal"
        crumb="Our Goal"
        title="Committed to Manufacturing Excellence"
        subtitle="Sandeep Mineral Industries is committed to becoming the leading manufacturer of micronised minerals by delivering consistent quality, reliable supply and continuous innovation."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <Target className="h-7 w-7" />
              </div>
              <span className="eyebrow mt-6 block">Our Objectives</span>
              <h2 className="mt-3 text-3xl md:text-4xl">Seven commitments we hold ourselves to</h2>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {goals.map((g, i) => (
              <Reveal key={g} delay={i * 0.07}>
                <div className="card-elegant flex h-full items-start gap-4 p-7 hover:-translate-y-1.5 hover:shadow-elevated">
                  <span className="font-display text-2xl font-extrabold text-gold/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base font-medium leading-relaxed text-navy">{g}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted py-20 md:py-24">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Quality Policy</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Excellence, verified at every stage</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Our ISO 9001:2015 certified quality management system governs raw material selection,
              processing, laboratory testing, packaging and dispatch — so every consignment leaves
              our plants meeting the specification our customers depend on.
            </p>
            <div className="mt-8">
              <IsoBadge />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="grid gap-4">
              {[
                "Documented procedures across all three manufacturing units",
                "Eleven-point laboratory testing on every production lot",
                "Traceable batch coding from mine to dispatch",
                "Continuous employee training and safety programmes",
                "Customer feedback loops driving process improvement",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 rounded-xl bg-card p-4 shadow-card">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  <span className="text-sm text-foreground">{t}</span>
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
