import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Reveal from './Reveal'
import ProjectModal from './ProjectModal'

type Project = {
  title: string
  category: string
  image: string
  description: string
  fullDescription: string
  features: string[]
  specifications: Record<string, string>
}

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'Commercial', label: 'Commercial' },
  { id: 'Restoration', label: 'Restoration' },
  { id: 'Residential', label: 'Residential' },
]

const projects: Project[] = [
  {
    title: 'Modern Office Complex',
    category: 'Commercial',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'A state-of-the-art office building featuring sustainable materials and innovative design.',
    fullDescription:
      'This modern office complex represents the pinnacle of contemporary commercial architecture. The project seamlessly integrates sustainable building practices with cutting-edge design elements to create a workspace that promotes productivity and well-being.',
    features: [
      'LEED Platinum certified building',
      'Smart building management system',
      'Floor-to-ceiling windows for natural light',
      'Rooftop garden and recreational space',
      'Electric vehicle charging stations',
    ],
    specifications: {
      'Total Area': '250,000 sq ft',
      Floors: '15 stories',
      Completion: '2023',
      Location: 'San Francisco, CA',
      Parking: '200 underground spaces',
      'Energy Rating': 'A+',
    },
  },
  {
    title: 'Historic Building Restoration',
    category: 'Restoration',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Careful restoration of a 19th-century landmark, preserving its historical significance.',
    fullDescription:
      "This meticulous restoration project breathed new life into a historic 19th-century landmark while preserving its architectural heritage. Our team combined traditional craftsmanship with modern preservation techniques to ensure the building's legacy continues.",
    features: [
      'Original facade restoration',
      'Modern safety upgrades',
      'Period-accurate materials',
      'Seismic retrofitting',
      'Historical detail preservation',
    ],
    specifications: {
      'Building Age': '150+ years',
      'Restoration Period': '18 months',
      'Historical Status': 'National Historic Landmark',
      'Original Use': 'Bank Building',
      'Current Use': 'Mixed-use Commercial',
      Area: '45,000 sq ft',
    },
  },
  {
    title: 'Luxury Residential Complex',
    category: 'Residential',
    image:
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'High-end residential development combining comfort with architectural excellence.',
    fullDescription:
      "This luxury residential complex sets new standards in upscale living. Each residence is thoughtfully designed to provide the ultimate in comfort and sophistication, while the building's amenities create a resort-like atmosphere.",
    features: [
      'Custom interior finishes',
      'Private balconies',
      'Smart home integration',
      'Concierge service',
      'Spa and fitness center',
    ],
    specifications: {
      Units: '120 residences',
      Floors: '25 stories',
      'Unit Sizes': '1,000-4,500 sq ft',
      Completion: '2024',
      Amenities: '25,000 sq ft',
      Location: 'Downtown District',
    },
  },
  {
    title: 'Shopping Center Development',
    category: 'Commercial',
    image:
      'https://images.unsplash.com/photo-1555636222-cae831e670b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Modern retail space designed for optimal customer experience and business efficiency.',
    fullDescription:
      'This contemporary shopping center redefines the retail experience with its innovative design. The development incorporates sustainable practices and creates a vibrant community hub for shopping, dining, and entertainment.',
    features: [
      'Mixed retail spaces',
      'Food court and restaurants',
      'Underground parking',
      'Digital wayfinding system',
      'Outdoor shopping promenade',
    ],
    specifications: {
      'Retail Space': '500,000 sq ft',
      Parking: '1,500 spaces',
      Stores: '100+ retail units',
      Restaurants: '15 dining options',
      Opening: '2024',
      Location: 'Suburban Center',
    },
  },
  {
    title: 'Heritage Library Restoration',
    category: 'Restoration',
    image:
      'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Sensitive restoration of a century-old public library with modern infrastructure upgrades.',
    fullDescription:
      'A landmark public library received a comprehensive restoration that honors its original Beaux-Arts design while integrating 21st-century technology and accessibility standards.',
    features: [
      'Original marble and woodwork restoration',
      'Climate-controlled archive room',
      'ADA-compliant access throughout',
      'Modern IT infrastructure',
    ],
    specifications: {
      'Building Age': '110 years',
      Completion: '2025',
      'Total Area': '38,000 sq ft',
      Location: 'Boston, MA',
    },
  },
  {
    title: 'Eco-Friendly Campus',
    category: 'Residential',
    image:
      'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Sustainable living community powered by solar energy and rainwater harvesting.',
    fullDescription:
      'This eco-friendly residential campus integrates green roofs, solar panels, and native landscaping to create a net-zero community that proves luxury living can be sustainable.',
    features: [
      'Net-zero energy design',
      'Rainwater harvesting system',
      'Native landscaping',
      'Community garden and orchard',
      'EV charging infrastructure',
    ],
    specifications: {
      Units: '85 residences',
      Completion: '2025',
      'Total Area': '12 acres',
      Location: 'Portland, OR',
      'Solar Capacity': '1.2 MW',
    },
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered =
    activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <Reveal className="text-center">
          <p className="eyebrow mx-auto text-center">Portfolio</p>
          <h2 className="section-title mt-4 mx-auto">Our recent work</h2>
          <p className="section-subtitle mt-6 mx-auto">
            A selection of projects that showcase our versatility, attention to detail, and commitment to
            excellence.
          </p>
        </Reveal>

        {/* Filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat.id
                  ? 'bg-primary-900 text-white shadow-card'
                  : 'bg-primary-50 text-primary-700 hover:bg-primary-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.article
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-2xl overflow-hidden shadow-card cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="w-full">
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent text-primary-900 mb-2">
                      {project.category}
                    </span>
                    <p className="text-sm text-white/80 leading-relaxed line-clamp-2">{project.description}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-accent">
                      View details <ArrowRightIcon className="w-3 h-3" />
                    </span>
                  </div>
                </div>

                {/* Top-right magnify */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="grid place-items-center w-9 h-9 rounded-full bg-white/20 backdrop-blur text-white">
                    <MagnifyingGlassIcon className="w-4 h-4" />
                  </span>
                </div>

                {/* Below content */}
                <div className="p-5">
                  <p className="text-xs text-primary-500 uppercase tracking-wider">{project.category}</p>
                  <p className="mt-2 font-display text-lg font-bold text-primary-900 leading-snug">
                    {project.title}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA */}
        <Reveal className="mt-14 text-center">
          <a href="#contact" className="btn btn-outline btn-lg">
            Start your project
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </Reveal>
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </section>
  )
}
