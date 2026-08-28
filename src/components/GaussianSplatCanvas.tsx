import { PackedSplats, SparkRenderer, SplatLoader, SplatMesh } from '@sparkjsdev/spark'
import { Pause, Play, RotateCcw } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

export default function GaussianSplatCanvas({ src, onError }: { src: string; onError: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const controlsRef = useRef<OrbitControls | null>(null)
  const resetPositionRef = useRef(new THREE.Vector3(1, -4, 2))
  const resetTargetRef = useRef(new THREE.Vector3())
  const [progress, setProgress] = useState(0)
  const [isSpinning, setIsSpinning] = useState(true)

  useEffect(() => {
    const container = containerRef.current
    if (!container || !window.WebGL2RenderingContext) {
      onError()
      return
    }
    const root = container

    let alive = true
    let renderer: THREE.WebGLRenderer | null = null
    let spark: SparkRenderer | null = null
    let splats: SplatMesh | null = null
    let controls: OrbitControls | null = null
    let resizeObserver: ResizeObserver | null = null

    async function initialize() {
      try {
        const width = root.clientWidth
        const height = root.clientHeight
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0x111111)

        const camera = new THREE.PerspectiveCamera(55, width / height, 0.01, 1000)
        camera.position.set(1, -4, 2)
        camera.up.set(0, 0, 1)
        cameraRef.current = camera

        renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: 'high-performance' })
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setSize(width, height, false)
        renderer.domElement.className = 'h-full w-full block'
        renderer.domElement.style.touchAction = 'none'
        root.appendChild(renderer.domElement)

        controls = new OrbitControls(camera, renderer.domElement)
        controls.enableDamping = true
        controls.dampingFactor = 0.07
        controls.autoRotate = true
        controls.autoRotateSpeed = 0.65
        controls.target.set(0, 0, 0)
        controlsRef.current = controls

        spark = new SparkRenderer({
          renderer,
          // Match the classic gsplat viewer's projection and compositing defaults.
          preBlurAmount: 0.3,
          maxStdDev: 3,
          sortRadial: false,
        })
        scene.add(spark)

        const loader = new SplatLoader()
        const loadedSplats = await loader.loadAsync(src, (event) => {
          if (!alive) return
          if (event.lengthComputable && event.total > 0) setProgress(Math.round((event.loaded / event.total) * 100))
        })
        if (!alive) {
          loadedSplats.dispose()
          return
        }

        splats = loadedSplats instanceof PackedSplats
          ? new SplatMesh({ packedSplats: loadedSplats })
          : new SplatMesh({ extSplats: loadedSplats })
        await splats.initialized
        if (!alive) {
          splats.dispose()
          return
        }
        splats.maxSh = 3
        splats.quaternion.set(1, 0, 0, 0)
        scene.add(splats)
        splats.updateMatrixWorld(true)

        const bounds = splats.getBoundingBox(true).applyMatrix4(splats.matrixWorld)
        const center = bounds.getCenter(new THREE.Vector3())
        const size = bounds.getSize(new THREE.Vector3())
        const radius = Math.max(size.length() * 0.5, 0.25)
        const cameraPosition = center.clone().add(new THREE.Vector3(radius * 1.15, -radius * 2.1, radius * 0.9))
        controls.target.copy(center)
        camera.position.copy(cameraPosition)
        camera.near = Math.max(radius / 100, 0.001)
        camera.far = Math.max(radius * 20, 100)
        camera.updateProjectionMatrix()
        controls.update()
        resetPositionRef.current.copy(cameraPosition)
        resetTargetRef.current.copy(center)
        setProgress(100)

        renderer.setAnimationLoop(() => {
          controls?.update()
          renderer?.render(scene, camera)
        })

        resizeObserver = new ResizeObserver(() => {
          if (!renderer || !root.clientWidth || !root.clientHeight) return
          camera.aspect = root.clientWidth / root.clientHeight
          camera.updateProjectionMatrix()
          renderer.setSize(root.clientWidth, root.clientHeight, false)
        })
        resizeObserver.observe(root)
      } catch (error) {
        console.error('Unable to load Gaussian splat scene', error)
        if (alive) onError()
      }
    }

    initialize()
    return () => {
      alive = false
      resizeObserver?.disconnect()
      renderer?.setAnimationLoop(null)
      controls?.dispose()
      splats?.dispose()
      spark?.dispose()
      renderer?.dispose()
      renderer?.domElement.remove()
      controlsRef.current = null
      cameraRef.current = null
    }
  }, [src, onError])

  const reset = () => {
    const camera = cameraRef.current
    const controls = controlsRef.current
    if (!camera || !controls) return
    camera.position.copy(resetPositionRef.current)
    controls.target.copy(resetTargetRef.current)
    controls.update()
  }

  const toggleSpin = () => {
    const controls = controlsRef.current
    if (!controls) return
    controls.autoRotate = !controls.autoRotate
    setIsSpinning(controls.autoRotate)
  }

  return (
    <div ref={containerRef} className="absolute inset-0 touch-none">
      {progress < 100 && (
        <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center bg-[#111] text-white">
          <div className="w-48 text-center">
            <div className="mb-3 h-px overflow-hidden bg-white/20"><div className="h-full bg-white transition-all" style={{ width: `${Math.max(progress, 4)}%` }} /></div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em]">Loading scene{progress > 0 ? ` · ${progress}%` : ''}</p>
          </div>
        </div>
      )}
      <div className="absolute bottom-3 right-3 z-10 flex">
        <button onClick={toggleSpin} className="flex items-center gap-2 border border-white/20 bg-black/65 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white backdrop-blur-sm hover:bg-black" aria-label={isSpinning ? 'Pause automatic rotation' : 'Resume automatic rotation'}>
          {isSpinning ? <Pause size={12} /> : <Play size={12} />} {isSpinning ? 'Pause spin' : 'Start spin'}
        </button>
        <button onClick={reset} className="flex items-center gap-2 border border-l-0 border-white/20 bg-black/65 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-white backdrop-blur-sm hover:bg-black" aria-label="Reset 3D camera"><RotateCcw size={12} /> Reset view</button>
      </div>
    </div>
  )
}
