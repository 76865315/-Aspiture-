import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research",
  description: "Explore Aspiture's research in AI, machine learning, and intelligent applications.",
};

const areas = [
  {
    title: "Machine Learning Pipelines",
    description:
      "Building robust, scalable ML pipelines that transform raw data into production-ready models.",
  },
  {
    title: "Natural Language Processing",
    description:
      "Advancing how applications understand, interpret, and generate human language.",
  },
  {
    title: "Predictive Analytics",
    description:
      "Developing models that forecast trends and enable proactive decision-making.",
  },
  {
    title: "Intuitive Economics Modeling",
    description:
      "Applying AI to economic modeling for smarter resource allocation and strategy.",
  },
  {
    title: "Knowledge Management Systems",
    description:
      "Creating intelligent systems that organize, retrieve, and surface critical information.",
  },
  {
    title: "Adaptive Learning",
    description:
      "Building systems that continuously learn and improve from every interaction.",
  },
];

export default function Research() {
  return (
    <>
      <section className="bg-navy pb-20 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              Research
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Pushing the Boundaries of What&apos;s Possible
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-200/70">
              Our research drives the technology behind every solution we build.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-border p-8 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-white">
            Interested in Our Research?
          </h2>
          <p className="mt-3 text-blue-200/70">
            We&apos;re always looking for collaborators and partners.
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
