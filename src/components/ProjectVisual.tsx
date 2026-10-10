import type { Project } from '../data/projects'

export function ProjectVisual({ project, compact = false, square = false, natural = false }: { project: Project; compact?: boolean; square?: boolean; natural?: boolean }) {
  return (
    <div className={`relative overflow-hidden border border-line ${natural ? '' : `bg-paper ${square ? 'aspect-square' : compact ? 'aspect-[4/3]' : 'aspect-[16/9]'}`}`}>
      <img src={project.thumbnail} alt={`${project.title} preview`} className={`block w-full transition-transform duration-700 group-hover:scale-[1.025] ${natural ? 'h-auto' : `h-full ${square ? 'object-cover object-center' : 'object-contain'}`}`} />
      {project.status && (
        <div className="absolute right-3 top-3 flex items-center gap-2 border border-ink/35 bg-paper/95 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-[0.08em] text-ink backdrop-blur-sm">
          <span className={`h-1.5 w-1.5 rounded-full ${project.status.toLowerCase() === 'completed' ? 'bg-ink' : 'bg-signal'}`} aria-hidden="true" />
          {project.status}
        </div>
      )}
    </div>
  )
}
