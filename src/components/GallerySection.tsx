import Image from "next/image";

const images = [
  {
    src: "https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/thumbnail_IMG_7977.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:600,cg:true",
    alt: "Goalkeeper action 1",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/blob-e239380.png/:/cr=t:0%25,l:15.24%25,w:69.51%25,h:100%25/rs=w:370,h:493,cg:true",
    alt: "Elite Pro LVL gloves",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/thumbnail_IMG_4934.jpg/:/rs=w:600,cg:true,m",
    alt: "Goalkeeper action 2",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/throw.jpg/:/cr=t:13.39%25,l:0%25,w:100%25,h:73.23%25/rs=w:600,h:493,cg:true",
    alt: "Goalkeeper throw",
    span: "col-span-2 row-span-1",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/Noah%20Gloves%20with%20Logo%20in%20Backbround.jpg/:/",
    alt: "Noah with Elite Pro LVL gloves",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/blob-12a8192.png/:/cr=t:33.77%25,l:2.83%25,w:94.34%25,h:59.51%25/rs=w:600,cg:true,m",
    alt: "Goalkeeper moments",
    span: "col-span-1 row-span-1",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative py-40 px-6 bg-black overflow-hidden">
      {/* Top colour stream bar */}
      <div className="absolute top-0 left-0 right-0 h-1 colour-stream" />

      {/* Right glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 rounded-full opacity-10"
        style={{ background: "radial-gradient(circle, #f5c842 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-[60px] bg-[#f5c842]" />
          <span className="text-xs tracking-[0.4em] uppercase text-[#f5c842] font-semibold">In Action</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black uppercase mb-20">
          <span className="text-white">Capture the</span>{" "}
          <span className="gold-shimmer">Moment</span>
        </h2>

        {/* Mosaic grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[700px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.span} group relative overflow-hidden border-glow`}
              style={{ clipPath: i === 0 ? "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" : undefined }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                unoptimized
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Blue scan line on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 colour-stream" style={{ mixBlendMode: "screen" }} />
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-8 mt-12">
          {[
            { label: "Facebook", href: "https://www.facebook.com/eliteprolvl", icon: "f" },
            { label: "Instagram", href: "https://www.instagram.com/eliteprolvl", icon: "ig" },
            { label: "TikTok", href: "https://www.tiktok.com/@eliteprolvl", icon: "tt" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2 text-xs font-bold tracking-widest uppercase text-gray-300 border border-blue-900/40 hover:border-[#f5c842] hover:text-[#f5c842] transition-all duration-200"
            >
              <span>@eliteprolvl</span>
              <span className="text-[#f5c842]">·</span>
              <span>{s.label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Bottom colour stream bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 colour-stream" />
    </section>
  );
}
