import Link from "next/link"

import { socialLinks } from "@/lib/data/social-links"

const proofPoints = [
  {
    title: "98% latency reduction",
    detail:
      "A Node.js optimization project that moved heavy work off the event loop and used Worker Threads.",
  },
  {
    title: "Production auth",
    detail:
      "JWT, refresh-token rotation, email verification, password reset, rate limiting, and RBAC.",
  },
  {
    title: "Architecture thinking",
    detail:
      "Payments and microservices work that documents trade-offs instead of just listing tools.",
  },
  {
    title: "Teaching experience",
    detail:
      "Instructor at SQI College of ICT, teaching front-end and back-end fundamentals.",
  },
]

export function TrustSignalsSection() {
  return (
    <section className="section-shell py-14 sm:py-16">
      <p className="text-sm font-semibold tracking-[0.3em] text-sky-400 uppercase">
        Find me online
      </p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Proof, writing, and direct contact
        </h2>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {proofPoints.map((item, index) => (
          <div
            key={item.title}
            className="rounded-3xl border border-border/60 bg-card/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <p className="text-sm font-semibold text-foreground">
              {item.title}
            </p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <p className="text-sm font-semibold tracking-[0.3em] text-sky-400 uppercase">
          Social links
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {socialLinks.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-3xl border border-border/60 bg-card/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-accent/50"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <p className="text-sm font-semibold text-foreground">
                {item.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.handle}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-300"
        >
          Start a conversation
        </Link>
        <Link
          href="https://www.linkedin.com/in/favour-omotosho-ezekiel"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center rounded-full border border-border/60 px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
        >
          Open LinkedIn
        </Link>
      </div>
    </section>
  )
}
