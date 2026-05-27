import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyWidget from "@/components/layout/StickyWidget";
import CustomCursor from "@/components/shared/CustomCursor";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
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
