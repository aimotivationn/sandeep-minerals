import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { ArrowRight, Search, Download, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products | Barytes, Calcium Carbonate & Calcite — SMI" },
      {
        name: "description",
        content:
          "Explore SMI micronised minerals: Barytes Powder, Calcium Carbonate, NAMO CARBSHINE ultra fine CaCO₃, White Pigment Opacifier, Calcite Powder, Calcium Oxide and Calcite Granules.",
      },
    ],
  }),
  component: Products,
});

function Products() {
  const [search, setSearch] = useState("");
  const location = useLocation();

  const q = search.toLowerCase();
  const filtered = search
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.short.toLowerCase().includes(q) ||
          p.applications.some((a) => a.toLowerCase().includes(q)),
      )
    : products;

  // 🔥 AUTO SCROLL LOGIC
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);

      if (el) {
        const yOffset = -110; // adjust for header height
        const y =
          el.getBoundingClientRect().top + window.pageYOffset + yOffset;

        setTimeout(() => {
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <section className="bg-background py-20 md:py-28">
        <div className="container-px">
          {/* 🔍 SEARCH */}
          <div className="mx-auto mb-12 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products or applications..."
                className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none transition-colors focus:border-gold"
              />
            </div>
          </div>

          {/* 🔥 PRODUCTS */}
          <div className="grid gap-10">
            {filtered.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                {/* ✅ ID ADDED HERE */}
                <section
                  id={p.slug}
                  className={`card-elegant grid items-center gap-0 overflow-hidden md:grid-cols-2 ${
                    i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="aspect-[16/10] overflow-hidden md:aspect-auto md:h-full">
                    <img
                      src={p.image}
                      alt={`${p.name} — micronised mineral`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl">{p.name}</h2>

                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>

                    {p.grades && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {p.grades.map((g) => (
                          <span
                            key={g}
                            className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-semibold text-navy"
                          >
                            {g}
                          </span>
                        ))}
                      </div>
                    )}

                    <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                      {p.benefits.slice(0, 4).map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-sm text-foreground"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 text-gold" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <Link
                        to="/products/$slug"
                        params={{ slug: p.slug }}
                        className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-navy-dark"
                      >
                        View Details <ArrowRight className="h-4 w-4" />
                      </Link>

                      <Link
                        to="/downloads"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-navy hover:border-gold hover:text-gold"
                      >
                        <Download className="h-4 w-4" /> Brochure
                      </Link>
                    </div>
                  </div>
                </section>
              </Reveal>
            ))}

            {filtered.length === 0 && (
              <p className="text-center text-muted-foreground">
                No products match your search.
              </p>
            )}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}