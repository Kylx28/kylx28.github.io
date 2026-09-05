import type { Project } from '../data/projects'

export function ProjectVisual({ project, compact = false, square = false }: { project: Project; compact?: boolean; square?: boolean }) {
  return (
    <div className={`relative overflow-hidden border border-line bg-paper ${square ? 'aspect-square' : compact ? 'aspect-[4/3]' : 'aspect-[16/9]'}`}>
      <img src={project.thumbnail} alt={`${project.title} preview`} className={`h-full w-full transition-transform duration-700 group-hover:scale-[1.025] ${square ? 'object-cover object-center' : 'object-contain'}`} />
      {project.status && (
        <div className="absolute right-3 top-3 flex items-center gap-2 border border-ink/35 bg-paper/95 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.08em] text-ink backdrop-blur-sm">
          <span className={`h-1.5 w-1.5 rounded-full ${project.status.toLowerCase() === 'completed' ? 'bg-ink' : 'bg-signal'}`} aria-hidden="true" />
          {project.status}
        </div>
      )}
    </div>
  )
}
