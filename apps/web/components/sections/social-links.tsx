import Link from "next/link"

import { socialLinks } from "@/lib/data/social-links"

export function SocialLinksSection() {
  return (
    <section className="section-shell py-14 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Social</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Find me online</h2>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          Add your social profiles here so recruiters, clients, and collaborators can see your writing,
          thoughts, and ongoing work.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {socialLinks.map((item, index) => {
          const isLinked = Boolean(item.href)

          return (
            <div
              key={item.label}
              className="rounded-3xl border border-border/60 bg-card/70 p-5 shadow-sm transition duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <p className="text-sm font-semibold text-foreground">{item.label}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.handle}</p>
              {isLinked ? (
                <Link
                  href={item.href as string}
                  className="mt-4 inline-flex text-sm font-medium text-sky-400"
                >
                  Visit profile
                </Link>
              ) : (
                <span className="mt-4 inline-flex text-sm font-medium text-muted-foreground">
                  Add link
                </span>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
