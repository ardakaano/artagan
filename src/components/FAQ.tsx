import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  { q: 'What do you build?', a: 'Commercial towers, residential complexes, and historic restorations — at any scale.' },
  { q: 'How long does a project take?', a: 'Typically 12–24 months. We provide a detailed timeline during discovery.' },
  { q: 'Are you licensed and insured?', a: 'Fully. Licensed in all 15 states, with comprehensive liability coverage.' },
  { q: 'What warranty do you provide?', a: '2‑year craftsmanship warranty and 10‑year structural. Extended options available.' },
  { q: 'Do you handle permits?', a: 'Everything. Permits, zoning, environmental — our compliance team manages it all.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 bg-white">
      <div className="container max-w-2xl">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow">FAQ</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 text-section text-ink">Quick answers.</motion.h2>

        <div className="mt-14 divide-y divide-ink/5">
          {faqs.map((f, i) => (
            <div key={i}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full py-5 flex items-center justify-between text-left group">
                <span className={`text-base font-medium transition-colors ${open === i ? 'text-fire' : 'text-ink-muted group-hover:text-ink'}`}>{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-ink/20 text-xl">+</motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <p className="pb-5 text-sm text-ink-muted leading-relaxed">{f.a}</p>
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
