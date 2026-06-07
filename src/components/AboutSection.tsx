import Image from "next/image";

export default function AboutSection() {
  const stats = [
    { value: "100%", label: "Goalkeeper Driven" },
    { value: "Elite", label: "Grip Technology" },
    { value: "Real", label: "World Durability" },
    { value: "0", label: "Compromises" },
  ];

  return (
    <section id="about" className="relative py-40 px-6 overflow-hidden bg-black">
      {/* Background glow blob */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #0066ff 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px flex-1 max-w-[60px] bg-[#f5c842]" />
          <span className="text-xs tracking-[0.4em] uppercase text-[#f5c842] font-semibold">About Us</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left — image with corner accents */}
          <div className="relative corner-accent">
            <div className="border-glow overflow-hidden" style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}>
              <Image
                src="https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/thumbnail_IMG_3611.jpg/:/cr=t:8.7%25,l:0%25,w:100%25,h:82.6%25/rs=w:600,h:300,cg:true"
                alt="Elite Pro LVL Mission"
                width={600}
                height={420}
                className="w-full object-cover hover:scale-105 transition-transform duration-700"
                unoptimized
              />
            </div>
            {/* Gold accent bar */}
            <div className="absolute -bottom-4 left-8 right-8 h-1 colour-stream opacity-60" />
          </div>

          {/* Right — copy */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
              <span className="text-white">Our</span>{" "}
              <span className="gold-shimmer">Mission</span>
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Elite Pro LVL is a <span className="text-[#f5c842] font-semibold">goalkeeper-driven brand</span> built
              with one purpose: to create elite-level gloves that deliver durability, aggressive grip, and
              reliability—without the inflated cost or compromise in quality.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Founded by keepers who understand the demands of the position, Elite Pro LVL exists to serve
              athletes who train hard, compete fearlessly, and expect their equipment to perform under pressure.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card border-glow p-4"
                  style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
                >
                  <div className="text-2xl font-black text-glow-gold" style={{ color: "#f5c842" }}>{s.value}</div>
                  <div className="text-xs tracking-widest uppercase text-gray-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
