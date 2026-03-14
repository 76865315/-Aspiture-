import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-bold tracking-tight text-primary">
              Aspiture
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
              Empowering businesses with innovative solutions that drive growth
              and deliver measurable results.
            </p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Company</h4>
            <ul className="space-y-2">
              {["About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-muted transition-colors hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Connect</h4>
            <ul className="space-y-2">
              {["LinkedIn", "Twitter", "Email"].map((item) => (
                <li key={item}>
                  <span className="text-sm text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted">
          &copy; {new Date().getFullYear()} Aspiture. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
