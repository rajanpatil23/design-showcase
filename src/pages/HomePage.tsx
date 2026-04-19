import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, BarChart3, Users, Code, Star, Quote, Play } from "lucide-react";
import { Link } from "react-router-dom";
import SectionLabel from "@/components/SectionLabel";
import Hero from "@/components/Home/Hero";
import ServicesGrid from "@/components/Home/ServicesGrid";
import WhyChoose from "@/components/Home/WhyChoose";
import CaseStudies from "@/components/Home/CaseStudies";
import ResourcesShowcase from "@/components/Home/ResourcesShowcase";
import ReviewCarousel from "@/components/Home/ReviewCarousel";
import blogIllustration from "@/assets/blog-illustration.jpg";

const heroStats = [
  { value: "2M+", label: "Content Impressions Generated" },
  { value: "1000+", label: "Qualified Leads Generated" },
  { value: "20+", label: "Brands Scaled" },
  { value: "10+", label: "Marketing Systems Automated" },
];


const steps = [
  { num: "01", title: "Discover", desc: "We learn your business, goals, and audience." },
  { num: "02", title: "Strategize", desc: "We build a custom growth strategy tailored to you." },
  { num: "03", title: "Launch", desc: "We execute campaigns, content, and automation." },
  { num: "04", title: "Scale", desc: "We optimise and scale what works to maximise ROI." },
];

const whyUs = [
  { title: "Strategy + Execution", desc: "We don't just advise — we build and run your growth engine.", icon: <BarChart3 className="w-6 h-6 text-primary" /> },
  { title: "AI-Powered Marketing", desc: "Automation and AI tools drive efficiency and scale.", icon: <Code className="w-6 h-6 text-primary" /> },
  { title: "Performance Focused", desc: "Every campaign is optimised for measurable ROI.", icon: <Star className="w-6 h-6 text-primary" /> },
  { title: "Founder-Friendly", desc: "We work closely with startups and growth-stage businesses.", icon: <Users className="w-6 h-6 text-primary" /> },
];

const resourceTabs = ["Blog", "Free Tools", "Templates", "Community", "Live Metrics", "Support"];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Spacer above stats */}
      <div aria-hidden className="h-8 md:h-12" />

      {/* Stats + Services intro — shared grid, stats sit INSIDE the grid cells */}
      <div className="relative">
        {/* Full-bleed horizontal lines that extend left & right beyond the rail.
            Top line sits at the top of stats grid; bottom line sits at the bottom edge of stats grid. */}
        <div aria-hidden className="hidden md:block absolute left-0 right-0 top-0 h-px bg-border/70" />
        <div aria-hidden className="hidden md:block absolute left-0 right-0 h-px bg-border/70" style={{ top: "calc(200px + 1px)" }} />
        <div className="container-main">
          {/* The grid lives inside the rail so it aligns with logo/nav/cards */}
          <div className="relative">
            {/* Vertical line extensions ABOVE the stats grid (continue up through the hero/marquee region).
                Positioned to match the 4 inner column borders (25/50/75) + the 2 outer borders (0/100). */}
            <div
              aria-hidden
              className="hidden md:block absolute left-0 right-0 pointer-events-none"
              style={{
                bottom: "100%",
                height: "120px",
                maskImage: "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to top, black 0%, black 40%, transparent 100%)",
              }}
            >
              {[0, 25, 50, 75, 100].map((leftPct) => (
                <div
                  key={`v-up-${leftPct}`}
                  className="absolute top-0 bottom-0 w-px bg-border/70"
                  style={{ left: `${leftPct}%`, transform: leftPct === 100 ? "translateX(-1px)" : "translateX(0)" }}
                />
              ))}
            </div>

            {/* Stats row: 4 equal columns. Borders form the grid; circles mark intersections. */}
            <div className="relative grid grid-cols-2 md:grid-cols-4 border-t border-b border-l border-r border-border/70">
              {/* Vertical dividers (only between cells) */}
              {heroStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`relative h-[180px] md:h-[200px] flex flex-col items-center justify-center text-center px-4 ${
                    i > 0 ? "md:border-l border-border/70" : ""
                  } ${i === 2 ? "border-l md:border-l" : ""} ${
                    i < 2 && "border-b md:border-b-0"
                  }`}
                >
                  <p className="text-4xl md:text-5xl font-heading font-bold text-primary leading-none">
                    {stat.value}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-3 max-w-[16ch]">
                    {stat.label}
                  </p>
                </div>
              ))}

              {/* Intersection circles — top edge */}
              {[0, 25, 50, 75, 100].map((leftPct) => (
                <span
                  key={`top-${leftPct}`}
                  aria-hidden
                  className="hidden md:block absolute -top-[8px] w-4 h-4 rounded-full border border-border bg-background -translate-x-1/2 z-20 shadow-[0_2px_6px_hsl(var(--foreground)/0.18)]"
                  style={{ left: `${leftPct}%` }}
                />
              ))}
              {/* Intersection circles — bottom edge */}
              {[0, 25, 50, 75, 100].map((leftPct) => (
                <span
                  key={`bot-${leftPct}`}
                  aria-hidden
                  className="hidden md:block absolute -bottom-[8px] w-4 h-4 rounded-full border border-border bg-background -translate-x-1/2 z-20 shadow-[0_2px_6px_hsl(var(--foreground)/0.18)]"
                  style={{ left: `${leftPct}%` }}
                />
              ))}
            </div>

            {/* Services intro sits below the stats grid, but the vertical guides continue down */}
            <div className="relative">
              {/* Continuation of vertical lines behind the eyebrow + heading, fading out */}
              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
                }}
              >
                {[0, 25, 50, 75, 100].map((leftPct) => (
                  <div
                    key={`v-${leftPct}`}
                    className="hidden md:block absolute top-0 bottom-0 w-px bg-border/70"
                    style={{ left: `${leftPct}%`, transform: leftPct === 100 ? "translateX(-1px)" : "translateX(0)" }}
                  />
                ))}
              </div>

              <section className="relative pt-14 md:pt-16 pb-2">
                <SectionLabel label="Services" />
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-center max-w-2xl mx-auto mt-4">
                  The Future of Digital Growth In{" "}
                  <span className="gradient-text">One Unified Platform</span>
                </h2>
              </section>
            </div>
          </div>
        </div>
      </div>

      {/* Services cards — expandable rows. Active card grows wider + shows image; others compact. Both rows share identical flex ratios so widths align. */}
      <ServicesGrid />

      {/* How It Works — Dark Section */}
      <section className="py-16 md:py-24 bg-[#09233C]">
        <div className="container-main">
          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider rounded-full border border-white/20 bg-white text-primary">
              Why Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-white">
            How <span className="gradient-text">Connecttly</span> Works
          </h2>

          {/* Cards + connector arrows */}
          <div className="relative mt-16 max-w-5xl mx-auto">
            {/* Decorative dashed arrows — desktop only.
                Top arrows arc from card 1 -> 2 and card 3 -> 4.
                Bottom arrow arcs from card 2 -> 3. */}
            <svg
              aria-hidden
              className="hidden md:block absolute inset-x-0 -top-12 w-full h-12 pointer-events-none overflow-visible"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              {/* Card 1 (right side ~16%) -> Card 2 (left side ~34%) */}
              <path
                d="M 16 12 Q 25 -2 34 12"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.4"
                strokeLinecap="butt"
                vectorEffect="non-scaling-stroke"
                className="animated-dash"
              />
              {/* Card 3 (right side ~66%) -> Card 4 (left side ~84%) */}
              <path
                d="M 66 12 Q 75 -2 84 12"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.4"
                strokeLinecap="butt"
                vectorEffect="non-scaling-stroke"
                className="animated-dash"
              />
            </svg>

            <svg
              aria-hidden
              className="hidden md:block absolute inset-x-0 -bottom-12 w-full h-12 pointer-events-none overflow-visible"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              {/* Card 2 (right side ~41%) -> Card 3 (left side ~59%) */}
              <path
                d="M 41 0 Q 50 16 59 0"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.4"
                strokeLinecap="butt"
                vectorEffect="non-scaling-stroke"
                className="animated-dash"
              />
            </svg>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="rounded-2xl p-6 bg-primary min-h-[210px] flex flex-col"
                >
                  <span className="text-5xl md:text-6xl font-heading font-bold leading-none text-white">
                    {step.num}
                  </span>
                  <h3 className="font-heading font-semibold text-lg mt-5 text-white">
                    {step.title}
                  </h3>
                  {step.desc && (
                    <p className="text-xs mt-2 leading-relaxed text-white/75">
                      {step.desc}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Brands Choose */}
      <WhyChoose />

      {/* Case Studies — Dark Section */}
      <CaseStudies />

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="container-main">
          <SectionLabel label="Testimonials" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mt-4 mb-10">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>
        <ReviewCarousel noPadding />
      </section>

      {/* Resource Hub */}
      <ResourcesShowcase />
    </div>
  );
};

export default HomePage;
