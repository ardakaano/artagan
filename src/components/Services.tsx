import { motion } from 'framer-motion'
import { BuildingOffice2Icon, WrenchScrewdriverIcon, HomeModernIcon, LightBulbIcon } from '@heroicons/react/24/outline'

const services = [
  { n: 'Commercial', i: BuildingOffice2Icon, bg: 'bg-fire-50 text-fire', d: 'Office towers, retail spaces, and industrial facilities. Built to scale.' },
  { n: 'Restoration', i: WrenchScrewdriverIcon, bg: 'bg-ocean/10 text-ocean', d: 'Historic preservation, seismic retrofitting, and facade renewal.' },
  { n: 'Residential', i: HomeModernIcon, bg: 'bg-electric/30 text-ink', d: 'Custom homes, luxury residences, and multi-family developments.' },
  { n: 'Consulting', i: LightBulbIcon, bg: 'bg-ink text-white', d: 'Feasibility studies, budget planning, and full project management.' },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
          <div>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow">Services</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 text-section text-ink">What we do<br /><span className="text-ink/15">best.</span></motion.h2>
          </div>
          <a href="#contact" className="text-sm font-bold text-ink-muted hover:text-fire transition-colors">Get a quote &rarr;</a>
        </div>
        <div className="mt-16 grid sm:grid-cols-2 gap-px bg-ink/5">
          {services.map((s, i) => (
            <motion.div key={s.n} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group bg-white p-8 sm:p-10 hover:bg-warm-50 transition-colors cursor-default">
              <div className="flex items-start justify-between">
                <div className={`grid place-items-center w-12 h-12 ${s.bg}`}><s.i className="w-6 h-6" /></div>
                <span className="text-[10px] font-mono text-ink/10">0{i + 1}</span>
              </div>
              <p className="mt-8 text-xl font-bold text-ink">{s.n}</p>
              <p className="mt-3 text-sm text-ink-muted leading-relaxed">{s.d}</p>
              <p className="mt-5 text-xs font-bold text-ink/15 uppercase tracking-[0.15em] group-hover:text-fire transition-colors">Learn more &rarr;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
