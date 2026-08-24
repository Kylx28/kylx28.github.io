import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export function InterestsPage() {
  return (
    <div className="page-shell py-28 sm:py-36">
      <section className="mx-auto max-w-3xl border border-ink p-7 sm:p-12">
        <p className="eyebrow mb-5">Other interests</p>
        <h1 className="text-4xl font-medium tracking-[-0.045em] sm:text-5xl">Under construction.</h1>
        <Link to="/" className="text-link mt-10"><ArrowLeft size={13} /> Back to home</Link>
      </section>
    </div>
  )
}
