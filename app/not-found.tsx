import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="text-center">
        <h1 className="mb-6 font-display font-semibold text-[64px] leading-[1.05] tracking-[-0.02em] text-foreground">404</h1>
        <p className="mb-6 font-sans text-[20px] font-normal text-muted-foreground leading-[1.6]">Oops! Page not found</p>
        <Link href="/" className="font-sans text-[15px] font-medium leading-none text-primary underline hover:text-primary/90">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
