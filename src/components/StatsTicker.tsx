export default function StatsTicker() {
  const items = [
    "Next LVL Grip",
    "Elite Durability",
    "Goalkeeper Driven",
    "Hamilton · Ontario",
    "Phantom Elite Series",
    "Shadow Pro Series",
    "Real World Performance",
    "No Compromises",
    "Built For Keepers",
    "Next LVL Grip",
    "Elite Durability",
    "Goalkeeper Driven",
    "Hamilton · Ontario",
    "Phantom Elite Series",
    "Shadow Pro Series",
    "Real World Performance",
    "No Compromises",
    "Built For Keepers",
  ];

  return (
    <div className="relative overflow-hidden py-4 border-y border-white/5" style={{ background: "#0a0a0a" }}>
      {/* Left fade */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10"
        style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10"
        style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }} />

      <div className="flex" style={{ animation: "ticker 30s linear infinite" }}>
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-6 shrink-0 px-8">
            <span className="text-xs font-bold tracking-[0.3em] uppercase whitespace-nowrap"
              style={{ color: i % 3 === 0 ? "#f5c842" : "rgba(255,255,255,0.35)" }}>
              {item}
            </span>
            <div className="w-1 h-1 rounded-full bg-[#f5c842]/30 shrink-0" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
