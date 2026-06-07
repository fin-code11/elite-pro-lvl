"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = { x: number; y: number; vy: number; vx: number; size: number; hue: number; life: number; maxLife: number };
    const particles: Particle[] = [];

    const spawn = () => {
      const hue = Math.random() > 0.6 ? 45 : Math.random() * 40 + 200;
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vy: -(Math.random() * 1.5 + 0.3),
        vx: (Math.random() - 0.5) * 0.6,
        size: Math.random() * 2 + 0.5,
        hue,
        life: 0,
        maxLife: Math.random() * 280 + 120,
      });
    };

    let frame = 0;
    let animId: number;
    const draw = () => {
      animId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (frame % 4 === 0) spawn();
      frame++;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx; p.y += p.vy; p.life++;
        const alpha = Math.pow(1 - p.life / p.maxLife, 1.5);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 60%, ${alpha * 0.65})`;
        ctx.shadowBlur = 14;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 65%, ${alpha})`;
        ctx.fill();
        if (p.life >= p.maxLife) particles.splice(i, 1);
      }
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Soccer video background — self-hosted */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.45) saturate(1.3)" }}
      >
        <source src="/videos/soccer-bg.mp4" type="video/mp4" />
      </video>

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,30,80,0.6) 0%, transparent 50%)" }} />
      <div className="absolute inset-0 colour-stream opacity-10" style={{ mixBlendMode: "screen" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.06) 3px, rgba(0,0,0,0.06) 4px)" }} />
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Centred content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">

        <div className="flex items-center justify-center gap-4 mb-6 animate-float-up" style={{ animationDelay: "0s", opacity: 0 }}>
          <div className="h-px w-12" style={{ background: "linear-gradient(to right, transparent, #f5c842)" }} />
          <span className="text-[9px] tracking-[0.5em] uppercase text-[#f5c842] font-bold">Hamilton, ON · Canada</span>
          <div className="h-px w-12" style={{ background: "linear-gradient(to left, transparent, #f5c842)" }} />
        </div>

        <h1
          className="font-black uppercase leading-none mb-5 text-center animate-float-up"
          style={{ fontSize: "clamp(2.8rem, 8vw, 6.5rem)", letterSpacing: "-0.02em", animationDelay: "0.15s", opacity: 0 }}
        >
          <span className="gold-shimmer block">Elite</span>
          <span className="text-white text-glow-blue block">Pro LVL</span>
        </h1>

        <p className="text-sm md:text-base font-light tracking-[0.2em] uppercase text-gray-300 mb-3 text-center animate-float-up"
          style={{ animationDelay: "0.35s", opacity: 0 }}>
          Built by goalkeepers who demand more.
        </p>

        <p className="text-xs md:text-sm text-gray-400 max-w-md mb-10 leading-relaxed text-center animate-float-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}>
          Next LVL grip. Real-World Durability. For the keepers chasing the next level — and for those already there.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 animate-float-up items-center justify-center"
          style={{ animationDelay: "0.65s", opacity: 0 }}>
          <a href="/shop"
            className="px-8 py-3 text-xs font-black tracking-[0.2em] uppercase text-black bg-[#f5c842] hover:bg-[#ffd44d] transition-all duration-300 glow-gold"
            style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}>
            Shop Gloves
          </a>
          <a href="#mission"
            className="px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase text-white border border-white/20 hover:border-[#f5c842]/60 hover:bg-white/5 transition-all duration-300"
            style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}>
            Our Story
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ opacity: 0, animation: "float-up 0.8s ease 1s forwards" }}>
          <span className="text-[9px] tracking-[0.4em] uppercase text-gray-500">Scroll</span>
          <div className="relative w-px h-10 overflow-hidden">
            <div className="absolute top-0 w-full h-full bg-gradient-to-b from-[#f5c842] to-transparent"
              style={{ animation: "scrollBar 1.8s ease-in-out infinite" }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollBar { 0% { transform: translateY(-100%); opacity: 1; } 100% { transform: translateY(100%); opacity: 0; } }
      `}</style>
    </section>
  );
}
