import { useState } from "react";
import { Button } from "@/components/ui/button";
import SectionLabel from "@/components/SectionLabel";
import StatsBar from "@/components/StatsBar";
import ReviewCarousel from "@/components/Home/ReviewCarousel";
import { Check, Quote, ChevronDown, ChevronUp, Shield, FileText, Eye, Layers, Search } from "lucide-react";
import testimonialImg from "@/assets/testimonial-person.jpg";
import googleAdsHero from "@/assets/google-ads-hero.png";

const painPoints = [
  { title: "You're spending $5K+ a month and can't tell what's actually working.", desc: "61% of Google Ads spend goes to clicks that never convert. That's not marketing — that's donation." },
  { title: "Your agency sends PDF reports full of numbers you don't understand.", desc: "If you can't explain the ROI in one sentence, your agency has failed you." },
  { title: "Leads come in — but your sales team says they're garbage.", desc: "Wrong keywords + lazy targeting = paying $50-$80 per lead that was never going to buy." },
];

const impactStats = [
  { value: "42%", label: "Avg. CPL Reduction" },
  { value: "3.8x", label: "Return on Ad Spend" },
  { value: "90", label: "Days to Meaningful ROI" },
  { value: "0", label: "Long-Term Lock-ins" },
];

const whyUs = [
  { title: "Google Certified. Battle-Tested.", desc: "Active certifications. Six-figure budgets managed monthly. We've seen every mistake — yours won't be one of them.", icon: <Shield className="w-6 h-6 text-primary" /> },
  { title: "Your CFO Will Love Our Reports", desc: "We optimize for pipeline and closed revenue. Not impressions. Not click-through rates nobody at the board table cares about.", icon: <FileText className="w-6 h-6 text-primary" /> },
  { title: "Your Account. Your Data. Always.", desc: "Real-time dashboards. Full access. No black boxes. If we part ways tomorrow, you keep everything.", icon: <Eye className="w-6 h-6 text-primary" /> },
  { title: "One System, Not Siloed Campaigns", desc: "Search, Display, Remarketing, Shopping, YouTube — connected into one full-funnel architecture that compounds.", icon: <Layers className="w-6 h-6 text-primary" /> },
];

const processSteps = [
  { num: "01", title: "Audit", desc: "We tear your current account apart. Every wasted dollar, every missed keyword, every competitor gap — found." },
  { num: "02", title: "Architect", desc: "Custom campaign structure mapped to your funnel. Not a template. Not a guess. Built for your business." },
  { num: "03", title: "Create", desc: "Ad copy that converts. Landing pages that match. Quality Scores that make Google charge you less." },
  { num: "04", title: "Launch", desc: "Go live. Monitor daily. Kill underperformers fast. Pour fuel on the winners." },
  { num: "05", title: "Report & Scale", desc: "Clear monthly insights. Then we do it all again — sharper, faster, more profitable." },
];

const pricingPlans = [
  {
    name: "3-Month Sprint",
    tagline: "Test the waters. Prove ROI. Build the foundation.",
    price: "$800",
    cta: "Start My Sprint",
    features: ["Up to $10K monthly ad spend management", "Search + Display campaigns", "Keyword research & ad copy creation", "Conversion tracking setup", "Monthly performance report", "Basic bid management & optimization"],
  },
  {
    name: "6-Month Growth",
    tagline: "You're spending real money. Time to make it compound.",
    price: "$1,200",
    cta: "Start Growing",
    popular: true,
    features: ["Up to $25K monthly ad spend management", "Full-funnel (Search + Display + Remarketing + Shopping)", "Advanced audience targeting & segmentation", "A/B testing of ads and landing pages", "Bi-weekly strategy calls + live dashboards", "Competitor monitoring & bid intelligence"],
  },
  {
    name: "12-Month Scale",
    tagline: "Full firepower. Dedicated strategist. Maximum ROI at scale.",
    price: "$1,800",
    cta: "Talk to Us",
    features: ["Unlimited ad spend management", "All Google properties (Search, Display, Shopping, YouTube, PMax)", "Custom audience & lookalike strategies", "Advanced attribution modeling & CRO", "Weekly reports + executive dashboards", "Dedicated senior account strategist"],
  },
];

const faqs = [
  { q: "How much should I spend on Google Ads?", a: "We recommend a minimum of $3K-$5K/month to gather enough data for meaningful optimization. Your ideal budget depends on your industry and competition." },
  { q: "What makes you different from other agencies?", a: "We focus on pipeline and revenue, not vanity metrics. Every strategy is tailored, and you always own your data." },
  { q: "Do I own my Google Ads account?", a: "Absolutely. Your account, your data, always. We never hold accounts hostage." },
  { q: "How long before I see results?", a: "Most clients see meaningful ROI within 90 days of launch." },
  { q: "What if I'm not happy?", a: "No long-term lock-ins. We earn your business every month." },
  { q: "Do you manage Shopping and YouTube too?", a: "Yes, we manage all Google properties including Search, Display, Shopping, YouTube, and Performance Max." },
];

const toolStack = ["Google Ads", "Google Analytics", "Looker Studio", "HubSpot", "SEMrush", "Google Tag Manager", "Zapier", "Canva"];

const GoogleAdsPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  return (
    <div>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold leading-tight">
                Your Competitors Are Bidding on <span className="gradient-text">Your Keywords</span> Right Now.
              </h1>
              <p className="text-muted-foreground mt-4">
                We build Google Ads campaigns engineered for one thing: turning search intent into revenue. Not clicks. Not impressions. Closed deals.
              </p>
              <div className="flex gap-3 mt-6">
                <Button className="rounded-full px-6 font-semibold">Get a Free Google Ads Audit</Button>
                <Button variant="outline" className="rounded-full px-6 font-semibold">See Pricing</Button>
              </div>
            </div>
            <div className="relative flex justify-center">
              <img src={googleAdsHero} alt="Google Ads keyword management mockup" className="w-full max-w-md h-auto object-contain" width={700} height={560} />
              <div className="absolute right-2 top-1/2 -translate-y-2 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-xl text-center animate-fade-in">
                <p className="font-heading font-bold text-xl leading-none">100%</p>
                <p className="text-[10px] font-medium mt-1 opacity-90">Results-Driven</p>
              </div>
              <div className="absolute left-0 bottom-6 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-xl text-center animate-fade-in">
                <p className="font-heading font-bold text-xl leading-none">36</p>
                <p className="text-[10px] font-medium mt-1 opacity-90 leading-tight">Specialized<br/>Services</p>
              </div>
            </div>
          </div>
          <StatsBar />
        </div>
      </section>

      {/* Pain Points */}
      <section className="section-padding bg-ct-section">
        <div className="container-main">
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-center max-w-3xl mx-auto">
            Tired of wasting your <span className="gradient-text">Google Ads budget?</span>
          </h2>
          <div className="space-y-4 mt-10 max-w-3xl mx-auto">
            {painPoints.map((p) => (
              <div key={p.title} className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-heading font-semibold mb-1">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-lg font-heading font-bold max-w-2xl mx-auto">
            You don't have a Google Ads problem. You have a strategy problem. <span className="text-primary">We fix that.</span>
          </p>
        </div>
      </section>

      {/* Measured Impact */}
      <section className="section-padding bg-ct-dark">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
            Measured Impact. <span className="gradient-text">Proven Outcomes.</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
            {impactStats.map((stat) => (
              <div key={stat.label} className="bg-background rounded-xl p-6 text-center">
                <p className="text-3xl md:text-4xl font-heading font-bold text-primary">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-ct-section">
        <div className="container-main">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">Why Connecttly for Google Ads</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-background rounded-xl border border-border p-6">
                <div className="p-3 rounded-lg bg-ct-blue-light inline-block mb-4">{w.icon}</div>
                <h3 className="font-heading font-semibold text-lg mb-2">{w.title}</h3>
                <p className="text-sm text-muted-foreground">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-main">
          <SectionLabel label="Our Process" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">How We Get You Results</h2>
          <div className="max-w-2xl mx-auto mt-12 space-y-6">
            {processSteps.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center shrink-0">
                  <span className="text-xl font-heading font-bold text-primary-foreground">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-lg">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-ct-section">
        <div className="container-main">
          <SectionLabel label="Pricing" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
            Choose a plan that's right for you
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`text-sm font-medium ${billingCycle === "monthly" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Pay Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`text-sm font-medium ${billingCycle === "yearly" ? "text-foreground" : "text-muted-foreground"}`}
            >
              Pay Yearly
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {pricingPlans.map((plan) => (
              <div key={plan.name} className={`bg-background rounded-xl border p-6 flex flex-col ${plan.popular ? "border-primary ring-2 ring-primary/20" : "border-border"}`}>
                {plan.popular && <span className="text-xs font-semibold bg-primary text-primary-foreground px-3 py-1 rounded-full self-start mb-3">Most Popular</span>}
                <h3 className="font-heading font-semibold text-lg">{plan.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{plan.tagline}</p>
                <p className="text-3xl font-heading font-bold mt-4">
                  {plan.price}<span className="text-sm font-normal text-muted-foreground"> / Month</span>
                </p>
                <Button className={`rounded-full font-semibold mt-6 ${plan.popular ? "" : "bg-foreground hover:bg-foreground/90"}`}>
                  {plan.cta}
                </Button>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Tool Stack */}
      <section className="section-padding bg-ct-dark">
        <div className="container-main text-center">
          <SectionLabel label="Tool Stack" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground">
            The Stack Behind Your Campaigns
          </h2>
          <p className="text-primary-foreground/70 mt-2 max-w-2xl mx-auto text-sm">
            We leverage the best tools and platforms in the industry to deliver exceptional results for your Google Ads campaigns.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-10 max-w-3xl mx-auto">
            {toolStack.map((tool) => (
              <div key={tool} className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-background flex items-center justify-center shadow-lg" title={tool}>
                <span className="text-xs font-semibold text-foreground text-center px-2">{tool.split(" ")[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-main">
          <SectionLabel label="FAQ" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">Questions We Get Asked</h2>
          <div className="max-w-3xl mx-auto mt-12 space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-heading font-semibold text-sm hover:bg-secondary/50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-muted-foreground" /> : <ChevronDown className="w-4 h-4 text-muted-foreground" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm text-muted-foreground">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoogleAdsPage;
