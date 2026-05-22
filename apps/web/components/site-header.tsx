import Link from "next/link"

import { navigation } from "@/lib/data/navigation"
import { MobileNav } from "@/components/mobile-nav"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border/40 bg-background/75 backdrop-blur-md">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.25em] text-sky-400 uppercase transition hover:text-sky-300"
        >
          Favourof
        </Link>

        <nav className="hidden items-center gap-5 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-full border border-border/60 px-4 py-2 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:bg-accent hover:text-accent-foreground"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <MobileNav />
      </div>
    </header>
  )
}
