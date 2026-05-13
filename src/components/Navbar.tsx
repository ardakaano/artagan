import { useState, useEffect } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

const navigation = [
  { name: 'About',        href: '#about',        id: 'about' },
  { name: 'Services',     href: '#services',     id: 'services' },
  { name: 'Process',      href: '#process',      id: 'process' },
  { name: 'Projects',     href: '#projects',     id: 'projects' },
  { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { name: 'FAQ',          href: '#faq',          id: 'faq' },
  { name: 'Contact',      href: '#contact',      id: 'contact' },
]

function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <a href="#" className="group flex items-center gap-2.5 -m-1.5 p-1.5">
      <span className="grid place-items-center w-9 h-9 rounded-lg bg-primary-900 text-accent group-hover:bg-accent group-hover:text-primary-900 transition-colors duration-300">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
          <path d="M3 8h6v4H3zM10 8h6v4h-6zM17 8h4v4h-4zM3 13h4v4H3zM8 13h7v4H8zM16 13h5v4h-5z" />
        </svg>
      </span>
      <span className={`font-display text-xl font-bold tracking-tight ${dark ? 'text-white' : 'text-primary-900'}`}>
        Masonic
      </span>
    </a>
  )
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState<string>('')

  // Scroll spy + scrolled state
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navigation.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[]
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/85 backdrop-blur-xl border-b border-primary-200/50 shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="container flex items-center justify-between py-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Logo />
        </div>

        {/* Mobile burger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary-900"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex lg:gap-x-1">
          {navigation.map((item) => {
            const isActive = activeId === item.id
            return (
              <a
                key={item.name}
                href={item.href}
                className={`relative px-3 py-2 text-sm font-semibold leading-6 rounded-full transition-colors duration-200 ${
                  isActive ? 'text-primary-900' : 'text-primary-600 hover:text-primary-900'
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-primary-100"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-3">
          <a href="tel:+15551234567" className="text-sm font-semibold text-primary-700 hover:text-primary-900 transition-colors">
            +1 (555) 123-4567
          </a>
          <a href="#contact" className="btn btn-accent">
            Get a Quote
          </a>
        </div>
      </nav>

      {/* Mobile dialog */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50 bg-primary-900/40 backdrop-blur-sm" />
        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm shadow-2xl">
              <motion.div
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-primary-900"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-primary-200/50">
                  <div className="space-y-1 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-3 text-base font-semibold leading-7 text-primary-900 hover:bg-primary-100"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6 space-y-3">
                    <a
                      href="tel:+15551234567"
                      className="block w-full text-center text-sm font-semibold text-primary-700"
                    >
                      +1 (555) 123-4567
                    </a>
                    <a
                      href="#contact"
                      className="btn btn-accent w-full"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
              </div>
              </motion.div>
            </Dialog.Panel>
          )}
        </AnimatePresence>
      </Dialog>
    </motion.header>
  )
}
