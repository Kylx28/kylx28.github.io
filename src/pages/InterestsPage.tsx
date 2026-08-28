import { ArrowLeft } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { GaussianSplatViewer } from '../components/GaussianSplatViewer'

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`

const shoeCaptures = [
  {
    id: 'onitsuka-tiger',
    label: 'Onitsuka Tiger',
    src: asset('splats/onitsuka-tiger.spz?v=uncompressed-ply-sh3-20260828'),
    poster: asset('images/onitsuka-tiger.jpg'),
  },
]

const readingList = [
  {
    status: 'Currently reading',
    books: [{ title: 'Runaway Horses', author: 'Yukio Mishima' }],
  },
  {
    status: 'Finished',
    books: [
      { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky' },
      { title: 'Anna Karenina', author: 'Leo Tolstoy' },
      { title: 'Spring Snow', author: 'Yukio Mishima' },
      { title: 'Bleeding Edge', author: 'Thomas Pynchon'}
    ],
  },
  {
    status: 'To read',
    books: [
      { title: 'Pnin', author: 'Vladimir Nabokov' },
      { title: 'Pale Fire', author: 'Vladimir Nabokov' },
      { title: 'Notes from Underground', author: 'Fyodor Dostoevsky' },
      { title: 'Against the Day', author: 'Thomas Pynchon'},
    ],
  },
]

export function InterestsPage() {
  const { search } = useLocation()
  const [selectedShoe, setSelectedShoe] = useState(shoeCaptures[0].id)
  const activeShoe = shoeCaptures.find((shoe) => shoe.id === selectedShoe) ?? shoeCaptures[0]

  useEffect(() => {
    const requestedShoe = new URLSearchParams(search).get('view')
    if (requestedShoe && shoeCaptures.some((shoe) => shoe.id === requestedShoe)) {
      setSelectedShoe(requestedShoe)
      window.setTimeout(() => document.getElementById('shoe-splats')?.scrollIntoView(), 0)
    }
  }, [search])

  return (
    <div className="page-shell py-24 sm:py-28">
      <Link to="/" className="text-link mb-12"><ArrowLeft size={13} /> Back to home</Link>

      <header className="border-b border-ink pb-8">
        {/* <p className="eyebrow mb-4">Away from the keyboard</p> */}
        <h1 className="text-4xl font-medium tracking-[-0.045em] sm:text-6xl">Other interests</h1>
      </header>

      <section id="shoe-splats" className="scroll-mt-10 py-12 sm:py-16">
        <div className="mb-7 grid gap-4 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="eyebrow mb-3">3D captures / Shoe archive</p>
            <h2 className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">Shoes in Gaussian splats</h2>
          </div>
          <p className="text-sm leading-6 text-muted md:text-right">A recreational object-capture experiment. Each scene loads automatically and can be explored in the browser.</p>
        </div>

        <div className="mb-7 flex overflow-x-auto border-y border-line [scrollbar-width:none]" aria-label="Select a shoe capture">
          {shoeCaptures.map((shoe, index) => (
            <button
              key={shoe.id}
              type="button"
              onClick={() => setSelectedShoe(shoe.id)}
              className={`flex min-w-[190px] items-center gap-4 border-r border-line px-4 py-4 text-left transition-colors ${activeShoe.id === shoe.id ? 'bg-ink text-white' : 'bg-white hover:bg-paper'}`}
              aria-pressed={activeShoe.id === shoe.id}
            >
              <span className={`font-mono text-[9px] ${activeShoe.id === shoe.id ? 'text-white/60' : 'text-muted'}`}>{String(index + 1).padStart(2, '0')}</span>
              <span className="text-sm font-medium">{shoe.label}</span>
            </button>
          ))}
        </div>

        <GaussianSplatViewer
          key={activeShoe.id}
          src={activeShoe.src}
          poster={activeShoe.poster}
        />
      </section>

      {/* <section className="border-t border-ink py-12 sm:py-16" aria-labelledby="reading-list-title">
        <div className="mb-8 grid gap-3 md:grid-cols-[1fr_0.7fr] md:items-end">
          <div>
            <p className="eyebrow mb-3">Books &amp; novels</p>
            <h2 id="reading-list-title" className="text-2xl font-medium tracking-[-0.03em] sm:text-3xl">Reading list</h2>
          </div>
        </div>

        <div className="grid border-t border-line md:grid-cols-3">
          {readingList.map((group, groupIndex) => (
            <div key={group.status} className={`py-6 md:px-6 ${groupIndex ? 'border-t border-line md:border-l md:border-t-0' : 'md:pl-0'}`}>
              <h3 className="mb-5 font-mono text-[10px] uppercase tracking-[0.13em] text-muted">{group.status}</h3>
              <ul className="space-y-5">
                {group.books.map((book) => (
                  <li key={book.title}>
                    <p className="text-sm font-medium">{book.title}</p>
                    <p className="mt-1 text-xs text-muted">{book.author}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  )
}
