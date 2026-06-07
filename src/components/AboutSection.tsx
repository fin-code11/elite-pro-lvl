import Image from "next/image";

const stats = [
  { value: "100%", label: "Goalkeeper Driven" },
  { value: "Elite", label: "Grip Technology" },
  { value: "Real", label: "World Durability" },
  { value: "Zero", label: "Compromises" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative min-h-screen flex items-center px-6 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #020818 0%, #000 60%)" }}>

      {/* Background grid */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(0,102,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />

      {/* Gold glow top-left */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, #f5c842 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto w-full py-32">
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-32 items-center">

          {/* Left — copy */}
          <div className="space-y-10">
            {/* Label */}
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-[#f5c842]" />
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#f5c842] font-bold">About Elite Pro LVL</span>
            </div>

            <h2 className="text-5xl md:text-6xl xl:text-7xl font-black uppercase leading-none">
              <span className="text-white block">Our</span>
              <span className="gold-shimmer block">Mission.</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              Elite Pro LVL is a{" "}
              <span className="text-[#f5c842] font-semibold">goalkeeper-driven brand</span>{" "}
              built with one purpose: to create elite-level gloves that deliver durability,
              aggressive grip, and reliability — without the inflated cost or compromise in quality.
            </p>

            <p className="text-gray-500 leading-relaxed max-w-lg">
              Founded by keepers who understand the demands of the position, we exist to serve
              athletes who train hard, compete fearlessly, and expect their equipment to perform
              under pressure.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((s) => (
                <div key={s.label} className="relative group">
                  <div className="glass-card border-glow p-5 transition-all duration-300 group-hover:border-[#f5c842]/40"
                    style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}>
                    <div className="text-2xl font-black text-[#f5c842] text-glow-gold mb-1">{s.value}</div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative">
            {/* Corner accent lines */}
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#f5c842] z-10" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#f5c842] z-10" />

            <div className="overflow-hidden border border-white/5"
              style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))" }}>
              <Image
                src="https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/thumbnail_IMG_3611.jpg/:/cr=t:8.7%25,l:0%25,w:100%25,h:82.6%25/rs=w:800,h:600,cg:true"
                alt="Elite Pro LVL goalkeeper in action"
                width={800}
                height={600}
                className="w-full object-cover hover:scale-105 transition-transform duration-700"
                unoptimized
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 glass-card border-glow-gold px-6 py-4 z-20"
              style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}>
              <div className="text-xs tracking-widest uppercase text-[#f5c842] font-black">Hamilton · ON</div>
              <div className="text-[10px] tracking-widest uppercase text-gray-500 mt-0.5">Canada</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
