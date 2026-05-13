export default function TrustedBy() {
  const logos = ['Urban Living', 'Heritage Corp', 'Skyline', 'NovaTech', 'Pacific Build', 'Atlas Group', 'Vertex', 'Summit']

  return (
    <section className="py-12 bg-black border-y border-white/[0.06] overflow-hidden select-none">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        <div className="flex gap-16 marquee-track">
          {[...logos, ...logos].map((l, i) => (
            <span key={`${l}-${i}`} className="text-sm font-medium text-white/20 flex-shrink-0">
              {l}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
