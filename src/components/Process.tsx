import { motion } from 'framer-motion'

const steps = [
  { n: '01', t: 'Discovery', d: 'We study your site, vision, and budget. Then we craft a clear roadmap together.' },
  { n: '02', t: 'Design', d: 'Architects and engineers produce detailed, buildable plans — permits included.' },
  { n: '03', t: 'Build', d: 'Expert crews execute on site. Daily reports keep you informed at every stage.' },
  { n: '04', t: 'Deliver', d: 'Final inspection, walkthrough, keys in hand. We stay until it is perfect.' },
]

export default function Process() {
  return (
    <section id="process" className="py-32 bg-warm-50 overflow-hidden">
      <div className="container">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow">Process</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 text-section text-ink max-w-2xl">How we bring your project to life.</motion.h2>

        {/* Desktop: horizontal steps */}
        <div className="hidden lg:grid mt-20 grid-cols-4 gap-px bg-ink/5">
          {steps.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group bg-warm-50 p-8 sm:p-10 hover:bg-white transition-colors cursor-default relative overflow-hidden">
              <span className="absolute top-4 right-4 text-[6rem] font-black text-ink/[0.02] leading-none select-none pointer-events-none" aria-hidden="true">{s.n}</span>
              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-fire">{s.n}</span>
                  <span className="w-8 h-px bg-fire/30" aria-hidden="true" />
                </div>
                <p className="mt-8 text-xl font-bold text-ink">{s.t}</p>
                <p className="mt-3 text-sm text-ink-muted leading-relaxed">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical steps */}
        <div className="lg:hidden mt-14 space-y-0">
          {steps.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative pl-14 pb-12 last:pb-0">
              <div className="absolute left-5 top-8 bottom-0 w-px bg-ink/10 last:hidden" aria-hidden="true" />
              <div className="absolute left-2 top-0 grid place-items-center w-7 h-7 bg-ink text-white text-[10px] font-bold">{i + 1}</div>
              <p className="text-lg font-bold text-ink">{s.t}</p>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
