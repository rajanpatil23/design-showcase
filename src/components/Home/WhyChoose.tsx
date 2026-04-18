import { useState } from "react";
import icon1 from "@/assets/why/icon-1.svg";
import icon2 from "@/assets/why/icon-2.svg";
import icon3 from "@/assets/why/icon-3.svg";

type Item = {
  id: number;
  title: string;
  desc: string;
  icon: string;
  pointerAngle: number; // rotation of blue ring + corner fill (deg). 0 = top-left corner.
  cornerClasses: string; // which corner of the dial-square gets filled
};

// Corner mapping (visual): card 0 = top-left, card 1 = top-right, card 3 = bottom-left, card 2 = bottom-right
const items: Item[] = [
  { id: 0, title: "Strategy + Execution", desc: "We don't just advise — we build and run your growth engine.", icon: icon1, pointerAngle: 225, cornerClasses: "top-0 left-0 rounded-tl-2xl" },
  { id: 1, title: "AI-Powered Marketing", desc: "Automation and AI tools drive efficiency and scale.",            icon: icon2, pointerAngle: 315, cornerClasses: "top-0 right-0 rounded-tr-2xl" },
  { id: 2, title: "Performance Focused",  desc: "Every campaign is optimised for measurable ROI.",                icon: icon3, pointerAngle: 45,  cornerClasses: "bottom-0 right-0 rounded-br-2xl" },
  { id: 3, title: "Founder-Friendly",     desc: "We work closely with startups and growth-stage businesses.",     icon: icon1, pointerAngle: 135, cornerClasses: "bottom-0 left-0 rounded-bl-2xl" },
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

        <div className="relative grid md:grid-cols-2 gap-7 mt-12 max-w-2xl mx-auto">
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
                    ? "ring-[1.5px] ring-primary shadow-[0_8px_28px_-10px_hsl(var(--primary)/0.35)]"
                    : "ring-1 ring-border/60 shadow-[0_4px_18px_-12px_hsl(var(--foreground)/0.18)]"
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

          {/* CENTER DIAL — overlaps card corners */}
          <div
            aria-hidden
            className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[124px] h-[124px] z-20"
          >
            {/* Layer 1: rounded SQUARE parent (white) with shadow */}
            <div className="absolute inset-0 rounded-2xl bg-background shadow-[0_12px_30px_-8px_hsl(var(--primary)/0.45)] ring-1 ring-border/60 overflow-hidden">
              {/* Layer 1a: corner fill (primary) on the inside corner pointing to active card */}
              {items.map((it) => (
                <span
                  key={`corner-${it.id}`}
                  className={`absolute w-7 h-7 bg-primary transition-opacity duration-300 ${it.cornerClasses} ${
                    it.id === activeId ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Layer 2: white circle centered inside the square (creates the gap-ring around inner blue) */}
            <div className="absolute inset-[10px] rounded-full bg-background flex items-center justify-center">
              {/* Layer 3: rotating BLUE RING segment in the gap, pointing at active card */}
              <div
                className="absolute inset-0 transition-transform duration-500 ease-out"
                style={{ transform: `rotate(${active.pointerAngle}deg)` }}
              >
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  {/* Arc sits in the gap between outer white circle and inner blue circle.
                      Centered on the top-left direction (-135° from +x axis) when rotation = 0.
                      We orient base arc around angle 225° (pointing to top-left) and rotate from there. */}
                  <path
                    d="M 22 22 A 32 32 0 0 1 50 14"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="6"
                    strokeLinecap="round"
                    transform="rotate(-22.5 50 50)"
                  />
                </svg>
              </div>

              {/* Layer 4: inner BLUE circle with logo (fixed, never rotates) */}
              <div className="relative w-[58px] h-[58px] rounded-full bg-primary flex items-center justify-center shadow-[0_2px_10px_hsl(var(--primary)/0.55)]">
                <span className="text-primary-foreground font-heading font-bold text-base leading-none">np</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
