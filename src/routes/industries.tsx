import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Brush,
  Layers,
  Factory,
  Newspaper,
  Hammer,
  Waves,
  Boxes,
  Droplets,
  Printer,
  Pill,
  FlaskConical,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { industriesServed } from "@/lib/site-data";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries We Serve | Micronised Minerals — SMI" },
      {
        name: "description",
        content:
          "SMI micronised minerals serve paints & powder coatings, plastics, rubber, paper, construction, PVC pipes, masterbatch, adhesives, printing ink, pharma and chemicals.",
      },
      { property: "og:title", content: "Industries We Serve | Sandeep Mineral Industries" },
      { property: "og:description", content: "Minerals engineered for eleven industrial sectors." },
      { property: "og:url", content: "/industries" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

const icons = [Brush, Layers, Factory, Newspaper, Hammer, Waves, Boxes, Droplets, Printer, Pill, FlaskConical];

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries We Serve"
        crumb="Industries"
        title="Powering performance across eleven industries"
        subtitle="From premium coatings to PVC pipes and pharmaceutical processing, our micronised minerals are trusted inputs in critical manufacturing processes in India and abroad."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-px grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {industriesServed.map((ind, i) => {
            const Icon = icons[i] ?? Factory;
            return (
              <Reveal key={ind.name} delay={i * 0.06}>
                <div className="card-elegant relative h-full overflow-hidden p-8 hover:-translate-y-1.5 hover:shadow-elevated">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/10 blur-2xl" />
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-navy to-navy-dark text-gold"
                  >
                    <Icon className="h-8 w-8" />
                  </motion.div>
                  <h3 className="mt-5 text-xl">{ind.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{ind.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTABand />
    </>
  );
}
