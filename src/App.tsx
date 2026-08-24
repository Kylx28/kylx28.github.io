import { AnimatePresence, motion } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'
import { CVPage } from './pages/CVPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { InterestsPage } from './pages/InterestsPage'

function App() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-white pb-16 sm:pb-0">
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.22, ease: 'easeOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:slug" element={<ProjectPage />} />
            <Route path="/cv" element={<CVPage />} />
            <Route path="/interests" element={<InterestsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

export default App
