"use client";
import Image from "next/image";

const products = [
  {
    name: "Phantom",
    series: "Elite Series",
    variant: "OG White / Black",
    price: "From $189.99",
    badge: "FLAGSHIP",
    img: "https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/blob-e239380.png/:/cr=t:0%25,l:15.24%25,w:69.51%25,h:100%25/rs=w:800,cg:true",
    href: "https://site-oysa6lo54.godaddysites.com/shop/ols/products/phantom-elite-series-og-whiteblack",
    features: ["Maximum Grip Latex", "Negative Cut Profile", "Elite Race Durability"],
    accent: "#f5c842",
    glowRgb: "245,200,66",
  },
  {
    name: "Shadow",
    series: "Pro Series",
    variant: "OG White / Black Trim",
    price: "$129.00",
    badge: "PRO",
    img: "https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/thumbnail_IMG_7977.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:800,cg:true",
    href: "https://site-oysa6lo54.godaddysites.com/shop/ols/products/shadow-pro-series-og-whiteblack-trim",
    features: ["Pro Grip Latex", "Flat Cut Build", "Game-Ready Construction"],
    accent: "#0066ff",
    glowRgb: "0,102,255",
  },
];

export default function ProductsSection() {
  return (
    <section id="products"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
      <div className="absolute top-0 right-0 w-96 h-96 opacity-[0.04]"
        style={{ background: "radial-gradient(circle at 80% 20%, #0066ff 0%, transparent 60%)" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 opacity-[0.04]"
        style={{ background: "radial-gradient(circle at 20% 80%, #f5c842 0%, transparent 60%)" }} />

      <div className="w-full max-w-6xl mx-auto py-24">

        {/* Header — centred */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-[#f5c842]" />
            <span className="text-[9px] tracking-[0.5em] uppercase text-[#f5c842] font-bold">Featured Products</span>
            <div className="h-px w-10 bg-[#f5c842]" />
          </div>
          <h2 className="font-black uppercase leading-none mb-4"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}>
            <span className="text-white">Choose Your </span>
            <span className="gold-shimmer">Weapon.</span>
          </h2>
        </div>

        {/* Cards — centred grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {products.map((p) => (
            <div key={p.name}
              className="group relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px rgba(${p.glowRgb},0.12), 0 0 0 1px rgba(${p.glowRgb},0.18)`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-20 px-2.5 py-1 text-[9px] font-black tracking-[0.3em] uppercase text-black"
                style={{ background: p.accent }}>
                {p.badge}
              </div>

              {/* Image */}
              <div className="relative h-64 overflow-hidden"
                style={{ background: "linear-gradient(160deg, #0a0a0a 0%, #111 100%)" }}>
                <Image src={p.img} alt={`${p.name} ${p.series}`} fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700" unoptimized />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at 50% 60%, rgba(${p.glowRgb},1) 0%, transparent 70%)` }} />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-[9px] tracking-[0.4em] uppercase mb-1.5" style={{ color: p.accent }}>{p.series}</div>
                  <h3 className="text-3xl font-black uppercase text-white">{p.name}</h3>
                  <div className="text-xs text-gray-500 mt-1">{p.variant}</div>
                </div>
                <div className="h-px bg-white/5" />
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-xs text-gray-400">
                      <div className="w-1 h-1 rounded-full shrink-0" style={{ background: p.accent }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-2xl font-black" style={{ color: p.accent }}>{p.price}</span>
                  <a href={p.href} target="_blank" rel="noopener noreferrer"
                    className="px-5 py-2 text-[9px] font-black tracking-[0.2em] uppercase text-black hover:brightness-110 transition-all duration-200"
                    style={{ background: p.accent, clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}>
                    Shop Now
                  </a>
                </div>
              </div>
              <div className="h-px colour-stream opacity-30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
