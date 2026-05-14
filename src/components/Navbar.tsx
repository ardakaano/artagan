import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { n: 'Work',    to: 'projects' },
  { n: 'About',   to: 'about' },
  { n: 'Contact', to: 'contact' },
] as const

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const nav = useNavigate()

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', h, { passive: true })
    h()
    return () => window.removeEventListener('scroll', h)
  }, [])

  const go = (id: string) => {
    setOpen(false)
    nav('/')
    setTimeout(() => scrollTo(id), 100)
  }

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-ink/5 shadow-sm' : ''
      }`}
    >
      <nav className="container flex items-center justify-between h-16">
        <a href="/#" className="text-xl font-black tracking-tight text-ink hover:text-fire transition-colors" onClick={(e) => { e.preventDefault(); nav('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          artagan
        </a>

        <div className="hidden sm:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.n}
              onClick={() => go(l.to)}
              className="px-4 py-2 text-sm font-medium text-ink-muted hover:text-ink transition-colors cursor-pointer"
            >
              {l.n}
            </button>
          ))}
          <span className="w-px h-4 bg-ink/10 mx-2" aria-hidden="true" />
          <button
            onClick={() => go('contact')}
            className="ml-2 px-5 py-2.5 text-sm font-bold bg-ink text-white hover:bg-fire transition-colors cursor-pointer"
          >
            Hire us →
          </button>
        </div>

        <button className="sm:hidden p-2" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'}>
          <div className="flex flex-col gap-1.5">
            <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 6.5 : 0 }} className="block w-6 h-[2px] bg-ink" />
            <motion.span animate={{ opacity: open ? 0 : 1 }} className="block w-6 h-[2px] bg-ink" />
            <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -6.5 : 0 }} className="block w-6 h-[2px] bg-ink" />
          </div>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="sm:hidden overflow-hidden bg-white border-b border-ink/5">
            <div className="container py-8 space-y-2">
              {links.map((l) => (
                <button key={l.n} onClick={() => go(l.to)} className="block w-full text-left py-3 text-lg font-medium text-ink-muted hover:text-ink transition-colors cursor-pointer">
                  {l.n}
                </button>
              ))}
              <button onClick={() => go('contact')} className="block w-full mt-4 text-center py-3 font-bold bg-ink text-white hover:bg-fire transition-colors cursor-pointer">
                Hire us →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
