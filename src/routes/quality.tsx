import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Microscope,
  Palette,
  Droplets,
  Scale,
  FlaskConical,
  Sun,
  Lightbulb,
  CloudDrizzle,
  Layers,
  Gauge,
  TestTube,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { IsoBadge } from "@/components/IsoBadge";
import { ProcessFlow } from "@/components/ProcessFlow";
import { labTests } from "@/lib/site-data";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Laboratory Testing | ISO 9001:2015 — SMI" },
      {
        name: "description",
        content:
          "ISO 9001:2015 certified quality at SMI: particle size analysis, spectrophotometer, oil absorption, bulk density, chemical analysis, whiteness, brightness and pH testing.",
      },
      { property: "og:title", content: "Quality & Laboratory Testing | Sandeep Mineral Industries" },
      { property: "og:description", content: "Eleven-point laboratory testing on every production lot." },
      { property: "og:url", content: "/quality" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: Quality,
});

const testIcons = [
  Microscope,
  Palette,
  Droplets,
  Scale,
  FlaskConical,
  Sun,
  Lightbulb,
  CloudDrizzle,
  Layers,
  Gauge,
  TestTube,
];

function Quality() {
  return (
    <>
      <PageHero
        eyebrow="Quality"
        crumb="Quality"
        title="Every batch proven in our laboratory"
        subtitle="An ISO 9001:2015 certified quality system and an eleven-point in-house testing protocol confirm that each production lot performs exactly as specified."
      />

      {/* ISO BADGE */}
      <section className="bg-background py-16 md:py-20">
        <div className="container-px grid items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Certification</span>
            <h2 className="mt-3 text-3xl md:text-4xl">ISO 9001:2015 Certified Company</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Our quality management system is independently certified to ISO 9001:2015, covering
              raw material intake, micronisation, laboratory verification, packaging and dispatch
              across all three manufacturing units.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex lg:justify-end">
            <IsoBadge />
          </Reveal>
        </div>
      </section>

      {/* LAB TESTS */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Laboratory Testing Capabilities</span>
              <h2 className="mt-3 text-3xl md:text-4xl">Eleven tests behind every consignment</h2>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {labTests.map((t, i) => {
              const Icon = testIcons[i] ?? Microscope;
              return (
                <Reveal key={t.name} delay={i * 0.05}>
                  <div className="card-elegant group h-full p-7 hover:-translate-y-1.5 hover:shadow-elevated">
                    <motion.div
                      whileHover={{ rotate: -8, scale: 1.08 }}
                      transition={{ type: "spring", stiffness: 260, damping: 16 }}
                      className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <h3 className="mt-5 text-base">{t.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS FLOW */}
      <section className="bg-navy py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <span className="eyebrow">Controlled Process</span>
              <h2 className="mt-3 text-3xl text-primary-foreground md:text-4xl">
                Quality checkpoints from mining to dispatch
              </h2>
            </Reveal>
          </div>
          <ProcessFlow dark />
        </div>
      </section>

      <CTABand />
    </>
  );
}
