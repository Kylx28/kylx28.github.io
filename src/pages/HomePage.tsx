import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CVContent } from '../components/CVContent'
import { ProjectIndex } from '../components/ProjectIndex'
import { profile } from '../data/profile'

export function HomePage() {
  const { search } = useLocation()

  useEffect(() => {
    const section = new URLSearchParams(search).get('section')
    if (section === 'projects' || section === 'cv') window.setTimeout(() => document.getElementById(section)?.scrollIntoView(), 0)
  }, [search])

  return (
    <div className="page-shell">
      <section id="about" className="scroll-mt-24 pt-20 sm:pt-28">
        <div className="border border-ink">
          <div className="grid lg:grid-cols-[1.55fr_0.45fr]">
            <div className="p-6 sm:p-9 lg:p-12">
              <h1 className="text-5xl font-medium tracking-[-0.045em] sm:text-6xl">{profile.name}</h1>
              <p className="mt-7 max-w-3xl text-lg leading-8 text-muted">
                {profile.bio.map((part, index) => part.href ? (
                  <a key={index} href={part.href} target="_blank" rel="noreferrer" className="font-semibold text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink">{part.text}</a>
                ) : part.emphasis ? (
                  <strong key={index} className="font-semibold text-ink">{part.text}</strong>
                ) : (
                  <span key={index}>{part.text}</span>
                ))}
              </p>
            </div>

            <aside className="border-t border-line p-6 sm:p-9 lg:border-l lg:border-t-0 lg:p-10">
              <div>
                <p className="mb-3 text-sm font-medium">Interests</p>
                <p className="text-sm leading-7 text-muted">{profile.interests.join(' · ')}</p>
              </div>
              <div className="mt-7">
                <p className="mb-2 text-sm font-medium">Currently</p>
                <p className="text-sm leading-6">{profile.affiliation}</p>
              </div>
            </aside>
          </div>

          <div className="flex flex-col gap-6 border-t border-line p-5 sm:flex-row sm:items-center sm:justify-between sm:px-9 lg:px-12">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <a href={profile.links.email} className="text-sm text-muted transition-colors hover:text-ink">{profile.emailLabel}</a>
              {Object.entries(profile.links).filter(([label]) => label !== 'email').map(([label, url]) => (
                <a key={label} href={url} target={url.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-link capitalize">{label}<ArrowUpRight size={13} /></a>
              ))}
              <Link to="/?section=cv" className="text-link">CV <ArrowUpRight size={13} /></Link>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link to="/interests" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-muted hover:text-ink">Other interests <ArrowUpRight size={13} /></Link>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-muted hover:text-ink">View projects <ArrowDown size={13} /></button>
            </div>
          </div>
        </div>
      </section>

      <ProjectIndex />
      <CVContent embedded />
    </div>
  )
}
