import { motion } from 'framer-motion'
import { BuildingOffice2Icon, WrenchScrewdriverIcon, HomeModernIcon, LightBulbIcon } from '@heroicons/react/24/outline'

const services = [
  { name: 'Commercial', icon: BuildingOffice2Icon },
  { name: 'Restoration', icon: WrenchScrewdriverIcon },
  { name: 'Residential', icon: HomeModernIcon },
  { name: 'Consulting', icon: LightBulbIcon },
]

export default function Services() {
  return (
    <section id="services" className="py-32 bg-black border-t border-white/[0.06]">
      <div className="container">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-sm font-medium text-orange-500 tracking-wide">Services</p>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
              What we do.
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden sm:inline-block text-sm font-medium text-white/40 hover:text-white transition-colors"
          >
            Get a quote &rarr;
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group bg-black p-8 sm:p-10 hover:bg-white/[0.02] transition-colors duration-300"
            >
              <s.icon className="w-7 h-7 text-white/30 group-hover:text-orange-500 transition-colors" />
              <p className="mt-6 text-lg font-semibold text-white">{s.name}</p>
              <p className="mt-2 text-sm text-white/30 group-hover:text-white/50 transition-colors">
                Learn more &rarr;
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
