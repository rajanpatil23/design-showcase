import SectionLabel from "@/components/SectionLabel";
import StatsBar from "@/components/StatsBar";
import { Button } from "@/components/ui/button";
import { Linkedin, Quote, Shield, Zap, BarChart3, Handshake, Clock, Users, Building2, GraduationCap, Home, Stethoscope, Cpu, Briefcase } from "lucide-react";
import founderImg from "@/assets/founder-neeraj.jpg";
import teamImg from "@/assets/team-collab.jpg";
import testimonialImg from "@/assets/testimonial-person.jpg";

const aboutStats = [
  { value: "15,000+", label: "Qualified Leads Generated" },
  { value: "6+", label: "Industries Served" },
  { value: "20+", label: "Marketing Systems Automated" },
  { value: "47%", label: "Avg. CPL Reduction" },
];

const principles = [
  { title: "Radical Transparency", desc: "No black-box reporting. No hidden fees. You see exactly what we're doing, why, and what it's delivering.", icon: <Shield className="w-6 h-6 text-primary" /> },
  { title: "AI-First Thinking", desc: "We integrate AI and automation into everything — from content production to lead scoring to campaign optimization.", icon: <Cpu className="w-6 h-6 text-primary" /> },
  { title: "Continuous Optimization", desc: "Every campaign, every piece of content, every workflow gets measured, tested, and improved — relentlessly.", icon: <BarChart3 className="w-6 h-6 text-primary" /> },
  { title: "Results Over Rhetoric", desc: "We measure success in pipeline, revenue, and growth — not impressions and vanity metrics.", icon: <Zap className="w-6 h-6 text-primary" /> },
  { title: "Speed of Execution", desc: "We plan, launch, learn, and optimize in rapid cycles because growth doesn't wait.", icon: <Clock className="w-6 h-6 text-primary" /> },
  { title: "Partnership, Not Vendorship", desc: "We embed into your team, understand your business deeply, and treat your goals as our own.", icon: <Handshake className="w-6 h-6 text-primary" /> },
];

const steps = [
  { num: "01", title: "Discover" },
  { num: "02", title: "Strategize", desc: "We build a custom growth strategy tailored to you." },
  { num: "03", title: "Launch", desc: "We execute campaigns, content, and automation." },
  { num: "04", title: "Scale", desc: "We optimise and scale what works to maximise ROI." },
];

const teamMembers = [
  { name: "Raja Patil", role: "Senior Developer" },
  { name: "Krishnal Patil", role: "Junior Developer" },
  { name: "Divya Agrawal", role: "Account Manager & SMM" },
  { name: "Mayank Kumar Gupta", role: "Senior Graphic Designer" },
  { name: "Nithish Kumar", role: "UI/UX & Graphic Designer" },
  { name: "Darshan Mali", role: "Performance Marketer" },
  { name: "Anamika Yadav", role: "SEO Specialist" },
  { name: "Vaibhav Mohan", role: "Social Media Manager" },
  { name: "Namrata Tamse", role: "AI Generalist" },
];

const clientTypes = [
  { title: "Startups & Early-Stage Companies", desc: "You've found product-market fit and need to build a scalable, predictable lead-generation engine." },
  { title: "Scaling B2B Businesses", desc: "You're growing, but your marketing hasn't kept up. You need systems, strategy, and execution." },
  { title: "Enterprise Teams", desc: "You need a specialized partner to handle LinkedIn growth, performance marketing, or content at scale." },
  { title: "EdTech & Training Companies", desc: "You're building an audience and need content strategy, paid acquisition, and brand positioning." },
];

const industries = [
  { name: "SaaS & Technology", icon: <Cpu className="w-8 h-8 text-primary" /> },
  { name: "Enterprise Automation", icon: <Building2 className="w-8 h-8 text-primary" /> },
  { name: "EdTech & E-Learning", icon: <GraduationCap className="w-8 h-8 text-primary" /> },
  { name: "Real Estate & Co-Working", icon: <Home className="w-8 h-8 text-primary" /> },
  { name: "Professional Services", icon: <Briefcase className="w-8 h-8 text-primary" /> },
  { name: "Healthcare & Wellness", icon: <Stethoscope className="w-8 h-8 text-primary" /> },
];

const AboutPage = () => {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding">
        <div className="container-main">
          <div className="flex justify-center mb-6">
            <SectionLabel label="About Us" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-heading font-bold leading-tight">
                We Build Growth Engines for <span className="gradient-text">Ambitious Brands.</span>
              </h1>
              <p className="text-muted-foreground mt-6 leading-relaxed max-w-md">
                Connecttly is an AI-powered growth marketing agency that helps startups, scaling businesses, and enterprise teams generate demand, build authority, and turn marketing into a measurable revenue driver.
              </p>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <img src={teamImg} alt="Team collaborating" className="w-full h-[420px] object-cover" width={800} height={512} />
              </div>

              {/* Top-left: Qualified Leads */}
              <div className="absolute -top-4 left-6 md:left-12 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg">
                <p className="font-heading font-bold text-2xl leading-none">15,000+</p>
                <p className="text-xs mt-1 opacity-90 leading-tight">Qualified Leads<br />Generated</p>
              </div>

              {/* Top-right: Industries */}
              <div className="absolute top-10 -right-2 md:-right-6 bg-background rounded-full pl-3 pr-4 py-2 shadow-lg flex items-center gap-2">
                <span className="font-heading font-bold text-primary text-lg">6+</span>
                <span className="text-xs font-medium">Industries Served</span>
              </div>

              {/* Bottom-left: Marketing Systems */}
              <div className="absolute bottom-16 -left-3 md:-left-6 bg-background rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-3">
                <span className="font-heading font-bold text-primary text-xl">20+</span>
                <span className="text-xs leading-tight">Marketing Systems<br />Automated</span>
              </div>

              {/* Bottom-right: CPL Reduction */}
              <div className="absolute -bottom-4 right-4 md:right-8 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg text-right">
                <p className="font-heading font-bold text-2xl leading-none">47%</p>
                <p className="text-xs mt-1 opacity-90">Avg. CPL Reduction</p>
              </div>
            </div>
          </div>
          <StatsBar />
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-ct-section">
        <div className="container-main">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <h2 className="text-4xl md:text-5xl font-heading font-bold">Our Story</h2>
            <div className="border-l-2 border-primary pl-6 text-muted-foreground space-y-4 leading-relaxed text-sm">
              <div>
                <p>Connecttly was born from a simple frustration: too many businesses were paying premium prices for marketing that didn't deliver results.</p>
                <p>Our founder, Neeraj Yadav, saw the gap firsthand — agencies that overpromised and underdelivered, strategies built on vanity metrics instead of revenue, and small businesses left behind because they couldn't afford the big-agency price tag.</p>
              </div>
              <p className="font-semibold text-foreground">So he built Connecttly to be different.</p>
              <div>
                <p>We're a growth marketing agency that operates like an extension of your team. We combine strategic thinking with hands-on execution, powered by AI and automation, to deliver marketing that actually moves the needle — more leads, more pipeline, more revenue.</p>
                <p>Based in Bengaluru and serving clients globally, we've helped 20+ brands across EdTech, SaaS, professional services, and enterprise automation build scalable growth systems from the ground up.</p>
              </div>
              <p className="font-semibold text-foreground">We don't believe in marketing for marketing's sake. If it doesn't drive growth, we don't do it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="container-main text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Our Mission</h2>
          <div className="max-w-3xl mx-auto bg-ct-blue-light rounded-2xl p-8 md:p-12">
            <Quote className="w-10 h-10 text-primary/40 mx-auto mb-4" />
            <p className="text-lg md:text-xl font-heading font-medium text-foreground italic leading-relaxed">
              "To make world-class growth marketing accessible to every ambitious brand — regardless of size or budget — by combining strategy, execution, and AI-powered automation."
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-ct-section">
        <div className="container-main">
          <SectionLabel label="What We Stand For" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
            The Principles Behind Our Work
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {principles.map((p) => (
              <div key={p.title} className="bg-background rounded-xl border border-border p-6">
                <div className="p-3 rounded-lg bg-ct-blue-light inline-block mb-4">{p.icon}</div>
                <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding">
        <div className="container-main">
          <SectionLabel label="Why Us" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">How Connecttly Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {steps.map((step, i) => (
              <div key={step.num} className={`rounded-xl p-6 text-center ${i === 0 ? "border-2 border-primary bg-background" : "bg-primary text-primary-foreground"}`}>
                <span className={`text-5xl font-heading font-bold ${i === 0 ? "text-primary" : "text-primary-foreground/30"}`}>{step.num}</span>
                <h3 className="font-heading font-semibold text-lg mt-4">{step.title}</h3>
                {step.desc && <p className={`text-xs mt-2 ${i === 0 ? "text-muted-foreground" : "text-primary-foreground/70"}`}>{step.desc}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-ct-section">
        <div className="container-main">
          <SectionLabel label="Meet the Team" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Meet the Team</h2>

          {/* Founder */}
          <div className="max-w-4xl mx-auto bg-background rounded-xl border border-border p-8 mb-10 md:flex gap-8 items-start">
            <div className="w-48 h-48 rounded-xl overflow-hidden shrink-0 mb-6 md:mb-0">
              <img src={founderImg} alt="Neeraj Yadav" className="w-full h-full object-cover" loading="lazy" width={192} height={192} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-xl font-heading font-bold">Neeraj Yadav</h3>
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <p className="text-sm text-primary font-semibold mb-3">Founder & Growth Head</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Neeraj built Connecttly with a mission to democratize growth marketing. With deep expertise in demand generation, LinkedIn strategy, and marketing automation, he personally architects the growth strategy for every client and leads the team with a bias for speed, data, and measurable outcomes.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {teamMembers.map((m) => (
              <div key={m.name} className="bg-background rounded-xl border border-border p-5 text-center">
                <div className="w-16 h-16 rounded-full bg-ct-blue-light mx-auto mb-3 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <p className="font-heading font-semibold text-sm">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Brands */}
      <section className="section-padding">
        <div className="container-main">
          <SectionLabel label="Who We Work With" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
            Built for Brands That <span className="gradient-text">Want to Grow</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            {clientTypes.map((c) => (
              <div key={c.title} className="bg-background rounded-xl border border-border p-6">
                <h3 className="font-heading font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-padding bg-ct-section">
        <div className="container-main">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
            Industries <span className="gradient-text">we serve</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto">
            {industries.map((ind) => (
              <div key={ind.name} className="bg-background rounded-xl border border-border p-6 text-center">
                <div className="p-3 rounded-lg bg-ct-blue-light inline-block mb-3">{ind.icon}</div>
                <p className="text-sm font-heading font-semibold">{ind.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-main">
          <SectionLabel label="Testimonials" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <div className="mt-12 max-w-4xl mx-auto bg-background rounded-xl border border-border p-8 md:flex gap-8 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img src={testimonialImg} alt="Kinjal M Jain" className="w-full h-full object-cover" loading="lazy" width={48} height={48} />
                </div>
                <div>
                  <p className="font-heading font-semibold">Kinjal M Jain</p>
                  <p className="text-xs text-muted-foreground">Founder, Mending Mind</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                Connecttly helped us harness AI-powered analytics to uncover insights we were missing. From dashboards to automation, they gave clarity and optimized campaigns in real time. Like having a full analytics team on demand.
              </p>
            </div>
            <div className="hidden md:block w-48 h-48 rounded-xl overflow-hidden shrink-0">
              <img src={testimonialImg} alt="Client" className="w-full h-full object-cover" loading="lazy" width={192} height={192} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
