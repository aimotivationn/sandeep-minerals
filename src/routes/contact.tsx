import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CONTACT, enquiryTypes, units } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | Sandeep Mineral Industries" },
      {
        name: "description",
        content:
          `Contact Sandeep Mineral Industries for product enquiries and bulk supply. Business location: ${CONTACT.address}. Call ${CONTACT.phone}.`,
      },
      { property: "og:title", content: "Contact | Sandeep Mineral Industries" },
      { property: "og:description", content: "Get in touch for quotes, samples and bulk supply." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Contact,
});

const inquiryTypes = enquiryTypes;

function Contact() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thank you! Your enquiry has been received. Our team will respond shortly.");
    }, 900);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        crumb="Contact"
        title="Let's discuss your mineral requirements"
        subtitle="Reach out for product details, samples, quotes or bulk supply. Our team is ready to support your application."
      />

      <section className="bg-background py-20 md:py-28">
        <div className="container-px grid gap-12 lg:grid-cols-5">
          {/* INFO */}
          <Reveal className="lg:col-span-2">
            <span className="eyebrow">Corporate Headquarters</span>
            <h2 className="mt-3 text-2xl md:text-3xl">Get in touch</h2>
            <div className="mt-8 space-y-5">
              {[
                { icon: MapPin, label: "Address", value: CONTACT.address },
                { icon: Phone, label: "Phone", value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, "")}` },
                { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              ].map((item) => (
                <div key={item.label} className="card-elegant flex items-start gap-4 p-5">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} className="mt-1 block text-sm font-medium text-navy hover:text-gold">
                        {item.value}
                      </a>
                    ) : (
                      <div className="mt-1 text-sm font-medium text-foreground">{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* FORM */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="card-elegant space-y-5 p-8">
              <h3 className="text-xl">Send us an enquiry</h3>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Full Name" name="name" required />
                <Field label="Company" name="company" />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy">Enquiry Type</label>
                <select
                  name="type"
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold"
                >
                  {inquiryTypes.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about your product needs, grades and quantities..."
                  className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-navy-dark disabled:opacity-60 sm:w-auto"
              >
                {submitting ? "Sending..." : "Submit Enquiry"}
                <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>

      {/* MAP */}
      <section className="bg-muted pb-20 md:pb-28">
        <div className="container-px">
          <Reveal className="mb-10">
            <span className="eyebrow">Our Locations</span>
            <h2 className="mt-3 text-3xl md:text-4xl">Located in Rajasthan</h2>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">
              Strategically located in Rajasthan's mineral-processing ecosystem, Sandeep Mineral
              Industries operates from established industrial locations serving domestic and export requirements.
            </p>
          </Reveal>
          <div className="mb-8 grid gap-5 md:grid-cols-2">
            {units.filter((unit) => unit.address && unit.mapQuery).map((unit) => (
              <Reveal key={unit.n}>
                <div className="card-elegant flex h-full flex-col p-6">
                  <span className="eyebrow">{unit.n === "Unit 1" ? "Headquarters / Primary Business Location" : "Plant / Location 3"}</span>
                  <h3 className="mt-2 text-xl text-navy">{unit.city}{unit.n === "Unit 3" ? " / Khara" : ""}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{unit.address}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(unit.mapQuery ?? unit.address ?? "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold"
                  >
                    View on Google Maps <MapPin className="h-4 w-4" />
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border shadow-card">
              <iframe
                title="Sandeep Mineral Industries location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(CONTACT.address)}&output=embed`}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold"
      />
    </div>
  );
}
