export default function AboutPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">About</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Backend-first, full-stack, and focused on delivery.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
        I build practical web applications that solve real problems. My strongest areas are secure
        backend systems, API design, authentication flows, microservices, and full-stack product
        delivery. I also teach at SQI College of ICT, which has sharpened how I explain, mentor, and
        communicate technical ideas.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {[
          "Secure auth and user management",
          "Node.js, Express, MongoDB, Next.js",
          "Microservices and scalable architecture",
          "Teaching HTML, CSS, Tailwind, React, Express, and more",
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-border/60 bg-card/70 p-5 text-sm text-muted-foreground shadow-sm">
            {item}
          </div>
        ))}
      </div>
    </main>
  )
}
