import { motion } from 'framer-motion'

const quotes = [
  { text: 'Delivered on time, under budget. Flawless execution.', author: 'Sarah J.', role: 'Urban Living' },
  { text: 'Best restoration team we have worked with.', author: 'Michael C.', role: 'Heritage Foundation' },
  { text: 'Our HQ is a masterpiece. Thank you.', author: 'Emily R.', role: 'NovaTech' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-black border-t border-white/[0.06]">
      <div className="container">
        <p className="text-sm font-medium text-orange-500 tracking-wide">Clients</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Trusted by teams everywhere.
        </h2>

        <div className="mt-14 grid sm:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
          {quotes.map((q, i) => (
            <motion.blockquote
              key={q.author}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black p-8 sm:p-10"
            >
              <p className="text-xl font-medium text-white leading-relaxed">&ldquo;{q.text}&rdquo;</p>
              <footer className="mt-6">
                <p className="text-sm font-semibold text-white">{q.author}</p>
                <p className="text-xs text-white/30 mt-0.5">{q.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
