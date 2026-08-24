import { ExternalLink } from 'lucide-react'
import { cvSections, skills } from '../data/cv'
import { profile } from '../data/profile'

export function CVContent({ embedded = false }: { embedded?: boolean }) {
  return (
    <section id={embedded ? 'cv' : undefined} className={embedded ? 'scroll-mt-20 pt-20 sm:pt-24' : 'pt-12 sm:pt-20'}>
      <header className="grid gap-8 border-b border-ink pb-8 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          {/* <p className="eyebrow mb-4">Resume</p> */}
          <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl">{profile.name}</h2>
          {/* <p className="mt-4 max-w-xl text-base leading-7 text-muted">{profile.affiliation}</p> */}
        </div>
        <a href={profile.cvPdf} target="_blank" rel="noreferrer" className="inline-flex w-fit items-center gap-2 border border-ink bg-ink px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-ink"><ExternalLink size={13} /> View PDF</a>
      </header>

      <div className="grid gap-12 py-10 lg:grid-cols-[1fr_280px] lg:gap-20">
        <div>
          {cvSections.map((section, sectionIndex) => (
            <section key={section.title} className={sectionIndex ? 'mt-14' : ''}>
              <div className="mb-2 border-b border-ink pb-3"><h3 className="text-xl font-medium">{section.title}</h3></div>
              {section.items.map((item) => (
                <article key={`${item.period}-${item.title}`} className="grid gap-3 border-b border-line py-6 sm:grid-cols-[130px_1fr]">
                  <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-muted">{item.period}</p>
                  <div>
                    <div className="mb-2 flex flex-col justify-between gap-1 sm:flex-row">
                      <h4 className="font-medium">
                        {item.url ? <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:underline hover:underline-offset-4">{item.title}<ExternalLink size={13} className="shrink-0" /></a> : item.title}
                      </h4>
                      <span className="text-sm text-muted">{item.place}</span>
                    </div>
                    <p className="max-w-xl text-sm leading-6 text-muted">{item.detail}</p>
                    {item.tags && <div className="mt-3 flex flex-wrap gap-2">{item.tags.map((tag) => <span key={tag} className="border border-line px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-muted">{tag}</span>)}</div>}
                  </div>
                </article>
              ))}
            </section>
          ))}
        </div>

        <aside className="lg:sticky lg:top-24 lg:self-start">
          <section>
            <h3 className="mb-4 border-b border-ink pb-3 text-xl font-medium">Skills</h3>
            {skills.map((skill) => (
              <div key={skill.group} className="border-b border-line py-4">
                <p className="eyebrow mb-2">{skill.group}</p>
                <p className="text-sm leading-6 text-muted">{skill.values.join(' · ')}</p>
              </div>
            ))}
          </section>
          <section className="mt-10">
            <h3 className="eyebrow mb-3">Contact</h3>
            <div className="flex flex-col items-start gap-3">
              <a href={profile.links.email} className="text-link">{profile.emailLabel}</a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="text-link">LinkedIn <ExternalLink size={13} /></a>
            </div>
          </section>
        </aside>
      </div>
    </section>
  )
}
