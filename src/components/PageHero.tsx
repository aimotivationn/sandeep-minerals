import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-primary-foreground">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-0 h-72 w-72 rounded-full bg-gold/5 blur-3xl" />
      <div className="container-px relative py-16 md:py-24">
        <nav className="mb-5 flex items-center gap-2 text-xs text-primary-foreground/60">
          <Link to="/" className="hover:text-gold">
            Home
          </Link>
          <span>/</span>
          <span className="text-gold-soft">{crumb}</span>
        </nav>
        <span className="eyebrow">{eyebrow}</span>
        <h1 className="mt-3 max-w-3xl text-3xl text-primary-foreground md:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
