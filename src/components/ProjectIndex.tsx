import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { ProjectVisual } from './ProjectVisual'

const statusOrder = (status?: string) => {
  const normalized = status?.toLowerCase()
  if (normalized?.includes('active') || normalized?.includes('progress') || normalized?.includes('ongoing')) return 0
  if (normalized === 'completed') return 1
  if (normalized?.includes('planned')) return 2
  return 3
}

export function ProjectIndex() {
  const sortedProjects = [...projects].sort((a, b) => {
    const progressDifference = statusOrder(a.status) - statusOrder(b.status)
    if (progressDifference !== 0) return progressDifference
    return Number.parseInt(b.year, 10) - Number.parseInt(a.year, 10)
  })

  return (
    <section id="projects" className="scroll-mt-24 pt-20 sm:pt-24">
      <div className="border-b border-ink pb-4">
        <h2 className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">Projects</h2>
      </div>

      <div className="grid gap-x-7 gap-y-12 pt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-9 xl:gap-y-14 2xl:grid-cols-4">
        {sortedProjects.map((project) => (
          <article key={project.slug} className="min-w-0">
            <Link to={`/project/${project.slug}`} className="group block">
              <ProjectVisual project={project} square={project.slug === 'gaussian-splatting-pipeline'} />
            </Link>

            <div className="pt-5">
              <div className="flex items-start justify-between gap-5">
                <h3 className="text-lg font-medium tracking-[-0.025em] sm:text-xl">
                  <Link to={`/project/${project.slug}`} className="hover:underline hover:underline-offset-4">{project.title}</Link>
                </h3>
                <span className="mt-1 shrink-0 font-mono text-xs text-muted">{project.year}</span>
              </div>

              <p className="mt-3 text-sm leading-6 text-muted">{project.description}</p>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t border-line pt-3">
                <div className="flex flex-wrap gap-x-3 gap-y-1 font-mono text-[11px] tracking-[0.01em] text-muted">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <Link to={`/project/${project.slug}`} className="inline-flex items-center gap-1 text-xs font-medium text-signal hover:underline hover:underline-offset-4">
                  Read more <ArrowUpRight size={12} />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
