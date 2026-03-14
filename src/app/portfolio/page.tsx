import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "See the projects and solutions Aspiture has delivered.",
};

const projects = [
  {
    title: "Intelligent Workflow Engine",
    category: "AI Integration",
    description:
      "Automated complex business processes using AI-driven decision trees, reducing manual processing time by 80%.",
  },
  {
    title: "Research Analytics Platform",
    category: "Data & Analytics",
    description:
      "Built a real-time analytics platform that transforms raw research data into actionable strategic insights.",
  },
  {
    title: "Adaptive Learning System",
    category: "Machine Learning",
    description:
      "Developed a self-improving recommendation system that evolves with every user interaction.",
  },
  {
    title: "Knowledge Management Suite",
    category: "App Development",
    description:
      "Enterprise knowledge management system with intelligent search and automated categorization.",
  },
  {
    title: "Predictive Market Analyzer",
    category: "Predictive Analytics",
    description:
      "Forecasting tool that combines economic modeling with machine learning for market trend prediction.",
  },
  {
    title: "NLP Document Processor",
    category: "Natural Language Processing",
    description:
      "Automated document analysis system that extracts, classifies, and summarizes key information.",
  },
];

export default function Portfolio() {
  return (
    <>
      <section className="bg-navy pb-20 pt-32 sm:pt-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
              Portfolio
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Our Work Speaks for Itself
            </h1>
            <p className="mt-6 text-lg leading-8 text-blue-200/70">
              A selection of projects that showcase our capabilities in AI,
              research, and application development.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="group rounded-2xl border border-border p-8 transition-all hover:border-primary/30 hover:shadow-lg"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {project.category}
                </span>
                <h3 className="mt-2 text-lg font-bold text-foreground">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-white">
            Have a Project in Mind?
          </h2>
          <p className="mt-3 text-blue-200/70">
            Let&apos;s discuss how we can bring your vision to life.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-block rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </>
  );
}
