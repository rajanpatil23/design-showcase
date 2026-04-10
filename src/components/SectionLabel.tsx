interface SectionLabelProps {
  label: string;
}

const SectionLabel = ({ label }: SectionLabelProps) => (
  <div className="flex justify-center mb-6">
    <span className="inline-block px-4 py-1.5 text-xs font-semibold tracking-wider rounded-full border border-border bg-background text-muted-foreground">
      {label}
    </span>
  </div>
);

export default SectionLabel;
