import { useState } from "react";
import icon1 from "@/assets/why/icon-1.svg";
import icon2 from "@/assets/why/icon-2.svg";
import icon3 from "@/assets/why/icon-3.svg";
import dialPointer from "@/assets/why/dial-pointer.svg";

type Item = { id: number; title: string; desc: string; icon: string; angle: number };

// Pointer SVG points UP by default. We rotate so it points toward the active card.
const items: Item[] = [
  { id: 0, title: "Strategy + Execution", desc: "We don't just advise — we build and run your growth engine.", icon: icon1, angle: -45 },   // top-left
  { id: 1, title: "AI-Powered Marketing", desc: "Automation and AI tools drive efficiency and scale.",            icon: icon2, angle: 45 },    // top-right
  { id: 2, title: "Performance Focused",  desc: "Every campaign is optimised for measurable ROI.",                icon: icon3, angle: -135 },  // bottom-left
  { id: 3, title: "Founder-Friendly",     desc: "We work closely with startups and growth-stage businesses.",     icon: icon1, angle: 135 },   // bottom-right
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

        <div className="relative grid md:grid-cols-2 gap-5 mt-12 max-w-3xl mx-auto">
          {items.map((item) => {
            const isActive = item.id === activeId;
            return (
              <article
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onFocus={() => setActiveId(item.id)}
                tabIndex={0}
                className={`bg-background rounded-2xl p-6 flex flex-col items-start cursor-pointer transition-all duration-300 border-2 outline-none ${
                  isActive
                    ? "border-primary shadow-[0_8px_24px_-8px_hsl(var(--primary)/0.35)]"
                    : "border-transparent shadow-[0_4px_18px_-8px_hsl(var(--foreground)/0.15)]"
                }`}
              >
                <img src={item.icon} alt="" width={64} height={64} className="w-16 h-16 -ml-2 -mt-2" loading="lazy" />
                <h3
                  className={`font-heading font-semibold text-lg mt-3 mb-2 transition-colors ${
                    isActive ? "text-primary" : "text-foreground"
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </article>
            );
          })}

          {/* Center dial */}
          <div
            aria-hidden
            className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-background items-center justify-center z-10 shadow-[0_8px_24px_-4px_hsl(var(--primary)/0.35)] ring-1 ring-border"
          >
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-[hsl(var(--primary)/0.75)] flex items-center justify-center">
              <img
                src={dialPointer}
                alt=""
                width={28}
                height={20}
                className="transition-transform duration-500 ease-out"
                style={{ transform: `rotate(${active.angle}deg)` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
