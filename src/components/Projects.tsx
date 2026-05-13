import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  { title: 'Riverside Tower', cat: 'Commercial', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', tall: true },
  { title: 'Heritage Library', cat: 'Restoration', img: 'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', tall: false },
  { title: 'The Arc Residences', cat: 'Residential', img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', tall: false },
  { title: 'Pacific Mall', cat: 'Commercial', img: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', tall: false },
  { title: 'Old Bank', cat: 'Restoration', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', tall: true },
  { title: 'Eco Campus', cat: 'Residential', img: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', tall: false },
]

const filters = ['All', 'Commercial', 'Restoration', 'Residential']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.cat === filter)

  return (
    <section id="projects" className="py-32 bg-dark border-t border-white/[0.04]">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-bold text-electric tracking-[0.2em] uppercase"
        >
          Portfolio
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-section text-white max-w-2xl"
        >
          Selected work
          <br />
          <span className="text-white/15">that we are proud of.</span>
        </motion.h2>

        {/* Filter pills */}
        <div className="mt-10 flex flex-wrap gap-1">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] transition-all ${
                filter === f
                  ? 'bg-accent text-black'
                  : 'text-white/30 hover:text-white hover:bg-white/[0.03]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <div className="mt-12 columns-1 sm:columns-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className={`break-inside-avoid mb-4 group relative overflow-hidden ${p.tall ? 'aspect-[3/4]' : 'aspect-[4/3]'}`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-bold text-accent uppercase tracking-[0.15em]">
                    {p.cat}
                  </span>
                  <p className="mt-1 text-lg font-bold text-white">{p.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 border border-white/10 text-white font-bold text-sm hover:border-accent hover:text-accent transition-all"
          >
            Start your project
            <span className="text-lg">&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
