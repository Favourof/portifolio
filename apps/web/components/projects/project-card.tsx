import Link from "next/link"

import type { Project } from "@/lib/data/projects"

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <article className="rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
        {project.featured ? "Featured" : "Project"}
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight">{project.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.summary}</p>
      <p className="mt-4 text-sm leading-7 text-foreground/80">{project.problem}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground"
          >
            {item}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={`/projects/${project.slug}`} className="text-sm font-medium text-sky-400">
          View project
        </Link>
        {project.githubUrl ? (
          <Link href={project.githubUrl} className="text-sm font-medium text-muted-foreground hover:text-foreground">
            GitHub
          </Link>
        ) : null}
        {project.liveUrl ? (
          <Link href={project.liveUrl} className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Live demo
          </Link>
        ) : null}
      </div>
    </article>
  )
}
