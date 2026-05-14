import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { v: '500', s: '+', l: 'Projects' },
  { v: '150', s: '+', l: 'Engineers' },
  { v: '98', s: '%', l: 'Retention' },
]

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="py-24 bg-white border-y border-ink/5">
      <div className="container">
        <div className="grid grid-cols-3 gap-8 lg:gap-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-baseline gap-0.5">
                <span className="text-6xl lg:text-7xl font-black text-ink tabular-nums">{s.v}</span>
                <span className="text-3xl lg:text-4xl font-black text-fire">{s.s}</span>
              </div>
              <p className="mt-2 text-xs font-semibold text-ink-faint uppercase tracking-[0.15em]">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
