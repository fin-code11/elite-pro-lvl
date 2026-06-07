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
    <section id="contact" className="relative py-40 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #000 0%, #020818 100%)" }}>

      {/* Blue glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full opacity-10"
        style={{ background: "radial-gradient(ellipse, #0066ff 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section label */}
        <div className="flex items-center gap-4 mb-4">
          <div className="h-px flex-1 max-w-[60px] bg-[#f5c842]" />
          <span className="text-xs tracking-[0.4em] uppercase text-[#f5c842] font-semibold">Get In Touch</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-black uppercase mb-20">
          <span className="text-white">Contact</span>{" "}
          <span className="gold-shimmer">Us</span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-24">
          {/* Left — info */}
          <div className="space-y-8">
            <p className="text-gray-300 text-lg leading-relaxed">
              Looking for something special? Have a question? Let us know and we&apos;ll get back to you soon.
            </p>

            {[
              {
                label: "Location",
                value: "Hamilton, ON, Canada",
                icon: "📍",
              },
              {
                label: "Email",
                value: "Deryk@eliteprolvl.com",
                href: "mailto:Deryk@eliteprolvl.com",
                icon: "✉️",
              },
              {
                label: "WhatsApp",
                value: "+1 (289) 439-1497",
                href: "https://wa.me/12894391497",
                icon: "💬",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 glass-card border-glow p-5"
                style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
              >
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <div className="text-xs tracking-widest uppercase text-gray-500 mb-1">{item.label}</div>
                  {item.href ? (
                    <a href={item.href} className="text-white hover:text-[#f5c842] transition-colors font-medium">
                      {item.value}
                    </a>
                  ) : (
                    <span className="text-white font-medium">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div
            className="glass-card border-glow p-8"
            style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center space-y-4">
                <div className="text-5xl">⚡</div>
                <h3 className="text-2xl font-black uppercase text-[#f5c842]">Message Sent!</h3>
                <p className="text-gray-400">We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-black/50 border border-blue-900/40 focus:border-[#f5c842] text-white px-4 py-3 text-sm outline-none transition-colors duration-200"
                    style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-black/50 border border-blue-900/40 focus:border-[#f5c842] text-white px-4 py-3 text-sm outline-none transition-colors duration-200"
                    style={{ clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))" }}
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-widest uppercase text-gray-500 mb-2">Message</label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-black/50 border border-blue-900/40 focus:border-[#f5c842] text-white px-4 py-3 text-sm outline-none transition-colors duration-200 resize-none"
                    placeholder="Tell us what you need..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 text-sm font-black tracking-widest uppercase text-black bg-[#f5c842] hover:bg-[#ffd44d] transition-all duration-200 glow-gold"
                  style={{ clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-20 text-center border-glow-gold p-10 glass-card"
          style={{ clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))" }}>
          <h3 className="text-2xl font-black uppercase mb-2">
            <span className="gold-shimmer">Get 10% Off</span> Your First Order
          </h3>
          <p className="text-gray-400 text-sm mb-6">Sign up for our newsletter, promo list and future drops.</p>
          {newsletterDone ? (
            <p className="text-[#f5c842] font-bold tracking-wider uppercase text-sm">You&apos;re in! Check your inbox for your 10% off code.</p>
          ) : (
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={handleNewsletter}>
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 bg-black/50 border border-blue-900/40 focus:border-[#f5c842] text-white px-4 py-3 text-sm outline-none"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-black tracking-wider uppercase text-black bg-[#f5c842] hover:bg-[#ffd44d] transition-all whitespace-nowrap"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
