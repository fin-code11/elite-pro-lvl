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

  const contactItems = [
    { label: "Location", value: "Hamilton, ON, Canada", icon: "📍", href: undefined },
    { label: "Email", value: "Deryk@eliteprolvl.com", icon: "✉️", href: "mailto:Deryk@eliteprolvl.com" },
    { label: "WhatsApp", value: "+1 (289) 439-1497", icon: "💬", href: "https://wa.me/12894391497" },
  ];

  return (
    <section id="contact" className="relative min-h-screen flex items-center px-6 overflow-hidden bg-black">

      {/* Background accent */}
      <div className="absolute inset-0 opacity-[0.04]"
        style={{ background: "radial-gradient(ellipse at 50% 50%, #0066ff 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto w-full py-32 space-y-24">

        {/* Header */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-10 bg-[#f5c842]" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#f5c842] font-bold">Get In Touch</span>
          </div>
          <h2 className="text-5xl md:text-6xl xl:text-7xl font-black uppercase leading-none">
            <span className="text-white block">Contact</span>
            <span className="gold-shimmer block">Us.</span>
          </h2>
        </div>

        {/* Contact form + info */}
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-28">

          {/* Left — info */}
          <div className="space-y-8">
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Looking for something special? Have a question? Let us know and we&apos;ll get back to you soon.
            </p>

            <div className="space-y-4">
              {contactItems.map((item) => (
                <div key={item.label}
                  className="flex items-start gap-5 p-5 border border-white/5 hover:border-[#f5c842]/20 transition-colors duration-200"
                  style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}>
                  <span className="text-xl mt-0.5">{item.icon}</span>
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-gray-600 mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-gray-200 hover:text-[#f5c842] transition-colors font-medium text-sm">
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-gray-200 font-medium text-sm">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="p-8 border border-white/5"
            style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center space-y-4">
                <div className="text-5xl">⚡</div>
                <h3 className="text-2xl font-black uppercase text-[#f5c842]">Message Sent!</h3>
                <p className="text-gray-500 text-sm">We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { label: "Name", type: "text", value: name, setter: setName, placeholder: "Your name" },
                  { label: "Email *", type: "email", value: email, setter: setEmail, placeholder: "your@email.com" },
                ].map(({ label, type, value, setter, placeholder }) => (
                  <div key={label}>
                    <label className="block text-[10px] tracking-[0.3em] uppercase text-gray-600 mb-2">{label}</label>
                    <input
                      type={type}
                      required={label.includes("*")}
                      value={value}
                      onChange={(e) => setter(e.target.value)}
                      className="w-full bg-white/[0.03] border border-white/8 focus:border-[#f5c842]/50 text-white px-4 py-3 text-sm outline-none transition-colors duration-200"
                      placeholder={placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label className="block text-[10px] tracking-[0.3em] uppercase text-gray-600 mb-2">Message</label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-white/[0.03] border border-white/8 focus:border-[#f5c842]/50 text-white px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us what you need..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 text-sm font-black tracking-[0.2em] uppercase text-black bg-[#f5c842] hover:bg-[#ffd44d] transition-all duration-200 glow-gold"
                  style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Newsletter panel */}
        <div className="relative border border-[#f5c842]/15 p-10 md:p-16 text-center overflow-hidden"
          style={{ clipPath: "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 24px 100%, 0 calc(100% - 24px))" }}>
          {/* Glow */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ background: "radial-gradient(ellipse at 50% 0%, #f5c842 0%, transparent 70%)" }} />

          <div className="relative z-10">
            <div className="text-[10px] tracking-[0.5em] uppercase text-[#f5c842] font-bold mb-4">Newsletter</div>
            <h3 className="text-3xl md:text-4xl font-black uppercase mb-3">
              <span className="gold-shimmer">Get 10% Off</span>{" "}
              <span className="text-white">Your First Order</span>
            </h3>
            <p className="text-gray-500 text-sm mb-8 max-w-sm mx-auto">
              Sign up for our newsletter, promo list and future drops.
            </p>

            {newsletterDone ? (
              <p className="text-[#f5c842] font-bold tracking-wider uppercase text-sm">
                You&apos;re in — check your inbox for your 10% off code.
              </p>
            ) : (
              <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 bg-white/[0.03] border border-white/10 focus:border-[#f5c842]/50 text-white px-4 py-3 text-sm outline-none transition-colors"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="px-7 py-3 text-sm font-black tracking-wider uppercase text-black bg-[#f5c842] hover:bg-[#ffd44d] transition-all whitespace-nowrap"
                >
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
