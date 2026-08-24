import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="page-shell pb-10 pt-20">
      <div className="flex flex-col gap-4 border-t border-line pt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex gap-5">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-ink">GitHub ↗</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-ink">LinkedIn ↗</a>
          <a href={profile.links.email} className="hover:text-ink">Email ↗</a>
        </div>
      </div>
    </footer>
  )
}
