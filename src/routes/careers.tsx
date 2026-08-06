import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, type FormEvent } from "react";
import {
  TrendingUp,
  GraduationCap,
  Factory,
  ShieldCheck,
  Lightbulb,
  Users,
  Briefcase,
  Award,
  Mail,
  Send,
  RotateCcw,
  FileText,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { Reveal } from "@/components/Reveal";
import { CTABand } from "@/components/CTABand";
import careersImg from "@/assets/careers-team.jpg";

// CHANGE: HR_EMAIL is now only used for the "Contact HR" mailto link (unchanged section),
// NOT for the application form anymore. Added a separate constant for the FormSubmit endpoint.
const HR_EMAIL = "aimotivation010@gmail.com";
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/aimotivation010@gmail.com";

/** Future-ready: add job objects here and the openings section renders them automatically. */
interface JobOpening {
  title: string;
  location: string;
  type: string;
  department: string;
  summary: string;
}
const openings: JobOpening[] = [];

const whyJoin = [
  { icon: TrendingUp, title: "Professional Growth", text: "Clear career paths with responsibility that grows as fast as you do." },
  { icon: GraduationCap, title: "Learning & Development", text: "On-the-job training, technical mentoring and process certification." },
  { icon: Factory, title: "Modern Manufacturing Facilities", text: "German-technology micronising plants and well-equipped laboratories." },
  { icon: ShieldCheck, title: "Safe Working Environment", text: "Structured safety protocols, protective equipment and regular audits." },
  { icon: Lightbulb, title: "Innovation & Technology", text: "Continuous process improvement and new product development." },
  { icon: Users, title: "Teamwork & Collaboration", text: "Cross-functional teams working towards shared quality goals." },
  { icon: Briefcase, title: "Long-Term Career Opportunities", text: "Stable, growing organisation with two decades of manufacturing strength." },
  { icon: Award, title: "Employee Recognition", text: "Performance is acknowledged, rewarded and celebrated." },
];

const interestAreas = [
  "Production",
  "Quality Control",
  "Sales & Marketing",
  "Operations",
  "Accounts & Finance",
  "Administration",
  "Supply Chain",
  "Engineering",
  "Research & Development",
  "Human Resources",
  "Other",
];

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers | Sandeep Mineral Industries" },
      {
        name: "description",
        content:
          "Build your career with Sandeep Mineral Industries. Explore why to join us, submit a general application and contact our HR team for careers and internships.",
      },
      { property: "og:title", content: "Careers at Sandeep Mineral Industries" },
      {
        property: "og:description",
        content:
          "Join a modern industrial minerals manufacturer. Submit your resume for future openings and internships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Careers,
});

function Careers() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  // CHANGE: track in-flight submission state so we can disable the button / show feedback
  const [isSubmitting, setIsSubmitting] = useState(false);

  // CHANGE: handleSubmit no longer builds a mailto body or sets window.location.href.
  // It now does a fetch() POST to FormSubmit with the form's own FormData (which
  // automatically includes the uploaded resume file because enctype is multipart/form-data).
  // This keeps the user on the page — no email client is ever opened.
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);

    setIsSubmitting(true);
    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        body: fd,
        headers: {
          // Ask FormSubmit to respond with JSON instead of redirecting,
          // so we can handle success/error entirely in React.
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("FormSubmit request failed");
      }

      // CHANGE: replaced the old "please attach your resume and send the email" toast
      // with a simple success toast — no manual steps left for the user.
      toast.success("Your application has been submitted successfully.");
      setSubmitted(true);
    } catch (error) {
      // CHANGE: new error handling block (didn't exist before, since mailto couldn't "fail").
      console.error("Application submission error:", error);
      toast.error("Unable to submit your application. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* HERO — unchanged */}
      <section className="relative overflow-hidden bg-muted">
        <img
          src={careersImg}
          alt="Engineers and quality control technicians at a Sandeep Mineral Industries plant"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="container-px relative py-20 md:py-28">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Careers</span>
            <h1 className="mt-3 text-3xl text-navy md:text-5xl">
              Build Your Career with Sandeep Mineral Industries
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              At Sandeep Mineral Industries, we believe our people are our greatest strength. We are
              always looking for talented, passionate, and dedicated individuals who want to
              contribute to the future of India's mineral manufacturing industry.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#apply"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-navy-dark"
              >
                Submit Your Resume <Send className="h-4 w-4" />
              </a>
              <a
                href="#hr"
                className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-card px-7 py-3.5 text-sm font-semibold text-navy transition-all hover:border-gold hover:text-gold"
              >
                Contact HR <Mail className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY JOIN US — unchanged */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-px">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Why Join Us</span>
            <h2 className="mt-3 text-2xl md:text-3xl">A workplace built on people, precision and progress</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyJoin.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="card-elegant h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-base text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT OPPORTUNITIES — unchanged */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-px">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Current Opportunities</span>
          </Reveal>

          {openings.length > 0 ? (
            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {openings.map((job, i) => (
                <Reveal key={job.title} delay={i * 0.05}>
                  <div className="card-elegant h-full p-6">
                    <h3 className="text-lg text-navy">{job.title}</h3>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gold">
                      {job.department} · {job.location} · {job.type}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>
                    <a
                      href="#apply"
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold"
                    >
                      Apply now <Send className="h-4 w-4" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal delay={0.05}>
              <div className="card-elegant mt-8 grid gap-8 p-8 md:grid-cols-[auto_1fr] md:items-center md:p-12">
                <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl bg-navy/5">
                  <Sparkles className="h-10 w-10 text-gold" />
                  <span className="absolute -right-2 -top-2 flex h-9 w-9 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Users className="h-4 w-4" />
                  </span>
                </div>
                <div>
                  <h3 className="text-xl text-navy md:text-2xl">We Are Always Looking for Great Talent</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                    We are currently not hiring for specific positions. However, we welcome
                    applications from talented professionals who are passionate about manufacturing,
                    engineering, quality assurance, sales, operations, and business development.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                    If your skills match our future requirements, our HR team will get in touch when
                    suitable opportunities become available.
                  </p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section id="apply" className="scroll-mt-24 bg-background py-20 md:py-28">
        <div className="container-px grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <span className="eyebrow">General Application</span>
            <h2 className="mt-3 text-2xl md:text-3xl">Submit your resume</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Share your profile with our HR team. Applications are reviewed and retained for future
              openings across production, quality, engineering, commercial and support functions.
            </p>
            <div className="card-elegant mt-8 flex items-start gap-4 p-5">
              <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <FileText className="h-5 w-5" />
              </div>
              {/* CHANGE: copy updated — no longer tells the user to attach the resume
                  themselves, since the file now uploads directly with the form. */}
              <p className="text-sm leading-relaxed text-muted-foreground">
                Accepted resume formats: <span className="font-medium text-navy">PDF, DOC, DOCX</span>.
                Your resume is uploaded and sent directly to our HR team — no email client required.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            {submitted ? (
              <div className="card-elegant p-8 text-center md:p-12">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/10 text-gold">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="mt-6 text-xl text-navy md:text-2xl">Thank You for Your Interest!</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Your application has been successfully submitted to our HR team.
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  We appreciate your interest in joining Sandeep Mineral Industries. If your profile
                  matches our future requirements, we will contact you.
                </p>
                <button
                  onClick={() => {
                    formRef.current?.reset();
                    setSubmitted(false);
                  }}
                  className="mt-8 inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-gold"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              // CHANGE: form now points at FormSubmit's endpoint with POST + multipart encoding,
              // and includes the required FormSubmit hidden config fields. The `action`/`method`
              // are kept for graceful no-JS fallback; onSubmit still intercepts for the SPA flow.
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                action={FORMSUBMIT_ENDPOINT}
                method="POST"
                encType="multipart/form-data"
                className="card-elegant space-y-5 p-8"
              >
                <h3 className="text-xl">Application form</h3>

                {/* CHANGE: FormSubmit configuration hidden inputs (new) */}
                <input type="hidden" name="_subject" value="New Career Application" />
                <input type="hidden" name="_captcha" value="true" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value="/application-success" />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Full Name" name="name" required />
                  <Field label="Email Address" name="email" type="email" required />
                  <Field label="Phone Number" name="phone" type="tel" required />
                  <Field label="Current City" name="city" />
                  <Field label="Highest Qualification" name="qualification" />
                  <Field label="Years of Experience" name="experience" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy">Area of Interest</label>
                  <select
                    name="interest"
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold"
                  >
                    {interestAreas.map((a) => (
                      <option key={a}>{a}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy">
                    Cover Message / Introduction
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your experience, strengths and what you are looking for..."
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-navy">Upload Resume</label>
                  <input
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    className="w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-muted-foreground outline-none transition-colors file:mr-4 file:rounded-full file:border-0 file:bg-navy/5 file:px-4 file:py-1.5 file:text-xs file:font-semibold file:text-navy focus:border-gold"
                  />
                  <p className="mt-1.5 text-xs text-muted-foreground">PDF, DOC or DOCX.</p>
                </div>
                <div className="flex flex-wrap gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-navy-dark disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"} <Send className="h-4 w-4" />
                  </button>
                  <button
                    type="reset"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-navy/20 px-7 py-3.5 text-sm font-semibold text-navy transition-colors hover:border-gold hover:text-gold"
                  >
                    Reset Form <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>

      {/* INTERNSHIPS + CONTACT HR — unchanged (this section's mailto is kept intentionally per requirements) */}
      <section className="bg-muted py-20 md:py-28">
        <div className="container-px grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="card-elegant h-full p-8 md:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy/5 text-navy">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-xl text-navy md:text-2xl">Internship Opportunities</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                We occasionally offer internships for students and fresh graduates in Engineering,
                Manufacturing, Quality Assurance, Sales, Marketing, and Business Operations.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                Interested candidates are encouraged to submit their resumes through the application
                form.
              </p>
              <a
                href="#apply"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy hover:text-gold"
              >
                Go to application form <Send className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div id="hr" className="card-elegant h-full scroll-mt-24 p-8 md:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="mt-5 text-xl text-navy md:text-2xl">Have Questions?</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                If you have any questions regarding careers or internships, feel free to contact our
                HR team.
              </p>
              <a
                href={`mailto:${HR_EMAIL}`}
                className="mt-5 inline-block break-all text-sm font-semibold text-navy underline-offset-4 hover:text-gold hover:underline"
              >
                {HR_EMAIL}
              </a>
              <div className="mt-6">
                <a
                  href={`mailto:${HR_EMAIL}?subject=${encodeURIComponent("Careers Enquiry")}`}
                  className="inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-navy-dark"
                >
                  Send Email <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand />
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
