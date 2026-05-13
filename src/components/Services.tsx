import { motion } from 'framer-motion'
import {
  BuildingOffice2Icon,
  WrenchScrewdriverIcon,
  HomeModernIcon,
  PresentationChartLineIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'
import Reveal from './Reveal'

const services = [
  {
    name: 'Commercial Construction',
    description:
      'Expert construction services for commercial buildings, offices, and retail spaces with a focus on durability and functionality.',
    icon: BuildingOffice2Icon,
    features: ['Design-Build', 'Tenant improvements', 'Ground-up construction', 'Steel & concrete structures'],
  },
  {
    name: 'Renovation & Restoration',
    description:
      'Specialized restoration services for historic buildings and modern renovation projects that preserve architectural integrity.',
    icon: WrenchScrewdriverIcon,
    features: ['Historic preservation', 'Seismic retrofitting', 'Facade restoration', 'Interior remodeling'],
  },
  {
    name: 'Residential Projects',
    description:
      'Custom home construction and residential developments that combine traditional craftsmanship with modern living standards.',
    icon: HomeModernIcon,
    features: ['Custom homes', 'Multi-family units', 'Luxury residences', 'Smart home integration'],
  },
  {
    name: 'Project Consultation',
    description:
      'Professional consultation services for construction projects, including planning, budgeting, and project management.',
    icon: PresentationChartLineIcon,
    features: ['Feasibility studies', 'Budget planning', 'Timeline management', 'Regulatory compliance'],
  },
]

export default function Services() {
  return (
    <section id="services" className="section bg-primary-50">
      <div className="container">
        <Reveal className="text-center">
          <p className="eyebrow mx-auto text-center">What we do</p>
          <h2 className="section-title mt-4 mx-auto">Comprehensive construction services</h2>
          <p className="section-subtitle mt-6 mx-auto">
            From skyscrapers to historic restorations — we bring the right people, tools, and experience to every
            project.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, idx) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="card card-hover p-6 flex flex-col group"
            >
              <div className="grid place-items-center w-12 h-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-primary-900 transition-colors duration-300">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-5 text-lg font-semibold text-primary-900">{service.name}</p>
              <p className="mt-2 text-sm leading-relaxed text-primary-600 flex-1">{service.description}</p>

              {/* Features */}
              <ul className="mt-4 space-y-2 border-t border-primary-100 pt-4">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-primary-700">
                    <CheckCircleIcon className="h-4 w-4 text-accent flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <p className="mt-5">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-accent-700 transition-colors"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
