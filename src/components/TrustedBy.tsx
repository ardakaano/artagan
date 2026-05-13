const logos = ['Urban Living', 'Heritage Corp', 'Skyline Group', 'NovaTech', 'Pacific Build', 'Atlas', 'Vertex Design', 'Summit Co']

export default function TrustedBy() {
  return (
    <section className="py-10 bg-dark border-y border-white/[0.04] overflow-hidden select-none">
      <p className="text-center text-[10px] font-bold text-white/15 uppercase tracking-[0.2em] mb-6">
        Trusted by
      </p>
      <div className="flex gap-16 animate-scroll">
        {[...logos, ...logos].map((l, i) => (
          <span key={`${l}-${i}`} className="text-sm font-bold text-white/10 flex-shrink-0 hover:text-white/30 transition-colors">
            {l}
          </span>
        ))}
      </div>
    </section>
  )
}
