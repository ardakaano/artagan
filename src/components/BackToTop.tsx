import { useState, useEffect } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline'
import { AnimatePresence, motion } from 'framer-motion'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-40 grid place-items-center w-10 h-10 rounded-full bg-white/[0.08] text-white/60 hover:bg-white hover:text-black transition-colors"
          aria-label="Back to top"
        >
          <ArrowUpIcon className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
