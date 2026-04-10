import { CheckCircle, Users, Briefcase, Headphones } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  value: string;
  label: string;
}

interface StatsBarProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { icon: <Briefcase className="w-5 h-5 text-primary" />, value: "70+", label: "SaaS brands served" },
  { icon: <CheckCircle className="w-5 h-5 text-primary" />, value: "98%", label: "Client satisfaction" },
  { icon: <Users className="w-5 h-5 text-primary" />, value: "500+", label: "Projects delivered" },
  { icon: <Headphones className="w-5 h-5 text-primary" />, value: "24/7", label: "Support available" },
];

const StatsBar = ({ stats = defaultStats }: StatsBarProps) => (
  <div className="flex flex-wrap justify-center gap-6 md:gap-12 py-8">
    {stats.map((stat, i) => (
      <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl border border-border bg-background">
        {stat.icon}
        <div>
          <span className="font-heading font-bold text-foreground">{stat.value}</span>
          <span className="text-xs text-muted-foreground ml-1">{stat.label}</span>
        </div>
      </div>
    ))}
  </div>
);

export default StatsBar;
