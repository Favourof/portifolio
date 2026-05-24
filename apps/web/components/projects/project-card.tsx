import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import type { Project } from "@/lib/data/projects"

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  return (
    <article className="overflow-hidden rounded-3xl border border-border/60 bg-card/70 shadow-sm transition-transform duration-200 hover:-translate-y-1">
      {project.image ? (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border/60 bg-background">
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            priority={project.featured}
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      ) : null}
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">
          {project.featured ? "Featured" : "Project"}
        </p>
        <h3 className="mt-3 text-xl font-semibold tracking-tight">{project.title}</h3>
        <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.summary}</p>
        <p className="mt-4 text-sm leading-7 text-foreground/80">{project.challenge}</p>
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
            View case study
          </Link>
          {project.githubUrl ? (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              GitHub <ArrowUpRight className="size-3.5" />
            </Link>
          ) : null}
          {project.liveUrl ? (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Live demo <ArrowUpRight className="size-3.5" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  )
}
