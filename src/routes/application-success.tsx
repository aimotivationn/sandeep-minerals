import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Home } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/application-success")({
  head: () => ({
    meta: [
      { title: "Application Submitted | Sandeep Mineral Industries" },
      {
        name: "description",
        content: "Your career application has been successfully submitted to Sandeep Mineral Industries.",
      },
    ],
  }),
  component: ApplicationSuccess,
});

function ApplicationSuccess() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container-px flex justify-center">
        <Reveal className="w-full max-w-xl">
          <div className="card-elegant p-8 text-center md:p-12">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h1 className="mt-6 text-xl text-navy md:text-2xl">
              ✔ Application Submitted Successfully
            </h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Thank you for applying to Sandeep Mineral Industries.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Our HR Team has received your application.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              If your profile matches our future requirements we will contact you.
            </p>
            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-navy-dark"
            >
              Return to Home <Home className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
