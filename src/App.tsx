import { useState, useEffect, useRef } from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Lenis from 'lenis'
import { Plus, ArrowUp } from 'lucide-react'
import CustomCursor from './components/CustomCursor'
import NavigationOverlay from './components/NavigationOverlay'
import Footer from './components/Footer'
import './App.css'
import Logo from './assets/Logo.png'

import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetail from './pages/ProjectDetail'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [nearFooter, setNearFooter] = useState(false)
  const [showBackTop, setShowBackTop] = useState(false)
  const footerRef = useRef<HTMLElement>(null)
  const location = useLocation()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  // Track scroll for glass fade + back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const pageH = document.body.scrollHeight
      const winH = window.innerHeight

      // Show back-to-top after scrolling 400px
      setShowBackTop(scrollY > 400)

      // Hide glass strip near footer (last 300px of page)
      setNearFooter(scrollY + winH > pageH - 300)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      {/* Dezyne-style bottom glass fade — hidden near footer */}
      <motion.div
        className="glass-bottom-strip"
        animate={{ opacity: nearFooter ? 0 : 1 }}
        transition={{ duration: 0.4 }}
      />

      {/* Back to top button */}
      <AnimatePresence>
        {showBackTop && (
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            aria-label="Back to top"
          >
            <ArrowUp size={18} strokeWidth={2} />
          </motion.button>
        )}
      </AnimatePresence>

      <CustomCursor />

      {/* Main Content Area */}
      <main className="main-content" ref={footerRef}>
        <header className="header">
          <Link to="/" className="logo">
            <img src={Logo} alt="DZ" className="site-logo" />
          </Link>
          <button 
            className="menu-toggle" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <Plus size={28} strokeWidth={1.5} />
          </button>
        </header>

        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>

        <Footer />
        <NavigationOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </main>
    </div>
  )
}

export default App
