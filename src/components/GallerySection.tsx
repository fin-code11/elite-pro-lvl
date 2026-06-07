import Image from "next/image";

const images = [
  { src: "https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/thumbnail_IMG_7977.jpg/:/rs=w:800,cg:true", alt: "Goalkeeper action", col: "col-span-2 row-span-2" },
  { src: "https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/blob-e239380.png/:/cr=t:0%25,l:15.24%25,w:69.51%25,h:100%25/rs=w:600,cg:true", alt: "Glove closeup", col: "col-span-1 row-span-1" },
  { src: "https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/thumbnail_IMG_4934.jpg/:/rs=w:600,cg:true,m", alt: "Goalkeeper save", col: "col-span-1 row-span-1" },
  { src: "https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/throw.jpg/:/rs=w:800,cg:true", alt: "Goalkeeper throw", col: "col-span-1 row-span-1" },
  { src: "https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/Noah%20Gloves%20with%20Logo%20in%20Backbround.jpg/:/", alt: "Noah with gloves", col: "col-span-1 row-span-1" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="relative min-h-screen flex items-center px-6 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #000 0%, #020818 100%)" }}>

      {/* Top colour bar */}
      <div className="absolute top-0 left-0 right-0 h-px colour-stream opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-px colour-stream opacity-50" />

      <div className="max-w-7xl mx-auto w-full py-32">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-10 bg-[#f5c842]" />
              <span className="text-[10px] tracking-[0.5em] uppercase text-[#f5c842] font-bold">In Action</span>
            </div>
            <h2 className="text-5xl md:text-6xl xl:text-7xl font-black uppercase leading-none">
              <span className="text-white block">Capture the</span>
              <span className="gold-shimmer block">Moment.</span>
            </h2>
          </div>

          {/* Social pills */}
          <div className="flex flex-wrap gap-3">
            {[
              { label: "Instagram", href: "https://www.instagram.com/eliteprolvl" },
              { label: "TikTok", href: "https://www.tiktok.com/@eliteprolvl" },
              { label: "Facebook", href: "https://www.facebook.com/eliteprolvl" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400 border border-white/10 hover:border-[#f5c842]/40 hover:text-[#f5c842] transition-all duration-200"
              >
                @eliteprolvl · {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mosaic grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 h-[580px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`${img.col} group relative overflow-hidden`}
              style={{ border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-700"
                style={{ transition: "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)" }}
                unoptimized
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#0066ff]/0 group-hover:bg-[#0066ff]/10 transition-colors duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
