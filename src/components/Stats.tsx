import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const stats = [
  { end: 500, suffix: '+', label: 'Projects' },
  { end: 25, suffix: '+', label: 'Years' },
  { end: 150, suffix: '+', label: 'Engineers' },
]

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section ref={ref} className="py-24 bg-black border-t border-b border-white/[0.06]">
      <div className="container">
        <div className="grid grid-cols-3 gap-8 max-w-2xl">
          {stats.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="text-5xl sm:text-6xl font-bold text-white tabular-nums">
                {s.end.toLocaleString()}
                {s.suffix}
              </p>
              <p className="mt-2 text-sm text-white/30">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
