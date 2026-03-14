import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-lg font-bold uppercase tracking-[0.2em] text-white"
            >
              Aspiture.io
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-blue-200/50">
              Engineering the future of intelligent applications — where
              research meets code.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "Services", href: "/services" },
                { label: "Research", href: "/research" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-blue-200/50 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-white">Connect</h4>
            <ul className="space-y-2">
              {["LinkedIn", "GitHub", "Email"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-blue-200/50">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-blue-200/30">
          &copy; {new Date().getFullYear()} Aspiture.io. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
