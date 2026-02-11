import { EnhancedHero } from "@/components/binsure/enhanced-hero";
import { EnhancedFeatures } from "@/components/binsure/enhanced-features";
import { ConnectionMap } from "@/components/binsure/connection-map";
import { EnhancedAbout } from "@/components/binsure/enhanced-about";
import { EnhancedTestimonials } from "@/components/binsure/enhanced-testimonials";
import { CTOSection } from "@/components/binsure/cto-section";
import { Footer } from "@/components/binsure/footer";

const Binsure = () => {
  return (
    <div className="size-full bg-slate-900">
      <EnhancedHero />
      <EnhancedFeatures />
      <ConnectionMap />
      <EnhancedAbout />
      <CTOSection />
      <EnhancedTestimonials />
      <Footer />
    </div>
  );
};

export default Binsure;