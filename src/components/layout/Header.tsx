import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ChevronRight } from "lucide-react";
import logo from "@/assets/logo.jpg";
const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "Quality", to: "/quality" },
  { label: "Manufacturing", to: "/manufacturing" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 shadow-card backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-background"
      }`}
    >
 <Link to="/" className="flex items-center gap-3">
  <img
    src={logo}
    alt="Sandeep Mineral Industries"
    className="h-14 w-auto object-contain"
  />

  <span className="leading-tight">
    <span className="block font-display text-base font-bold text-navy">
      Sandeep Mineral
    </span>

    <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
      Industries
    </span>
  </span>
</Link>
      
      <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  active ? "text-gold" : "text-foreground hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-sm transition-all hover:bg-gold-soft hover:shadow-md sm:inline-flex"
          >
            Request a Quote
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-navy lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-px flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center justify-between border-b border-border/60 py-3 text-sm font-medium text-foreground last:border-0"
              >
                {item.label}
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
