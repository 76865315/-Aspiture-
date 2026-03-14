import Link from "next/link";

const services = [
  {
    title: "App Development",
    items: [
      "Develop end-to-end app design",
      "Applications development",
      "Knowledge management systems",
      "Technical integration",
    ],
  },
  {
    title: "Technical Research",
    items: [
      "Intuitive economics modeling",
      "Machine learning pipelines",
      "Data architecture design",
      "Technical integration strategy",
    ],
  },
  {
    title: "AI Integration",
    items: [
      "AI integration to power applications",
      "Natural language processing",
      "Predictive analytics",
      "Research-led contextual AI",
    ],
  },
];

const projects = [
  {
    name: "Intelligent Workflow Engine",
    description: "Automating complex business processes with AI-driven decision making.",
  },
  {
    name: "Research Analytics Platform",
    description: "Transforming raw research data into actionable strategic insights.",
  },
  {
    name: "Adaptive Learning System",
    description: "Building systems that evolve and improve with every interaction.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — full viewport, dark navy with tech pattern */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-navy">
        {/* Subtle grid/network background */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1" fill="#3b82f6" />
              </pattern>
              <radialGradient id="fade" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="white" stopOpacity="1" />
                <stop offset="100%" stopColor="white" stopOpacity="0" />
              </radialGradient>
              <mask id="fadeMask">
                <rect width="100%" height="100%" fill="url(#fade)" />
              </mask>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" mask="url(#fadeMask)" />
            <line x1="10%" y1="20%" x2="40%" y2="35%" stroke="#3b82f6" strokeWidth="0.5" opacity="0.4" />
            <line x1="60%" y1="15%" x2="85%" y2="40%" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.3" />
            <line x1="30%" y1="60%" x2="70%" y2="75%" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
            <line x1="50%" y1="25%" x2="75%" y2="60%" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.2" />
            <line x1="15%" y1="70%" x2="45%" y2="50%" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
            <line x1="80%" y1="20%" x2="90%" y2="70%" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.2" />
            <circle cx="40%" cy="35%" r="3" fill="#3b82f6" opacity="0.5" />
            <circle cx="85%" cy="40%" r="2" fill="#0ea5e9" opacity="0.4" />
            <circle cx="70%" cy="75%" r="3" fill="#3b82f6" opacity="0.4" />
            <circle cx="75%" cy="60%" r="2" fill="#0ea5e9" opacity="0.3" />
            <circle cx="15%" cy="70%" r="2" fill="#3b82f6" opacity="0.4" />
            <circle cx="50%" cy="25%" r="2" fill="#0ea5e9" opacity="0.3" />
          </svg>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy via-transparent to-navy" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Engineering the Future of{" "}
            <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
              Intelligent Applications
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-200/70">
            Engineering the future of intelligent applications — where research
            meets code to create transformative solutions.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/contact"
              className="rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-primary/40"
            >
              Get Started
            </Link>
            <Link
              href="/research"
              className="rounded-lg border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
            >
              Our Research
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest text-blue-300/50">SCROLL</span>
            <div className="h-8 w-px animate-pulse bg-gradient-to-b from-blue-400/50 to-transparent" />
          </div>
        </div>
      </section>

      {/* Where Research Meets Code */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold uppercase tracking-wide text-foreground sm:text-4xl">
              Where Research Meets Code
            </h2>
            <p className="mt-4 text-lg text-muted">
              A comprehensive suite of capabilities designed to take your ideas
              from concept to production.
            </p>
          </div>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-border bg-white p-8 transition-shadow hover:shadow-lg"
              >
                <h3 className="text-lg font-bold text-foreground">
                  {service.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In Development: Project Foundation */}
      <section className="bg-navy py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">
              In Development
            </p>
            <h2 className="mt-2 text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
              Project Foundation
            </h2>
            <p className="mt-4 text-lg text-blue-200/70">
              Meet the team behind Aspiture&apos;s core components and projects.
            </p>
          </div>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
              >
                <h3 className="text-lg font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-blue-200/60">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy-light py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to Build Something Intelligent?
          </h2>
          <p className="mt-4 text-blue-200/70">
            Let&apos;s discuss how Aspiture can help engineer the future of your
            applications.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </>
  );
}
