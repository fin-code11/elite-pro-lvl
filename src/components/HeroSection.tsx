"use client";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* Particle colour stream on canvas */
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

    const particles: { x: number; y: number; vy: number; vx: number; size: number; hue: number; life: number; maxLife: number }[] = [];

    const spawn = () => {
      const hue = Math.random() > 0.5 ? Math.random() * 30 + 210 : 45; // blue or gold
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vy: -(Math.random() * 2 + 0.5),
        vx: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 3 + 1,
        hue,
        life: 0,
        maxLife: Math.random() * 200 + 100,
      });
    };

    let frame = 0;
    let animId: number;

    const draw = () => {
      animId = requestAnimationFrame(draw);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (frame % 3 === 0) spawn();
      frame++;

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const alpha = 1 - p.life / p.maxLife;
        const sat = p.hue === 45 ? "100%" : "100%";
        const light = p.hue === 45 ? "60%" : "55%";
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, ${sat}, ${light}, ${alpha * 0.7})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 60%, ${alpha})`;
        ctx.fill();

        if (p.life >= p.maxLife) particles.splice(i, 1);
      }
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden scanlines">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ filter: "brightness(0.45) saturate(1.1)" }}
      >
        {/* Public domain goalkeeper footage — fallback to image if video not available */}
        <source
          src="https://www.pexels.com/download/video/856958/?fps=25.0&h=720&w=1280"
          type="video/mp4"
        />
      </video>

      {/* Futuristic colour overlay */}
      <div
        className="absolute inset-0 colour-stream opacity-25"
        style={{ mixBlendMode: "screen" }}
      />

      {/* Dark gradient fade at bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Top label */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-12 colour-stream opacity-80" />
          <span className="text-xs tracking-[0.4em] uppercase text-[#f5c842] font-semibold">
            Hamilton, ON · Canada
          </span>
          <div className="h-px w-12 colour-stream opacity-80" />
        </div>

        {/* Main headline */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-4 animate-float-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          <span className="gold-shimmer">Elite</span>
          <br />
          <span className="text-white text-glow-blue">Pro LVL</span>
        </h1>

        {/* Sub headline */}
        <p
          className="text-lg md:text-2xl font-light tracking-widest uppercase text-gray-300 mb-3 animate-float-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Built by goalkeepers who demand more.
        </p>

        <p
          className="text-sm md:text-base text-gray-400 max-w-xl mb-10 animate-float-up"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          Next LVL grip. Real-World Durability. We exist for the keepers chasing the next level — and for those already there.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-float-up"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          <a
            href="#products"
            className="px-8 py-4 text-sm font-black tracking-widest uppercase text-black bg-[#f5c842] hover:bg-[#ffd44d] transition-all duration-200 glow-gold"
            style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
          >
            Shop Gloves
          </a>
          <a
            href="#about"
            className="px-8 py-4 text-sm font-bold tracking-widest uppercase text-white border border-blue-500/50 hover:border-blue-400 hover:bg-blue-900/20 transition-all duration-200 glow-blue"
            style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
          >
            Our Story
          </a>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs tracking-widest uppercase text-gray-400">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#f5c842] to-transparent" />
        </div>
      </div>
    </section>
  );
}
