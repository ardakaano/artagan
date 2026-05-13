import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Reveal from './Reveal'

const faqs = [
  {
    q: 'What types of construction projects do you handle?',
    a: 'We handle commercial, residential, and restoration projects of all scales. From ground-up office towers and luxury residences to sensitive historic restorations, our team brings the right expertise to every job.',
  },
  {
    q: 'How long does a typical project take from start to finish?',
    a: 'Timelines vary based on scope, but a standard commercial build takes 12–24 months. During the Discovery phase we provide a detailed Gantt chart so you know exactly what to expect and when.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. Masonic is fully licensed in all 15 states we operate in and carries comprehensive general liability, workers compensation, and builder’s risk insurance. Documentation is provided during contract signing.',
  },
  {
    q: 'Do you handle permits and regulatory approvals?',
    a: 'Absolutely. Our in-house compliance team manages all permits, zoning approvals, environmental assessments, and inspections. We keep your project compliant from day one to final sign-off.',
  },
  {
    q: 'Can you work with our existing architect/designer?',
    a: 'Yes. We collaborate seamlessly with third-party architects and designers. Many of our clients come with plans ready and we jump in to execute. We also have a network of vetted design partners if you need one.',
  },
  {
    q: 'What warranty do you provide on completed work?',
    a: 'We stand behind every project with a 2-year craftsmanship warranty and a 10-year structural warranty. Extended warranties are available for commercial projects.',
  },
  {
    q: 'How do you handle project changes or unexpected issues?',
    a: 'Change orders are documented and approved before work continues. We maintain a 10% contingency buffer in our budgets and communicate any adjustments in real time through your dedicated project portal.',
  },
  {
    q: 'Do you offer financing or phased payment plans?',
    a: 'Yes. We offer milestone-based draw schedules and can connect you with our preferred construction lenders for project financing solutions tailored to your scope.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (idx: number) => setOpenIndex((prev) => (prev === idx ? null : idx))

  return (
    <section id="faq" className="section bg-white">
      <div className="container max-w-4xl">
        <Reveal className="text-center">
          <p className="eyebrow mx-auto text-center">Questions</p>
          <h2 className="section-title mt-4 mx-auto">Frequently asked questions</h2>
          <p className="section-subtitle mt-6 mx-auto">
            Everything you need to know before starting your project.
          </p>
        </Reveal>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full text-left card p-5 sm:p-6 flex items-start justify-between gap-4 group"
              >
                <span className="text-base sm:text-lg font-semibold text-primary-900 pr-4">{faq.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="grid place-items-center w-8 h-8 rounded-full flex-shrink-0 bg-primary-50 text-primary-700 group-hover:bg-accent/10 group-hover:text-accent transition-colors"
                >
                  <ChevronDownIcon className="w-4 h-4" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-2">
                      <p className="text-base leading-relaxed text-primary-600">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
