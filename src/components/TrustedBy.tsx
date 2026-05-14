const names = ['Urban Living', 'Heritage Corp', 'Skyline Group', 'NovaTech', 'Pacific Build', 'Atlas', 'Vertex', 'Summit Co']

export default function TrustedBy() {
  return (
    <section className="py-10 bg-white border-b border-ink/5 overflow-hidden select-none">
      <p className="text-center text-[10px] font-bold text-ink-faint uppercase tracking-[0.2em] mb-6">
        Trusted by
      </p>
      <div className="flex gap-16 animate-marquee">
        {[...names, ...names].map((n, i) => (
          <span key={`${n}-${i}`} className="text-sm font-bold text-ink/10 flex-shrink-0">
            {n}
          </span>
        ))}
      </div>
    </section>
  )
}
