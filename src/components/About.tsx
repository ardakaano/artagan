import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-32 bg-dark overflow-hidden border-t border-white/[0.04]">
      {/* Decorative overlay text */}
      <p className="absolute top-0 left-0 text-[clamp(10rem,25vw,22rem)] font-black leading-none text-white/[0.01] select-none pointer-events-none whitespace-nowrap" aria-hidden="true">
        ABOUT
      </p>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — bold text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-cyan tracking-[0.2em] uppercase"
            >
              About us
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-6 text-section text-white"
            >
              Craftsmanship
              <br />
              <span className="text-accent">meets</span> modern
              <br />
              engineering.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="mt-6 text-base text-white/40 leading-relaxed max-w-md"
            >
              We are a team of 150+ engineers and master craftsmen delivering projects
              that define skylines and restore history across 15 states.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="mt-8 flex gap-8"
            >
              {['Licensed in 15 states', 'LEED certified', '10-year structural warranty'].map((t) => (
                <div key={t} className="text-xs text-white/30 uppercase tracking-wider max-w-[8rem] leading-relaxed">
                  {t}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — clipped image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[3/4] clip-diagonal overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt=""
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
              />
            </div>
            {/* Accent square behind image */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan/30 -z-10" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
