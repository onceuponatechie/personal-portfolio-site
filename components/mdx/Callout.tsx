import { AlertCircle, Lightbulb, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface CalloutProps {
  type: "insight" | "suggestion" | "friction";
  children: React.ReactNode;
}

const variantMap = {
  insight: {
    label: "Product Insight",
    Icon: Lightbulb,
    container: "bg-[hsla(18,78%,57%,0.09)]",
    accent: "text-[hsl(18,78%,47%)]",
  },
  suggestion: {
    label: "What I'd Consider",
    Icon: Sparkles,
    container: "bg-[hsla(44,80%,55%,0.10)]",
    accent: "text-[#A8841C]",
  },
  friction: {
    label: "Friction Point",
    Icon: AlertCircle,
    container: "bg-[hsla(8,55%,55%,0.08)]",
    accent: "text-[#B85450]",
  },
} as const;

const Callout = ({ type, children }: CalloutProps) => {
  const { label, Icon, container, accent } = variantMap[type];

  return (
    <aside className={cn("callout", container)}>
      <div className={cn("callout__label", accent)}>
        <Icon className="callout__icon" aria-hidden="true" />
        <span>{label}</span>
      </div>
      <div className="callout__body">{children}</div>
    </aside>
  );
};

export default Callout;
