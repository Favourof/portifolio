import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"

import "@workspace/ui/globals.css"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { cn } from "@workspace/ui/lib/utils"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Favourof | Backend-first full-stack developer",
  description:
    "Portfolio for a backend-first full-stack developer building secure systems, reliable APIs, and production-ready web apps.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", geist.variable, geistMono.variable, "font-sans")}
    >
      <body>
        <ThemeProvider>
          <div className="min-h-screen bg-background text-foreground">
            <SiteHeader />
            <div className="flex min-h-[calc(100vh-1px)] flex-col">
              <div className="flex-1">{children}</div>
              <SiteFooter />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
