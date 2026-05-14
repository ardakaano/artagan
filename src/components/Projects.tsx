import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'

const filters = ['All', 'Commercial', 'Restoration', 'Residential']

// These slugs get taller aspect ratio
const tallSlugs = new Set(['riverside-tower', 'old-bank'])

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-32 bg-white">
      <div className="container">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow">Portfolio</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 text-section text-ink max-w-2xl">Selected work<br /><span className="text-ink/15">we are proud of.</span></motion.h2>

        <div className="mt-10 flex flex-wrap gap-1">
          {filters.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition-all ${filter === f ? 'bg-fire text-white' : 'text-ink-faint hover:text-ink hover:bg-warm-100'}`}>
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-1 sm:columns-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div key={p.slug} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.35 }}>
                <Link
                  to={`/project/${p.slug}`}
                  className={`break-inside-avoid mb-4 group relative overflow-hidden block ${
                    tallSlugs.has(p.slug) ? 'aspect-[3/4]' : 'aspect-[4/3]'
                  }`}
                >
                  <img src={p.thumbnail} alt={p.title} className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-[10px] font-bold text-fire uppercase tracking-[0.15em]">{p.category}</span>
                    <p className="mt-1 text-lg font-bold text-white">{p.title}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-14 sm:text-center flex flex-col sm:flex-row justify-center">
          <Link to="/#contact" className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-8 py-4 border-2 border-ink text-ink font-bold text-sm hover:bg-ink hover:text-white transition-all">
            Start your project <span aria-hidden="true">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
