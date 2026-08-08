import { Link } from "@tanstack/react-router";
import blogHero from "@/assets/blog-hero.jpg";

export function BlogHero() {
  return (
    <section className="relative overflow-hidden text-primary-foreground">

      {/* ✅ IMAGE BACKGROUND */}
      <img
        src={blogHero}
        alt="Blog Banner"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ✅ DARK OVERLAY */}
      <div className="absolute inset-0 bg-navy/70" />

      {/* ✅ CONTENT */}
      <div className="container-px relative py-16 md:py-24">

        <nav className="mb-5 flex items-center gap-2 text-xs text-primary-foreground/60">
          <Link to="/" className="hover:text-gold">Home</Link>
          <span>/</span>
          <span className="text-gold-soft">Blog</span>
        </nav>

        <span className="eyebrow">Insights</span>

        <h1 className="mt-3 max-w-3xl text-3xl md:text-5xl">
          Insights & Blog
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/75 md:text-lg">
          Industry insights, technical guides and application knowledge from Sandeep Mineral Industries.
        </p>

      </div>
    </section>
  );
}