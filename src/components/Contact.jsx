import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('Sending...');
    // This is a demo: normally we'd call the backend. For now, just simulate.
    await new Promise((r) => setTimeout(r, 800));
    setStatus('Thanks! We will get back to you.');
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Let’s talk</h2>
          <p className="mt-3 text-slate-300">Tell us about your project and goals.</p>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-800/40 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm text-slate-300">Name</label>
              <input required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-sm text-slate-300">Email</label>
              <input type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="jane@company.com" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm text-slate-300">Project details</label>
            <textarea rows={5} required className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50" placeholder="What are you building?" />
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-3 font-medium text-white shadow-lg shadow-blue-500/20 hover:opacity-90 transition">
              Send message
            </button>
            <span className="text-sm text-slate-300">{status}</span>
          </div>
        </form>
      </div>
    </section>
  );
}
