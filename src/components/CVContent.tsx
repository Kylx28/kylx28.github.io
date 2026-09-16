import { ExternalLink } from 'lucide-react'
import { cvSections, skills } from '../data/cv'
import { profile } from '../data/profile'

export function CVContent({ embedded = false }: { embedded?: boolean }) {
  return (
    <section id={embedded ? 'cv' : undefined} className={embedded ? 'scroll-mt-16 pt-16 sm:pt-20' : 'pt-12 sm:pt-16'}>
      <header className="grid gap-6 pb-6 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          {/* <p className="eyebrow mb-4">Resume</p> */}
          <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">{profile.name}</h2>
          {/* <p className="mt-4 max-w-xl text-base leading-7 text-muted">{profile.affiliation}</p> */}
        </div>
        <a href={profile.cvPdf} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 bg-signal px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-ink"><ExternalLink size={13} /> View PDF</a>
      </header>

      <div className="py-8">
        <div>
          {cvSections.map((section, sectionIndex) => (
            <section key={section.title} className={sectionIndex ? 'mt-12' : ''}>
              <div className="mb-1"><h3 className="text-lg font-medium">{section.title}</h3></div>
              {section.items.map((item) => (
                <article key={`${item.period}-${item.title}`} className="grid gap-2 py-5 sm:grid-cols-[120px_1fr]">
                  <p className="font-mono text-[11px] tracking-[0.01em] text-muted">{item.period}</p>
                  <div>
                    <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row">
                      <h4 className="font-medium">
                        {item.url ? <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline hover:underline-offset-4">{item.title}<ExternalLink size={13} className="shrink-0" /></a> : item.title}
                      </h4>
                      <span className="text-sm text-muted">{item.place}</span>
                    </div>
                    <p className="max-w-3xl text-sm leading-6 text-muted">{item.detail}</p>
                    {item.tags && <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">{item.tags.map((tag) => <span key={tag} className="font-mono text-[10px] tracking-[0.01em] text-signal">{tag}</span>)}</div>}
                  </div>
                </article>
              ))}
            </section>
          ))}
        </div>

        <section className="mt-12" aria-labelledby="skills-title">
          <h3 id="skills-title" className="mb-4 text-lg font-medium">Skills</h3>
          <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((skill) => (
              <div key={skill.group}>
                <p className="eyebrow mb-2">{skill.group}</p>
                <p className="text-sm leading-6 text-muted">{skill.values.join(' · ')}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h3 className="eyebrow mb-3">Contact</h3>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a href={profile.links.email} className="text-link">{profile.emailLabel}</a>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-link">LinkedIn <ExternalLink size={13} /></a>
          </div>
        </section>
      </div>
    </section>
  )
}
