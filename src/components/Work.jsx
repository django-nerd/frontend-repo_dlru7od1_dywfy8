const projects = [
  {
    title: 'Realtime Analytics Dashboard',
    desc: 'A scalable event-driven platform processing millions of events daily.',
    tags: ['React', 'Kafka', 'ClickHouse', 'AWS'],
  },
  {
    title: 'FinTech Mobile Suite',
    desc: 'PCI-compliant wallet and payments solution with biometric auth.',
    tags: ['React Native', 'FastAPI', 'Postgres', 'KMS'],
  },
  {
    title: 'E-commerce Revamp',
    desc: 'Headless storefront with blazing-fast search and conversion uplift.',
    tags: ['Next.js', 'FastAPI', 'Algolia', 'Vercel'],
  },
];

export default function Work() {
  return (
    <section id="work" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected work</h2>
            <p className="mt-3 text-slate-300">A few projects from our recent engagements.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white hover:bg-white/10">Work with us</a>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-6 hover:shadow-xl hover:shadow-blue-500/10 transition">
              <div className="aspect-video w-full rounded-xl bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.25),transparent_60%)]" />
              <h3 className="mt-4 text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-2.5 py-1 text-xs text-slate-300 ring-1 ring-inset ring-white/10">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
