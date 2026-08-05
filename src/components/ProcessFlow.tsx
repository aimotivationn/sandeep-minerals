import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { productionFlow } from "@/lib/site-data";

export function ProcessFlow({ dark = false }: { dark?: boolean }) {
  return (
    <div className="mx-auto mt-14 max-w-3xl">
      {productionFlow.map((step, i) => (
        <div key={step}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={`flex items-center gap-5 rounded-2xl border px-6 py-5 ${
              dark
                ? "border-primary-foreground/15 bg-primary-foreground/5"
                : "border-border bg-card shadow-card"
            }`}
          >
            <span
              className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full font-display text-sm font-bold ${
                dark ? "bg-gold text-secondary-foreground" : "bg-navy text-primary-foreground"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={`font-display text-lg font-semibold ${
                dark ? "text-primary-foreground" : "text-navy"
              }`}
            >
              {step}
            </span>
          </motion.div>
          {i < productionFlow.length - 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 + 0.2 }}
              className="flex justify-center py-2"
            >
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.15 }}
              >
                <ChevronDown className={`h-5 w-5 ${dark ? "text-gold" : "text-gold"}`} />
              </motion.span>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
