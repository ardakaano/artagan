import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = ['Work', 'About', 'Contact'] as const

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', h, { passive: true })
    h()
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/90 backdrop-blur-xl border-b border-white/[0.05]' : ''
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        {/* Logo — bold, no decoration */}
        <a href="#" className="font-black text-xl tracking-tight text-white hover:text-accent transition-colors">
          artagan
        </a>

        {/* Desktop links */}
        <div className="hidden sm:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="px-4 py-2 text-sm font-medium text-white/40 hover:text-white transition-colors"
            >
              {l}
            </a>
          ))}
          <span className="w-px h-4 bg-white/10 mx-2" aria-hidden="true" />
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-bold bg-white text-black hover:bg-accent hover:text-white transition-colors"
          >
            Hire us &rarr;
          </a>
        </div>

        {/* Mobile burger */}
        <button className="sm:hidden p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <div className="flex flex-col gap-1.5">
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6.5 : 0 }} className="block w-6 h-[2px] bg-white" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="block w-6 h-[2px] bg-white" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6.5 : 0 }} className="block w-6 h-[2px] bg-white" />
          </div>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="sm:hidden overflow-hidden bg-dark border-b border-white/[0.05]"
          >
            <div className="container py-8 space-y-2">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-lg font-medium text-white/50 hover:text-white transition-colors"
                >
                  {l}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block mt-4 text-center py-3 font-bold bg-white text-black hover:bg-accent hover:text-white transition-colors"
              >
                Hire us &rarr;
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
