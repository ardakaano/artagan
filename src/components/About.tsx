import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-32 bg-warm-50 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left text */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="eyebrow"
            >
              About us
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-6 text-section text-ink"
            >
              Craftsmanship
              <br />
              <span className="text-fire">meets</span>{' '}
              <span className="text-ocean">modern</span>
              <br />
              engineering.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 }}
              className="mt-6 text-lead text-ink-muted max-w-md leading-relaxed"
            >
              We are 150+ engineers and master craftsmen delivering
              projects that define skylines and restore history across
              15 states.
            </motion.p>

            {/* Feature list */}
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-10 space-y-4"
            >
              {[
                'Licensed and insured in 15 states',
                'LEED certified sustainable building',
                '10-year structural warranty on every project',
                'Zero lost-time incidents in 3 years',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-ink-muted">
                  <span className="grid place-items-center w-5 h-5 rounded-full bg-fire/10 text-fire text-[10px] font-bold">&#10003;</span>
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="relative"
          >
            <div className="aspect-[3/4] clip-diagonal overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent block behind */}
            <div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-electric/40 -z-10"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
