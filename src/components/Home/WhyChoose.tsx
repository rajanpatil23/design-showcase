import { useState } from "react";
import icon1 from "@/assets/why/icon-1.svg";
import icon2 from "@/assets/why/icon-2.svg";
import icon3 from "@/assets/why/icon-3.svg";

type Item = { id: number; title: string; desc: string; icon: string; pointerAngle: number; corner: string };

// pointerAngle: rotation of the blue outer arc. 0deg = arc on top-left (points to top-left card).
const items: Item[] = [
  { id: 0, title: "Strategy + Execution", desc: "We don't just advise — we build and run your growth engine.", icon: icon1, pointerAngle: 0,   corner: "top-0 left-0 rounded-tl-2xl rounded-br-2xl" },
  { id: 1, title: "AI-Powered Marketing", desc: "Automation and AI tools drive efficiency and scale.",            icon: icon2, pointerAngle: 90,  corner: "top-0 right-0 rounded-tr-2xl rounded-bl-2xl" },
  { id: 2, title: "Performance Focused",  desc: "Every campaign is optimised for measurable ROI.",                icon: icon3, pointerAngle: 270, corner: "bottom-0 left-0 rounded-bl-2xl rounded-tr-2xl" },
  { id: 3, title: "Founder-Friendly",     desc: "We work closely with startups and growth-stage businesses.",     icon: icon1, pointerAngle: 180, corner: "bottom-0 right-0 rounded-br-2xl rounded-tl-2xl" },
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
                className={`relative overflow-hidden aspect-square bg-background rounded-2xl p-6 flex flex-col items-start justify-between cursor-pointer transition-all duration-300 outline-none ${
                  isActive
                    ? "ring-2 ring-primary shadow-[0_8px_28px_-8px_hsl(var(--primary)/0.35)]"
                    : "ring-1 ring-border/60 shadow-[0_4px_18px_-10px_hsl(var(--foreground)/0.18)]"
                }`}
              >
                {/* Blue corner accent — visible only on active card, in the corner closest to the dial */}
                <span
                  className={`pointer-events-none absolute w-6 h-6 bg-primary transition-opacity duration-300 ${item.corner} ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    clipPath:
                      item.id === 0 ? "path('M 0 0 L 24 0 Q 0 0 0 24 Z')"
                      : item.id === 1 ? "path('M 0 0 L 24 0 L 24 24 Q 24 0 0 0 Z')"
                      : item.id === 2 ? "path('M 0 0 Q 24 0 24 24 L 0 24 Z')"
                      : "path('M 24 0 Q 24 24 0 24 L 24 24 Z')",
                  }}
                />

                <img src={item.icon} alt="" width={64} height={64} className="w-16 h-16 -ml-2 -mt-2 relative z-10" loading="lazy" />
                <div className="relative z-10">
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

          {/* Center dial */}
          <div
            aria-hidden
            className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-2xl bg-background items-center justify-center z-10 shadow-[0_10px_28px_-6px_hsl(var(--primary)/0.45)] ring-1 ring-border"
          >
            {/* Big white circle */}
            <div className="relative w-[78px] h-[78px] rounded-full bg-[hsl(var(--primary)/0.06)] flex items-center justify-center">
              {/* Rotating blue arc ring — quarter arc that points to active card */}
              <div
                className="absolute inset-0 transition-transform duration-500 ease-out"
                style={{ transform: `rotate(${active.pointerAngle}deg)` }}
              >
                <svg viewBox="0 0 78 78" className="w-full h-full">
                  {/* Quarter arc on top-left, thick blue stroke */}
                  <path
                    d="M 39 6 A 33 33 0 0 0 6 39"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="7"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Inner solid blue circle with logo (fixed) */}
              <div className="relative w-11 h-11 rounded-full bg-primary flex items-center justify-center shadow-[0_2px_8px_hsl(var(--primary)/0.5)]">
                <span className="text-primary-foreground font-heading font-bold text-sm leading-none">np</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
