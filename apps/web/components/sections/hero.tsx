import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="section-shell relative flex flex-col gap-8 overflow-hidden py-14 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 mx-auto h-64 w-full max-w-4xl rounded-full bg-sky-400/10 blur-3xl animate-float-soft" />
      <div className="pointer-events-none absolute -left-20 top-20 -z-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />
      <p className="animate-fade-up text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
        Backend-first full-stack portfolio
      </p>
      <div className="max-w-4xl space-y-6">
        <h1 className="animate-fade-up-delay-1 text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
          I build fast, secure products with backend strength and user-focused frontends.
        </h1>
        <p className="animate-fade-up-delay-2 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg lg:text-xl">
          I design APIs, authentication flows, microservices, and interfaces that feel clear,
          intuitive, and ready for real traffic.
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
          <Mail className="size-4" /> Available for full-stack projects
        </Link>
        <Link
          href="https://github.com/Favourof"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border/60 px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
        >
          GitHub
        </Link>
      </div>

      <div className="grid gap-4 rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm transition duration-300 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            label: "98% latency reduction on a Node.js optimization project",
            href: "/projects/node-event-loop-optimization",
          },
          {
            label: "MERN auth system with token rotation and RBAC",
            href: "/projects/mern-auth-system",
          },
          {
            label: "PayVerse backend with PostgreSQL and ACID transactions",
            href: "/projects/payverse-backend",
          },
          {
            label: "Microservices commerce backend behind an API gateway",
            href: "/projects/microservice-ecommerce",
          },
          {
            label: "Expense tracker PWA with installable mobile workflow",
            href: "/projects/expense-tracker",
          },
        ].map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            className="rounded-2xl border border-border/60 bg-background/40 px-4 py-4 text-sm text-muted-foreground transition duration-300 hover:-translate-y-1 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </section>
  )
}
