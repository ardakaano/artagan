import { useState, type FormEvent } from 'react'
import { MapPinIcon, EnvelopeIcon, PhoneIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Process', href: '#process' },
  { name: 'Projects', href: '#projects' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
]

const socials = [
  { name: 'Facebook', href: '#', icon: (p: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...p}><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/></svg>
  )},
  { name: 'Instagram', href: '#', icon: (p: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...p}><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"/></svg>
  )},
  { name: 'LinkedIn', href: '#', icon: (p: React.SVGProps<SVGSVGElement>) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...p}><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.418-4.814c.23-.861.907-1.538 1.768-1.768C5.746 5 12 5 12 5s6.255 0 7.814.418z"/><path d="M10 15.464V8.536L14.5 12l-4.5 3.464z" fill="#0F172A"/></svg>
  )},
]

const hours = [
  'Mon – Fri: 7:00 AM – 6:00 PM',
  'Saturday: 8:00 AM – 2:00 PM',
  'Sunday: Closed',
]

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('')
  const [nlSending, setNlSending] = useState(false)

  const handleNewsletter = async (e: FormEvent) => {
    e.preventDefault()
    if (!newsletterEmail.trim()) return
    setNlSending(true)
    await new Promise((r) => setTimeout(r, 800))
    setNlSending(false)
    toast.success('Subscribed! Check your inbox.')
    setNewsletterEmail('')
  }

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2.5">
              <span className="grid place-items-center w-9 h-9 rounded-lg bg-accent text-primary-900 font-bold text-sm">
                M
              </span>
              <span className="font-display text-xl font-bold tracking-tight">Artagan</span>
            </div>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm">
              Building excellence through craftsmanship. We combine centuries of tradition with modern innovation
              to create structures that stand the test of time.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  aria-label={s.name}
                  className="grid place-items-center w-9 h-9 rounded-lg bg-white/10 text-white/60 hover:bg-accent hover:text-primary-900 transition-all duration-200"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-6">Navigation</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Hours */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-6">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-white/60">
                  <PhoneIcon className="w-4 h-4 text-white/40" />
                  <a href="tel:+15551234567" className="hover:text-white transition-colors">+1 (555) 123-4567</a>
                </li>
                <li className="flex items-center gap-3 text-sm text-white/60">
                  <EnvelopeIcon className="w-4 h-4 text-white/40" />
                  <a href="mailto:contact@artagan.com" className="hover:text-white transition-colors">contact@artagan.com</a>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/60">
                  <MapPinIcon className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" />
                  <span>123 Construction Ave, Suite 500<br />San Francisco, CA 94105</span>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-3">Working Hours</h3>
              {hours.map((h) => (
                <p key={h} className="text-sm text-white/50">{h}</p>
              ))}
            </div>

            {/* Newsletter */}
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email for updates"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 min-w-0 rounded-lg bg-white/10 border border-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-accent/50"
              />
              <button
                type="submit"
                disabled={nlSending}
                className="grid place-items-center w-10 h-10 rounded-lg bg-accent text-primary-900 hover:bg-accent-400 transition-colors flex-shrink-0"
                aria-label="Subscribe"
              >
                <ArrowRightIcon className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Artagan Construction. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent/60 mr-1.5" />
            Built with care &mdash; just like our projects.
          </p>
        </div>
      </div>
    </footer>
  )
}
