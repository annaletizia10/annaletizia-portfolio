import Link from "next/link";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Photography", href: "#photography" },
  { label: "Contact", href: "#contact" },
] as const;

export function Header() {
  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5 sm:px-10">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-burgundy transition-opacity hover:opacity-80"
        >
          Anna Yarossi
        </Link>

        <nav aria-label="Main">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium text-muted">
            {navItems.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="transition-colors hover:text-phthalo"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
