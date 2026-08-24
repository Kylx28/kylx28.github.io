import { AlertTriangle, Box, LoaderCircle } from 'lucide-react'
import { lazy, Suspense, useState } from 'react'

const GaussianSplatCanvas = lazy(() => import('./GaussianSplatCanvas'))

export interface GaussianSplatViewerProps {
  src: string
  poster: string
  className?: string
}

function LoadingPanel() {
  return (
    <div className="absolute inset-0 grid place-items-center bg-paper">
      <div className="text-center">
        <LoaderCircle className="mx-auto mb-3 animate-spin" size={20} />
        <p className="font-mono text-[10px] uppercase tracking-[0.14em]">Loading renderer</p>
      </div>
    </div>
  )
}

export function GaussianSplatViewer({ src, poster, className = '' }: GaussianSplatViewerProps) {
  const [enabled, setEnabled] = useState(false)
  const [failed, setFailed] = useState(false)

  if (!enabled || failed) {
    return (
      <div className={`group relative aspect-[16/10] overflow-hidden border border-line bg-paper ${className}`}>
        <img src={poster} alt="3D scene preview" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/5 transition-colors group-hover:bg-black/10" />
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-start justify-between gap-4 border-t border-white/70 bg-white/90 p-4 backdrop-blur-sm sm:flex-row sm:items-center">
          <div>
            <p className="flex items-center gap-2 text-sm font-medium">{failed ? <AlertTriangle size={15} /> : <Box size={15} />}{failed ? '3D preview unavailable' : 'Interactive scene'}</p>
            <p className="mt-1 text-xs text-muted">{failed ? 'The static preview is still available.' : 'Loads the scene on demand · WebGL required'}</p>
          </div>
          <button onClick={() => { setFailed(false); setEnabled(true) }} className="border border-ink bg-ink px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-ink">
            {failed ? 'Try again' : 'Explore in 3D'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={`relative aspect-[16/10] overflow-hidden border border-line bg-[#111] ${className}`}>
      <Suspense fallback={<LoadingPanel />}>
        <GaussianSplatCanvas src={src} onError={() => setFailed(true)} />
      </Suspense>
      <div className="pointer-events-none absolute left-3 top-3 border border-white/20 bg-black/60 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">Drag to orbit · Scroll to zoom</div>
    </div>
  )
}
