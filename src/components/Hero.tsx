import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const stats = [
  { value: '500+', label: 'Projects' },
  { value: '25y', label: 'Experience' },
  { value: '15', label: 'States' },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-black text-white overflow-hidden">
      {/* Subtle grain overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.03]" aria-hidden="true" />

      {/* Subtle radial glow */}
      <div
        aria-hidden="true"
        className="absolute -top-40 right-0 w-[600px] h-[600px] rounded-full bg-orange-600/10 blur-[150px]"
      />

      <div className="container relative">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm font-medium text-orange-500 mb-8 tracking-wide">
              Construction & masonry
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight"
          >
            We build what<br />others can&rsquo;t.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-xl text-lg text-white/40 leading-relaxed"
          >
            Commercial, residential, restoration. Craftsmanship backed by engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex items-center gap-6"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-orange-500 hover:text-white transition-colors duration-200"
            >
              View work
              <ArrowRightIcon className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-white/50 hover:text-white transition-colors"
            >
              Get in touch &rarr;
            </a>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-32 flex gap-16"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-bold text-white">{s.value}</p>
              <p className="mt-1 text-sm text-white/30">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
