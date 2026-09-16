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
    <section id="projects" className="scroll-mt-16 pt-16 sm:pt-20">
      <div>
        <h2 className="text-xl font-medium tracking-[-0.02em] sm:text-2xl">Projects</h2>
      </div>

      <div className="grid gap-x-7 gap-y-11 pt-6 sm:grid-cols-2 lg:grid-cols-3">
        {sortedProjects.map((project) => (
          <article key={project.slug} className="min-w-0">
            <Link to={`/project/${project.slug}`} className="group block">
              <ProjectVisual project={project} square={project.slug === 'gaussian-splatting-pipeline'} />
            </Link>

            <div className="pt-5">
              <div className="flex items-start justify-between gap-5">
                <h3 className="text-base font-medium tracking-[-0.015em] sm:text-lg">
                  <Link to={`/project/${project.slug}`} className="hover:underline hover:underline-offset-4">{project.title}</Link>
                </h3>
                <span className="mt-1 shrink-0 font-mono text-xs text-muted">{project.year}</span>
              </div>

              <p className="mt-2.5 text-[13px] leading-5 text-muted">{project.description}</p>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
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
