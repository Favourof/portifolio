import Link from "next/link"
import { socialLinks } from "@/lib/data/social-links"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-background/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 text-sm text-muted-foreground sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
          <div className="space-y-1">
            <p className="text-foreground">Built by Favourof</p>
            <p>Backend-first, full-stack, and production-minded.</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link className="transition hover:text-foreground" href="/projects">
              Projects
            </Link>
            <Link className="transition hover:text-foreground" href="/contact">
              Contact
            </Link>
            <Link className="transition hover:text-foreground" href="/resume">
              Resume
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
