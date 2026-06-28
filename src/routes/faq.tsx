import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Sandeep Mineral Industries" },
      {
        name: "description",
        content:
          "Frequently asked questions about Sandeep Mineral Industries — products, grades, samples, minimum order quantities, packaging, lead times and export supply.",
      },
      { property: "og:title", content: "FAQ | Sandeep Mineral Industries" },
      { property: "og:description", content: "Answers to common questions about our minerals and supply." },
    ],
  }),
  component: FAQ,
});

const faqs = [
  {
    q: "What minerals do you manufacture and supply?",
    a: "We specialize in baryte powder, ultra-fine calcium carbonate, super-fine calcium carbonate, and a range of imported specialty mineral powders for industrial applications.",
  },
  {
    q: "Can I request product samples before ordering?",
    a: "Yes. We provide samples for evaluation so you can validate the grade against your formulation. Contact our team with your application details to arrange a sample.",
  },
  {
    q: "Do you offer custom grades and particle sizes?",
    a: "Absolutely. With micronizing and classification capabilities, we can tailor particle-size distribution and specifications to meet your technical requirements.",
  },
  {
    q: "What is your minimum order quantity?",
    a: "MOQ varies by product and grade. We serve both trial-scale and large bulk requirements. Share your needs and we'll advise the most suitable supply option.",
  },
  {
    q: "How do you ensure batch-to-batch consistency?",
    a: "Every batch is processed under defined QA protocols and verified by in-house laboratory testing for purity, brightness, particle size and moisture before dispatch.",
  },
  {
    q: "Do you supply internationally?",
    a: "Yes. With export-ready packaging, documentation and reliable logistics, we supply customers across domestic and international markets.",
  },
  {
    q: "What packaging options are available?",
    a: "We offer standard 25kg and 50kg bags as well as jumbo (FIBC) bags, with options tailored to your handling and logistics preferences.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        crumb="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you need to know about our products, supply and capabilities. Can't find an answer? Get in touch."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-px mx-auto max-w-3xl space-y-4">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="card-elegant overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-display text-base font-semibold text-navy">{item.q}</span>
                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-navy/5 text-navy">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CTABand />
    </>
  );
}
