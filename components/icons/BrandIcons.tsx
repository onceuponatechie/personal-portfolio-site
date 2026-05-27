import { type SVGProps } from "react";

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

export const FolderSparkle = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <defs>
      <linearGradient id="folder-grad" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="hsl(18, 78%, 57%)" />
        <stop offset="1" stopColor="hsl(255, 35%, 74%)" />
      </linearGradient>
    </defs>
    <path
      d="M3 6a2 2 0 012-2h4l2 2h8a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V6z"
      fill="url(#folder-grad)"
      opacity="0.9"
    />
    <path
      d="M3 8h18v10a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
      fill="url(#folder-grad)"
    />
    <circle cx="17" cy="5" r="1.5" fill="hsl(44, 88%, 67%)" />
    <path
      d="M17 2.5v1M17 5.5v1M15.5 4h1M18.5 4h-1"
      stroke="hsl(44, 88%, 67%)"
      strokeWidth="0.8"
      strokeLinecap="round"
    />
  </svg>
);

export const PaperPlane = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <defs>
      <linearGradient id="plane-grad" x1="0" y1="0" x2="1" y2="1">
        <stop stopColor="hsl(18, 78%, 57%)" />
        <stop offset="1" stopColor="hsl(18, 78%, 72%)" />
      </linearGradient>
    </defs>
    <path
      d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
      stroke="url(#plane-grad)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BrandArrow = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7 17L17 7M17 7H9M17 7v8"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BrandStar = ({ size = 24, ...props }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 2l2.9 5.9 6.5.95-4.7 4.58 1.1 6.47L12 17.27 6.2 19.9l1.1-6.47-4.7-4.58 6.5-.95L12 2z"
      fill="hsl(18, 78%, 57%)"
      stroke="hsl(18, 78%, 57%)"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
  </svg>
);
