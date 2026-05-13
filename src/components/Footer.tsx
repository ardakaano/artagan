const links = [
  { n: 'Work', h: '#projects' },
  { n: 'About', h: '#about' },
  { n: 'Contact', h: '#contact' },
]

export default function Footer() {
  return (
    <footer className="py-12 bg-dark border-t border-white/[0.04]">
      <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <span className="text-lg font-black text-white tracking-tight">artagan</span>
          <p className="mt-1 text-xs text-white/15">
            &copy; {new Date().getFullYear()} Artagan Construction
          </p>
        </div>
        <div className="flex gap-8">
          {links.map((l) => (
            <a key={l.n} href={l.h} className="text-xs text-white/20 hover:text-white/40 transition-colors">
              {l.n}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
