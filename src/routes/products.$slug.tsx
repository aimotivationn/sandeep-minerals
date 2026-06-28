import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Download, CheckCircle2, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { getProduct, products, WHATSAPP_URL } from "@/lib/site-data";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} | Sandeep Mineral Industries` },
          { name: "description", content: loaderData.product.short },
          { property: "og:title", content: `${loaderData.product.name} | Sandeep Mineral` },
          { property: "og:description", content: loaderData.product.short },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
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

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <PageHero eyebrow="Product" crumb={product.name} title={product.name} subtitle={product.short} />

      <section className="bg-background py-20 md:py-28">
        <div className="container-px grid gap-14 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-2xl shadow-elevated">
              <img
                src={product.image}
                alt={product.name}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <span className="eyebrow">Overview</span>
            <h2 className="mt-3 text-2xl md:text-3xl">About {product.name}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {product.description}
            </p>

            <h3 className="mt-8 text-lg">Applications</h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {product.applications.map((a: string) => (
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

      {/* SPECS */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-px max-w-3xl">
          <Reveal>
            <span className="eyebrow">Technical Specifications</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Typical product data</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-card shadow-card">
              <table className="w-full text-sm">
                <tbody>
                  {product.specs.map((s: { label: string; value: string }, i: number) => (
                    <tr key={s.label} className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}>
                      <td className="border-b border-border px-6 py-4 font-medium text-navy">
                        {s.label}
                      </td>
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
        </div>
      </section>

      {/* OTHER PRODUCTS */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px">
          <h2 className="text-2xl md:text-3xl">Other products</h2>
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
                      width={800}
                      height={600}
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
