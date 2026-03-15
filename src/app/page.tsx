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
      {/* Hero — full viewport, dark navy with network graphic on right */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-navy">
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          {/* Left side — text */}
          <div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineering the Future of{" "}
              <span className="bg-gradient-to-r from-primary-light to-accent bg-clip-text text-transparent">
                Intelligent Applications
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-blue-200/70">
              Engineering the future of intelligent applications — where research
              meets code to create transformative solutions.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-primary px-8 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary-dark hover:shadow-primary/40"
              >
                Get Started
              </Link>
              <Link
                href="/research"
                className="rounded-lg border border-white/20 bg-white/5 px-8 py-3.5 text-center text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                Our Research
              </Link>
            </div>
          </div>

          {/* Right side — network visualization */}
          <div className="hidden lg:block">
            <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className="w-full">
              {/* Outer glow */}
              <defs>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </radialGradient>
                <filter id="blur">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                </filter>
              </defs>

              {/* Connection lines */}
              <line x1="250" y1="120" x2="380" y2="180" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
              <line x1="250" y1="120" x2="150" y2="220" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.4" />
              <line x1="250" y1="120" x2="320" y2="60" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
              <line x1="380" y1="180" x2="420" y2="300" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.4" />
              <line x1="380" y1="180" x2="300" y2="280" stroke="#3b82f6" strokeWidth="1.5" opacity="0.5" />
              <line x1="150" y1="220" x2="200" y2="350" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
              <line x1="150" y1="220" x2="300" y2="280" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" />
              <line x1="300" y1="280" x2="200" y2="350" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
              <line x1="300" y1="280" x2="420" y2="300" stroke="#0ea5e9" strokeWidth="1" opacity="0.35" />
              <line x1="200" y1="350" x2="320" y2="420" stroke="#3b82f6" strokeWidth="1.5" opacity="0.4" />
              <line x1="420" y1="300" x2="320" y2="420" stroke="#0ea5e9" strokeWidth="1.5" opacity="0.4" />
              <line x1="320" y1="60" x2="430" y2="100" stroke="#0ea5e9" strokeWidth="1" opacity="0.3" />
              <line x1="430" y1="100" x2="380" y2="180" stroke="#3b82f6" strokeWidth="1" opacity="0.3" />
              <line x1="80" y1="300" x2="150" y2="220" stroke="#3b82f6" strokeWidth="1" opacity="0.25" />
              <line x1="80" y1="300" x2="200" y2="350" stroke="#0ea5e9" strokeWidth="1" opacity="0.25" />
              <line x1="450" y1="400" x2="420" y2="300" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
              <line x1="450" y1="400" x2="320" y2="420" stroke="#0ea5e9" strokeWidth="1" opacity="0.25" />
              <line x1="100" y1="120" x2="150" y2="220" stroke="#3b82f6" strokeWidth="1" opacity="0.2" />
              <line x1="100" y1="120" x2="250" y2="120" stroke="#0ea5e9" strokeWidth="1" opacity="0.2" />

              {/* Glow circles behind nodes */}
              <circle cx="250" cy="120" r="30" fill="url(#nodeGlow)" />
              <circle cx="380" cy="180" r="25" fill="url(#nodeGlow)" />
              <circle cx="300" cy="280" r="35" fill="url(#nodeGlow)" />
              <circle cx="200" cy="350" r="20" fill="url(#nodeGlow)" />

              {/* Primary nodes (large) */}
              <circle cx="250" cy="120" r="10" fill="#3b82f6" opacity="0.9" />
              <circle cx="250" cy="120" r="5" fill="#93c5fd" />
              <circle cx="380" cy="180" r="8" fill="#0ea5e9" opacity="0.9" />
              <circle cx="380" cy="180" r="4" fill="#7dd3fc" />
              <circle cx="150" cy="220" r="9" fill="#3b82f6" opacity="0.85" />
              <circle cx="150" cy="220" r="4.5" fill="#93c5fd" />
              <circle cx="300" cy="280" r="12" fill="#3b82f6" opacity="0.9" />
              <circle cx="300" cy="280" r="6" fill="#93c5fd" />
              <circle cx="200" cy="350" r="8" fill="#0ea5e9" opacity="0.85" />
              <circle cx="200" cy="350" r="4" fill="#7dd3fc" />
              <circle cx="420" cy="300" r="7" fill="#3b82f6" opacity="0.8" />
              <circle cx="420" cy="300" r="3.5" fill="#93c5fd" />
              <circle cx="320" cy="420" r="9" fill="#0ea5e9" opacity="0.85" />
              <circle cx="320" cy="420" r="4.5" fill="#7dd3fc" />

              {/* Secondary nodes (small) */}
              <circle cx="320" cy="60" r="5" fill="#3b82f6" opacity="0.6" />
              <circle cx="320" cy="60" r="2.5" fill="#93c5fd" />
              <circle cx="430" cy="100" r="4" fill="#0ea5e9" opacity="0.5" />
              <circle cx="430" cy="100" r="2" fill="#7dd3fc" />
              <circle cx="80" cy="300" r="4" fill="#3b82f6" opacity="0.4" />
              <circle cx="80" cy="300" r="2" fill="#93c5fd" />
              <circle cx="450" cy="400" r="3.5" fill="#0ea5e9" opacity="0.4" />
              <circle cx="450" cy="400" r="1.5" fill="#7dd3fc" />
              <circle cx="100" cy="120" r="3.5" fill="#3b82f6" opacity="0.35" />
              <circle cx="100" cy="120" r="1.5" fill="#93c5fd" />

              {/* Tiny ambient dots */}
              <circle cx="180" cy="160" r="1.5" fill="#3b82f6" opacity="0.3" />
              <circle cx="340" cy="140" r="1.5" fill="#0ea5e9" opacity="0.25" />
              <circle cx="260" cy="380" r="1.5" fill="#3b82f6" opacity="0.25" />
              <circle cx="370" cy="350" r="1.5" fill="#0ea5e9" opacity="0.3" />
              <circle cx="130" cy="280" r="1.5" fill="#3b82f6" opacity="0.2" />
              <circle cx="400" cy="220" r="1.5" fill="#0ea5e9" opacity="0.2" />
              <circle cx="220" cy="250" r="1.5" fill="#3b82f6" opacity="0.2" />
              <circle cx="350" cy="380" r="1.5" fill="#0ea5e9" opacity="0.2" />
            </svg>
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
