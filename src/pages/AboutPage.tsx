import SectionLabel from "@/components/SectionLabel";
import StatsBar from "@/components/StatsBar";
import ReviewCarousel from "@/components/Home/ReviewCarousel";
import { Button } from "@/components/ui/button";
import { Linkedin, Quote, Shield, Zap, BarChart3, Handshake, Clock, Users, Building2, GraduationCap, Building, HeartPulse, Cpu, Briefcase, RefreshCw, Code2, MessageSquare, HelpCircle, ArrowUpRight, ArrowRight } from "lucide-react";
import founderImg from "@/assets/founder-neeraj.jpg";
import teamImg from "@/assets/team-collab.jpg";
import testimonialImg from "@/assets/testimonial-person.jpg";
import connecttlyMark from "@/assets/connecttly-mark.svg";

const aboutStats = [
  { value: "15,000+", label: "Qualified Leads Generated" },
  { value: "6+", label: "Industries Served" },
  { value: "20+", label: "Marketing Systems Automated" },
  { value: "47%", label: "Avg. CPL Reduction" },
];

const principles = [
  { title: "Radical Transparency", desc: "No black-box reporting. No hidden fees. You see exactly what we're doing, why we're doing it, and what it's delivering — in real time.", icon: <Shield className="w-6 h-6 text-primary" /> },
  { title: "AI-First Thinking", desc: "We integrate AI and automation into everything we do — from content production to lead scoring to campaign optimization. It's how we deliver big-agency output at startup-friendly costs.", icon: <Cpu className="w-6 h-6 text-primary" /> },
  { title: "Continuous Optimization", desc: "Good enough isn't good enough. Every campaign, every piece of content, every workflow gets measured, tested, and improved — relentlessly.", icon: <BarChart3 className="w-6 h-6 text-primary" /> },
  { title: "Results Over Rhetoric", desc: "We measure success in pipeline, revenue, and growth — not impressions and vanity metrics. Every strategy we build is tied to a business outcome.", icon: <Zap className="w-6 h-6 text-primary" /> },
  { title: "Speed of Execution", desc: "We move fast. Strategies don't sit in decks for weeks. We plan, launch, learn, and optimize in rapid cycles because growth doesn't wait.", icon: <Clock className="w-6 h-6 text-primary" /> },
  { title: "Partnership, Not Vendorship", desc: "We don't operate as an outside vendor. We embed into your team, understand your business deeply, and treat your goals as our own.", icon: <Handshake className="w-6 h-6 text-primary" /> },
];

const steps = [
  { num: "01", title: "Discover", desc: "We learn your business, goals, and audience." },
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
  { title: "Startups & Early-Stage Companies", desc: "You've found product-market fit and need to build a scalable, predictable lead-generation engine.", icon: <Briefcase className="w-5 h-5 text-primary" /> },
  { title: "Scaling B2B Businesses", desc: "You're growing, but your marketing hasn't kept up. You need systems, strategy, and execution to match your ambition.", icon: <RefreshCw className="w-5 h-5 text-primary" /> },
  { title: "Enterprise Teams", desc: "You need a specialized partner to handle LinkedIn growth, performance marketing, or content at scale alongside your internal team.", icon: <Building2 className="w-5 h-5 text-primary" /> },
  { title: "EdTech & Training Companies", desc: "You're building an audience and need a content strategy, paid acquisition, and brand positioning that drives enrollments.", icon: <GraduationCap className="w-5 h-5 text-primary" /> },
];

const industriesLeft = [
  { name: "SaaS & Technology", icon: <Code2 className="w-5 h-5 text-primary" /> },
  { name: "EdTech & E-Learning", icon: <GraduationCap className="w-5 h-5 text-primary" /> },
  { name: "Professional Services", icon: <Briefcase className="w-5 h-5 text-primary" /> },
];
const industriesRight = [
  { name: "Enterprise Automation", icon: <Building2 className="w-5 h-5 text-primary" /> },
  { name: "Real Estate & Co-Working", icon: <Building className="w-5 h-5 text-primary" /> },
  { name: "Healthcare & Wellness", icon: <HeartPulse className="w-5 h-5 text-primary" /> },
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
              <div className="absolute -top-4 left-6 md:left-12 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg animate-float">
                <p className="font-heading font-bold text-2xl leading-none">15,000+</p>
                <p className="text-xs mt-1 opacity-90 leading-tight">Qualified Leads<br />Generated</p>
              </div>

              {/* Top-right: Industries */}
              <div className="absolute top-10 -right-2 md:-right-6 bg-background rounded-full pl-3 pr-4 py-2 shadow-lg flex items-center gap-2 animate-float-slow">
                <span className="font-heading font-bold text-primary text-lg">6+</span>
                <span className="text-xs font-medium">Industries Served</span>
              </div>

              {/* Bottom-left: Marketing Systems */}
              <div className="absolute bottom-16 -left-3 md:-left-6 bg-background rounded-xl px-4 py-2.5 shadow-lg flex items-center gap-3 animate-float-slow2">
                <span className="font-heading font-bold text-primary text-xl">20+</span>
                <span className="text-xs leading-tight">Marketing Systems<br />Automated</span>
              </div>

              {/* Bottom-right: CPL Reduction */}
              <div className="absolute -bottom-4 right-4 md:right-8 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg text-right animate-float-delay">
                <p className="font-heading font-bold text-2xl leading-none">47%</p>
                <p className="text-xs mt-1 opacity-90">Avg. CPL Reduction</p>
              </div>
            </div>
          </div>
          <StatsBar />
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="mb-6">
            <span className="inline-block px-5 py-1.5 text-xs font-medium rounded-full border border-primary/30 bg-primary/5 text-primary">
              How it started
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-left mb-12">Our Story</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img
                src={teamImg}
                alt="Connecttly team collaborating on growth strategy"
                className="w-full h-[420px] object-cover"
                loading="lazy"
                width={800}
                height={512}
              />
            </div>
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
      <section className="bg-[hsl(222,47%,11%)] text-white">
        <div className="container-main py-16 md:py-24 px-8 md:px-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">Our Mission</h2>
          <div className="relative px-12 md:px-20">
            {/* Opening quote — top left */}
            <svg className="absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-7-2-7-6V7zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-7-2-7-6V7z" />
            </svg>
            {/* Closing quote — bottom right */}
            <svg className="absolute right-0 bottom-0 w-10 h-10 md:w-12 md:h-12 text-white rotate-180" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M7 7h4v4H8c0 2 1 3 3 3v3c-4 0-7-2-7-6V7zm9 0h4v4h-3c0 2 1 3 3 3v3c-4 0-7-2-7-6V7z" />
            </svg>
            <p className="text-center text-base md:text-xl font-heading leading-relaxed">
              "To make world-class growth marketing accessible to every ambitious brand — regardless of size or budget — by combining strategy, execution, and AI-powered automation."
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section-padding bg-ct-section">
        <div className="container-main">
          <div className="flex justify-center mb-4">
            <SectionLabel label="What We Stand For" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center max-w-2xl mx-auto leading-tight">
            The Principles Behind Our Work
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12 items-start">
            {principles.map((p) => (
              <div
                key={p.title}
                className="group bg-background rounded-xl border border-border p-6 shadow-[0_2px_10px_hsl(var(--foreground)/0.04)] cursor-pointer transition-all duration-300"
              >
                <div className="p-3 rounded-lg bg-ct-blue-light inline-block mb-4">{p.icon}</div>
                <h3 className="font-heading font-semibold text-lg mb-2">{p.title}</h3>
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-sm text-muted-foreground pt-1">{p.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Dark Section (mirrors Home) */}
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
            <svg
              aria-hidden
              className="hidden md:block absolute inset-x-0 -top-12 w-full h-12 pointer-events-none overflow-visible"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              <path d="M 16 12 Q 25 -2 34 12" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="butt" vectorEffect="non-scaling-stroke" className="animated-dash" />
              <path d="M 66 12 Q 75 -2 84 12" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="butt" vectorEffect="non-scaling-stroke" className="animated-dash" />
            </svg>
            <svg
              aria-hidden
              className="hidden md:block absolute inset-x-0 -bottom-12 w-full h-12 pointer-events-none overflow-visible"
              viewBox="0 0 100 12"
              preserveAspectRatio="none"
            >
              <path d="M 41 0 Q 50 16 59 0" fill="none" stroke="#ffffff" strokeWidth="1.4" strokeLinecap="butt" vectorEffect="non-scaling-stroke" className="animated-dash" />
            </svg>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {steps.map((step) => (
                <div key={step.num} className="rounded-2xl p-6 bg-primary min-h-[210px] flex flex-col">
                  <span className="text-5xl md:text-6xl font-heading font-bold leading-none text-white">{step.num}</span>
                  <h3 className="font-heading font-semibold text-lg mt-5 text-white">{step.title}</h3>
                  {step.desc && <p className="text-xs mt-2 leading-relaxed text-white/75">{step.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding">
        <div className="container-main">
          <div className="flex justify-center mb-4">
            <SectionLabel label="Meet the Team" />
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">Meet the Team</h2>

          {/* Founder — dark navy card */}
          <div className="max-w-5xl mx-auto bg-[#09233C] text-white p-6 md:p-10 mb-6 md:flex gap-10 items-center">
            <div className="w-full md:w-72 h-72 rounded-2xl overflow-hidden shrink-0 mb-6 md:mb-0 bg-primary">
              <img src={founderImg} alt="Neeraj Yadav" className="w-full h-full object-cover object-top" loading="lazy" width={288} height={288} />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-3xl md:text-4xl font-heading font-bold">Neeraj Yadav</h3>
                <span className="inline-flex items-center justify-center w-7 h-7 rounded bg-primary">
                  <Linkedin className="w-4 h-4 text-white fill-white" />
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-heading font-light mb-5">Founder & Growth Head</p>
              <p className="text-sm md:text-base text-white/85 leading-relaxed">
                Neeraj built Connecttly with a mission to democratize growth marketing. With deep expertise in demand generation, LinkedIn strategy, and marketing automation, he personally architects the growth strategy for every client and leads the team with a bias for speed, data, and measurable outcomes.
              </p>
            </div>
          </div>

          {/* Team Grid — solid blue cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {teamMembers.map((m, i) => (
              <div key={m.name} className="bg-primary text-primary-foreground rounded-2xl p-5 aspect-square flex flex-col items-center justify-center text-center overflow-hidden">
                {i === 0 ? (
                  <div className="w-full h-full -m-5 relative">
                    <img src={founderImg} alt={m.name} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-center">
                      <p className="font-heading font-semibold text-sm text-white">{m.name}</p>
                      <p className="text-xs text-white/80">{m.role}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <p className="font-heading font-semibold text-sm">{m.name}</p>
                    <p className="text-xs text-primary-foreground/80 mt-1">{m.role}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Brands */}
      <section className="section-padding">
        <div className="container-main">
          <div className="flex justify-center mb-4">
            <SectionLabel label="Who We Work With" />
          </div>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center max-w-2xl mx-auto leading-tight">
            Built for Brands <span className="gradient-text">That Want to Grow</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mt-12 max-w-5xl mx-auto md:items-center">
            {clientTypes.map((c, i) => {
              const tall = i === 0 || i === 3;
              return (
                <div
                  key={c.title}
                  className={`bg-background rounded-2xl border border-border/50 p-6 flex flex-col shadow-[0_4px_20px_hsl(var(--foreground)/0.06)] ${
                    tall ? "md:min-h-[340px]" : "md:min-h-[240px]"
                  }`}
                >
                  <div className="p-2.5 rounded-lg bg-ct-blue-light inline-flex w-fit">{c.icon}</div>
                  <div className="mt-auto pt-10">
                    <h3 className="font-heading font-semibold text-xl mb-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries — hub & spoke */}
      <section className="section-padding bg-ct-section">
        <div className="container-main">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-center">
            <span className="gradient-text">Industries</span> we serve
          </h2>

          <div className="relative mt-16 max-w-5xl mx-auto">
            {/* Animated connector lines (desktop) */}
            <svg
              aria-hidden
              className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 60"
              preserveAspectRatio="none"
            >
              {/* LEFT side: card edge (x=28) -> hub edge (x=46, y=30) */}
              <path d="M 28 12 C 38 12, 42 22, 46 30" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="animated-dash" />
              <path d="M 28 30 L 46 30"               fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="animated-dash" />
              <path d="M 28 48 C 38 48, 42 38, 46 30" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="animated-dash" />
              {/* RIGHT side: card edge (x=72) -> hub edge (x=54, y=30) */}
              <path d="M 72 12 C 62 12, 58 22, 54 30" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="animated-dash" />
              <path d="M 72 30 L 54 30"               fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="animated-dash" />
              <path d="M 72 48 C 62 48, 58 38, 54 30" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.2" strokeLinecap="round" vectorEffect="non-scaling-stroke" className="animated-dash" />
            </svg>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-6 md:gap-12 items-center relative">
              {/* LEFT column */}
              <div className="space-y-6">
                {industriesLeft.map((ind) => (
                  <div key={ind.name} className="bg-background rounded-xl border border-border/60 shadow-[0_4px_18px_hsl(var(--foreground)/0.06)] px-5 py-4 flex items-center justify-between gap-4">
                    <p className="text-sm font-heading font-semibold leading-tight">{ind.name}</p>
                    <div className="p-2 rounded-lg bg-ct-blue-light shrink-0">{ind.icon}</div>
                  </div>
                ))}
              </div>

              {/* CENTER hub */}
              <div className="flex justify-center">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-primary flex items-center justify-center shadow-[0_10px_30px_-8px_hsl(var(--primary)/0.6)]">
                  <img src={connecttlyMark} alt="Connecttly" className="w-10 h-auto" />
                </div>
              </div>

              {/* RIGHT column */}
              <div className="space-y-6">
                {industriesRight.map((ind) => (
                  <div key={ind.name} className="bg-background rounded-xl border border-border/60 shadow-[0_4px_18px_hsl(var(--foreground)/0.06)] px-5 py-4 flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-ct-blue-light shrink-0">{ind.icon}</div>
                    <p className="text-sm font-heading font-semibold leading-tight">{ind.name}</p>
                  </div>
                ))}
              </div>
            </div>
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

        <div className="container-main">
          {/* Bottom action row */}
          <div className="mt-10 max-w-5xl mx-auto grid md:grid-cols-3 gap-5">
            {[
              { icon: <MessageSquare className="w-5 h-5 text-primary" />, title: "Contact Us", desc: "Reach out to our support team for assistance anytime" },
              { icon: <HelpCircle className="w-5 h-5 text-primary" />, title: "FAQ", desc: "Get quick answers to your questions about our products and services" },
              { icon: <Users className="w-5 h-5 text-primary" />, title: "Become an Affiliate", desc: "Join our affiliate program and earn recurring commission on referrals" },
            ].map((item) => (
              <a key={item.title} href="#" className="group bg-background rounded-xl border border-border/60 shadow-[0_2px_10px_hsl(var(--foreground)/0.04)] p-6 flex flex-col gap-4 hover:border-primary/40 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-full bg-ct-blue-light flex items-center justify-center">{item.icon}</div>
                  <ArrowRight className="w-4 h-4 text-primary opacity-80 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <div>
                  <p className="font-heading font-semibold mb-1.5">{item.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
