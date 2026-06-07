"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-nav py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="https://img1.wsimg.com/isteam/ip/9e4d488c-6a21-456e-9f59-a4129ed5f7fc/main%20logo%20and%20name.jpg/:/rs=h:100,cg:true,m/qt=q:95"
            alt="Elite Pro LVL"
            width={120}
            height={40}
            className="object-contain"
            unoptimized
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className={`text-sm font-medium tracking-widest uppercase transition-colors duration-200 ${
                    active
                      ? "text-[#f5c842]"
                      : "text-gray-300 hover:text-[#f5c842]"
                  }`}
                >
                  {l.label}
                  {active && (
                    <div className="mt-1 h-px bg-[#f5c842] w-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <Link
          href="/shop"
          className="hidden md:flex items-center px-5 py-2 text-sm font-bold tracking-wider uppercase text-black bg-[#f5c842] hover:bg-[#ffd44d] transition-all duration-200 glow-gold"
          style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}
        >
          Shop Now
        </Link>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-6 h-0.5 bg-[#f5c842] mb-1.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <div className={`w-6 h-0.5 bg-[#f5c842] mb-1.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <div className={`w-6 h-0.5 bg-[#f5c842] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden glass-nav border-t border-blue-900/30 mt-3 px-6 py-4 space-y-3">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`block text-sm font-medium tracking-widest uppercase transition-colors py-2 ${
                pathname === l.href ? "text-[#f5c842]" : "text-gray-300 hover:text-[#f5c842]"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/shop"
            onClick={() => setMenuOpen(false)}
            className="block text-center px-5 py-2 text-sm font-bold tracking-wider uppercase text-black bg-[#f5c842] mt-2"
          >
            Shop Now
          </Link>
        </div>
      )}
    </nav>
  );
}
