import brandActionSync from "@/assets/brands/action-sync.png";
import brandEduEdge from "@/assets/brands/the-edu-edge.png";
import brandYttGlobal from "@/assets/brands/ytt-global.svg";
import brandEduOcean from "@/assets/brands/the-edu-ocean.svg";
import brandInfosec from "@/assets/brands/infosec-minds.svg";
import brandWfyi from "@/assets/brands/wfyi.svg";
import brandEvolveU from "@/assets/brands/evolveu.svg";

const trustedBrands = [
  { name: "Action Sync", logo: brandActionSync, faded: true },
  { name: "The Edu Edge", logo: brandEduEdge },
  { name: "YTT Global", logo: brandYttGlobal },
  { name: "The Edu ocean", logo: brandEduOcean },
  { name: "Infosec Minds", logo: brandInfosec },
  { name: "WFYI", logo: brandWfyi },
  { name: "EvolveU", logo: brandEvolveU, faded: true },
];

const TrustedMarquee = () => {
  return (
    <div className="text-center">
      <span className="inline-block px-5 py-1.5 text-xs font-medium rounded-full border border-primary/30 bg-primary/5 text-primary">
        Trusted By
      </span>

      <div className="relative mt-6 overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max animate-scroll-left">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0" aria-hidden={half === 1}>
              {Array.from({ length: 3 }).flatMap((_, rep) =>
                trustedBrands.map((brand, i) => (
                  <div key={`${brand.name}-${half}-${rep}-${i}`} className="flex flex-col items-center gap-3 shrink-0 px-4">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-2xl border border-border bg-background flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                      <img src={brand.logo} alt={brand.name} className="w-14 h-14 md:w-16 md:h-16 object-contain" loading="lazy" width={64} height={64} />
                    </div>
                    <span className="text-xs md:text-sm text-foreground/80 font-medium">{brand.name}</span>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedMarquee;
