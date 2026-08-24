import { Link, useLocation } from 'react-router-dom'
import { profile } from '../data/profile'

export function Navigation() {
  const { pathname, search } = useLocation()
  const section = new URLSearchParams(search).get('section')

  const links = [
    { label: 'About', href: '/', active: pathname === '/' && section !== 'projects' && section !== 'cv' },
    { label: 'Projects', href: '/?section=projects', active: pathname.startsWith('/project') || (pathname === '/' && section === 'projects') },
    { label: 'CV', href: '/?section=cv', active: pathname === '/cv' || (pathname === '/' && section === 'cv') },
  ]

  const scrollTo = (label: string) => {
    if (pathname !== '/') return
    const target = label === 'Projects' ? 'projects' : label === 'CV' ? 'cv' : label === 'About' ? 'about' : null
    if (target) window.setTimeout(() => document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }), 0)
  }

  return (
    <>
      <Link
        to="/"
        className="fixed left-5 top-5 z-50 bg-white px-3 py-2 text-sm font-semibold tracking-tight sm:left-7 sm:top-7"
        aria-label="Go to homepage"
      >
        {profile.name}
      </Link>

      <nav
        className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 border border-ink bg-white shadow-[3px_3px_0_0_#151515] sm:bottom-auto sm:left-auto sm:right-5 sm:top-1/2 sm:-translate-x-0 sm:-translate-y-1/2 sm:flex-col sm:shadow-[3px_3px_0_0_#151515] lg:right-7"
        aria-label="Primary navigation"
      >
        {links.map((link, index) => (
          <Link
            key={link.label}
            to={link.href}
            onClick={() => scrollTo(link.label)}
            className={`relative grid h-11 min-w-[78px] place-items-center px-3 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors sm:h-14 sm:w-20 ${index ? 'border-l border-line sm:border-l-0 sm:border-t' : ''} ${link.active ? 'bg-ink text-white' : 'text-muted hover:bg-paper hover:text-ink'}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  )
}
