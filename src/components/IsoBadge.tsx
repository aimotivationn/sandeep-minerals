import { Award } from "lucide-react";
import { motion } from "framer-motion";

export function IsoBadge({ compact = false }: { compact?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`inline-flex items-center gap-4 rounded-2xl border border-gold/40 bg-gold/10 ${
        compact ? "px-5 py-3" : "px-7 py-5"
      }`}
    >
      <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gold text-secondary-foreground">
        <Award className="h-6 w-6" />
        <motion.span
          animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="absolute inset-0 rounded-full border border-gold"
        />
      </span>
      <span className="text-left">
        <span className="block font-display text-lg font-extrabold text-navy">ISO 9001:2015</span>
        <span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Certified Company
        </span>
      </span>
    </motion.div>
  );
}
