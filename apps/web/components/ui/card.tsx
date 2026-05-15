import type { PropsWithChildren } from "react"

export function Card({ children }: PropsWithChildren) {
  return <div className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm">{children}</div>
}
