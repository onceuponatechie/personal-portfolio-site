import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyWidget from "@/components/layout/StickyWidget";
import CustomCursor from "@/components/shared/CustomCursor";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  axes: ["opsz", "SOFT", "WONK"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Once Upon a Techie — Products, People, and Stories",
  description:
    "Portfolio of a product storyteller and creative builder who turns ideas into experiences people love — through design, automation, and curiosity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <CustomCursor />
          <div className="min-h-screen bg-gradient-to-br from-background to-surface-warm">
            <Navbar />
            <main>{children}</main>
            <Footer />
            <StickyWidget />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
}
