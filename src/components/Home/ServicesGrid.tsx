import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import svcPerformance from "@/assets/services/performance-marketing.svg";
import svcSocial from "@/assets/services/social-media-management.svg";
import svcLinkedIn from "@/assets/services/linkedin-growth.svg";
import svcSeo from "@/assets/services/seo.svg";
import svcContent from "@/assets/services/content-creative.svg";
import svcWebAi from "@/assets/services/web-ai-automation.svg";

type Service = { id: string; num: string; title: string; desc: string; image: string };

const row1: Service[] = [
  { id: "01", num: "01", title: "Performance Marketing", desc: "Run high-performing ad campaigns that generate leads and revenue.", image: svcPerformance },
  { id: "02", num: "02", title: "Social Media Management", desc: "Build a strong brand presence and an engaged audience.", image: svcSocial },
  { id: "03", num: "03", title: "LinkedIn Growth", desc: "Turn LinkedIn into your most powerful B2B growth engine.", image: svcLinkedIn },
];

const row2: Service[] = [
  { id: "04", num: "04", title: "Search Engine Optimisation", desc: "Drive long-term organic traffic and visibility.", image: svcSeo },
  { id: "05", num: "05", title: "Content & Creative", desc: "Create content that builds authority and demand.", image: svcContent },
  { id: "06", num: "06", title: "Web & AI Automation", desc: "Build high-converting websites and automated marketing systems.", image: svcWebAi },
];

interface CardProps {
  s: Service;
  isActive: boolean;
  onActivate: () => void;
  /**
   * Compact (idle) flex-basis. Row 2 uses a fixed basis so cards keep row-1's idle
   * width and the empty space is centered around them rather than stretching them.
   */
  idleBasisClass: string;
  /** Whether this card is allowed to expand on hover. Row 2 cards never expand. */
  canExpand: boolean;
}

const ServiceCard = ({ s, isActive, onActivate, idleBasisClass }: CardProps) => (
  <article
    tabIndex={0}
    onMouseEnter={onActivate}
    onFocus={onActivate}
    className={`relative bg-background rounded-xl border border-border p-5 flex flex-col justify-between h-[380px] transition-[flex-basis,box-shadow] duration-500 ease-out hover:shadow-lg focus:shadow-lg focus:outline-none cursor-pointer md:flex-grow-0 md:flex-shrink-0 ${
      isActive
        ? "md:basis-[calc((100%-2.5rem)/2)]"
        : idleBasisClass
    }`}
  >
    <div>
      <h3
        className={`font-heading font-semibold text-base mb-1.5 transition-colors ${
          isActive ? "text-primary" : "text-foreground"
        }`}
      >
        {s.title}
      </h3>
      <p className="text-xs text-muted-foreground leading-relaxed max-w-[34ch]">{s.desc}</p>
    </div>

    <div
      className={`overflow-hidden rounded-lg transition-all duration-500 ease-out ${
        isActive ? "max-h-44 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"
      }`}
    >
      <img
        src={s.image}
        alt={s.title}
        className="w-full h-40 object-contain rounded-lg"
        loading="lazy"
        width={943}
        height={597}
      />
    </div>

    <div className="flex items-end justify-between mt-auto pt-4">
      <span className="text-5xl font-heading font-bold text-primary/80 leading-none">{s.num}</span>
      <ArrowUpRight
        className={`w-4 h-4 text-primary transition-opacity ${isActive ? "opacity-0" : "opacity-60"}`}
      />
    </div>
  </article>
);

const ServicesGrid = () => {
  // Single global active id — only one card can be in expanded state at a time.
  // Row 2 cards are not allowed to activate, so this only ever holds a row-1 id.
  const [activeId, setActiveId] = useState<string>("01");

  // Both rows use the SAME idle card width: ~25% of the container (3 idle cards + 1 expanded
  // worth of space ≈ 4 units). Active card in row 1 absorbs the remaining width via flex-grow.
  const idleBasis = "md:basis-[calc((100%-2.5rem)/4)]";
  const row1IdleBasis = idleBasis;
  const row2IdleBasis = idleBasis;

  return (
    <section className="pb-16 md:pb-20">
      <div className="container-main space-y-5 mt-12">
        {/* Row 1 — one card always active */}
        <div className="flex flex-col md:flex-row gap-5">
          {row1.map((s) => (
            <ServiceCard
              key={s.id}
              s={s}
              isActive={activeId === s.id}
              onActivate={() => setActiveId(s.id)}
              idleBasisClass={row1IdleBasis}
              canExpand
            />
          ))}
        </div>

        {/* Row 2 — all compact, centered, never expand */}
        <div className="flex flex-col md:flex-row md:justify-center gap-5">
          {row2.map((s) => (
            <ServiceCard
              key={s.id}
              s={s}
              isActive={false}
              onActivate={() => {}}
              idleBasisClass={row2IdleBasis}
              canExpand={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
