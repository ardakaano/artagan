import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@heroicons/react/24/solid'
import { useInView } from 'react-intersection-observer'
import Reveal from './Reveal'

const testimonials = [
  {
    content:
      "Masonic's attention to detail and commitment to quality is unmatched. They transformed our vision into reality while maintaining the highest standards of craftsmanship.",
    author: 'Sarah Johnson',
    role: 'Property Developer',
    company: 'Urban Living Spaces',
    avatar: 'https://i.pravatar.cc/96?img=5',
    rating: 5,
  },
  {
    content:
      "The level of professionalism and technical expertise demonstrated by Masonic was exceptional. They delivered our project on time and within budget. I'd recommend them without hesitation.",
    author: 'David Martinez',
    role: 'Project Manager',
    company: 'Commercial Ventures Inc.',
    avatar: 'https://i.pravatar.cc/96?img=12',
    rating: 5,
  },
  {
    content:
      "Working with Masonic was a seamless experience. Their team's expertise in historic restoration helped us preserve our building's character while modernizing its functionality.",
    author: 'Michael Chen',
    role: 'Facilities Director',
    company: 'Heritage Foundation',
    avatar: 'https://i.pravatar.cc/96?img=68',
    rating: 5,
  },
  {
    content:
      'From the initial consultation to the final walkthrough, Masonic exceeded every expectation. Our new headquarters is a masterpiece that reflects their dedication to excellence.',
    author: 'Emily Rodriguez',
    role: 'CEO',
    company: 'NovaTech Solutions',
    avatar: 'https://i.pravatar.cc/96?img=47',
    rating: 5,
  },
  {
    content:
      'We had a very tight timeline and a complex set of requirements. Masonic stepped up, delivered on schedule, and the quality was phenomenal.',
    author: 'James Thompson',
    role: 'Operations Director',
    company: 'Skyline Properties',
    avatar: 'https://i.pravatar.cc/96?img=15',
    rating: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [autoplay, setAutoplay] = useState(true)

  const totalSlides = Math.ceil(testimonials.length / 3)
  const mobileTotalSlides = testimonials.length

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % mobileTotalSlides)
  }, [mobileTotalSlides])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + mobileTotalSlides) % mobileTotalSlides)
  }, [mobileTotalSlides])

  // Autoplay
  useEffect(() => {
    if (!autoplay || !inView) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [autoplay, inView, next])

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  }

  return (
    <section
      id="testimonials"
      ref={ref}
      className="section bg-primary-50 overflow-hidden"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="container">
        <Reveal className="text-center">
          <p className="eyebrow mx-auto text-center">Testimonials</p>
          <h2 className="section-title mt-4 mx-auto">What our clients say</h2>
          <p className="section-subtitle mt-6 mx-auto">
            Don't just take our word for it — hear from the people we've built for.
          </p>
        </Reveal>

        {/* Desktop carousel (3 cards) */}
        <div className="hidden lg:block mt-16">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="grid grid-cols-3 gap-6"
              >
                {testimonials.slice(current * 3, current * 3 + 3).map((t) => (
                  <div key={t.author} className="card p-8 flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(t.rating)].map((_, i) => (
                        <StarIcon key={i} className="w-5 h-5 text-accent" />
                      ))}
                    </div>
                    <blockquote className="flex-1 text-base leading-relaxed text-primary-700 italic">
                      "{t.content}"
                    </blockquote>
                    <div className="mt-6 flex items-center gap-3 border-t border-primary-100 pt-4">
                      <img
                        src={t.avatar}
                        alt={t.author}
                        className="w-10 h-10 rounded-full object-cover"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-sm font-semibold text-primary-900">{t.author}</p>
                        <p className="text-xs text-primary-500">
                          {t.role} at {t.company}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots + arrows */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="grid place-items-center w-10 h-10 rounded-full bg-white shadow-card text-primary-700 hover:text-primary-900 hover:shadow-card-hover transition-all"
              aria-label="Previous"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalSlides }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-accent w-6' : 'bg-primary-300 hover:bg-primary-400'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="grid place-items-center w-10 h-10 rounded-full bg-white shadow-card text-primary-700 hover:text-primary-900 hover:shadow-card-hover transition-all"
              aria-label="Next"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile carousel (1 card) */}
        <div className="lg:hidden mt-12">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.35, ease: 'easeInOut' }}
                className="card p-6"
              >
                <div className="flex gap-1 mb-3">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-accent" />
                  ))}
                </div>
                <blockquote className="text-sm leading-relaxed text-primary-700 italic">
                  "{testimonials[current].content}"
                </blockquote>
                <div className="mt-4 flex items-center gap-3 border-t border-primary-100 pt-4">
                  <img
                    src={testimonials[current].avatar}
                    alt={testimonials[current].author}
                    className="w-9 h-9 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-sm font-semibold text-primary-900">
                      {testimonials[current].author}
                    </p>
                    <p className="text-xs text-primary-500">
                      {testimonials[current].role} at {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="grid place-items-center w-9 h-9 rounded-full bg-white shadow-card text-primary-700"
              aria-label="Previous"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-accent w-5' : 'bg-primary-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="grid place-items-center w-9 h-9 rounded-full bg-white shadow-card text-primary-700"
              aria-label="Next"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
