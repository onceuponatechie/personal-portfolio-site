import { cn } from "@/lib/utils";

interface CalloutProps {
  type?: "product" | "design" | "tip" | "warning";
  children: React.ReactNode;
}

const colorMap = {
  product: "border-brand-blue bg-brand-blue/5",
  design: "border-brand-lavender bg-brand-lavender/5",
  tip: "border-brand-green bg-brand-green/5",
  warning: "border-brand-orange bg-brand-orange/5",
};

const Callout = ({ type = "tip", children }: CalloutProps) => {
  return (
    <div
      className={cn(
        "my-6 rounded-xl border-l-4 px-6 py-4 font-sans text-sm leading-relaxed text-foreground",
        colorMap[type]
      )}
    >
      {children}
    </div>
  );
};

export default Callout;
