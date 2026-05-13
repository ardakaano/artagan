import { motion } from 'framer-motion'
import {
  ShieldCheckIcon,
  TrophyIcon,
  UserGroupIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline'
import Reveal from './Reveal'
import AnimatedCounter from './AnimatedCounter'

const values = [
  {
    name: 'Excellence in Craftsmanship',
    description:
      'We maintain the highest standards in masonry and construction, combining traditional techniques with modern innovation.',
    icon: TrophyIcon,
  },
  {
    name: 'Integrity & Trust',
    description:
      'Our work is built on a foundation of honesty, transparency, and commitment to delivering what we promise.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Client Partnership',
    description:
      'We build lasting relationships with our clients through collaboration, exceptional service, and shared goals.',
    icon: UserGroupIcon,
  },
]

const milestones = [
  { year: '2000', label: 'Founded in San Francisco by John Mason & family' },
  { year: '2010', label: 'Completed our 200th commercial project' },
  { year: '2018', label: 'Earned LEED Platinum certification' },
  { year: '2025', label: '$2B+ in projects delivered across 15 states' },
]

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        {/* Top grid: text + image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <Reveal>
              <p className="eyebrow">Who we are</p>
              <h2 className="section-title mt-4">Crafting structures that stand the test of time</h2>
              <p className="section-subtitle mt-6">
                With over 25 years of combined experience, Artagan has evolved from a small family workshop into a
                premier construction company known for meticulous attention to detail and unwavering commitment to
                quality.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-primary-600">
                Our team combines decades of hands-on experience with innovative approaches. We believe every brick
                we lay and every beam we raise tells a story of integrity.
              </p>
            </Reveal>

            {/* Milestones */}
            <Reveal delay={0.15}>
              <div className="mt-10 grid grid-cols-2 gap-6">
                {milestones.map((m) => (
                  <div key={m.year} className="border-l-2 border-accent pl-4">
                    <p className="font-display text-2xl font-bold text-primary-900">{m.year}</p>
                    <p className="mt-1 text-sm leading-snug text-primary-600">{m.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Image collage */}
          <Reveal delay={0.2} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="aspect-[3/4] rounded-2xl overflow-hidden shadow-card"
              >
                <img
                  src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Construction site"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <div className="flex flex-col gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="aspect-square rounded-2xl overflow-hidden shadow-card"
                >
                  <img
                    src="https://images.unsplash.com/photo-1590650151155-3b62c5a0c9c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Masonry detail"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
                <div className="flex-1 rounded-2xl bg-primary-900 p-6 flex flex-col justify-center items-center">
                  <p className="font-display text-4xl font-bold text-accent">
                    <AnimatedCounter end={25} suffix="+" />
                  </p>
                  <p className="text-xs text-white/60 uppercase tracking-wider mt-1 text-center">
                    Years of
                    <br />
                    Experience
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-card p-4 flex items-center gap-3"
            >
              <div className="grid place-items-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                <ArrowTrendingUpIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-primary-900">100%</p>
                <p className="text-[10px] uppercase tracking-wider text-primary-600">On-time delivery</p>
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Values */}
        <Reveal delay={0.1}>
          <div className="mt-28">
            <p className="eyebrow mx-auto text-center">Our values</p>
            <h3 className="text-display-lg font-bold text-primary-900 text-center mt-4">
              The principles we build on
            </h3>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {values.map((value) => (
                <motion.div
                  key={value.name}
                  whileHover={{ y: -4 }}
                  className="card card-hover p-8 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-3xl" />
                  <value.icon className="h-7 w-7 text-accent relative z-10" aria-hidden="true" />
                  <p className="mt-5 text-lg font-semibold text-primary-900 relative z-10">{value.name}</p>
                  <p className="mt-2 text-base leading-relaxed text-primary-600 relative z-10">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
