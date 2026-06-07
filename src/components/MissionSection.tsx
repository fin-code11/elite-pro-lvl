export default function MissionSection() {
  return (
    <section
      id="mission"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
      style={{ background: "linear-gradient(170deg, #000 0%, #020c1a 60%, #000 100%)" }}
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,102,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Blue centre glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,50,120,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Gold corner accents */}
      <div className="absolute top-12 left-12 w-16 h-16 border-t-2 border-l-2 border-[#f5c842]/30" />
      <div className="absolute bottom-12 right-12 w-16 h-16 border-b-2 border-r-2 border-[#f5c842]/30" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div
            className="h-px w-20"
            style={{ background: "linear-gradient(to right, transparent, #f5c842)" }}
          />
          <span className="text-[10px] tracking-[0.5em] uppercase text-[#f5c842] font-bold">
            Our Mission
          </span>
          <div
            className="h-px w-20"
            style={{ background: "linear-gradient(to left, transparent, #f5c842)" }}
          />
        </div>

        {/* Mission statement */}
        <p
          className="font-black uppercase leading-tight text-white mb-10"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)", letterSpacing: "-0.01em" }}
        >
          To create{" "}
          <span className="gold-shimmer">elite-level gloves</span>
          {" "}that deliver durability, aggressive grip, and reliability —
          <br className="hidden md:block" />
          <span className="text-glow-blue"> without the inflated cost</span>
          {" "}or compromise in quality.
        </p>

        {/* Supporting line */}
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto mb-16">
          Founded by keepers who understand the demands of the position. We exist to serve
          athletes who train hard, compete fearlessly, and expect their equipment to perform
          under pressure.
        </p>

        {/* Three pillars */}
        <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { label: "Grip", desc: "Next LVL latex that performs in any condition" },
            { label: "Durability", desc: "Built to last through training and match day" },
            { label: "Value", desc: "Elite quality without the elite price tag" },
          ].map((p) => (
            <div
              key={p.label}
              className="relative p-6 border border-white/5 hover:border-[#f5c842]/25 transition-colors duration-300"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
            >
              <div className="text-[#f5c842] font-black text-lg uppercase tracking-wider mb-2">
                {p.label}
              </div>
              <div className="text-gray-500 text-xs leading-relaxed">{p.desc}</div>
            </div>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="mt-20 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-12 overflow-hidden">
            <div
              className="w-full h-full bg-gradient-to-b from-[#f5c842] to-transparent"
              style={{ animation: "scrollBar 1.8s ease-in-out infinite" }}
            />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollBar {
          0%   { transform: translateY(-100%); opacity: 1; }
          100% { transform: translateY(100%);  opacity: 0; }
        }
      `}</style>
    </section>
  );
}
