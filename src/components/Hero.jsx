import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/70 to-slate-950" />

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow"
              >
                We build modern IT solutions that scale
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
                className="mt-4 text-lg text-slate-300 max-w-2xl"
              >
                From web apps to cloud-native platforms, our team crafts fast, secure, and delightful digital products.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              >
                <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 hover:opacity-90 transition">
                  Start a project
                </a>
                <a href="#services" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white hover:bg-white/10 transition">
                  Our services
                </a>
              </motion.div>
            </div>
            <div className="lg:col-span-5" />
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 opacity-80">
            {['AWS', 'Azure', 'React', 'Kubernetes'].map((logo) => (
              <div key={logo} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-slate-300 text-sm">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
