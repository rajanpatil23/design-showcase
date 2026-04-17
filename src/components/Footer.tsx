import { Link } from "react-router-dom";
import { Phone, Mail, Clock, MapPin, ArrowRight, Instagram, Linkedin, Youtube, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/connecttly-logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-ct-footer pt-32 pb-8 mt-24">
      {/* Floating CTA Card */}
      <div className="container-main absolute left-1/2 -translate-x-1/2 -top-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-background rounded-3xl shadow-xl px-8 md:px-12 py-8 md:py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Ready to scale smarter?
            </h3>
            <p className="text-muted-foreground mt-1 text-sm">
              No fluff, no jargon. Just ROI-driven growth strategies.
            </p>
          </div>
          <Button className="rounded-full px-6 py-6 font-semibold whitespace-nowrap gap-2">
            Book a Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Logo + Newsletter */}
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        <img src={logo} alt="Connecttly" className="h-9 w-auto" />
        <div className="relative w-full md:w-[520px]">
          <input
            type="email"
            placeholder="Enter your email for Weekly insights"
            className="w-full pl-6 pr-32 py-4 text-sm rounded-full bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <Button className="absolute right-1.5 top-1/2 -translate-y-1/2 rounded-full px-6 h-11 font-semibold bg-ct-dark hover:bg-ct-dark/90 text-primary-foreground">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Links Grid */}
      <div className="container-main grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-foreground mb-5">Resources</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li><Link to="#" className="hover:text-foreground transition-colors">Blog</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Free Tools</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Contact</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">FAQ</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Refer and Earn</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-foreground mb-5">Company</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Career</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Terms & Conditions</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Data Processing Addendum</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-foreground mb-5">Free Tools</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li><Link to="#" className="hover:text-foreground transition-colors">LinkedIn Post Generator</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Social Image Generator</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Text Editor</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">URL Shortener</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">UTM Builder</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-foreground mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-foreground/80">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" />+91 7905212348</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" />info@connecttly.com</li>
            <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0" />Mon–Fri, 9:00 AM – 6:00 PM</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />Blr10-Vaishnavi, Signature No. 78/9, Bellandur, Bengaluru South, Karnataka, India 560103</li>
          </ul>
        </div>
      </div>

      {/* Bottom: Socials + Copyright */}
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {[
            { Icon: Instagram, label: "Instagram" },
            { Icon: Music2, label: "TikTok" },
            { Icon: Linkedin, label: "LinkedIn" },
            { Icon: Youtube, label: "YouTube" },
          ].map(({ Icon, label }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="w-9 h-9 rounded-full bg-ct-dark text-primary-foreground flex items-center justify-center hover:opacity-90 transition-opacity"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
        <p className="text-xs text-foreground/70">© 2025 Connecttly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
