import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!email.trim() || !message.trim()) {
      toast.error('Please fill in both fields.')
      return
    }
    setSending(true)
    await new Promise((r) => setTimeout(r, 1000))
    setSending(false)
    toast.success('Message sent. We will reply within 24 hours.')
    setEmail('')
    setMessage('')
  }

  return (
    <section id="contact" className="py-32 bg-black border-t border-white/[0.06]">
      <div className="container max-w-xl">
        <p className="text-sm font-medium text-orange-500 tracking-wide">Contact</p>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Start a project.
        </h2>
        <p className="mt-4 text-base text-white/40">
          Tell us about your project. We respond fast.
        </p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 space-y-5"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className="w-full bg-transparent border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors"
          />
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Describe your project..."
            className="w-full bg-transparent border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 transition-colors resize-none"
          />
          <button
            type="submit"
            disabled={sending}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-orange-500 hover:text-white transition-colors disabled:opacity-50"
          >
            {sending ? 'Sending...' : (
              <>
                Send message
                <ArrowRightIcon className="w-4 h-4" />
              </>
            )}
          </button>
        </motion.form>

        <div className="mt-12 pt-8 border-t border-white/[0.06]">
          <a href="mailto:contact@artagan.com" className="text-sm text-white/30 hover:text-white/50 transition-colors">
            contact@artagan.com
          </a>
        </div>
      </div>
    </section>
  )
}
