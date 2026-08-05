import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter, Instagram } from "lucide-react";
import { products, CONTACT } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground/80">
      <div className="container-px grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-foreground/10 font-display text-lg font-bold text-primary-foreground">
              S<span className="text-gold">M</span>
            </span>
            <span className="font-display text-base font-bold text-primary-foreground">
              Sandeep Mineral Industries
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Delivering high-performance industrial minerals since 2005 — engineered for purity,
            precision and consistency across global industries.
          </p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Facebook, Twitter, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-gold hover:text-secondary-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[
              { label: "About Us", to: "/about" },
              { label: "Quality", to: "/quality" },
              { label: "Manufacturing", to: "/manufacturing" },
              { label: "Our Goal", to: "/our-goal" },
              { label: "Export & Packaging", to: "/export-packaging" },
              { label: "Download Center", to: "/downloads" },
              { label: "Blog", to: "/blog" },
              { label: "FAQ", to: "/faq" },
              { label: "Contact", to: "/contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground">
            Products
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            {products.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: p.slug }}
                  className="transition-colors hover:text-gold"
                >
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-gold" />
              <span>{CONTACT.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="h-4 w-4 flex-shrink-0 text-gold" />
              <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:text-gold">
                {CONTACT.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="h-4 w-4 flex-shrink-0 text-gold" />
              <a href={`mailto:${CONTACT.email}`} className="break-all hover:text-gold">
                {CONTACT.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-xs text-primary-foreground/60 md:flex-row">
          <p>© 2026 Sandeep Mineral Industries. All Rights Reserved.</p>
          <p>Premium Industrial Minerals · Rajasthan, India</p>
        </div>
      </div>
    </footer>
  );
}
