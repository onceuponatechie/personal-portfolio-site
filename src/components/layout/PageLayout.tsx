import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyWidget from "./StickyWidget";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-surface-warm">
      <Navbar />
      <main>{children}</main>
      <Footer />
      <StickyWidget />
    </div>
  );
};

export default PageLayout;
