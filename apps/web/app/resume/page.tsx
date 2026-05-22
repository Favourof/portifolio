import Link from "next/link"

const resumeUrl = "/Favour_Omotosho_Ezekiel.pdf"

export default function ResumePage() {
  const skills = [
    "Frontend: React, TypeScript, JavaScript, HTML, CSS, Tailwind CSS, Bootstrap, React Native",
    "Backend: Node.js, Express.js, PostgreSQL, MongoDB, Prisma, REST APIs",
    "Tools: Git, GitHub, npm, Jest, Docker, CI/CD, AWS, Azure",
    "Strengths: Responsive design, accessibility, API integration, testing, code reviews",
  ]

  const highlights = [
    "Backend-first full-stack developer",
    "Remote collaboration experience",
    "Auth, payments, microservices, performance",
    "Teaching and mentoring at SQI College of ICT",
  ]

  return (
    <main className="mx-auto min-h-screen w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold tracking-[0.3em] text-sky-400 uppercase">
        Resume
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Backend-first full-stack experience, packaged for hiring.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
        This page highlights the kind of work I want to be hired for: secure
        backend systems, polished frontend delivery, and production-minded
        collaboration.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href={resumeUrl}
          className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-300"
        >
          Download PDF
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-border/60 px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
        >
          Contact me
        </Link>
      </div>

      <section className="mt-10">
        <p className="text-sm font-semibold tracking-[0.3em] text-sky-400 uppercase">
          Highlights
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-border/60 bg-card/70 p-5 text-sm text-muted-foreground shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <p className="text-sm font-semibold tracking-[0.3em] text-sky-400 uppercase">
          Skills
        </p>
        <div className="mt-4 grid gap-4">
          {skills.map((item) => (
            <div
              key={item}
              className="rounded-3xl border border-border/60 bg-card/70 p-5 text-sm leading-7 text-muted-foreground shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold tracking-[0.3em] text-sky-400 uppercase">
          What I Do
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {[
            "Secure authentication and authorization systems",
            "Frontend interfaces with React and Next.js",
            "Payments, APIs, and backend architecture",
            "Remote-friendly collaboration and delivery",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-border/60 bg-background/50 px-4 py-4 text-sm text-muted-foreground"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold tracking-[0.3em] text-sky-400 uppercase">
          Best Fit
        </p>
        <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
          I fit best on product teams that need a developer who can own backend
          logic, shape frontend experiences, and communicate clearly in a remote
          or cross-functional environment.
        </p>
      </section>
    </main>
  )
}
