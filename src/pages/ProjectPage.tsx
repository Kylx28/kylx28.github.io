import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { GaussianSplatViewer } from '../components/GaussianSplatViewer'
import { ProjectVisual } from '../components/ProjectVisual'
import { getProject } from '../data/projects'

export function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <Navigate to="/404" replace />
  const hasSquareThumbnail = project.slug === 'gaussian-splatting-pipeline'
  const interestLinks = project.links?.filter((link) => link.url.startsWith('/interests')) ?? []
  const remainingLinks = project.links?.filter((link) => !link.url.startsWith('/interests')) ?? []

  return (
    <article className="page-shell pt-10 sm:pt-16">
      <Link to="/" className="mb-12 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-muted hover:text-ink"><ArrowLeft size={13} /> All projects</Link>

      <header className="grid gap-9 border-b border-ink pb-10 lg:grid-cols-[1.35fr_0.65fr] lg:gap-24">
        <div>
          <p className="eyebrow mb-5">{project.year}</p>
          <h1 className="max-w-3xl text-4xl font-medium leading-[1] tracking-[-0.05em] sm:text-5xl lg:text-6xl">{project.title}</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted">{project.description}</p>
        </div>
        <div className="self-end">
          {project.status && <p className="mb-5 w-fit border border-line px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-muted">{project.status}</p>}
          <dl className="divide-y divide-line border-y border-line text-sm">
            <div className="flex justify-between py-3"><dt className="text-muted">Year</dt><dd>{project.year}</dd></div>
            <div className="flex justify-between gap-4 py-3"><dt className="text-muted">Discipline</dt><dd className="text-right">{project.categories.join(' · ')}</dd></div>
            <div className="flex justify-between gap-4 py-3"><dt className="text-muted">Stack</dt><dd className="text-right">{project.tags.join(', ')}</dd></div>
          </dl>
          {interestLinks.length > 0 && (
            <div className="mt-6">
              <p className="eyebrow mb-3">Interactive capture</p>
              {interestLinks.map((link) => (
                <Link key={link.label} to={link.url} className="text-link">{link.label}<ArrowUpRight size={13} /></Link>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className={`py-8 sm:py-12 ${hasSquareThumbnail ? 'max-w-2xl' : 'max-w-5xl'}`}>
        <ProjectVisual project={project} square={hasSquareThumbnail} />
      </div>

      {project.metrics && (
        <section aria-label="Project metrics" className="grid border-y border-line sm:grid-cols-3">
          {project.metrics.map((metric, index) => (
            <div key={metric.label} className={`px-2 py-6 sm:px-7 ${index > 0 ? 'border-t border-line sm:border-l sm:border-t-0' : ''}`}>
              <strong className="block text-3xl font-medium tracking-[-0.04em]">{metric.value}</strong>
              <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.12em] text-muted">{metric.label}</span>
            </div>
          ))}
        </section>
      )}

      <div className="py-16 sm:py-24">
        {project.sections.map((section, index) => (
          <section key={section.title} className="grid gap-5 border-t border-line py-9 md:grid-cols-[0.55fr_1.45fr] md:gap-16">
            <div className="flex gap-5"><span className="font-mono text-[9px] text-muted">{String(index + 1).padStart(2, '0')}</span><h2 className="text-lg font-medium">{section.title}</h2></div>
            <p className="max-w-2xl text-base leading-7 text-muted">{section.body}</p>
          </section>
        ))}

        {project.splat && (
          <section className="border-t border-line pt-9">
            <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <div><p className="eyebrow mb-2">Interactive demo</p><h2 className="text-2xl font-medium tracking-tight">Neural scene viewer</h2></div>
              <p className="max-w-sm text-sm leading-6 text-muted">The renderer and scene are fetched only when you choose to explore.</p>
            </div>
            <GaussianSplatViewer src={project.splat.src} poster={project.splat.poster} />
          </section>
        )}
      </div>

      {remainingLinks.length > 0 ? (
        <section className="border-y border-ink py-8">
          <p className="eyebrow mb-4">Project links</p>
          <div className="flex flex-wrap gap-5">{remainingLinks.map((link) => link.url.startsWith('/') ? <Link key={link.label} to={link.url} className="text-link">{link.label}<ArrowUpRight size={13} /></Link> : <a key={link.label} href={link.url} target="_blank" rel="noreferrer" className="text-link">{link.label}<ArrowUpRight size={13} /></a>)}</div>
        </section>
      ) : null}
    </article>
  )
}
