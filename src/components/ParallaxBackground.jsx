import React, { useEffect, useState, useRef } from 'react';

export default function ParallaxBackground() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const animFrameRef = useRef(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Calculate coordinates from -1 to 1 relative to viewport center
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      targetPos.current = { x, y };
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      targetPos.current = { x: 0, y: 0 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Smooth physics loop with damping for fluid 3D parallax feel
    const updateMotion = () => {
      const ease = 0.06;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      setMousePos({
        x: currentPos.current.x,
        y: currentPos.current.y,
      });

      animFrameRef.current = requestAnimationFrame(updateMotion);
    };

    animFrameRef.current = requestAnimationFrame(updateMotion);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Parallax offsets based on depth layers
  const deepX = mousePos.x * 25;
  const deepY = mousePos.y * 25;

  const midX = mousePos.x * -40;
  const midY = mousePos.y * -40;

  const fgX = mousePos.x * 55;
  const fgY = mousePos.y * 55;

  // 3D tilt calculation
  const tiltX = mousePos.y * -6;
  const tiltY = mousePos.x * 6;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ perspective: '1200px' }}
    >
      {/* Dynamic Cursor Spotlight Glow */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.4) 0%, rgba(99, 102, 241, 0.15) 50%, transparent 80%)',
          left: `calc(50% + ${mousePos.x * 350}px - 300px)`,
          top: `calc(50% + ${mousePos.y * 250}px - 300px)`,
        }}
      />

      {/* Layer 1: Ambient Deep Glowing Orbs */}
      <div
        className="absolute inset-0 transition-transform duration-200 ease-out"
        style={{
          transform: `translate3d(${deepX}px, ${deepY}px, 0)`,
        }}
      >
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute top-[40%] right-[15%] w-[350px] h-[350px] rounded-full bg-indigo-500/08 blur-[100px]" />
      </div>

      {/* Layer 2: 3D Tilting Perspective Grid */}
      <div
        className="absolute inset-[-10%] transition-transform duration-300 ease-out opacity-40 cyber-grid"
        style={{
          transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${midX * 0.4}px, ${midY * 0.4}px, 0)`,
        }}
      />

      {/* Layer 3: Floating Holographic Glyphs and Particles */}
      <div
        className="absolute inset-0 transition-transform duration-200 ease-out select-none"
        style={{
          transform: `translate3d(${fgX}px, ${fgY}px, 0)`,
        }}
      >
        {/* Floating Glyph 1 */}
        <div 
          className="absolute top-[18%] left-[8%] font-mono text-[10px] text-cyan-400/25 tracking-widest px-2.5 py-1 rounded-md border border-cyan-500/15 bg-cyan-950/20 backdrop-blur-[2px]"
          style={{ transform: `translate3d(${mousePos.x * -20}px, ${mousePos.y * -20}px, 0)` }}
        >
          SOUL_SCAN : RUNNING
        </div>

        {/* Floating Glyph 2 */}
        <div 
          className="absolute bottom-[22%] left-[12%] font-mono text-[10px] text-indigo-400/20 tracking-wider px-2 py-0.5 rounded border border-indigo-500/15 bg-indigo-950/20"
          style={{ transform: `translate3d(${mousePos.x * 30}px, ${mousePos.y * 30}px, 0)` }}
        >
          HUMANITY_CHECK : ON
        </div>

        {/* Floating Glyph 3 */}
        <div 
          className="absolute top-[28%] right-[10%] font-mono text-[10px] text-cyan-400/20 tracking-widest px-2.5 py-1 rounded-md border border-cyan-500/15 bg-cyan-950/20"
          style={{ transform: `translate3d(${mousePos.x * -35}px, ${mousePos.y * -35}px, 0)` }}
        >
          ACCESS_LEVEL : BEING-HUMAN
        </div>

        {/* Floating Glyph 4 */}
        <div 
          className="absolute bottom-[25%] right-[14%] font-mono text-[10px] text-blue-400/20 tracking-wider px-2 py-0.5 rounded border border-blue-500/15 bg-blue-950/20"
          style={{ transform: `translate3d(${mousePos.x * 25}px, ${mousePos.y * 25}px, 0)` }}
        >
          SIGNAL_SYNC : 99.8%
        </div>

        {/* Tiny ambient floating dots */}
        <div 
          className="absolute top-[45%] left-[22%] w-1.5 h-1.5 rounded-full bg-cyan-400/30 animate-ping"
          style={{ animationDuration: '4s' }}
        />
        <div 
          className="absolute top-[65%] right-[25%] w-1 h-1 rounded-full bg-blue-400/40"
        />
        <div 
          className="absolute top-[15%] right-[35%] w-1.5 h-1.5 rounded-full bg-indigo-400/25"
        />
      </div>
    </div>
  );
}
