import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !msg.trim()) {
      toast.error('Both fields are required.')
      return
    }
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    toast.success('Message sent. We reply within 24 hours.')
    setEmail('')
    setMsg('')
  }

  return (
    <section id="contact" className="relative py-32 bg-dark border-t border-white/[0.04] overflow-hidden">
      {/* Decorative diagonal accent */}
      <div className="absolute top-0 right-0 w-64 h-1 bg-accent -skew-x-20 origin-right" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-48 h-1 bg-cyan -skew-x-20 origin-left" aria-hidden="true" />

      <div className="container max-w-2xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm font-bold text-electric tracking-[0.2em] uppercase"
        >
          Contact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-section text-white"
        >
          Let&rsquo;s build
          <br />
          <span className="text-accent">something great.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-6 text-base text-white/30"
        >
          Tell us about your project. We respond fast.
        </motion.p>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-12 space-y-5"
        >
          <div>
            <label htmlFor="email" className="block text-xs font-bold text-white/20 uppercase tracking-[0.1em] mb-2">
              Your email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@company.com"
              className="w-full bg-transparent border-0 border-b border-white/[0.08] pb-3 text-white placeholder:text-white/10 focus:outline-none focus:border-accent transition-colors"
            />
          </div>
          <div>
            <label htmlFor="msg" className="block text-xs font-bold text-white/20 uppercase tracking-[0.1em] mb-2">
              Project details
            </label>
            <textarea
              id="msg"
              rows={3}
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              placeholder="Tell us what you need..."
              className="w-full bg-transparent border-0 border-b border-white/[0.08] pb-3 text-white placeholder:text-white/10 focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold text-sm hover:bg-accent hover:text-white transition-all disabled:opacity-40"
          >
            {loading ? 'Sending...' : (
              <>
                Send message <span className="text-lg">&rarr;</span>
              </>
            )}
          </button>
        </motion.form>

        <div className="mt-16 pt-8 border-t border-white/[0.04] flex flex-wrap gap-8">
          {[
            { l: 'Email', v: 'contact@artagan.com', h: 'mailto:contact@artagan.com' },
            { l: 'Phone', v: '+1 (555) 123-4567', h: 'tel:+15551234567' },
            { l: 'HQ', v: 'San Francisco, CA' },
          ].map((c) => (
            <div key={c.l}>
              <p className="text-[10px] font-bold text-white/15 uppercase tracking-[0.1em]">{c.l}</p>
              {c.h ? (
                <a href={c.h} className="mt-1 block text-sm text-white/30 hover:text-accent transition-colors">
                  {c.v}
                </a>
              ) : (
                <p className="mt-1 text-sm text-white/30">{c.v}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
