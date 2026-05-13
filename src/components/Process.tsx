import { motion } from 'framer-motion'
import { MagnifyingGlassIcon, PencilSquareIcon, WrenchIcon, SparklesIcon } from '@heroicons/react/24/outline'

const steps = [
  { step: '01', title: 'Discovery', body: 'We listen, survey, and plan.', icon: MagnifyingGlassIcon },
  { step: '02', title: 'Design', body: 'Blueprints, permits, materials.', icon: PencilSquareIcon },
  { step: '03', title: 'Build', body: 'On site, on time, on budget.', icon: WrenchIcon },
  { step: '04', title: 'Deliver', body: 'Inspection, walkthrough, keys.', icon: SparklesIcon },
]

export default function Process() {
  return (
    <section id="process" className="py-32 bg-black">
      <div className="container">
        <p className="text-sm font-medium text-orange-500 tracking-wide">Process</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
          How we work.
        </h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black p-8"
            >
              <span className="text-xs text-white/20 font-mono">{s.step}</span>
              <s.icon className="w-6 h-6 text-white/30 mt-6" />
              <p className="mt-4 text-lg font-semibold text-white">{s.title}</p>
              <p className="mt-2 text-sm text-white/30 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
