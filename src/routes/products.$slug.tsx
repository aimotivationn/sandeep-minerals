import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowLeft,
  Download,
  CheckCircle2,
  MessageCircle,
  FlaskConical,
  Package,
  Factory,
  Sparkles,
  X,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { getProduct, products, WHATSAPP_URL, type Product } from "@/lib/site-data";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found | Sandeep Mineral Industries" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    const title = `${p.name} | Manufacturer & Supplier — SMI`;
    return {
      meta: [
        { title },
        { name: "description", content: `${p.short} Manufactured by Sandeep Mineral Industries with German technology and ISO 9001:2015 certified quality.` },
        { property: "og:title", content: title },
        { property: "og:description", content: p.short },
        { property: "og:url", content: `/products/${params.slug}` },
        { property: "og:type", content: "product" },
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: p.name,
            description: p.description,
            category: "Industrial Minerals",
            brand: { "@type": "Brand", name: "SMI" },
            manufacturer: {
              "@type": "Organization",
              name: "Sandeep Mineral Industries",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Rajgarh, Alwar",
                addressRegion: "Rajasthan",
                addressCountry: "IN",
              },
            },
            additionalProperty: p.specs.map((s) => ({
              "@type": "PropertyValue",
              name: s.label,
              value: s.value,
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: p.faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="container-px py-32 text-center">
      <h1 className="text-3xl">Product not found</h1>
      <Link to="/products" className="mt-6 inline-flex items-center gap-2 text-gold">
        <ArrowLeft className="h-4 w-4" /> Back to products
      </Link>
    </div>
  ),
  errorComponent: ({ reset }) => {
    const router = useRouter();
    return (
      <div className="container-px py-32 text-center">
        <h1 className="text-2xl">Something went wrong</h1>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground"
        >
          Try again
        </button>
      </div>
    );
  },
  component: ProductDetail,
});

const comparison = [
  { feature: "Particle size (D50)", namo: "1 micron, tightly controlled", conv: "5 – 20 microns, broad distribution" },
  { feature: "Whiteness", namo: "Above 98%", conv: "88 – 94%" },
  { feature: "TiO₂ replacement", namo: "20 – 25%", conv: "Not suitable" },
  { feature: "Opacity contribution", namo: "High", conv: "Low to moderate" },
  { feature: "Dispersion", namo: "Excellent, low agglomeration", conv: "Variable" },
  { feature: "Surface finish", namo: "Superior, smooth premium film", conv: "Average" },
];

function ProductDetail() {
  const { product } = Route.useLoaderData() as { product: Product };
  const others = products.filter((p) => p.slug !== product.slug).slice(0, 3);
  const isNamo = product.slug === "namo-carbshine";

  return (
    <>
      <PageHero
        eyebrow={isNamo ? "Ultra Fine Calcium Carbonate" : "Product"}
        crumb={product.name}
        title={product.name}
        subtitle={product.short}
      />

      {/* OVERVIEW */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px grid gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={product.image}
                alt={`${product.name} manufactured by Sandeep Mineral Industries`}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            {product.grades && (
              <div className="mt-6 flex flex-wrap gap-2">
                {product.grades.map((g) => (
                  <span
                    key={g}
                    className="rounded-full border border-border bg-muted px-4 py-1.5 text-xs font-semibold text-navy"
                  >
                    {g}
                  </span>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={0.1}>
            <span className="eyebrow">Overview</span>
            <h2 className="mt-3 text-2xl md:text-3xl">About {product.name}</h2>
            <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
              {product.overview.map((o) => (
                <p key={o}>{o}</p>
              ))}
            </div>

            <h3 className="mt-8 text-lg">Applications</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.applications.map((a) => (
                <li key={a} className="flex items-start gap-2.5 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                  {a}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold text-secondary-foreground transition-all hover:bg-gold-soft"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-navy-dark"
              >
                Request Sample
              </Link>
              <Link
                to="/downloads"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-gold"
              >
                <Download className="h-4 w-4" /> Technical Data Sheet
              </Link>
              <Link
                to="/downloads"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-gold"
              >
                <Download className="h-4 w-4" /> Download Brochure
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-gold"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HIGHLIGHTS (NAMO) */}
      {product.highlights && (
        <section className="bg-navy py-20 md:py-24">
          <div className="container-px">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <span className="eyebrow">Key Highlights</span>
                <h2 className="mt-3 text-3xl text-primary-foreground md:text-4xl">
                  Performance that pays for itself
                </h2>
              </Reveal>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {product.highlights.map((h, i) => (
                <Reveal key={h} delay={i * 0.07}>
                  <div className="h-full rounded-2xl border border-primary-foreground/12 bg-primary-foreground/5 p-6 text-center transition-transform duration-300 hover:-translate-y-1.5">
                    <Sparkles className="mx-auto h-6 w-6 text-gold" />
                    <p className="mt-4 text-sm font-semibold text-primary-foreground">{h}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BENEFITS + INDUSTRIES */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-px grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="card-elegant h-full p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Sparkles className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl">Benefits</h2>
              <ul className="mt-5 space-y-3">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="card-elegant h-full p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <Factory className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl">Industries Served</h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {product.industries.map((ind) => (
                  <span
                    key={ind}
                    className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-semibold text-navy"
                  >
                    {ind}
                  </span>
                ))}
              </div>
              <Link
                to="/industries"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold"
              >
                Explore all industries <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SPECS + PACKAGING */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <span className="eyebrow">Technical Specifications</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Typical product data</h2>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <table className="w-full text-sm">
                <tbody>
                  {product.specs.map((s, i) => (
                    <tr key={s.label} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                      <td className="border-b border-border px-6 py-4 font-medium text-navy">{s.label}</td>
                      <td className="border-b border-border px-6 py-4 text-right text-foreground">
                        {s.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              * Specifications are typical values. Custom grades available on request.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="card-elegant h-full p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Package className="h-6 w-6" />
              </div>
              <h2 className="mt-5 text-2xl">Packaging</h2>
              <ul className="mt-5 space-y-3">
                {product.packaging.map((pk) => (
                  <li key={pk} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                    {pk}
                  </li>
                ))}
              </ul>
              <Link
                to="/export-packaging"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold"
              >
                Export & packaging details <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* COMPARISON (NAMO) */}
      {isNamo && (
        <section className="bg-muted py-20 md:py-28">
          <div className="container-px">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal>
                <span className="eyebrow">Comparison</span>
                <h2 className="mt-3 text-3xl md:text-4xl">
                  NAMO CARBSHINE vs Conventional Calcium Carbonate
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
                <div className="grid grid-cols-3 bg-navy text-primary-foreground">
                  <div className="px-5 py-4 text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">
                    Parameter
                  </div>
                  <div className="px-5 py-4 font-display text-sm font-bold text-gold">NAMO CARBSHINE</div>
                  <div className="px-5 py-4 font-display text-sm font-bold">Conventional CaCO₃</div>
                </div>
                {comparison.map((c, i) => (
                  <div key={c.feature} className={`grid grid-cols-3 ${i % 2 ? "bg-muted/50" : "bg-card"}`}>
                    <div className="border-b border-border px-5 py-4 text-sm font-medium text-navy">
                      {c.feature}
                    </div>
                    <div className="flex items-start gap-2 border-b border-border px-5 py-4 text-sm text-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
                      {c.namo}
                    </div>
                    <div className="flex items-start gap-2 border-b border-border px-5 py-4 text-sm text-muted-foreground">
                      <X className="mt-0.5 h-4 w-4 flex-shrink-0 text-muted-foreground/60" />
                      {c.conv}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px max-w-3xl">
          <Reveal>
            <span className="eyebrow">Frequently Asked Questions</span>
            <h2 className="mt-3 text-3xl md:text-4xl">{product.name} — your questions answered</h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {product.faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <details className="card-elegant group p-6">
                  <summary className="flex cursor-pointer list-none items-start gap-3 font-display text-base font-semibold text-navy">
                    <FlaskConical className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                    {f.q}
                  </summary>
                  <p className="mt-3 pl-8 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED PRODUCTS */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-px">
          <h2 className="text-2xl md:text-3xl">Related products</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="card-elegant group flex h-full flex-col overflow-hidden hover:-translate-y-1.5 hover:shadow-elevated"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-base">{p.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{p.short}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}
