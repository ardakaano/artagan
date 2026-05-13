import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type Project = { title: string; category: string; image: string }

const cats = ['All', 'Commercial', 'Restoration', 'Residential']

const projects: Project[] = [
  { title: 'Riverside Tower', category: 'Commercial', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Heritage Library', category: 'Restoration', image: 'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'The Arc Residences', category: 'Residential', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Pacific Mall', category: 'Commercial', image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Old Bank Restoration', category: 'Restoration', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  { title: 'Eco Campus', category: 'Residential', image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-32 bg-black border-t border-white/[0.06]">
      <div className="container">
        <p className="text-sm font-medium text-orange-500 tracking-wide">Work</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Selected projects.
        </h2>

        {/* Filters */}
        <div className="mt-10 flex flex-wrap gap-1">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === c ? 'bg-white text-black' : 'text-white/40 hover:text-white'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="group relative bg-black aspect-[4/3] overflow-hidden"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover grayscale opacity-60 group-hover:opacity-90 group-hover:grayscale-0 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-xs text-white/40 uppercase tracking-wider">{p.category}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{p.title}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
