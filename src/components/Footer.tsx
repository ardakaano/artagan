const links = [
  { n: 'Work', h: '#projects' },
  { n: 'About', h: '#about' },
  { n: 'Contact', h: '#contact' },
]

export default function Footer() {
  return (
    <footer className="py-12 bg-white border-t border-ink/5">
      <div className="container flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
        <div>
          <span className="text-lg font-black tracking-tight text-ink">artagan</span>
          <p className="mt-1 text-xs text-ink-faint">&copy; {new Date().getFullYear()} Artagan Construction</p>
        </div>
        <div className="flex gap-8">
          {links.map((l) => (
            <a key={l.n} href={l.h} className="text-xs text-ink-faint hover:text-ink transition-colors">{l.n}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
