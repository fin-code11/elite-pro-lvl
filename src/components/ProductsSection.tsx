import Image from "next/image";

const products = [
  {
    name: "Phantom",
    series: "Elite Series",
    variant: "OG White / Black",
    price: "From $189.99",
    badge: "FLAGSHIP",
    badgeColor: "#f5c842",
    img: "https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/blob-e239380.png/:/cr=t:0%25,l:15.24%25,w:69.51%25,h:100%25/rs=w:600,cg:true",
    href: "https://site-oysa6lo54.godaddysites.com/shop/ols/products/phantom-elite-series-og-whiteblack",
    features: ["Maximum Grip Latex", "Negative Cut", "Elite Durability"],
    glowColor: "rgba(245, 200, 66, 0.3)",
  },
  {
    name: "Shadow",
    series: "Pro Series",
    variant: "OG White / Black Trim",
    price: "$129.00",
    badge: "PRO",
    badgeColor: "#0066ff",
    img: "https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/thumbnail_IMG_7977.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true",
    href: "https://site-oysa6lo54.godaddysites.com/shop/ols/products/shadow-pro-series-og-whiteblack-trim",
    features: ["Pro Grip Latex", "Flat Cut", "Game-Ready Build"],
    glowColor: "rgba(0, 102, 255, 0.3)",
  },
];

export default function ProductsSection() {
  return (
    <section id="products" className="relative py-32 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #000 0%, #020818 50%, #000 100%)" }}>

      {/* Background grid lines */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "linear-gradient(rgba(0,102,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-[60px] bg-[#f5c842]" />
          <span className="text-xs tracking-[0.4em] uppercase text-[#f5c842] font-semibold">Featured Products</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black uppercase mb-16">
          <span className="text-white">Choose Your</span>{" "}
          <span className="gold-shimmer">Weapon</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((p) => (
            <div
              key={p.name}
              className="group glass-card border-glow relative overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
                boxShadow: `0 0 40px ${p.glowColor}`,
              }}
            >
              {/* Badge */}
              <div
                className="absolute top-4 right-4 z-20 px-3 py-1 text-xs font-black tracking-widest uppercase text-black"
                style={{ background: p.badgeColor }}
              >
                {p.badge}
              </div>

              {/* Product image */}
              <div className="relative h-72 overflow-hidden bg-gradient-to-b from-gray-900 to-black">
                <Image
                  src={p.img}
                  alt={`${p.name} ${p.series}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  unoptimized
                />
                {/* Colour overlay on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{ background: `radial-gradient(circle at center, ${p.badgeColor} 0%, transparent 70%)` }}
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-xs tracking-widest uppercase text-gray-500 mb-1">{p.series}</div>
                  <h3 className="text-3xl font-black uppercase text-white">{p.name}</h3>
                  <div className="text-sm text-gray-400">{p.variant}</div>
                </div>

                {/* Features */}
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1 h-1 rounded-full bg-[#f5c842]" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-2xl font-black text-glow-gold" style={{ color: "#f5c842" }}>
                    {p.price}
                  </span>
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 text-xs font-black tracking-widest uppercase text-black bg-[#f5c842] hover:bg-[#ffd44d] transition-all duration-200"
                    style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                  >
                    Shop Now
                  </a>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="h-0.5 colour-stream opacity-60" />
            </div>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <a
            href="https://site-oysa6lo54.godaddysites.com/shop"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-sm font-bold tracking-widest uppercase text-white border border-blue-500/50 hover:border-[#f5c842] hover:text-[#f5c842] transition-all duration-300"
          >
            View All Gloves
            <span className="text-[#f5c842]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
