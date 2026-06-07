import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-blue-900/20 pb-12 px-6" style={{ paddingTop: "6rem" }}>
      <div className="absolute top-0 left-0 right-0 h-1 colour-stream opacity-60" />

      <div className="max-w-6xl mx-auto">
        {/* Main grid — more vertical room */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">

          {/* Brand */}
          <div>
            <Image
              src="https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/main%20logo%20and%20name.jpg/:/rs=h:100,cg:true,m/qt=q:95"
              alt="Elite Pro LVL"
              width={140}
              height={46}
              className="object-contain mb-5"
              unoptimized
            />
            <p className="text-gray-500 text-sm leading-relaxed">
              Elite-level goalkeeper gloves. Built for those who demand more.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs tracking-widest uppercase text-[#f5c842] font-semibold mb-6">
              Navigation
            </div>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-gray-400 text-sm hover:text-[#f5c842] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="text-xs tracking-widest uppercase text-[#f5c842] font-semibold mb-6">
              Contact
            </div>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Hamilton, ON, Canada</li>
              <li>
                <a href="mailto:Deryk@eliteprolvl.com" className="hover:text-[#f5c842] transition-colors">
                  Deryk@eliteprolvl.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/12894391497" className="hover:text-[#f5c842] transition-colors">
                  WhatsApp: +1 (289) 439-1497
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/eliteprolvl" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-blue-900/40 text-gray-400 hover:border-[#f5c842] hover:text-[#f5c842] transition-all"
                aria-label="Facebook">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/eliteprolvl" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-blue-900/40 text-gray-400 hover:border-[#f5c842] hover:text-[#f5c842] transition-all"
                aria-label="Instagram">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@eliteprolvl" target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 flex items-center justify-center border border-blue-900/40 text-gray-400 hover:border-[#f5c842] hover:text-[#f5c842] transition-all"
                aria-label="TikTok">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V9.35a8.16 8.16 0 0 0 4.77 1.52V7.42a4.85 4.85 0 0 1-1-.73z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright bar — clearly separated */}
        <div className="border-t border-blue-900/20 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <span>© 2026 Elite Pro LVL — Goalkeeper Gloves. All Rights Reserved.</span>
          <div className="flex gap-4">
            <a
              href="https://site-oysa6lo54.godaddysites.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5c842] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="https://site-oysa6lo54.godaddysites.com/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f5c842] transition-colors"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
