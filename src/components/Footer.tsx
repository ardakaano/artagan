const links = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/[0.06]">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-8">
          <span className="text-sm font-bold text-white tracking-tight">artagan</span>
          <div className="flex gap-6">
            {links.map((l) => (
              <a key={l.name} href={l.href} className="text-xs text-white/30 hover:text-white/50 transition-colors">
                {l.name}
              </a>
            ))}
          </div>
        </div>
        <p className="text-xs text-white/20">
          &copy; {new Date().getFullYear()} Artagan Construction
        </p>
      </div>
    </footer>
  )
}
