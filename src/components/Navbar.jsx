import { Menu, X, Laptop, Phone, Code2, Layers } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40">
          <div className="flex h-16 items-center justify-between px-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white shadow-lg">
                <Layers size={20} />
              </div>
              <span className="text-white font-semibold tracking-tight">NovaIT</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow hover:opacity-90 transition">
                <Phone size={16} /> Get a quote
              </a>
            </nav>

            <button onClick={() => setOpen((v) => !v)} className="md:hidden text-white">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 pb-4">
              <div className="flex flex-col gap-2 pt-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5">
                    {item.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white shadow">
                  <Phone size={16} /> Get a quote
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
