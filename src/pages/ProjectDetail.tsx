import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center pt-16">
        <div className="text-center">
          <p className="text-6xl font-black text-ink/10 mb-4">404</p>
          <p className="text-xl font-bold text-ink">Project not found</p>
          <Link to="/" className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-ink text-white text-sm font-bold hover:bg-fire transition-colors">
            <ArrowLeftIcon className="w-4 h-4" /> Back home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white pt-16">
      {/* Hero image */}
      <div className="relative h-[50vh] sm:h-[60vh] overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="container max-w-4xl">
        {/* Back */}
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 mt-8 text-sm font-bold text-ink-muted hover:text-fire transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" /> All projects
        </Link>

        {/* Title + meta */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="inline-block mt-8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] bg-fire-50 text-fire">
            {project.category}
          </span>
          <h1 className="mt-4 text-hero text-ink max-w-3xl">{project.title}</h1>
          <div className="mt-4 flex flex-wrap gap-6 text-sm text-ink-muted">
            <span>{project.location}</span>
            <span className="text-ink/10">|</span>
            <span>{project.year}</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mt-8 text-lead text-ink-muted leading-relaxed max-w-3xl"
        >
          {project.description}
        </motion.p>

        {/* Specs grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-px bg-ink/5"
        >
          {project.specs.map((spec) => (
            <div key={spec.label} className="bg-white p-6">
              <p className="text-xs font-bold text-ink-faint uppercase tracking-[0.1em]">{spec.label}</p>
              <p className="mt-2 text-lg font-bold text-ink">{spec.value}</p>
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-ink">Key features</h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3">
            {project.features.map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm text-ink-muted">
                <span className="grid place-items-center w-5 h-5 rounded-full bg-fire/10 text-fire text-[10px] font-bold">&#10003;</span>
                {f}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-ink">Gallery</h2>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <div key={i} className="aspect-[4/3] overflow-hidden group">
                <img
                  src={img}
                  alt={`${project.title} ${i + 1}`}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonial */}
        {project.testimonial && (
          <motion.blockquote
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-16 p-8 sm:p-12 bg-warm-50"
          >
            <span className="block text-6xl font-black text-fire leading-none" aria-hidden="true">“</span>
            <p className="mt-2 text-xl font-medium text-ink leading-relaxed">{project.testimonial.text}</p>
            <footer className="mt-4 text-sm font-bold text-fire">{project.testimonial.author}</footer>
          </motion.blockquote>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-16 mb-24 py-16 border-t border-ink/5 text-center"
        >
          <p className="text-section text-ink">Want a project like this?</p>
          <p className="mt-4 text-lead text-ink-muted">Tell us about your vision. We will make it real.</p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 mt-8 px-8 py-4 bg-ink text-white font-bold text-sm hover:bg-fire transition-colors"
          >
            Start your project
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}
