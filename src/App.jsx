import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Spotlight from './components/Spotlight';
import Particles from './components/Particles';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 relative">
      {/* dynamic cursor spotlight */}
      <Spotlight />
      {/* floating particles */}
      <Particles quantity={70} />

      {/* background grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.06)_1px,transparent_1px)] bg-[size:40px_40px] z-0" />

      <div className="relative z-20">
        <Navbar />
        <Hero />
        <Services />
        <Work />
        <Contact />

        <footer className="relative border-t border-white/10 py-10">
          <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">© {new Date().getFullYear()} NovaIT. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#work" className="hover:text-white">Work</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
