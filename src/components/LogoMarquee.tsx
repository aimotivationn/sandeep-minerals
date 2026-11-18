import logo from "@/assets/logo.png";

const logoInstances = Array.from({ length: 10 }, (_, index) => index);

function LogoGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className="logo-marquee__group"
      aria-hidden={duplicate || undefined}
      role={duplicate ? undefined : "img"}
      aria-label={duplicate ? undefined : "Sandeep Mineral Industries logo"}
    >
      {logoInstances.map((index) => (
        <span className="logo-marquee__item" key={index}>
          <img src={logo} alt="" />
        </span>
      ))}
    </div>
  );
}

export function LogoMarquee() {
  return (
    <section className="logo-marquee" aria-label="Sandeep Mineral Industries">
      <div className="logo-marquee__track">
        <LogoGroup />
        <LogoGroup duplicate />
      </div>
    </section>
  );
}