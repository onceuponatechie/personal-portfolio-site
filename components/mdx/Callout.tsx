import { cn } from "@/lib/utils";

interface CalloutProps {
  type: "insight" | "suggestion" | "friction";
  children: React.ReactNode;
}

const variantMap: Record<
  CalloutProps["type"],
  { container: string; label: string; title: string }
> = {
  insight: {
    container:
      "border-blue-500 bg-blue-50/50 dark:bg-blue-950/20",
    label: "text-blue-600 dark:text-blue-400",
    title: "Product Insight",
  },
  suggestion: {
    container:
      "border-amber-500 bg-amber-50/50 dark:bg-amber-950/20",
    label: "text-amber-600 dark:text-amber-400",
    title: "What I'd Consider",
  },
  friction: {
    container:
      "border-red-500 bg-red-50/50 dark:bg-red-950/20",
    label: "text-red-600 dark:text-red-400",
    title: "Friction Point",
  },
};

const Callout = ({ type, children }: CalloutProps) => {
  const variant = variantMap[type];

  return (
    <aside
      className={cn(
        "my-6 border-l-4 rounded-r-md p-5 sm:p-6 font-sans text-sm sm:text-base leading-relaxed text-foreground",
        variant.container
      )}
    >
      <div
        className={cn(
          "mb-2 text-xs font-semibold uppercase tracking-wider",
          variant.label
        )}
      >
        {variant.title}
      </div>
      <div className="space-y-3 [&>p]:m-0">{children}</div>
    </aside>
  );
};

export default Callout;
