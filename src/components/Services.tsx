import { motion } from 'framer-motion'
import {
  BuildingOffice2Icon as Commercial,
  WrenchScrewdriverIcon as Restoration,
  HomeModernIcon as Residential,
  LightBulbIcon as Consulting,
} from '@heroicons/react/24/solid'

const services = [
  { name: 'Commercial', icon: Commercial, color: 'bg-accent', description: 'Office towers, retail, industrial facilities.' },
  { name: 'Restoration', icon: Restoration, color: 'bg-cyan', description: 'Historic preservation, seismic retrofitting.' },
  { name: 'Residential', icon: Residential, color: 'bg-electric', description: 'Custom homes, luxury residences, multi-family.' },
  { name: 'Consulting', icon: Consulting, color: 'bg-white/10', description: 'Feasibility, budget, project management.' },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-dark border-t border-white/[0.04]">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm font-bold text-accent tracking-[0.2em] uppercase"
            >
              Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-4 text-section text-white"
            >
              What we do
              <br />
              <span className="text-white/20">best.</span>
            </motion.h2>
          </div>
          <a
            href="#contact"
            className="text-sm font-bold text-white/30 hover:text-cyan transition-colors"
          >
            Discuss your project &rarr;
          </a>
        </div>

        {/* Service cards — 2x2 grid */}
        <div className="mt-16 grid sm:grid-cols-2 gap-[1px] bg-white/[0.04]">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-dark p-8 sm:p-12 border-hover cursor-default"
            >
              <div className="flex items-start justify-between">
                <div className={`grid place-items-center w-14 h-14 ${s.color} text-black`}>
                  <s.icon className="w-7 h-7" />
                </div>
                <span className="text-[10px] font-mono text-white/15">0{i + 1}</span>
              </div>
              <p className="mt-8 text-2xl font-bold text-white group-hover:text-accent transition-colors">
                {s.name}
              </p>
              <p className="mt-3 text-sm text-white/30 group-hover:text-white/50 transition-colors leading-relaxed">
                {s.description}
              </p>
              <p className="mt-6 text-xs font-bold text-white/15 uppercase tracking-[0.15em] group-hover:text-white/40 transition-colors">
                Learn more &rarr;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
