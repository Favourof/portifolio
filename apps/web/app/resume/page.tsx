import Link from "next/link"

const resumeUrl = "/resume/download"

export default function ResumePage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Resume</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Skills, teaching, and delivery.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
        This page highlights my strongest areas and the kind of work I want to be hired for.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href={resumeUrl}
          className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-300"
        >
          Download resume
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full border border-border/60 px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
        >
          Contact me
        </Link>
      </div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {[
          "Backend development and APIs",
          "Full-stack web apps with Next.js and React",
          "MongoDB, Mongoose, PostgreSQL, Prisma exposure",
          "CI/CD, deployment, and production awareness",
        ].map((item) => (
          <div key={item} className="rounded-3xl border border-border/60 bg-card/70 p-5 text-sm text-muted-foreground shadow-sm">
            {item}
          </div>
        ))}
      </div>
    </main>
  )
}
