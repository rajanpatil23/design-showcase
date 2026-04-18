import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SectionLabel from "@/components/SectionLabel";
import StatsBar from "@/components/StatsBar";
import { ArrowRight, BarChart3, Megaphone, Users, Globe, PenTool, Code, Youtube, TrendingUp, MessageCircle, Search, Send } from "lucide-react";
import servicesHero from "@/assets/services-hero-person.jpg";

const categories = ["Performance", "Social Media", "LinkedIn", "SEO", "Content", "Web & AI"];

const serviceCards = [
  { title: "Google Ads Management", desc: "Your competitors are bidding on your keywords right now. We make sure you win.", cta: "Get a Free Audit", icon: <Search className="w-8 h-8 text-primary" />, link: "/services/google-ads" },
  { title: "Meta Ads Management", desc: "3 seconds to stop the scroll. We make everyone count — and convert.", cta: "Get a Free Audit", icon: <Megaphone className="w-8 h-8 text-primary" /> },
  { title: "LinkedIn Ads Management", desc: "Reach the C-suite by name, title, and company. Not by guessing.", cta: "Get a Free Audit", icon: <Users className="w-8 h-8 text-primary" /> },
  { title: "YouTube Ads Management", desc: "6 seconds before they skip. We make them stay — and act.", cta: "Get a Free Audit", icon: <Youtube className="w-8 h-8 text-primary" /> },
  { title: "Conversion Rate Optimisation", desc: "Same traffic. More customers. We find the leaks and fix them.", cta: "Fix My Funnel", icon: <TrendingUp className="w-8 h-8 text-primary" /> },
  { title: "Performance Marketing Bundle", desc: "Every paid channel. One war room. Maximum ROI.", cta: "Explore Bundle", icon: <BarChart3 className="w-8 h-8 text-primary" />, recommended: true },
];

const ctaCards = [
  { title: "Talk to a Strategist", desc: "Book a free 30-minute growth strategy call. We'll audit your current setup and recommend a plan.", cta: "Book a Free Call", icon: <MessageCircle className="w-10 h-10 text-primary" /> },
  { title: "Take the Growth Quiz", desc: "Answer 5 quick questions and get a personalised service recommendation in under 2 minutes.", cta: "Take the Quiz", icon: <Search className="w-10 h-10 text-primary" /> },
  { title: "Send Us a Brief", desc: "Share your goals, budget, and timeline. We'll come back with a custom proposal within 48 hours.", cta: "Submit a Brief", icon: <Send className="w-10 h-10 text-primary" /> },
];

const ServicesPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
                Everything You Need to <span className="gradient-text">Attract, Convert, and Scale.</span>
              </h1>
              <p className="text-muted-foreground mt-4">
                36 services. 6 categories. One growth partner. Every service is built to move a number that matters to your business.
              </p>
              <div className="flex gap-3 mt-6">
                <Button className="rounded-full px-6 font-semibold">Work with us</Button>
                <Button variant="outline" className="rounded-full px-6 font-semibold">See our insights</Button>
              </div>
            </div>

            {/* Image with yellow backdrop + floating badges */}
            <div className="relative w-full max-w-md mx-auto md:ml-auto md:mr-0 py-10 md:py-14">
              {/* Image in tall rectangle frame */}
              <div className="relative rounded-md overflow-hidden aspect-[4/5] w-full">
                <img src={servicesHero} alt="Services" className="absolute inset-0 w-full h-full object-cover" width={700} height={875} />
              </div>

              {/* Floating badge: Growth Categories (top right, outside) */}
              <div className="absolute top-4 -right-3 md:-right-6 bg-background rounded-full shadow-[0_8px_24px_hsl(var(--foreground)/0.12)] pl-2.5 pr-4 py-1.5 flex items-center gap-2 animate-float z-10">
                <span className="text-primary font-bold text-sm">6</span>
                <span className="text-xs font-semibold text-foreground whitespace-nowrap">Growth Categories</span>
              </div>

              {/* Floating badge: Specialized Services (top left, over image) */}
              <div className="absolute top-20 -left-3 md:-left-6 bg-primary text-primary-foreground rounded-xl shadow-[0_8px_24px_hsl(var(--primary)/0.35)] px-4 py-2.5 animate-float-slow z-10">
                <p className="text-2xl font-bold leading-none">36</p>
                <p className="text-[11px] font-medium opacity-90 mt-1 leading-tight">Specialized<br/>Services</p>
              </div>

              {/* Floating badge: All-In-One Bundles (mid-left, over image) */}
              <div className="absolute top-1/2 -translate-y-1/2 -left-3 md:-left-6 bg-background rounded-full shadow-[0_8px_24px_hsl(var(--foreground)/0.12)] pl-2.5 pr-4 py-1.5 flex items-center gap-2 animate-float-delay z-10">
                <span className="text-primary font-bold text-sm">6</span>
                <span className="text-xs font-semibold text-foreground whitespace-nowrap">All-In-One Bundles</span>
              </div>

              {/* Floating badge: Results-Driven (bottom right, outside) */}
              <div className="absolute bottom-6 -right-3 md:-right-6 bg-primary text-primary-foreground rounded-xl shadow-[0_8px_24px_hsl(var(--primary)/0.35)] px-4 py-2.5 animate-float-slow2 z-10">
                <p className="text-2xl font-bold leading-none">100%</p>
                <p className="text-[11px] font-medium opacity-90 mt-1 leading-tight">Results-Driven</p>
              </div>
            </div>
          </div>

          <StatsBar />
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-ct-section">
        <div className="container-main">
          <SectionLabel label="Our Services" />
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat, i) => (
              <button key={cat} className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${i === 0 ? "bg-primary text-primary-foreground" : "border border-border text-muted-foreground hover:bg-secondary"}`}>
                {cat}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {serviceCards.map((s) => (
              <div key={s.title} className={`bg-background rounded-xl border p-6 flex flex-col ${s.recommended ? "border-primary ring-2 ring-primary/20" : "border-border"}`}>
                {s.recommended && (
                  <span className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full self-start mb-3">Recommended</span>
                )}
                <div className="p-3 rounded-lg bg-ct-blue-light inline-block self-start mb-4">{s.icon}</div>
                <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{s.desc}</p>
                <Button
                  variant="outline"
                  className="rounded-full font-semibold text-primary border-primary hover:bg-primary hover:text-primary-foreground w-full"
                  asChild={!!s.link}
                >
                  {s.link ? <Link to={s.link}>{s.cta}</Link> : <span>{s.cta}</span>}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Sure Where to Start */}
      <section className="section-padding">
        <div className="container-main">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
            Not Sure <span className="gradient-text">Where to Start?</span>
          </h2>
          <div className="space-y-8 mt-12 max-w-4xl mx-auto">
            {ctaCards.map((card, i) => (
              <div key={card.title} className={`md:flex items-center gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-bold mb-2">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
                  <Button variant="outline" className="rounded-full font-semibold text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                    {card.cta}
                  </Button>
                </div>
                <div className="w-32 h-32 rounded-xl bg-ct-blue-light flex items-center justify-center shrink-0 mt-6 md:mt-0">
                  {card.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
