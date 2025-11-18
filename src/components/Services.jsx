import { Shield, Cloud, Code2, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Custom Software',
    desc: 'Tailored web and mobile applications with robust architectures and delightful UX.',
    icon: Code2,
  },
  {
    title: 'Cloud & DevOps',
    desc: 'CI/CD, infrastructure as code, and scalable cloud on AWS/Azure/GCP.',
    icon: Cloud,
  },
  {
    title: 'Security First',
    desc: 'Threat modeling, SAST/DAST pipelines, and compliance baked in from day one.',
    icon: Shield,
  },
  {
    title: 'Product Acceleration',
    desc: 'MVP sprints, audits, and performance tuning to get you to market faster.',
    icon: Rocket,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-slate-300">End-to-end delivery with a focus on reliability and performance.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/60 to-slate-900/60 p-6 hover:from-slate-800 hover:to-slate-900 transition group">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 ring-1 ring-inset ring-blue-400/20 group-hover:scale-105 transition">
                <Icon size={22} />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
