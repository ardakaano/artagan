import { motion } from 'framer-motion'
import { MagnifyingGlassIcon, PencilSquareIcon, WrenchIcon, HandThumbUpIcon } from '@heroicons/react/24/outline'
import Reveal from './Reveal'

const steps = [
  {
    step: '01',
    title: 'Discovery & Planning',
    description:
      'We learn about your vision, assess the site, and craft a roadmap. Feasibility studies, budgets, and timelines are finalized together.',
    icon: MagnifyingGlassIcon,
  },
  {
    step: '02',
    title: 'Design & Engineering',
    description:
      'Our architects and engineers translate your brief into detailed blueprints. We handle permits, regulations, and material selection.',
    icon: PencilSquareIcon,
  },
  {
    step: '03',
    title: 'Construction',
    description:
      'Skilled crews bring the plan to life. Daily progress reports, safety protocols, and rigorous quality checks keep everything on track.',
    icon: WrenchIcon,
  },
  {
    step: '04',
    title: 'Handover & Support',
    description:
      'Final inspection, a detailed walkthrough, and keys in your hand. We stand behind our work with a lifetime structural warranty.',
    icon: HandThumbUpIcon,
  },
]

export default function Process() {
  return (
    <section id="process" className="section bg-white">
      <div className="container">
        <Reveal className="text-center">
          <p className="eyebrow mx-auto text-center">How we work</p>
          <h2 className="section-title mt-4 mx-auto">From blueprint to building</h2>
          <p className="section-subtitle mt-6 mx-auto">
            A transparent, four-step process that takes the guesswork out of construction and keeps you informed
            every step of the way.
          </p>
        </Reveal>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block mt-20">
          <div className="relative grid grid-cols-4 gap-6">
            {/* Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-primary-200 z-0" aria-hidden="true" />

            {steps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -4 }}
                className="relative z-10 flex flex-col items-center text-center px-4"
              >
                {/* Circle */}
                <div className="grid place-items-center w-12 h-12 rounded-full bg-primary-900 text-accent font-display text-lg font-bold mb-6 ring-4 ring-white">
                  {idx + 1}
                </div>
                <step.icon className="h-8 w-8 text-accent mb-4" />
                <p className="font-display text-lg font-bold text-primary-900">{step.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-primary-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile / tablet: vertical timeline */}
        <div className="lg:hidden mt-14 space-y-0">
          {steps.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-14 pb-12 last:pb-0"
            >
              {/* Vertical line */}
              <div className="absolute left-5 top-8 bottom-0 w-px bg-primary-200 last:hidden" aria-hidden="true" />
              {/* Circle */}
              <div className="absolute left-2 top-0 grid place-items-center w-7 h-7 rounded-full bg-primary-900 text-accent text-xs font-bold">
                {idx + 1}
              </div>
              <div className="flex items-center gap-3 mb-2">
                <step.icon className="h-5 w-5 text-accent" />
                <p className="font-display text-lg font-bold text-primary-900">{step.title}</p>
              </div>
              <p className="text-sm leading-relaxed text-primary-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
