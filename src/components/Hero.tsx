import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-warm-50 overflow-hidden flex items-center">
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-dots-light bg-dots" aria-hidden="true" />

      {/* Oversized decorative text — Paula Scher signature */}
      <p className="absolute top-4 -left-4 select-none pointer-events-none text-[clamp(6rem,15vw,14rem)] font-black leading-none text-warm-200 tracking-tighter whitespace-nowrap" aria-hidden="true">
        BUILD
      </p>

      {/* Diagonal top-right accent */}
      <div className="absolute top-0 right-0 w-[35vw] h-2 bg-fire origin-right -skew-x-12" aria-hidden="true" />
      {/* Diagonal bottom-left accent */}
      <div className="absolute bottom-0 left-0 w-[30vw] h-2 bg-ocean origin-left -skew-x-12" aria-hidden="true" />

      <div className="container relative pt-32 pb-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="eyebrow">Construction &amp; masonry</p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 text-hero text-ink max-w-4xl"
          >
            We build{' '}
            <span className="relative inline-block">
              what others
              <span className="absolute -top-1 -right-2 text-fire text-[clamp(1.5rem,3vw,3rem)]" aria-hidden="true">*</span>
            </span>
            <br />
            <span className="text-fire">can&rsquo;t.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 max-w-lg text-lead text-ink-muted"
          >
            Commercial towers, residential complexes, and historic restorations.
            Since 2000, we have delivered over 500 projects across 15 states.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-ink text-white font-bold text-sm hover:bg-fire transition-colors"
            >
              View our work <span aria-hidden="true">&nearr;</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-ink text-ink font-bold text-sm hover:bg-ink hover:text-white transition-all"
            >
              Start a project <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.75 }}
            className="mt-24 flex flex-wrap gap-x-16 gap-y-6"
          >
            {[
              { v: '500+', l: 'Projects delivered' },
              { v: '25y', l: 'In business' },
              { v: '98%', l: 'Client retention' },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-4xl font-black text-ink">{s.v}</p>
                <p className="mt-1 text-xs font-semibold text-ink-faint uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
