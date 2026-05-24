export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">About</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Backend-first, full-stack, and focused on delivery.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
        I build practical web applications that solve real problems. My strongest areas are secure
        backend systems, API design, authentication flows, microservices, and full-stack product
        delivery. I also teach at SQI College of ICT, which has sharpened how I explain, mentor,
        and communicate technical ideas.
      </p>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            What I focus on
          </p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              "Secure auth and user management",
              "Node.js, Express, MongoDB, Next.js",
              "Microservices and scalable architecture",
              "Frontend experiences that feel clear and intuitive",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-border/60 bg-background/50 px-4 py-4 text-sm text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
            How I work
          </p>
          <p className="mt-4 text-base leading-8 text-muted-foreground">
            I value clear communication, incremental delivery, and practical engineering decisions.
            That approach fits remote teams, product environments, and projects that need a
            developer who can think across the stack while keeping backend quality high.
          </p>
        </div>
      </section>
    </main>
  )
}
