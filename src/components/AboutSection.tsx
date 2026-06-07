import Image from "next/image";

const stats = [
  { value: "100%", label: "Goalkeeper Driven" },
  { value: "Elite", label: "Grip Technology" },
  { value: "Real", label: "World Durability" },
  { value: "Zero", label: "Compromises" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #020818 0%, #000 60%)" }}
    >
      {/* Gold glow */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-[0.05]"
        style={{ background: "radial-gradient(circle, #f5c842 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto w-full py-32">
        <div className="grid lg:grid-cols-2 gap-20 xl:gap-32 items-center">

          {/* Left — image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -top-3 -left-3 w-10 h-10 border-t-2 border-l-2 border-[#f5c842] z-10" />
            <div className="absolute -bottom-3 -right-3 w-10 h-10 border-b-2 border-r-2 border-[#f5c842] z-10" />

            <div
              className="overflow-hidden border border-white/5"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))",
              }}
            >
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
            <div
              className="absolute -bottom-6 -right-6 glass-card border-glow-gold px-6 py-4 z-20"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
              }}
            >
              <div className="text-xs tracking-widest uppercase text-[#f5c842] font-black">Hamilton · ON</div>
              <div className="text-[10px] tracking-widest uppercase text-gray-500 mt-0.5">Canada</div>
            </div>
          </div>

          {/* Right — copy + stats */}
          <div className="order-1 lg:order-2 space-y-10">
            <div className="flex items-center gap-4">
              <div className="h-px w-10 bg-[#f5c842]" />
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#f5c842] font-bold">
                About Elite Pro LVL
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl xl:text-7xl font-black uppercase leading-none">
              <span className="text-white block">Who We</span>
              <span className="gold-shimmer block">Are.</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed max-w-lg">
              We&apos;re a{" "}
              <span className="text-[#f5c842] font-semibold">goalkeeper-first brand</span>{" "}
              from Hamilton, Ontario. Every glove we make starts with one question: would a keeper
              who lives in the net trust this under pressure?
            </p>

            <p className="text-gray-500 leading-relaxed max-w-lg">
              No middlemen, no inflated markups — just premium materials, honest pricing, and gear
              designed by people who know what it feels like to face a penalty in the rain.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card border-glow p-5 hover:border-[#f5c842]/40 transition-colors duration-300"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  }}
                >
                  <div className="text-2xl font-black text-[#f5c842] text-glow-gold mb-1">{s.value}</div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gray-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
