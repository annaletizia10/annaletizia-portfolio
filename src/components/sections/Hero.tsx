export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden px-6 py-24 sm:px-10 sm:py-32 lg:py-40"
    >
      {/* Abstract "essence" shapes — color only, no photo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -right-16 top-8 h-64 w-64 rounded-full bg-phthalo/10 blur-3xl" />
        <div className="absolute -left-12 bottom-12 h-72 w-72 rounded-full bg-burgundy/10 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-48 w-48 rounded-full bg-purple/10 blur-3xl" />
      </div>

      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-phthalo">
          Portfolio
        </p>

        <h1
          id="hero-heading"
          className="max-w-3xl font-display text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl"
        >
          Anna{" "}
          <span className="text-burgundy italic">Yarossi</span>
        </h1>

        <p className="mt-8 max-w-xl text-xl leading-relaxed text-muted sm:text-2xl">
          Self-taught builder. Visual thinker.
        </p>

        <div
          aria-hidden="true"
          className="mt-12 flex items-center gap-3"
        >
          <span className="h-px w-12 bg-phthalo" />
          <span className="h-2 w-2 rounded-full bg-burgundy" />
          <span className="h-px w-8 bg-purple/60" />
        </div>

        <p className="mt-10 max-w-lg text-base leading-7 text-muted">
          Developer and photographer — building with curiosity, shaping ideas
          with an eye for detail. More sections coming soon.
        </p>
      </div>
    </section>
  );
}
