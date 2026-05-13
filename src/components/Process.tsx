import { motion } from 'framer-motion'

const steps = [
  { n: '01', t: 'Discovery', d: 'We study your site, your vision, and your budget. Then we craft a roadmap.' },
  { n: '02', t: 'Design', d: 'Architects and engineers translate your brief into detailed, buildable plans.' },
  { n: '03', t: 'Build', d: 'Expert crews execute with precision. Daily reports keep you informed at every stage.' },
  { n: '04', t: 'Deliver', d: 'Final inspection, walkthrough, keys in hand. We do not leave until it is perfect.' },
]

export default function Process() {
  return (
    <section id="process" className="py-32 bg-dark border-t border-white/[0.04] overflow-hidden">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-bold text-cyan tracking-[0.2em] uppercase"
        >
          Process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-section text-white max-w-2xl"
        >
          How we bring your project to life.
        </motion.h2>

        {/* Desktop: horizontal numbered steps */}
        <div className="mt-20 grid lg:grid-cols-4 gap-px bg-white/[0.04]">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="group bg-dark p-8 sm:p-10 relative overflow-hidden border-hover cursor-default"
            >
              {/* Big number background */}
              <span className="absolute top-4 right-4 text-[6rem] font-black text-white/[0.02] leading-none select-none pointer-events-none" aria-hidden="true">
                {s.n}
              </span>

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-cyan">{s.n}</span>
                  <span className="w-8 h-px bg-cyan/30" aria-hidden="true" />
                </div>
                <p className="mt-8 text-xl font-bold text-white">{s.t}</p>
                <p className="mt-3 text-sm text-white/30 leading-relaxed">{s.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
