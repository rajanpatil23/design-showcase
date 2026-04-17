import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, BarChart3, Users, Globe, Megaphone, PenTool, Code, Star, Quote, ExternalLink, Play } from "lucide-react";
import { Link } from "react-router-dom";
import SectionLabel from "@/components/SectionLabel";
import Hero from "@/components/Home/Hero";
import testimonialPerson from "@/assets/testimonial-person.jpg";
import caseStudyDashboard from "@/assets/case-study-dashboard.jpg";
import blogIllustration from "@/assets/blog-illustration.jpg";
import performanceMarketingCard from "@/assets/performance-marketing-card.jpg";

const trustedBrands = [
  { name: "Action Sync", icon: "✕" },
  { name: "The Edu Edge", icon: "🎓" },
  { name: "YTT Global", icon: "🏔" },
  { name: "The Edu Ocean", icon: "☀" },
  { name: "Infosec Minds", icon: "ℹ" },
  { name: "WFYI", icon: "✓" },
  { name: "EvolveU", icon: "◎" },
];

const heroStats = [
  { value: "2M+", label: "Content Impressions Generated" },
  { value: "1000+", label: "Qualified Leads Generated" },
  { value: "20+", label: "Brands Scaled" },
  { value: "10+", label: "Marketing Systems Automated" },
];

const services = [
  { num: "01", title: "Performance Marketing", desc: "Run high-performing ad campaigns that generate leads and revenue.", icon: <BarChart3 className="w-5 h-5 text-primary" />, hasImage: true },
  { num: "02", title: "Social Media Management", desc: "Build a strong brand presence and an engaged audience.", icon: <Megaphone className="w-5 h-5 text-primary" /> },
  { num: "03", title: "LinkedIn Growth", desc: "Turn LinkedIn into your most powerful B2B growth engine.", icon: <Users className="w-5 h-5 text-primary" /> },
  { num: "04", title: "Search Engine Optimisation", desc: "Drive long-term organic traffic and visibility.", icon: <Globe className="w-5 h-5 text-primary" /> },
  { num: "05", title: "Content & Creative", desc: "Create content that builds authority and demand.", icon: <PenTool className="w-5 h-5 text-primary" /> },
  { num: "06", title: "Web & AI Automation", desc: "Build high-converting websites and automated marketing systems.", icon: <Code className="w-5 h-5 text-primary" /> },
];

const steps = [
  { num: "01", title: "Discover", desc: "" },
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

      {/* Trusted By + Stats */}
      <section className="pb-16 md:pb-20">
        <div className="container-main text-center">
          <span className="inline-block px-4 py-1 text-[10px] font-semibold tracking-wider rounded-full border border-primary/30 bg-primary/5 text-primary uppercase">
            Trusted By
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mt-6">
            {trustedBrands.map((brand) => (
              <div key={brand.name} className="flex flex-col items-center gap-1.5">
                <div className="w-14 h-14 rounded-xl border border-border bg-background flex items-center justify-center text-lg shadow-sm">
                  {brand.icon}
                </div>
                <span className="text-[10px] text-muted-foreground font-medium">{brand.name}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14 max-w-3xl mx-auto">
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />


      {/* Services Section */}
      <section className="py-16 md:py-20">
        <div className="container-main">
          <SectionLabel label="Services" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center max-w-2xl mx-auto mt-4">
            The Future of Digital Growth In{" "}
            <span className="gradient-text">One Unified Platform</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {services.map((s) => (
              <div
                key={s.num}
                className="bg-background rounded-xl border border-border p-5 flex flex-col justify-between hover:shadow-lg transition-shadow group min-h-[240px]"
              >
                <div>
                  <h3 className="font-heading font-semibold text-base mb-1.5">{s.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                {s.hasImage && (
                  <div className="mt-3 rounded-lg overflow-hidden">
                    <img src={performanceMarketingCard} alt="Performance Marketing" className="w-full h-28 object-cover rounded-lg" loading="lazy" width={512} height={512} />
                  </div>
                )}
                <div className="flex items-end justify-between mt-auto pt-4">
                  <span className="text-4xl font-heading font-bold text-muted-foreground/15 leading-none">{s.num}</span>
                  <ArrowUpRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Dark Section */}
      <section className="py-16 md:py-20 bg-ct-dark">
        <div className="container-main">
          <div className="flex justify-center mb-6">
            <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider rounded-full border border-primary/40 bg-primary/10 text-primary">
              Why Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-white">
            How <span className="gradient-text">Connecttly</span> Works
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 relative">
            {/* Decorative dotted lines */}
            <div className="hidden md:block absolute top-0 left-[25%] w-px h-full" style={{ borderLeft: '2px dashed rgba(255,255,255,0.1)' }} />
            <div className="hidden md:block absolute top-0 left-[50%] w-px h-full" style={{ borderLeft: '2px dashed rgba(255,255,255,0.1)' }} />
            <div className="hidden md:block absolute top-0 left-[75%] w-px h-full" style={{ borderLeft: '2px dashed rgba(255,255,255,0.1)' }} />
            
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`rounded-xl p-5 ${
                  i === 0
                    ? "border-2 border-primary bg-transparent"
                    : "bg-primary"
                }`}
              >
                <span className={`text-4xl md:text-5xl font-heading font-bold leading-none ${
                  i === 0 ? "text-primary" : "text-primary-foreground/30"
                }`}>
                  {step.num}
                </span>
                <h3 className={`font-heading font-semibold text-base mt-4 ${
                  i === 0 ? "text-white" : "text-primary-foreground"
                }`}>
                  {step.title}
                </h3>
                {step.desc && (
                  <p className={`text-xs mt-2 leading-relaxed ${
                    i === 0 ? "text-white/60" : "text-primary-foreground/70"
                  }`}>
                    {step.desc}
                  </p>
                )}
              </div>
            ))}
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
