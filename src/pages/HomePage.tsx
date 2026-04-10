import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Users, Globe, Megaphone, PenTool, Code, Star, Quote, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import SectionLabel from "@/components/SectionLabel";
import StatsBar from "@/components/StatsBar";
import worldMap from "@/assets/world-map-dots.jpg";
import testimonialPerson from "@/assets/testimonial-person.jpg";

const trustedBrands = ["Action Sync", "The Edu Edge", "YTT Global", "The Edu Ocean", "Infosec Minds", "WFYI", "EvolveU"];

const heroStats = [
  { value: "2M+", label: "Content Impressions Generated" },
  { value: "1000+", label: "Qualified Leads Generated" },
  { value: "20+", label: "Brands Scaled" },
  { value: "10+", label: "Marketing Systems Automated" },
];

const services = [
  { num: "01", title: "Performance Marketing", desc: "Run high-performing ad campaigns that generate leads and revenue.", icon: <BarChart3 className="w-6 h-6 text-primary" /> },
  { num: "02", title: "Social Media Management", desc: "Build a strong brand presence and an engaged audience.", icon: <Megaphone className="w-6 h-6 text-primary" /> },
  { num: "03", title: "LinkedIn Growth", desc: "Turn LinkedIn into your most powerful B2B growth engine.", icon: <Users className="w-6 h-6 text-primary" /> },
  { num: "04", title: "Search Engine Optimisation", desc: "Drive long-term organic traffic and visibility.", icon: <Globe className="w-6 h-6 text-primary" /> },
  { num: "05", title: "Content & Creative", desc: "Create content that builds authority and demand.", icon: <PenTool className="w-6 h-6 text-primary" /> },
  { num: "06", title: "Web & AI Automation", desc: "Build high-converting websites and automated marketing systems.", icon: <Code className="w-6 h-6 text-primary" /> },
];

const steps = [
  { num: "01", title: "Discover", desc: "We audit your current marketing and find opportunities." },
  { num: "02", title: "Strategize", desc: "We build a custom growth strategy tailored to you." },
  { num: "03", title: "Launch", desc: "We execute campaigns, content and automation." },
  { num: "04", title: "Scale", desc: "We optimise and scale what works to maximise ROI." },
];

const whyUs = [
  { title: "Strategy + Execution", desc: "We don't just advise — we build and run your growth engine.", icon: <BarChart3 className="w-8 h-8 text-primary" /> },
  { title: "AI-Powered Marketing", desc: "Automation and AI tools drive efficiency and scale.", icon: <Code className="w-8 h-8 text-primary" /> },
  { title: "Performance Focused", desc: "Every campaign is optimised for measurable ROI.", icon: <Star className="w-8 h-8 text-primary" /> },
  { title: "Founder-Friendly", desc: "We work closely with startups and growth-stage businesses.", icon: <Users className="w-8 h-8 text-primary" /> },
];

const resourceTabs = ["Blog", "Free Tools", "Templates", "Community", "Live Metrics", "Support"];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden section-padding">
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <img src={worldMap} alt="" className="w-full max-w-5xl object-contain" />
        </div>
        <div className="container-main relative text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight max-w-4xl mx-auto">
            AI-Powered Growth Partner
            <br />
            for <span className="gradient-text">Ambitious Brands</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Button asChild className="rounded-full px-8 py-3 font-semibold">
              <Link to="/services">Explore Services</Link>
            </Button>
            <Button variant="outline" className="rounded-full px-8 py-3 font-semibold">
              Book Free Growth Strategy Call
            </Button>
          </div>

          {/* Trusted By */}
          <div className="mt-12">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">Trusted By:</p>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {trustedBrands.map((brand) => (
                <span key={brand} className="text-sm font-medium text-muted-foreground/60">{brand}</span>
              ))}
            </div>
          </div>

          {/* Hero Stats */}
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

      {/* Services Section */}
      <section className="section-padding bg-ct-section">
        <div className="container-main">
          <SectionLabel label="Services" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center max-w-2xl mx-auto">
            The Future of Digital Growth In <span className="gradient-text">One Unified Platform</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {services.map((s) => (
              <div key={s.num} className="bg-background rounded-xl border border-border p-6 hover:shadow-lg transition-shadow group">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-ct-blue-light">{s.icon}</div>
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-4xl font-heading font-bold text-muted-foreground/20">{s.num}</span>
                  <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-main">
          <SectionLabel label="Why Us" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
            How <span className="gradient-text">Connecttly</span> Works
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`rounded-xl p-6 text-center ${
                  i === 0 ? "border-2 border-primary bg-background" : "bg-primary text-primary-foreground"
                }`}
              >
                <span className={`text-5xl font-heading font-bold ${i === 0 ? "text-primary" : "text-primary-foreground/30"}`}>
                  {step.num}
                </span>
                <h3 className={`font-heading font-semibold text-lg mt-4 ${i === 0 ? "" : ""}`}>{step.title}</h3>
                {step.desc && (
                  <p className={`text-xs mt-2 ${i === 0 ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
                    {step.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Brands Choose */}
      <section className="section-padding bg-ct-section">
        <div className="container-main">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
            Why Brands Choose <span className="gradient-text">Connecttly</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {whyUs.map((item) => (
              <div key={item.title} className="bg-background rounded-xl border border-border p-6 flex flex-col items-start">
                <div className="p-3 rounded-lg bg-ct-blue-light mb-4">{item.icon}</div>
                <h3 className="font-heading font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-main">
          <SectionLabel label="Case Study" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
            Real <span className="gradient-text">Growth Stories</span>
          </h2>
          <div className="mt-12 max-w-4xl mx-auto bg-background rounded-xl border border-border p-8">
            <div className="space-y-6">
              <div className="border-b border-border pb-6">
                <h3 className="font-heading font-semibold text-lg">EdTech Brand</h3>
                <p className="text-sm text-muted-foreground mt-1">2M+ impressions generated through LinkedIn content strategy and organic growth.</p>
                <button className="text-sm text-primary font-semibold mt-2 flex items-center gap-1 hover:underline">
                  Read Case Study <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
              <div className="border-b border-border pb-6">
                <h3 className="font-heading font-semibold text-lg text-muted-foreground">B2B SaaS Startup</h3>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-muted-foreground">Service Business</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-ct-section">
        <div className="container-main">
          <SectionLabel label="Testimonials" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-background rounded-xl border border-border p-8 md:flex gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-ct-blue-light overflow-hidden">
                    <img src={testimonialPerson} alt="Kinjal M Jain" className="w-full h-full object-cover" loading="lazy" width={48} height={48} />
                  </div>
                  <div>
                    <p className="font-heading font-semibold">Kinjal M Jain</p>
                    <p className="text-xs text-muted-foreground">Founder, Mending Mind</p>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-primary/30 mb-2" />
                <p className="text-sm text-muted-foreground italic leading-relaxed">
                  Connecttly helped us harness AI-powered analytics to uncover insights we were missing. From dashboards to automation, they gave clarity and optimized campaigns in real time. Like having a full analytics team on demand.
                </p>
              </div>
              <div className="hidden md:block w-64 h-64 rounded-xl overflow-hidden shrink-0 mt-4 md:mt-0">
                <img src={testimonialPerson} alt="Client" className="w-full h-full object-cover" loading="lazy" width={256} height={256} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Hub */}
      <section className="section-padding">
        <div className="container-main">
          <SectionLabel label="Resource Hub" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
            Fuel Your <span className="gradient-text">Marketing Success</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {resourceTabs.map((tab, i) => (
              <button
                key={tab}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  i === 0 ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:bg-secondary"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="mt-10 max-w-2xl mx-auto bg-background rounded-xl border border-border p-8">
            <h3 className="text-xl font-heading font-semibold">Blog</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Benchmark reports and platform updates to keep you always ahead in LinkedIn and social media strategy.
            </p>
            <button className="text-sm text-primary font-semibold mt-4 flex items-center gap-1 hover:underline">
              Read Updates <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
