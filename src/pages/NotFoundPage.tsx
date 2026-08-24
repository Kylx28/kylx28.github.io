import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return <div className="page-shell py-28"><p className="eyebrow mb-5">Error / 404</p><h1 className="text-5xl font-medium tracking-[-0.05em]">Page not found.</h1><p className="mt-5 text-muted">The page may have moved, or the address may be incorrect.</p><Link to="/" className="text-link mt-10"><ArrowLeft size={13} /> Return home</Link></div>
}
