import { ArrowUpRight } from 'lucide-react'
import { Fragment, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CVContent } from '../components/CVContent'
import { ProjectIndex } from '../components/ProjectIndex'
import { profile, type BioPart } from '../data/profile'

export function HomePage() {
  const { search } = useLocation()
  const bioLines = profile.bio.reduce<BioPart[][]>((lines, part) => {
    if (part.newLine || lines.length === 0) lines.push([])
    lines[lines.length - 1].push(part)
    return lines
  }, [])

  const renderBioLine = (line: BioPart[]) => line.map((part, index) => (
    <Fragment key={index}>
      {part.href ? (
        <a href={part.href} target="_blank" rel="noreferrer" className="font-semibold text-ink underline decoration-ink/30 underline-offset-4 hover:decoration-ink">{part.text}</a>
      ) : part.emphasis ? (
        <strong className="font-semibold text-ink">{part.text}</strong>
      ) : (
        <span>{part.text}</span>
      )}
    </Fragment>
  ))

  useEffect(() => {
    const section = new URLSearchParams(search).get('section')
    if (section === 'projects' || section === 'cv') window.setTimeout(() => document.getElementById(section)?.scrollIntoView(), 0)
  }, [search])

  return (
    <div className="page-shell">
      <section id="about" className="scroll-mt-16 pt-14 sm:pt-20">
        <div>
          <div className="py-6 sm:py-8">
            <h1 className="text-3xl font-medium tracking-[-0.035em] sm:text-4xl">{profile.name}</h1>
            <p className="mt-5 w-full text-sm leading-6 text-muted sm:text-base sm:leading-7">
              {renderBioLine(bioLines[0])}
            </p>
            <div className="mt-6 w-full space-y-1.5 text-[13px] leading-6 text-muted sm:text-sm">
              {bioLines.slice(1).map((line, index) => <p key={index}>{renderBioLine(line)}</p>)}
            </div>
          </div>

          <div className="flex flex-col gap-5 border-t border-line py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              <a href={profile.links.email} className="text-sm text-muted transition-colors hover:text-ink">{profile.emailLabel}</a>
              {Object.entries(profile.links).filter(([label]) => label !== 'email').map(([label, url]) => (
                <a key={label} href={url} target={url.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="text-link">{label === 'github' ? 'GitHub' : label === 'linkedin' ? 'LinkedIn' : label}<ArrowUpRight size={13} /></a>
              ))}
              <Link to="/?section=cv" className="text-link">CV <ArrowUpRight size={13} /></Link>
            </div>
            <div>
              <Link to="/interests" className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.13em] text-signal hover:text-ink">Other interests <ArrowUpRight size={13} /></Link>
            </div>
          </div>
        </div>
      </section>

      <ProjectIndex />
      <CVContent embedded />
    </div>
  )
}
