import { motion } from "framer-motion";
import { Factory, Building2, Cpu, Rocket, CheckCircle2 } from "lucide-react";
import { journey } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";

const icons = [Factory, Building2, Cpu, Rocket];

export function JourneyTimeline() {
  return (
    <div className="relative mt-14">
      {/* connecting rail */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-0 right-0 top-9 hidden h-0.5 origin-left bg-gradient-to-r from-gold/20 via-gold to-gold/20 lg:block"
      />
      <div className="grid gap-8 lg:grid-cols-4">
        {journey.map((j, i) => {
          const Icon = icons[i] ?? Factory;
          return (
            <Reveal key={j.year} delay={i * 0.14}>
              <div className="relative">
                <div className="relative z-10 mx-auto flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-gold/40 bg-card shadow-card lg:mx-0">
                  <Icon className="h-8 w-8 text-gold" />
                  <motion.span
                    animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                    className="absolute inset-0 rounded-2xl border border-gold/40"
                  />
                </div>
                <div className="card-elegant mt-6 h-full p-6">
                  <div className="font-display text-2xl font-extrabold text-gold">{j.year}</div>
                  <h3 className="mt-1 text-base">{j.title}</h3>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {j.place}
                  </div>
                  <ul className="mt-4 space-y-2.5">
                    {j.points.map((p) => (
                      <li key={p} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
