import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'What do you build?', a: 'Commercial, residential, and restoration projects of any scale — from office towers to historic landmarks.' },
  { q: 'How long does it take?', a: 'A typical project runs 12–24 months. We provide a detailed timeline during planning.' },
  { q: 'Are you licensed?', a: 'Yes. Fully licensed in all 15 states we operate. Documentation shared at contract.' },
  { q: 'Do you handle permits?', a: 'Everything. Permits, zoning, environmental — our compliance team manages it all.' },
  { q: 'What is the warranty?', a: '2‑year craftsmanship, 10‑year structural. Extended options available.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 bg-black">
      <div className="container max-w-2xl">
        <p className="text-sm font-medium text-orange-500 tracking-wide">FAQ</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Quick answers.
        </h2>

        <div className="mt-12 divide-y divide-white/[0.06]">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-5 flex items-center justify-between text-left"
              >
                <span className="text-base font-medium text-white">{faq.q}</span>
                <span className={`text-white/30 text-lg transition-transform ${open === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm text-white/40 leading-relaxed">{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
