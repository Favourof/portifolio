import { ProjectCard } from "@/components/projects/project-card"
import { projects } from "@/lib/data/projects"

export default function ProjectsPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Projects</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        Selected work that shows how I think and build.
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
        These projects highlight security, backend logic, full-stack delivery, and scalable
        architecture.
      </p>

      <section className="mt-10">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </main>
  )
}
