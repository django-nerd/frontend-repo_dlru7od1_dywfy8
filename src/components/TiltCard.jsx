import { useRef } from 'react';

export default function TiltCard({ children, className = '' }) {
  const ref = useRef(null);

  function handleMouseMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const px = x / rect.width - 0.5; // -0.5 to 0.5
    const py = y / rect.height - 0.5;
    const rotateX = (-py * 10).toFixed(2);
    const rotateY = (px * 12).toFixed(2);
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0)';
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-150 will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 blur-md transition-opacity duration-200 group-hover:opacity-100" style={{ background: 'radial-gradient(120px 80px at var(--mx,50%) var(--my,50%), rgba(56,189,248,0.15), transparent 60%)' }} />
      {children}
    </div>
  );
}
