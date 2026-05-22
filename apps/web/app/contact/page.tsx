import { ContactForm } from "@/components/contact-form"
import { TrustSignalsSection } from "@/components/sections/social-links"

export default function ContactPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold tracking-[0.3em] text-sky-400 uppercase">
        Contact
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Let&apos;s build something useful.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
        Send me a message about backend systems, fintech, SaaS, or a product that needs a reliable
        builder.
      </p>
      <ContactForm />
      <TrustSignalsSection />
    </main>
  )
}
