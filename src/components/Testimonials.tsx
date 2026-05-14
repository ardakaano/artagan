import { motion } from 'framer-motion'

const quotes = [
  { t: 'They built our headquarters in 14 months. On budget. Every detail perfect.', a: 'Sarah J.', r: 'Urban Living' },
  { t: 'The best restoration team in the country. Period.', a: 'Michael C.', r: 'Heritage Foundation' },
  { t: 'We would not build with anyone else — and we have built a lot.', a: 'David M.', r: 'Skyline Group' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-warm-50 overflow-hidden">
      <div className="container">
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="eyebrow">Testimonials</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-6 text-section text-ink">What our<br /><span className="text-ink/15">clients say.</span></motion.h2>

        <div className="mt-16 grid lg:grid-cols-3 gap-px bg-ink/5">
          {quotes.map((q, i) => (
            <motion.blockquote key={q.a} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-warm-50 p-10 hover:bg-white transition-colors">
              <span className="block text-6xl font-black text-fire leading-none select-none" aria-hidden="true">“</span>
              <p className="mt-2 text-lg font-medium text-ink leading-relaxed">{q.t}</p>
              <footer className="mt-8 flex items-center gap-4 pt-6 border-t border-ink/5">
                <div className="w-10 h-10 bg-ink grid place-items-center text-sm font-bold text-white">{q.a.charAt(0)}</div>
                <div>
                  <p className="text-sm font-bold text-ink">{q.a}</p>
                  <p className="text-xs text-ink-faint">{q.r}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
