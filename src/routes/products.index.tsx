import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Search, Download } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products | Sandeep Mineral Industries" },
      {
        name: "description",
        content:
          "Explore our range of industrial minerals: baryte powder, ultra-fine and super-fine calcium carbonate, and imported mineral powders with precise specifications.",
      },
      { property: "og:title", content: "Products | Sandeep Mineral Industries" },
      { property: "og:description", content: "Premium industrial mineral grades with full technical specifications." },
    ],
  }),
  component: Products,
});

function Products() {
  const [search, setSearch] = useState("");
  const filtered = search
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(search.toLowerCase()) ||
          p.short.toLowerCase().includes(search.toLowerCase()),
      )
    : products;

  return (
    <>
      <PageHero
        eyebrow="Our Products"
        crumb="Products"
        title="Precision mineral grades engineered for performance"
        subtitle="Every grade is processed for purity, brightness and tight particle-size control — backed by full technical specifications and reliable bulk supply."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-px">
          <div className="mx-auto mb-12 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-gold"
              />
            </div>
          </div>

          <div className="grid gap-10">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <div
                  className={`card-elegant grid items-center gap-0 overflow-hidden md:grid-cols-2 ${
                    i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="aspect-[16/10] overflow-hidden md:aspect-auto md:h-full">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl">{p.name}</h2>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        to="/products/$slug"
                        params={{ slug: p.slug }}
                        className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-navy-dark"
                      >
                        View Details <ArrowRight className="h-4 w-4" />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-gold"
                      >
                        <Download className="h-4 w-4" /> Brochure
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground">No products match your search.</p>
            )}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
