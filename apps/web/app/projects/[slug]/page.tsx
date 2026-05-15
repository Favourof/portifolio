import { promises as fs } from "fs"
import path from "path"
import type { ReactNode } from "react"

import Link from "next/link"
import { notFound } from "next/navigation"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

import { projects } from "@/lib/data/projects"

type Props = {
  params: Promise<{
    slug: string
  }>
}

const contentDirectory = path.join(process.cwd(), "content", "projects")

async function loadProjectStory(slug: string) {
  const filePath = path.join(contentDirectory, `${slug}.mdx`)

  try {
    const file = await fs.readFile(filePath, "utf8")
    return matter(file)
  } catch {
    return null
  }
}

const markdownComponents = {
  h2: ({ children }: { children?: ReactNode }) => (
    <h2 className="mt-10 text-2xl font-semibold tracking-tight text-foreground">{children}</h2>
  ),
  p: ({ children }: { children?: ReactNode }) => (
    <p className="mt-4 leading-8 text-muted-foreground">{children}</p>
  ),
  ul: ({ children }: { children?: ReactNode }) => (
    <ul className="mt-4 list-disc space-y-3 pl-6 text-muted-foreground">{children}</ul>
  ),
  li: ({ children }: { children?: ReactNode }) => <li className="leading-8">{children}</li>,
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  const story = await loadProjectStory(slug)

  return (
    <main className="mx-auto min-h-screen w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Project detail</p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {project.title}
      </h1>
      <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
        {project.summary}
      </p>

      <div className="mt-8 flex flex-wrap gap-3 rounded-3xl border border-border/60 bg-card/70 p-4 text-sm shadow-sm">
        <div className="rounded-2xl border border-border/60 px-4 py-3">
          <span className="block text-xs uppercase tracking-[0.25em] text-sky-400">Role</span>
          <span className="mt-1 block text-foreground">{project.role}</span>
        </div>
        <div className="rounded-2xl border border-border/60 px-4 py-3">
          <span className="block text-xs uppercase tracking-[0.25em] text-sky-400">Stack</span>
          <span className="mt-1 block text-foreground">{project.stack.join(", ")}</span>
        </div>
        <div className="rounded-2xl border border-border/60 px-4 py-3">
          <span className="block text-xs uppercase tracking-[0.25em] text-sky-400">Focus</span>
          <span className="mt-1 block text-foreground">Backend and delivery</span>
        </div>
      </div>

      <div className="mt-10 space-y-6 rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm sm:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">Challenge</p>
          <p className="mt-2 leading-8 text-muted-foreground">{project.challenge}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">Solution</p>
          <p className="mt-2 leading-8 text-muted-foreground">{project.solution}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">Impact</p>
          <p className="mt-2 leading-8 text-muted-foreground">{project.impact}</p>
        </div>
        <div className="flex flex-wrap gap-4 pt-2">
          <Link href="/projects" className="text-sm font-medium text-sky-400">
            Back to projects
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
      </div>

      {story ? (
        <article className="mt-10 rounded-3xl border border-border/60 bg-card/70 p-6 shadow-sm sm:p-8">
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
            {story.content}
          </ReactMarkdown>
        </article>
      ) : null}
    </main>
  )
}
