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
              {[
                { href: "https://www.facebook.com/eliteprolvl", label: "FB" },
                { href: "https://www.instagram.com/eliteprolvl", label: "IG" },
                { href: "https://www.tiktok.com/@eliteprolvl", label: "TT" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center text-xs font-bold border border-blue-900/40 text-gray-400 hover:border-[#f5c842] hover:text-[#f5c842] transition-all"
                >
                  {s.label}
                </a>
              ))}
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
