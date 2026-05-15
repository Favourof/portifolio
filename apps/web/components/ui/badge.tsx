import type { PropsWithChildren } from "react"

export function Badge({ children }: PropsWithChildren) {
  return (
    <span className="inline-flex items-center rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground">
      {children}
    </span>
  )
}
