"use client"

import { useState } from "react"
import Link from "next/link"

import { navigation } from "@/lib/data/navigation"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen((value) => !value)}
        className="rounded-full border border-border/60 px-4 py-2 text-sm font-medium transition hover:bg-accent hover:text-accent-foreground"
      >
        {open ? "Close" : "Menu"}
      </button>

      {open ? (
        <div
          id="mobile-navigation"
          className="absolute left-0 right-0 top-full z-20 border-b border-border/40 bg-background/95 px-4 py-4 backdrop-blur sm:px-6 lg:px-8"
        >
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="rounded-full border border-border/60 px-4 py-2 text-center text-sm font-medium transition hover:bg-accent hover:text-accent-foreground"
            >
              Let&apos;s talk
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  )
}
