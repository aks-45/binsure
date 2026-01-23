import { EnhancedHero } from "@/components/binsure/enhanced-hero";
import { EnhancedFeatures } from "@/components/binsure/enhanced-features";
import { ConnectionMap } from "@/components/binsure/connection-map";
import { EnhancedAbout } from "@/components/binsure/enhanced-about";
import { EnhancedTestimonials } from "@/components/binsure/enhanced-testimonials";
import { FinalCTA } from "@/components/binsure/final-cta";
import { EnhancedFooter } from "@/components/binsure/enhanced-footer";

const Binsure = () => {
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
};

export default Binsure;