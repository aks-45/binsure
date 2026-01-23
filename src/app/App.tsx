import { EnhancedHero } from "@/app/components/enhanced-hero";
import { EnhancedFeatures } from "@/app/components/enhanced-features";
import { ConnectionMap } from "@/app/components/connection-map";
import { EnhancedAbout } from "@/app/components/enhanced-about";
import { EnhancedTestimonials } from "@/app/components/enhanced-testimonials";
import { FinalCTA } from "@/app/components/final-cta";
import { EnhancedFooter } from "@/app/components/enhanced-footer";
import { FeaturesPage } from "@/app/components/features-page";
import { useState, useEffect } from "react";

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/features') {
      setCurrentPage('features');
    } else {
      setCurrentPage('home');
    }

    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === '/features') {
        setCurrentPage('features');
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  if (currentPage === 'features') {
    return (
      <div className="size-full bg-slate-900">
        <FeaturesPage />
      </div>
    );
  }

  return (
    <div className="size-full bg-slate-900">
      <EnhancedHero />
      <EnhancedFeatures />
      <ConnectionMap />
      <EnhancedAbout />
      <EnhancedTestimonials />
      <FinalCTA />
      <EnhancedFooter />
    </div>
  );
}