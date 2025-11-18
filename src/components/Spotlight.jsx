import { useEffect, useState } from 'react';

export default function Spotlight() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const handler = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('pointermove', handler);
    return () => window.removeEventListener('pointermove', handler);
  }, []);

  const style = {
    background: `radial-gradient(220px 160px at ${pos.x}px ${pos.y}px, rgba(56,189,248,0.12), transparent 60%)`,
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-10 transition-opacity" style={style} />
  );
}
