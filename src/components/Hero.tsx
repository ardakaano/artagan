import { motion } from 'framer-motion'
import { ArrowRightIcon, PlayCircleIcon, StarIcon } from '@heroicons/react/24/solid'

const heroStats = [
  { value: '25+',  label: 'Years of Experience' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%',  label: 'Client Satisfaction' },
]

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-primary-900 text-white min-h-screen flex items-center pt-24 pb-16">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80"
          alt=""
          className="h-full w-full object-cover opacity-30"
          loading="eager"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary-900 via-primary-900/95 to-primary-950" />

      {/* Grid pattern */}
      <div className="absolute inset-0 -z-10 bg-grid-pattern bg-grid opacity-30 mask-fade-bottom" aria-hidden="true" />

      {/* Glow */}
      <div
        aria-hidden="true"
        className="absolute -top-32 right-0 -z-10 h-[500px] w-[500px] rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-32 -z-10 h-[400px] w-[400px] rounded-full bg-accent-700/20 blur-[100px]"
      />

      <div className="container relative w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: text */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-inset ring-white/15 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur"
            >
              <span className="flex h-2 w-2 rounded-full bg-accent shadow-glow" />
              Trusted by 500+ clients nationwide
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 font-display text-display-2xl font-bold leading-[1.05] tracking-tight text-balance"
            >
              Built to{' '}
              <span className="relative inline-block">
                <span className="relative z-10 gradient-text">endure.</span>
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                >
                  <path d="M2 9 Q 75 1, 150 6 T 298 4" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>{' '}
              <br className="hidden sm:block" />
              Crafted to inspire.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-white/70"
            >
              Heritage masonry meets modern engineering. We design and build commercial, residential and
              restoration projects with the precision of master craftsmen and the standards of today.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a href="#contact" className="btn btn-accent btn-lg group">
                Start your project
                <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="btn btn-lg bg-white/5 text-white ring-1 ring-inset ring-white/20 hover:bg-white/10 backdrop-blur"
              >
                <PlayCircleIcon className="w-5 h-5 text-accent" />
                View our work
              </a>
            </motion.div>

            {/* Trust row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex -space-x-2">
                {[
                  'https://i.pravatar.cc/64?img=12',
                  'https://i.pravatar.cc/64?img=32',
                  'https://i.pravatar.cc/64?img=47',
                  'https://i.pravatar.cc/64?img=68',
                ].map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="w-9 h-9 rounded-full ring-2 ring-primary-900 object-cover"
                    loading="lazy"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-accent" />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-white">4.9/5</span>
                </div>
                <p className="text-xs text-white/60 mt-0.5">from 200+ verified reviews</p>
              </div>
            </motion.div>
          </div>

          {/* Right: floating stat cards / image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Master mason at work"
                className="absolute inset-0 h-full w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-primary-950/30 to-transparent" />

              {/* Floating badge top */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-6 left-6 right-6"
              >
                <div className="glass rounded-2xl p-4 flex items-center gap-3">
                  <div className="grid place-items-center w-10 h-10 rounded-xl bg-accent text-primary-900">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-primary-900">LEED Certified</p>
                    <p className="text-xs text-primary-700">Sustainable building partner</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating stat bottom */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="rounded-2xl bg-primary-900/80 backdrop-blur ring-1 ring-white/10 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-white/60 uppercase tracking-wider">Currently building</p>
                      <p className="text-lg font-bold text-white mt-1">Riverside Tower</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent/20 text-accent">
                      Live
                    </span>
                  </div>
                  <div className="mt-3 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '72%' }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-full bg-accent rounded-full"
                    />
                  </div>
                  <p className="text-xs text-white/60 mt-2">72% complete · 12 floors / 16</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-16 lg:mt-24 grid grid-cols-3 gap-6 lg:gap-12 max-w-3xl"
        >
          {heroStats.map((stat) => (
            <div key={stat.label} className="border-l border-white/15 pl-4 lg:pl-6">
              <p className="font-display text-3xl lg:text-5xl font-bold text-white">{stat.value}</p>
              <p className="mt-1 text-xs lg:text-sm text-white/60 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        aria-label="Scroll to about"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-white/40 hover:text-accent transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <span className="block w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.a>
    </section>
  )
}
