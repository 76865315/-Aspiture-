import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Aspiture's comprehensive range of business services.",
};

const services = [
  {
    title: "Strategic Consulting",
    description:
      "We analyze your market, competitors, and internal operations to craft actionable strategies that align with your long-term vision.",
    bullets: [
      "Market research & competitive analysis",
      "Business model optimization",
      "Go-to-market strategy",
      "Performance benchmarking",
    ],
  },
  {
    title: "Digital Transformation",
    description:
      "Modernize your technology stack and processes to improve efficiency, reduce costs, and create better experiences for your customers.",
    bullets: [
      "Technology audit & roadmap",
      "Process automation",
      "Cloud migration",
      "Custom software development",
    ],
  },
  {
    title: "Brand & Marketing",
    description:
      "Build a compelling brand identity and reach your target audience with data-driven marketing strategies.",
    bullets: [
      "Brand strategy & identity",
      "Content marketing",
      "SEO & digital advertising",
      "Social media management",
    ],
  },
  {
    title: "Growth Acceleration",
    description:
      "Scale your business with proven frameworks for revenue growth, customer acquisition, and operational excellence.",
    bullets: [
      "Revenue optimization",
      "Customer acquisition funnels",
      "Operational scaling",
      "Partnerships & alliances",
    ],
  },
  {
    title: "Web & App Development",
    description:
      "Create beautiful, high-performing digital products that your customers will love.",
    bullets: [
      "Responsive website design",
      "Web application development",
      "Mobile app development",
      "E-commerce solutions",
    ],
  },
  {
    title: "Data & Analytics",
    description:
      "Turn your data into actionable insights that drive smarter decisions and better outcomes.",
    bullets: [
      "Data strategy & architecture",
      "Business intelligence dashboards",
      "Predictive analytics",
      "KPI tracking & reporting",
    ],
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Our Services
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Solutions That Drive Results
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              From strategy to execution, we provide end-to-end services to help
              your business grow, compete, and lead.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            How We Work
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-muted">
            A straightforward, collaborative process from first conversation to
            lasting results.
          </p>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Discover", desc: "We listen, learn, and map your goals." },
              { step: "02", title: "Plan", desc: "We build a detailed, actionable roadmap." },
              { step: "03", title: "Execute", desc: "We implement with precision and agility." },
              { step: "04", title: "Measure", desc: "We track results and continuously optimize." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Not sure which service is right for you?
          </h2>
          <p className="mt-4 text-lg text-muted">
            Let&apos;s talk. We&apos;ll help you identify the best path forward — no
            commitment required.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
