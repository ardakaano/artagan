import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'


const servicesData: Record<string, any> = {
  commercial: {
    title: 'Commercial Construction',
    desc: 'Office towers, retail spaces, and industrial facilities. Built to scale.',
    content: 'At Artagan, our commercial construction division is dedicated to creating robust, scalable, and highly functional spaces for modern businesses. We combine innovative engineering with meticulous craftsmanship to deliver projects on time and within budget. Whether it’s a high-rise office building or a sprawling retail complex, we ensure that every structure not only meets but exceeds industry standards.'
  },
  restoration: {
    title: 'Restoration',
    desc: 'Historic preservation, seismic retrofitting, and facade renewal.',
    content: 'Preserving history requires a delicate touch and deep expertise. Our restoration experts specialize in bringing historic masonry and structures back to their former glory while reinforcing them with modern safety standards. From intricate facade renewals to comprehensive seismic retrofitting, we ensure heritage buildings stand strong for generations to come.'
  },
  residential: {
    title: 'Residential',
    desc: 'Custom homes, luxury residences, and multi-family developments.',
    content: 'We build more than just houses; we craft homes. Our residential projects are defined by exceptional quality, premium materials, and an unwavering attention to detail. From bespoke luxury estates to modern multi-family developments, our team works closely with architects and homeowners to bring unique visions to life with unparalleled craftsmanship.'
  },
  consulting: {
    title: 'Consulting',
    desc: 'Feasibility studies, budget planning, and full project management.',
    content: 'Before the first stone is laid, precision planning is crucial. Artagan offers comprehensive consulting services to guide your project from concept to completion. We provide in-depth feasibility studies, accurate budget forecasting, and end-to-end project management, ensuring that potential risks are mitigated and your investment yields maximum value.'
  }
}

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = servicesData[slug || '']

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!service) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-warm-50 text-center flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-ink mb-4">Service Not Found</h1>
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-fire hover:text-fire-600 transition-colors">
          <ArrowLeftIcon className="w-4 h-4" /> Return Home
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-32 min-h-screen bg-white">
      <div className="container max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-ink-muted hover:text-fire transition-colors mb-12">
          <ArrowLeftIcon className="w-4 h-4" /> Back to Home
        </Link>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          className="text-4xl md:text-6xl font-bold text-ink tracking-tight mb-6"
        >
          {service.title}
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }} 
          className="text-xl md:text-2xl text-ink-muted leading-relaxed mb-16"
        >
          {service.desc}
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.2 }} 
          className="prose prose-lg prose-ink max-w-none"
        >
          <p className="text-lg text-ink/80 leading-loose">{service.content}</p>
          
          <div className="mt-16 p-8 bg-warm-50 border border-ink/5 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-ink mb-2">Ready to start your project?</h3>
              <p className="text-sm text-ink-muted">Let's discuss how we can help bring your vision to life.</p>
            </div>
            <Link to="/" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)} className="whitespace-nowrap px-6 py-3 bg-fire text-white text-sm font-bold uppercase tracking-widest hover:bg-fire-600 transition-colors">
              Get a Quote
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
