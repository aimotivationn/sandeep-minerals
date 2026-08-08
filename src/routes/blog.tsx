import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Calendar, ArrowRight, Mail } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { BlogHero } from "@/components/BlogHero";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Blog | Sandeep Mineral Industries" },
      {
        name: "description",
        content:
          "Industry insights on industrial minerals — calcium carbonate, baryte, particle-size technology and applications across plastics, paints and construction.",
      },
      { property: "og:title", content: "Insights & Blog | Sandeep Mineral Industries" },
      { property: "og:description", content: "Expert articles on industrial minerals and their applications." },
    ],
  }),
  component: Blog,
});

const posts = [
  {
    title: "How Particle Size Shapes Mineral Performance",
    date: "Jun 12, 2026",
    category: "Technology",
    excerpt:
      "Understanding D50 and particle distribution is key to predicting how a mineral behaves in your formulation. Here's what manufacturers should know.",
  },
  {
    title: "Calcium Carbonate in Modern Paint Systems",
    date: "May 28, 2026",
    category: "Applications",
    excerpt:
      "Ultra-fine grades do more than fill — they enhance opacity, sheen control and durability. Explore the role of CaCO₃ in premium coatings.",
  },
  {
    title: "Choosing the Right Baryte Grade",
    date: "May 09, 2026",
    category: "Products",
    excerpt:
      "From drilling fluids to friction materials, baryte specifications matter. A practical guide to selecting the optimal grade for your process.",
  },
  {
    title: "Building a Resilient Mineral Supply Chain",
    date: "Apr 21, 2026",
    category: "Industry",
    excerpt:
      "Consistency and logistics are as important as the material itself. How a multi-plant network reduces risk for manufacturers.",
  },
  {
    title: "Sustainability in Mineral Processing",
    date: "Apr 02, 2026",
    category: "Industry",
    excerpt:
      "Efficient processing and responsible sourcing are reshaping the minerals sector. A look at where the industry is heading.",
  },
  {
    title: "Fillers That Cut Cost Without Cutting Quality",
    date: "Mar 15, 2026",
    category: "Applications",
    excerpt:
      "The right functional filler improves both economics and performance. Here's how to balance cost efficiency with product integrity.",
  },
];

function Blog() {
  const [email, setEmail] = useState("");

  const subscribe = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setEmail("");
    toast.success("Subscribed! You'll receive our latest mineral insights.");
  };

  return (
    <>
      <BlogHero />
      <section className="bg-background py-20 md:py-28">
        <div className="container-px grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.06}>
              <article className="card-elegant group flex h-full flex-col p-7 hover:-translate-y-1.5 hover:shadow-elevated">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-full bg-gold/10 px-3 py-1 font-semibold text-gold">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" /> {post.date}
                  </span>
                </div>
                <h3 className="mt-4 text-lg leading-snug">{post.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors group-hover:text-gold">
                  Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="bg-navy py-16 md:py-20">
        <div className="container-px">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
              <Mail className="h-6 w-6" />
            </div>
            <h2 className="mt-5 text-2xl text-primary-foreground md:text-3xl">
              Subscribe to our newsletter
            </h2>
            <p className="mt-3 text-primary-foreground/70">
              Get the latest mineral insights, product updates and industry news in your inbox.
            </p>
            <form onSubmit={subscribe} className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                placeholder="Your email address"
                className="w-full rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 text-sm text-primary-foreground placeholder:text-primary-foreground/50 outline-none focus:border-gold"
              />
              <button
                type="submit"
                className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-secondary-foreground transition-colors hover:bg-gold-soft"
              >
                Subscribe
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
