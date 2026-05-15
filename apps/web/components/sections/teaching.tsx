export function TeachingSection() {
  return (
    <section className="section-shell py-14 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Teaching</p>
      <div className="mt-4 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Instructor at SQI College of ICT
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
            I teach HTML, CSS, Tailwind, JavaScript, Git and GitHub, React, Express.js, MongoDB with
            Mongoose, Firebase, and related tools.
          </p>
        </div>
        <div className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm">
          <p className="text-sm leading-8 text-muted-foreground">
            Teaching keeps me sharp. It strengthens how I explain ideas, break down problems, and
            guide people from fundamentals to building real products.
          </p>
        </div>
      </div>
    </section>
  )
}
