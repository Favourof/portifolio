import { AboutSection } from "@/components/sections/about"
import { ContactCta } from "@/components/sections/contact-cta"
import { FeaturedProjects } from "@/components/sections/featured-projects"
import { HeroSection } from "@/components/sections/hero"
import { TrustSignalsSection } from "@/components/sections/social-links"
import { TeachingSection } from "@/components/sections/teaching"

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 lg:px-8">
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
      <TeachingSection />
      <TrustSignalsSection />
      <ContactCta />
    </main>
  )
}
