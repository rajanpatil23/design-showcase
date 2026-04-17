import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/connecttly-logo.png";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      {/* CTA Banner */}
      <div className="container-main py-12">
        <div className="bg-ct-dark rounded-2xl px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground">
              Ready to scale smarter?
            </h3>
            <p className="text-primary-foreground/70 mt-1">
              No fluff, no jargon. Just ROI-driven growth strategies.
            </p>
          </div>
          <Button className="rounded-full px-8 py-3 font-semibold whitespace-nowrap">
            Book a Free Strategy Call
          </Button>
        </div>
      </div>

      {/* Newsletter */}
      <div className="container-main pb-10 flex flex-col md:flex-row items-center justify-between gap-6 border-b border-border">
        <img src={logo} alt="Connecttly" className="h-8 w-auto" />
        <div className="flex w-full md:w-auto items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email for Weekly insights"
            className="flex-1 md:w-80 px-4 py-2.5 text-sm border border-border rounded-full bg-background focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
          <Button size="sm" className="rounded-full px-6 font-semibold">
            Subscribe
          </Button>
        </div>
      </div>

      {/* Links */}
      <div className="container-main py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-4">Resources</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="#" className="hover:text-foreground transition-colors">Blog</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Free Tools</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Contact</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">FAQ</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Refer and Earn</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-4">Company</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Career</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Terms & Conditions</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Data Processing Addendum</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-4">Free Tools</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li><Link to="#" className="hover:text-foreground transition-colors">LinkedIn Post Generator</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Social Image Generator</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">Text Editor</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">URL Shortener</Link></li>
            <li><Link to="#" className="hover:text-foreground transition-colors">UTM Builder</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-semibold text-xs uppercase tracking-wider text-muted-foreground mb-4">Contact</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><Phone className="w-4 h-4 mt-0.5 shrink-0" />+91 7802012348</li>
            <li className="flex items-start gap-2"><Mail className="w-4 h-4 mt-0.5 shrink-0" />info@connecttly.com</li>
            <li className="flex items-start gap-2"><Clock className="w-4 h-4 mt-0.5 shrink-0" />Mon–Fri, 9:00 AM – 6:00 PM</li>
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" />Bengaluru, Karnataka, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="container-main py-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>© 2025 Connecttly. All rights reserved.</p>
        <div className="flex items-center gap-4">
          {["Facebook", "Twitter", "LinkedIn", "Instagram"].map((s) => (
            <a key={s} href="#" className="hover:text-foreground transition-colors">{s}</a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
