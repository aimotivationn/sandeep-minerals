import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { CONTACT, WHATSAPP_URL } from "@/lib/site-data";

export function TopBar() {
  return (
    <div className="hidden bg-navy text-primary-foreground md:block">
      <div className="container-px flex h-10 items-center justify-between text-xs">
        <div className="flex items-center gap-6">
          <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 transition-colors hover:text-gold-soft">
            <Phone className="h-3.5 w-3.5 text-gold" />
            {CONTACT.phone}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 transition-colors hover:text-gold-soft">
            <Mail className="h-3.5 w-3.5 text-gold" />
            {CONTACT.email}
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-gold" />
            {CONTACT.location}
          </span>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-semibold text-gold-soft transition-colors hover:text-gold"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          Chat on WhatsApp
        </a>
      </div>
    </div>
  );
}
