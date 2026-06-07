"use client";
import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await supabase.from("contact_submissions").insert({ name, email, message });
    setSubmitted(true);
  };

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    await supabase.from("newsletter_subscribers").insert({ email: newsletterEmail });
    setNewsletterDone(true);
  };

  return (
    <section id="contact"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ background: "radial-gradient(ellipse at 50% 50%, #0066ff 0%, transparent 70%)" }} />

      <div className="w-full max-w-6xl mx-auto py-24 space-y-16">

        {/* Header — centred */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 bg-[#f5c842]" />
            <span className="text-[9px] tracking-[0.5em] uppercase text-[#f5c842] font-bold">Get In Touch</span>
            <div className="h-px w-10 bg-[#f5c842]" />
          </div>
          <h2 className="font-black uppercase leading-none"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)" }}>
            <span className="text-white">Contact </span>
            <span className="gold-shimmer">Us.</span>
          </h2>
        </div>

        {/* Form + info — centred grid */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">

          {/* Info */}
          <div className="space-y-6">
            <p className="text-gray-400 text-sm leading-relaxed">
              Looking for something special? Have a question? Let us know and we&apos;ll get back to you soon.
            </p>
            {[
              { label: "Location", value: "Hamilton, ON, Canada", icon: "📍", href: undefined },
              { label: "Email", value: "Deryk@eliteprolvl.com", icon: "✉️", href: "mailto:Deryk@eliteprolvl.com" },
              { label: "WhatsApp", value: "+1 (289) 439-1497", icon: "💬", href: "https://wa.me/12894391497" },
            ].map((item) => (
              <div key={item.label}
                className="flex items-start gap-4 p-4 border border-white/5 hover:border-[#f5c842]/20 transition-colors duration-200"
                style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}>
                <span className="text-lg mt-0.5">{item.icon}</span>
                <div>
                  <div className="text-[9px] tracking-[0.3em] uppercase text-gray-600 mb-1">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-gray-200 hover:text-[#f5c842] transition-colors font-medium text-sm">{item.value}</a>
                  ) : (
                    <span className="text-gray-200 font-medium text-sm">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="p-7 border border-white/5"
            style={{ clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-3">
                <div className="text-4xl">⚡</div>
                <h3 className="text-xl font-black uppercase text-[#f5c842]">Message Sent!</h3>
                <p className="text-gray-500 text-xs">We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: "Name", type: "text", value: name, setter: setName, placeholder: "Your name", required: false },
                  { label: "Email *", type: "email", value: email, setter: setEmail, placeholder: "your@email.com", required: true },
                ].map(({ label, type, value, setter, placeholder, required }) => (
                  <div key={label}>
                    <label className="block text-[9px] tracking-[0.3em] uppercase text-gray-600 mb-1.5">{label}</label>
                    <input type={type} required={required} value={value}
                      onChange={(e) => setter(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/8 focus:border-[#f5c842]/50 text-white px-3 py-2.5 text-sm outline-none transition-colors duration-200"
                      placeholder={placeholder} />
                  </div>
                ))}
                <div>
                  <label className="block text-[9px] tracking-[0.3em] uppercase text-gray-600 mb-1.5">Message</label>
                  <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/8 focus:border-[#f5c842]/50 text-white px-3 py-2.5 text-sm outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us what you need..." />
                </div>
                <button type="submit"
                  className="w-full py-3 text-xs font-black tracking-[0.2em] uppercase text-black bg-[#f5c842] hover:bg-[#ffd44d] transition-all duration-200 glow-gold"
                  style={{ clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Newsletter — centred */}
        <div className="relative border border-[#f5c842]/15 p-10 text-center max-w-3xl mx-auto overflow-hidden"
          style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}>
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ background: "radial-gradient(ellipse at 50% 0%, #f5c842 0%, transparent 70%)" }} />
          <div className="relative z-10">
            <div className="text-[9px] tracking-[0.5em] uppercase text-[#f5c842] font-bold mb-3">Newsletter</div>
            <h3 className="text-2xl md:text-3xl font-black uppercase mb-2">
              <span className="gold-shimmer">Get 10% Off </span>
              <span className="text-white">Your First Order</span>
            </h3>
            <p className="text-gray-500 text-xs mb-6 max-w-xs mx-auto">Sign up for our newsletter, promo list and future drops.</p>
            {newsletterDone ? (
              <p className="text-[#f5c842] font-bold tracking-wider uppercase text-xs">You&apos;re in — check your inbox for your 10% off code.</p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                <input type="email" required value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white/[0.03] border border-white/10 focus:border-[#f5c842]/50 text-white px-4 py-2.5 text-sm outline-none transition-colors"
                  placeholder="Enter your email" />
                <button type="submit"
                  className="px-6 py-2.5 text-xs font-black tracking-wider uppercase text-black bg-[#f5c842] hover:bg-[#ffd44d] transition-all whitespace-nowrap">
                  Sign Up
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
