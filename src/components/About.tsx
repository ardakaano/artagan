import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-32 bg-black">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-medium text-orange-500 tracking-wide"
            >
              About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight"
            >
              Craftsmanship meets modern engineering.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-base text-white/40 leading-relaxed max-w-md"
            >
              We are a team of 150+ engineers and master craftsmen. Since 2000, we have delivered
              over 500 projects across 15 states — from glass skyscrapers to historic restorations.
            </motion.p>
            <motion.a
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="#contact"
              className="inline-block mt-8 text-sm font-medium text-orange-500 hover:text-orange-400 transition-colors"
            >
              Learn more &rarr;
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/[0.02] border border-white/[0.06]"
          >
            <img
              src="https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt=""
              className="h-full w-full object-cover opacity-90 grayscale"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
