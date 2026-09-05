import { Link, useLocation } from 'react-router-dom'

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
      <nav
        className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 border border-ink bg-surface lg:bottom-auto lg:left-auto lg:right-10 lg:top-7 lg:-translate-x-0 xl:right-14"
        aria-label="Primary navigation"
      >
        {links.map((link, index) => (
          <Link
            key={link.label}
            to={link.href}
            onClick={() => scrollTo(link.label)}
            className={`relative grid h-11 min-w-[78px] place-items-center px-3 font-mono text-[9px] uppercase tracking-[0.12em] transition-colors lg:h-[46px] lg:min-w-[96px] ${index ? 'border-l border-line' : ''} ${link.active ? 'bg-signal text-white' : 'text-muted hover:bg-paper hover:text-signal'}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </>
  )
}
