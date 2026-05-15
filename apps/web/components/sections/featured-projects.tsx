import { ProjectCard } from "@/components/projects/project-card"
import { projects } from "@/lib/data/projects"

export function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section className="section-shell py-14 sm:py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Featured work</p>
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Selected projects</h2>
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          A few projects that show my backend strength, product delivery, and willingness to ship.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <div key={project.slug} className="animate-fade-up" style={{ animationDelay: `${index * 90}ms` }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  )
}
