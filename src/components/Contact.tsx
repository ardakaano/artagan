import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'
import Reveal from './Reveal'

type Errors = { name?: string; email?: string; message?: string }

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [sending, setSending] = useState(false)

  const validate = (): boolean => {
    const errs: Errors = {}
    if (!name.trim()) errs.name = 'Name is required.'
    if (!email.trim()) errs.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email.'
    if (!message.trim()) errs.message = 'Message is required.'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setSending(true)
    // Simulate an API call (replace with Formspree/EmailJS/Resend endpoint)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setSending(false)
    toast.success('Message sent! We\u2019ll get back to you within 24 hours.')
    setName('')
    setEmail('')
    setMessage('')
    setErrors({})
  }

  const inputClass = (field: keyof Errors) =>
    `block w-full rounded-xl border-0 bg-primary-50 px-4 py-3 text-primary-900 shadow-sm ring-1 ring-inset ring-primary-200 placeholder:text-primary-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6 transition-all ${
      errors[field] ? 'ring-red-400 focus:ring-red-400' : ''
    }`

  return (
    <section id="contact" className="section bg-primary-50">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left info */}
          <div className="lg:col-span-2">
            <Reveal>
              <p className="eyebrow">Get in touch</p>
              <h2 className="section-title mt-4">Let's build together</h2>
              <p className="mt-6 text-lg leading-relaxed text-primary-600">
                Whether you have a clear vision or just an idea, we're ready to turn it into a solid plan.
                Reach out and we'll schedule a free consultation.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <dl className="mt-10 space-y-6">
                {[
                  { icon: PhoneIcon, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
                  { icon: EnvelopeIcon, text: 'contact@masonic.com', href: 'mailto:contact@masonic.com' },
                  {
                    icon: MapPinIcon,
                    text: '123 Construction Ave, Suite 500\nSan Francisco, CA 94105',
                    href: 'https://maps.google.com',
                  },
                ].map((item) => (
                  <div key={item.text} className="flex gap-4">
                    <div className="grid place-items-center w-10 h-10 rounded-xl bg-white border border-primary-100 text-accent flex-shrink-0">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <a
                        href={item.href}
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-base text-primary-900 whitespace-pre-line hover:text-accent transition-colors"
                      >
                        {item.text}
                      </a>
                    </div>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          {/* Right form */}
          <Reveal className="lg:col-span-3" delay={0.15}>
            <motion.form
              onSubmit={handleSubmit}
              noValidate
              className="card p-8 lg:p-10"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-primary-900 mb-2">
                    Full name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={name}
                    onChange={(e) => { setName(e.target.value); if (errors.name) setErrors((p) => ({ ...p, name: undefined })) }}
                    className={inputClass('name')}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-primary-900 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors((p) => ({ ...p, email: undefined })) }}
                    className={inputClass('email')}
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="block text-sm font-semibold text-primary-900 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => { setMessage(e.target.value); if (errors.message) setErrors((p) => ({ ...p, message: undefined })) }}
                  className={inputClass('message')}
                  placeholder="Tell us about your project..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>
              <div className="mt-8">
                <button type="submit" disabled={sending} className="btn btn-accent btn-lg w-full sm:w-auto group">
                  {sending ? (
                    <>
                      <span className="w-4 h-4 border-2 border-primary-900/30 border-t-primary-900 rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send message
                      <PaperAirplaneIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
