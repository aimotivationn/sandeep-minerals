import { createFileRoute, Link } from "@tanstack/react-router";
import { FileText, FileSpreadsheet, BookOpen, ShieldAlert, Award, Download } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import { downloads } from "@/lib/site-data";

export const Route = createFileRoute("/downloads")({
  head: () => ({
    meta: [
      { title: "Download Center | Data Sheets & Certificates — SMI" },
      {
        name: "description",
        content:
          "Download the SMI company profile, technical data sheets, product brochures, safety data sheets and ISO 9001:2015 quality certificates.",
      },
      { property: "og:title", content: "Download Center | Sandeep Mineral Industries" },
      { property: "og:description", content: "Company profile, TDS, brochures, SDS and quality certificates." },
      { property: "og:url", content: "/downloads" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/downloads" }],
  }),
  component: Downloads,
});

const icons = [FileText, FileSpreadsheet, BookOpen, ShieldAlert, Award];

function Downloads() {
  return (
    <>
      <PageHero
        eyebrow="Download Center"
        crumb="Downloads"
        title="Technical documentation on request"
        subtitle="Request the documents your procurement, formulation and compliance teams need — issued directly by our technical desk."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-px grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {downloads.map((d, i) => {
            const Icon = icons[i] ?? FileText;
            return (
              <Reveal key={d.title} delay={i * 0.07}>
                <div className="card-elegant flex h-full flex-col p-8 hover:-translate-y-1.5 hover:shadow-elevated">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg">{d.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-gold"
                  >
                    <Download className="h-4 w-4" /> Request Document
                  </Link>
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
