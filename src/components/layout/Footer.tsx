export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
        <p>© {year} Anna Yarossi</p>
        <a
          href="https://www.linkedin.com/in/anna-yarossi-4738111b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-burgundy transition-colors hover:text-phthalo"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
