import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import svcPerformance from "@/assets/services/performance-marketing.svg";
import svcSocial from "@/assets/services/social-media-management.svg";
import svcLinkedIn from "@/assets/services/linkedin-growth.svg";
import svcSeo from "@/assets/services/seo.svg";
import svcContent from "@/assets/services/content-creative.svg";
import svcWebAi from "@/assets/services/web-ai-automation.svg";

type Service = { num: string; title: string; desc: string; image: string };

const row1: Service[] = [
  { num: "01", title: "Performance Marketing", desc: "Run high-performing ad campaigns that generate leads and revenue.", image: svcPerformance },
  { num: "02", title: "Social Media Management", desc: "Build a strong brand presence and an engaged audience.", image: svcSocial },
  { num: "03", title: "LinkedIn Growth", desc: "Turn LinkedIn into your most powerful B2B growth engine.", image: svcLinkedIn },
];

const row2: Service[] = [
  { num: "04", title: "Search Engine Optimisation", desc: "Drive long-term organic traffic and visibility.", image: svcSeo },
  { num: "05", title: "Content & Creative", desc: "Create content that builds authority and demand.", image: svcContent },
  { num: "06", title: "Web & AI Automation", desc: "Build high-converting websites and automated marketing systems.", image: svcWebAi },
];

interface RowProps {
  items: Service[];
  defaultActive: number;
}

const ServicesRow = ({ items, defaultActive }: RowProps) => {
  const [active, setActive] = useState(defaultActive);

  return (
    <div className="flex flex-col md:flex-row gap-5">
      {items.map((s, i) => {
        const isActive = active === i;
        return (
          <article
            key={s.num}
            tabIndex={0}
            onMouseEnter={() => setActive(i)}
            onFocus={() => setActive(i)}
            className={`relative bg-background rounded-xl border border-border p-5 flex flex-col justify-between h-[380px] transition-[flex-grow,box-shadow] duration-500 ease-out hover:shadow-lg focus:shadow-lg focus:outline-none cursor-pointer ${
              isActive ? "md:flex-[2_1_0%]" : "md:flex-[1_1_0%]"
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

            {/* Image only when active */}
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
              {/* Hide arrow when card is in active/expanded state */}
              <ArrowUpRight
                className={`w-4 h-4 text-primary transition-opacity ${
                  isActive ? "opacity-0" : "opacity-60"
                }`}
              />
            </div>
          </article>
        );
      })}
    </div>
  );
};

const ServicesGrid = () => (
  <section className="pb-16 md:pb-20">
    <div className="container-main space-y-5 mt-12">
      {/* Row 1: 01 active by default */}
      <ServicesRow items={row1} defaultActive={0} />
      {/* Row 2: all compact by default; matches row 1's idle width since same flex ratios */}
      <ServicesRow items={row2} defaultActive={-1} />
    </div>
  </section>
);

export default ServicesGrid;
