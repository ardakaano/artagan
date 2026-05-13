const logos = [
  { name: 'Urban Living',  chars: 'UL' },
  { name: 'Heritage Corp', chars: 'HC' },
  { name: 'Skyline Properties', chars: 'SP' },
  { name: 'NovaTech',      chars: 'NT' },
  { name: 'Pacific Build', chars: 'PB' },
  { name: 'Atlas Group',   chars: 'AG' },
  { name: 'Vertex Design', chars: 'VD' },
  { name: 'Summit Co',     chars: 'SC' },
]

export default function TrustedBy() {
  return (
    <section className="py-12 bg-white border-y border-primary-100 overflow-hidden select-none">
      <div className="container">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary-400 mb-8">
          Trusted by industry leaders
        </p>
        <div className="relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          {/* Marquee */}
          <div className="flex gap-16 marquee-track">
            {[...logos, ...logos].map((logo, i) => (
              <div
                key={`${logo.name}-${i}`}
                className="flex items-center gap-2 flex-shrink-0"
                title={logo.name}
              >
                <span className="grid place-items-center w-10 h-10 rounded-lg bg-primary-100 text-primary-600 font-bold text-sm">
                  {logo.chars}
                </span>
                <span className="text-sm font-semibold text-primary-600">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
