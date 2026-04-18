import { useState } from "react";
import icon1 from "@/assets/why/icon-1.svg";
import icon2 from "@/assets/why/icon-2.svg";
import icon3 from "@/assets/why/icon-3.svg";

type Item = { id: number; title: string; desc: string; icon: string; pointerAngle: number };

// pointerAngle: rotation of the blue arc indicator. 0deg = points to top-left card.
const items: Item[] = [
  { id: 0, title: "Strategy + Execution", desc: "We don't just advise — we build and run your growth engine.", icon: icon1, pointerAngle: 0 },
  { id: 1, title: "AI-Powered Marketing", desc: "Automation and AI tools drive efficiency and scale.",            icon: icon2, pointerAngle: 90 },
  { id: 2, title: "Performance Focused",  desc: "Every campaign is optimised for measurable ROI.",                icon: icon3, pointerAngle: 270 },
  { id: 3, title: "Founder-Friendly",     desc: "We work closely with startups and growth-stage businesses.",     icon: icon1, pointerAngle: 180 },
];

const WhyChoose = () => {
  const [activeId, setActiveId] = useState(0);
  const active = items.find((i) => i.id === activeId)!;

  return (
    <section className="py-16 md:py-20 bg-ct-section">
      <div className="container-main">
        <div className="flex justify-center mb-6">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider rounded-full border border-primary/30 bg-primary/5 text-primary">
            How Connecttly Works
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
          Why Brands Choose <span className="gradient-text">Connecttly</span>
        </h2>

        <div className="relative grid md:grid-cols-2 gap-6 mt-12 max-w-2xl mx-auto">
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <article
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onFocus={() => setActiveId(item.id)}
                tabIndex={0}
                className={`relative aspect-square bg-background rounded-2xl p-6 flex flex-col items-start justify-between cursor-pointer transition-all duration-300 outline-none ${
                  isActive
                    ? "ring-2 ring-primary shadow-[0_8px_28px_-8px_hsl(var(--primary)/0.35)]"
                    : "ring-1 ring-border/60 shadow-[0_4px_18px_-10px_hsl(var(--foreground)/0.18)]"
                }`}
              >
                <img src={item.icon} alt="" width={64} height={64} className="w-16 h-16 -ml-2 -mt-2" loading="lazy" />
                <div>
                  <h3
                    className={`font-heading font-semibold text-lg mb-2 transition-colors ${
                      isActive ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </article>
            );
          })}

          {/* Center dial — fixed white tile with soft blue inner glow + rotating arc pointer */}
          <div
            aria-hidden
            className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[88px] h-[88px] rounded-2xl bg-background items-center justify-center z-10 shadow-[0_10px_28px_-6px_hsl(var(--primary)/0.45)] ring-1 ring-border"
          >
            {/* Soft blue concentric glow */}
            <div className="relative w-16 h-16 rounded-full bg-[hsl(var(--primary)/0.10)] flex items-center justify-center">
              <div className="absolute inset-2 rounded-full bg-[hsl(var(--primary)/0.18)]" />

              {/* Rotating arc pointer — quarter-circle blue sector that sweeps to the active card */}
              <div
                className="absolute inset-0 transition-transform duration-500 ease-out"
                style={{ transform: `rotate(${active.pointerAngle}deg)` }}
              >
                <svg viewBox="0 0 64 64" className="w-full h-full overflow-visible">
                  {/* top-left quadrant arc/sector */}
                  <path
                    d="M 32 32 L 32 0 A 32 32 0 0 0 0 32 Z"
                    fill="hsl(var(--primary))"
                    opacity="0.95"
                  />
                </svg>
              </div>

              {/* Fixed logo bubble in the center (does not rotate) */}
              <div className="relative w-9 h-9 rounded-full bg-background flex items-center justify-center shadow-[0_2px_8px_hsl(var(--primary)/0.35)] z-10">
                <span className="text-primary font-heading font-bold text-sm leading-none">np</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
