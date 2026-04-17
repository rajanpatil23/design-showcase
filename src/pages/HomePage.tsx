import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, BarChart3, Users, Code, Star, Quote, Play } from "lucide-react";
import { Link } from "react-router-dom";
import SectionLabel from "@/components/SectionLabel";
import Hero from "@/components/Home/Hero";
import ServicesGrid from "@/components/Home/ServicesGrid";
import testimonialPerson from "@/assets/testimonial-person.jpg";
import caseStudyDashboard from "@/assets/case-study-dashboard.jpg";
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
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider rounded-full border border-primary/40 bg-primary/10 text-primary">
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
              className="hidden md:block absolute inset-x-0 -top-10 w-full h-10 pointer-events-none"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <defs>
                <marker id="arrowhead-top" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#ffffff" />
                </marker>
              </defs>
              {/* Card 1 (~12.5%) -> Card 2 (~37.5%) */}
              <path
                d="M 12.5 9 Q 25 -6 37.5 9"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeDasharray="0.1 3"
                vectorEffect="non-scaling-stroke"
                markerEnd="url(#arrowhead-top)"
              />
              {/* Card 3 (~62.5%) -> Card 4 (~87.5%) */}
              <path
                d="M 62.5 9 Q 75 -6 87.5 9"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeDasharray="0.1 3"
                vectorEffect="non-scaling-stroke"
                markerEnd="url(#arrowhead-top)"
              />
            </svg>

            <svg
              aria-hidden
              className="hidden md:block absolute inset-x-0 -bottom-10 w-full h-10 pointer-events-none"
              viewBox="0 0 100 10"
              preserveAspectRatio="none"
            >
              <defs>
                <marker id="arrowhead-bot" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                  <path d="M0,0 L6,3 L0,6 Z" fill="#ffffff" />
                </marker>
              </defs>
              {/* Card 2 (~37.5%) -> Card 3 (~62.5%) */}
              <path
                d="M 37.5 1 Q 50 16 62.5 1"
                fill="none"
                stroke="#ffffff"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeDasharray="0.1 3"
                vectorEffect="non-scaling-stroke"
                markerEnd="url(#arrowhead-bot)"
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
          <div className="grid md:grid-cols-2 gap-5 mt-12 max-w-4xl mx-auto relative">
            {/* Center decorative element */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-primary items-center justify-center z-10 shadow-lg">
              <span className="text-white font-bold text-lg">n</span>
            </div>
            {whyUs.map((item) => (
              <div key={item.title} className="bg-background rounded-xl border border-border p-6 flex flex-col items-start">
                <div className="w-10 h-10 rounded-lg bg-ct-blue-light flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-heading font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies — Dark Section */}
      <section className="py-16 md:py-20 bg-ct-dark">
        <div className="container-main">
          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider rounded-full border border-primary/40 bg-primary/10 text-primary">
              Case Study
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-white">
            Real <span className="gradient-text">Growth Stories</span>
          </h2>
          <div className="mt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Case Study List */}
            <div className="space-y-0">
              <div className="border-b border-white/10 pb-5 mb-5">
                <h3 className="font-heading font-semibold text-lg text-white">EdTech Brand</h3>
                <p className="text-sm text-white/60 mt-1">2M+ impressions generated through LinkedIn content strategy and organic growth.</p>
                <button className="text-sm text-primary font-semibold mt-3 flex items-center gap-1 hover:underline">
                  Read Case Study <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="border-b border-white/10 pb-5 mb-5">
                <h3 className="font-heading font-semibold text-lg text-white/50">B2B SaaS Startup</h3>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-white/50">Service Business</h3>
              </div>
            </div>
            {/* Right - Dashboard Image */}
            <div className="rounded-xl overflow-hidden">
              <img src={caseStudyDashboard} alt="Case Study Dashboard" className="w-full object-cover rounded-xl" loading="lazy" width={640} height={512} />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-20">
        <div className="container-main">
          <SectionLabel label="Testimonials" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mt-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-0 items-stretch">
              {/* Left - Testimonial Text */}
              <div className="bg-background rounded-l-xl border border-border p-7 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-full overflow-hidden bg-ct-blue-light">
                    <img src={testimonialPerson} alt="Kinjal M Jain" className="w-full h-full object-cover" loading="lazy" width={44} height={44} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm">Kinjal M Jain</p>
                    <p className="text-xs text-muted-foreground">Founder, Mending Mind</p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-3" />
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  Connecttly helped us harness AI-powered analytics to uncover insights we were missing. From dashboards to automation, they gave clarity and optimized campaigns in real time. Like having a full analytics team on demand.
                </p>
              </div>
              {/* Right - Person Image with video overlay */}
              <div className="relative rounded-r-xl overflow-hidden min-h-[320px]">
                <img src={testimonialPerson} alt="Kinjal M Jain" className="w-full h-full object-cover absolute inset-0" loading="lazy" width={400} height={400} />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg cursor-pointer hover:bg-primary/90 transition-colors">
                    <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                  </div>
                </div>
                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
                  <p className="text-white font-heading font-semibold text-sm">Kinjal M Jain</p>
                  <p className="text-white/70 text-xs">Founder of Mending Minds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Hub */}
      <section className="py-16 md:py-20">
        <div className="container-main">
          <SectionLabel label="Resource Hub" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mt-4">
            Fuel Your <span className="gradient-text">Marketing Success</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {resourceTabs.map((tab, i) => (
              <button
                key={tab}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-muted-foreground hover:bg-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-10 max-w-3xl mx-auto bg-ct-section rounded-xl border border-border p-8 grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-2xl font-heading font-semibold gradient-text">Blog</h3>
              <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                Benchmark reports and platform updates to keep you always ahead in LinkedIn and social media strategy.
              </p>
              <button className="text-sm text-primary font-semibold mt-5 flex items-center gap-1 hover:underline">
                Read Updates <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img src={blogIllustration} alt="Blog" className="w-full object-cover rounded-lg" loading="lazy" width={512} height={512} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
