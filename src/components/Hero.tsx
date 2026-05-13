import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-dark overflow-hidden flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-dots bg-dots" aria-hidden="true" />

      {/* Big decorative "BUILD" text */}
      <motion.p
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-8 -left-8 select-none pointer-events-none text-[clamp(8rem,20vw,16rem)] font-black leading-none text-white/[0.015] tracking-tighter whitespace-nowrap"
        aria-hidden="true"
      >
        BUILD
      </motion.p>

      {/* Diagonal accent bar */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="absolute top-0 right-0 w-[30vw] h-2 bg-accent origin-right -skew-x-20"
        aria-hidden="true"
      />

      {/* Bottom diagonal bar in cyan */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute bottom-0 left-0 w-[40vw] h-2 bg-cyan origin-left -skew-x-20"
        aria-hidden="true"
      />

      {/* Small squares decoration */}
      <div className="absolute top-32 right-16 lg:right-32 flex gap-3" aria-hidden="true">
        {['bg-accent', 'bg-cyan', 'bg-electric', 'bg-white/10'].map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, rotate: 45, scale: 0 }}
            animate={{ opacity: 1, rotate: 45, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
            className={`w-5 h-5 ${c}`}
          />
        ))}
      </div>

      <div className="container relative z-10 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <p className="inline-flex items-center gap-3 text-sm font-semibold text-accent tracking-[0.2em] uppercase">
              <span className="w-8 h-px bg-accent" />
              Construction & masonry
            </p>
          </motion.div>

          {/* Main headline — Paula Scher energy */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 text-hero text-white"
          >
            We build<br />
            <span className="relative">
              <span className="relative z-10">what others</span>
              <span className="absolute -inset-1 -bottom-1 bg-accent/30 -skew-x-2 -z-0" aria-hidden="true" />
            </span>
            {' '}<span className="text-accent">can&rsquo;t.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-6 max-w-lg text-hero-sub text-white/40"
          >
            Commercial. Residential. Restoration. Since 2000.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-none bg-accent text-black font-bold text-sm hover:bg-accent-400 transition-colors"
            >
              View our work
              <span className="text-lg">&nearr;</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-none border border-white/20 text-white font-semibold text-sm hover:bg-white/5 hover:border-accent/50 transition-all"
            >
              Start a project
              <span className="text-lg">&rarr;</span>
            </a>
          </motion.div>

          {/* Big stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.85 }}
            className="mt-24 flex flex-wrap gap-12 lg:gap-20"
          >
            {[
              { v: '500+', l: 'Projects completed' },
              { v: '25y', l: 'In business' },
              { v: '15', l: 'States served' },
            ].map((s) => (
              <div key={s.l}>
                <p className="text-4xl lg:text-5xl font-black text-white">{s.v}</p>
                <p className="mt-1 text-xs text-white/30 uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
