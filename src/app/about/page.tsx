import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Aspiture's mission, values, and the team behind our success.",
};

const values = [
  {
    title: "Innovation",
    description: "We embrace new ideas and technologies to stay ahead of the curve.",
  },
  {
    title: "Integrity",
    description: "Honest, transparent partnerships built on trust and accountability.",
  },
  {
    title: "Impact",
    description: "Every engagement is measured by the tangible results we deliver.",
  },
  {
    title: "Collaboration",
    description: "Your success is our success — we work as an extension of your team.",
  },
];

const team = [
  { name: "Your Name", role: "Founder & CEO", initials: "YN" },
  { name: "Team Member", role: "Head of Strategy", initials: "TM" },
  { name: "Team Member", role: "Lead Developer", initials: "TM" },
];

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              About Us
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Building the Future of Business
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted">
              Aspiture was founded on a simple belief: every business deserves
              access to world-class strategy and technology to compete and thrive
              in the modern marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground">
                Our Story
              </h2>
              <p className="mt-4 text-muted leading-relaxed">
                What started as a vision to bridge the gap between ambitious
                businesses and innovative solutions has grown into a trusted
                consultancy serving companies across multiple industries.
              </p>
              <p className="mt-4 text-muted leading-relaxed">
                We combine deep industry expertise with cutting-edge technology
                to deliver strategies that aren&apos;t just plans on paper — they&apos;re
                actionable roadmaps that produce real, measurable outcomes.
              </p>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Discovery</h4>
                    <p className="text-sm text-muted">
                      We deeply understand your business, challenges, and goals.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Strategy</h4>
                    <p className="text-sm text-muted">
                      We craft a tailored plan backed by data and experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Execution</h4>
                    <p className="text-sm text-muted">
                      We implement solutions and measure results every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Our Values
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-primary">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Meet the Team
            </h2>
            <p className="mt-4 text-muted">
              The people behind Aspiture&apos;s mission to transform businesses.
            </p>
          </div>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border p-8 text-center"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                  {member.initials}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Want to work with us?
          </h2>
          <p className="mt-3 text-muted">
            We&apos;d love to hear about your project and explore how we can help.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
