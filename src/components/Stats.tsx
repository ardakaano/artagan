import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import AnimatedCounter from './AnimatedCounter'

const stats = [
  { end: 500, suffix: '+', label: 'Projects Delivered', description: 'Commercial, residential & restoration' },
  { end: 25, suffix: '+', label: 'Years of Experience', description: 'Since our founding in 2000' },
  { end: 150, suffix: '+', label: 'Expert Engineers', description: 'Licensed professionals on staff' },
  { end: 15, label: 'States Served', description: 'Coast-to-coast operations' },
]

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <section ref={ref} className="relative py-16 sm:py-24 bg-primary-900 overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" aria-hidden="true" />

      {/* Glow left */}
      <div
        aria-hidden="true"
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-accent/10 blur-[120px]"
      />

      <div className="container relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left lg:border-l lg:border-white/10 lg:pl-6 first:border-0 first:pl-0"
            >
              <p className="font-display text-4xl lg:text-5xl font-bold text-white">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm font-semibold text-white uppercase tracking-wider">{stat.label}</p>
              <p className="mt-1 text-xs text-white/50">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
