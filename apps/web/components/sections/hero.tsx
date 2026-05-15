import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="section-shell relative flex flex-col gap-8 overflow-hidden py-14 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-64 w-full max-w-4xl rounded-full bg-sky-400/10 blur-3xl animate-float-soft" />
      <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
        Portfolio
      </p>
      <div className="max-w-4xl space-y-6">
        <h1 className="animate-fade-up-delay-1 text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          Backend-first full-stack developer building secure systems.
        </h1>
        <p className="animate-fade-up-delay-2 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg lg:text-xl">
          I ship practical web apps with strong backend foundations, clean user experiences, and
          production-ready thinking.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:bg-sky-300"
        >
          View projects <ArrowRight className="size-4" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
        >
          <Mail className="size-4" /> Contact me
        </Link>
        <Link
          href="https://github.com/Favourof"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
        >
          GitHub
        </Link>
      </div>

      <div className="grid gap-4 rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm transition duration-300 sm:grid-cols-2 xl:grid-cols-4">
        {[
          "Secure auth systems",
          "Full-stack delivery",
          "CI/CD and deployment",
          "Backend and microservices experience",
        ].map((item, index) => (
          <div
            key={item}
            className="rounded-2xl border border-border/60 bg-background/40 px-4 py-4 text-sm text-muted-foreground transition duration-300 hover:-translate-y-1 hover:text-foreground"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
