import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { v: '500', s: '+', l: 'Projects' },
  { v: '150', s: '+', l: 'Engineers' },
  { v: '98', s: '%', l: 'Client retention' },
]

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="relative py-24 bg-dark overflow-hidden border-t border-white/[0.04]">
      {/* Decorative huge number */}
      <p className="absolute -top-16 -right-8 big-number text-white/[0.015]" aria-hidden="true">
        25
      </p>

      <div className="container relative">
        <div className="grid grid-cols-3 gap-8 lg:gap-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-baseline gap-1">
                <span className="text-6xl lg:text-7xl font-black text-white tabular-nums">{s.v}</span>
                <span className="text-3xl lg:text-4xl font-black text-accent">{s.s}</span>
              </div>
              <p className="mt-2 text-xs lg:text-sm text-white/30 uppercase tracking-[0.15em] font-semibold">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
