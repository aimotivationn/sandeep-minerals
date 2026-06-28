import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { WHATSAPP_URL } from "@/lib/site-data";

export function CTABand() {
  return (
    <section className="bg-navy">
      <div className="container-px py-16 md:py-20">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <span className="eyebrow">Partner With Us</span>
          <h2 className="max-w-3xl text-2xl text-primary-foreground md:text-4xl">
            Ready to power your products with premium industrial minerals?
          </h2>
          <p className="max-w-xl text-primary-foreground/75">
            Talk to our specialists about grades, bulk supply and custom specifications tailored to
            your application.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-secondary-foreground transition-all hover:bg-gold-soft"
            >
              Contact Sales <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:border-gold hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
