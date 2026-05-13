import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.06]' : ''
      }`}
    >
      <nav className="container flex items-center justify-between h-16" aria-label="Global">
        <a href="#" className="text-lg font-bold tracking-tight text-white">
          artagan
        </a>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              {l.name}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm font-medium px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            Start a project
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="sm:hidden flex flex-col gap-1 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
            className="block w-5 h-px bg-white"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            className="block w-5 h-px bg-white"
          />
          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
            className="block w-5 h-px bg-white"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden overflow-hidden bg-black border-b border-white/[0.06]"
          >
            <div className="container py-6 space-y-4">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-lg text-white/50 hover:text-white transition-colors"
                >
                  {l.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-4 py-3 rounded-full bg-white/10 text-white text-sm font-medium"
              >
                Start a project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
