export function AboutSection() {
  return (
    <section className="section-shell py-14 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">About</p>
      <div className="mt-4 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Backend-first full-stack developer who cares about outcomes
          </h2>
          <p className="mt-4 max-w-4xl text-base leading-8 text-muted-foreground sm:text-lg">
            I build secure APIs, auth systems, backend workflows, and polished frontend experiences
            for products that need to be reliable from day one. My sweet spot is the intersection
            of product thinking, performance, and clean engineering.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-muted-foreground sm:text-lg">
            I also teach web development at SQI College of ICT, which keeps my communication sharp
            and my fundamentals honest.
          </p>
        </div>
        <div className="grid gap-3 rounded-3xl border border-border/60 bg-card/70 p-5 shadow-sm">
          {[
            "Backend-first mindset with frontend delivery",
            "Auth, payments, and API design",
            "Production awareness and clear trade-offs",
            "Teaching and mentorship",
          ].map((item, index) => (
            <div
              key={item}
              className="rounded-2xl border border-border/60 bg-background/50 px-4 py-3 text-sm text-muted-foreground transition duration-300 hover:-translate-y-0.5 hover:text-foreground"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
