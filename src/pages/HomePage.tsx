import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { Fragment, useEffect } from 'react'
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
        <div className="border-y border-ink">
          <div className="grid lg:grid-cols-[minmax(0,2fr)_minmax(280px,0.72fr)]">
            <div className="py-10 sm:py-14 lg:py-16 lg:pr-14 xl:pr-24">
              <h1 className="text-5xl font-medium tracking-[-0.045em] sm:text-6xl xl:text-7xl">{profile.name}</h1>
              <p className="mt-8 max-w-5xl text-lg leading-8 text-muted sm:text-xl sm:leading-9 xl:text-[1.35rem] xl:leading-10">
                {profile.bio.map((part, index) => (
                  <Fragment key={index}>
                    {part.newLine && <br />}
                    {part.href ? (
                      <a href={part.href} target="_blank" rel="noreferrer" className="font-semibold text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink">{part.text}</a>
                    ) : part.emphasis ? (
                      <strong className="font-semibold text-ink">{part.text}</strong>
                    ) : (
                      <span>{part.text}</span>
                    )}
                  </Fragment>
                ))}
              </p>
            </div>

            <aside className="flex flex-col justify-between gap-12 border-t border-line py-8 sm:py-10 lg:border-l lg:border-t-0 lg:px-10 lg:py-14 xl:px-12">
              <div>
                <p className="mb-3 text-sm font-medium">Interests</p>
                <ul className="flex flex-wrap gap-x-5 gap-y-2 text-base leading-7 text-muted lg:flex-col lg:gap-1">
                  {profile.interests.map((interest) => <li key={interest}>{interest}</li>)}
                </ul>
              </div>
              <div>
                <p className="mb-3 text-sm font-medium">Currently</p>
                <p className="text-base leading-7">{profile.affiliation}</p>
              </div>
            </aside>
          </div>

          <div className="flex flex-col gap-6 border-t border-line py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <a href={profile.links.email} className="text-sm text-muted transition-colors hover:text-ink">{profile.emailLabel}</a>
              {Object.entries(profile.links).filter(([label]) => label !== 'email').map(([label, url]) => (
                <a key={label} href={url} target={url.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-link">{label === 'github' ? 'GitHub' : label === 'linkedin' ? 'LinkedIn' : label}<ArrowUpRight size={13} /></a>
              ))}
              <Link to="/?section=cv" className="text-link">CV <ArrowUpRight size={13} /></Link>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <Link to="/interests" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-signal hover:text-ink">Other interests <ArrowUpRight size={13} /></Link>
              <button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-signal hover:text-ink">View projects <ArrowDown size={13} /></button>
            </div>
          </div>
        </div>
      </section>

      <ProjectIndex />
      <CVContent embedded />
    </div>
  )
}
