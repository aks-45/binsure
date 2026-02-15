import { motion, useScroll, useTransform } from "framer-motion";
import { Users, SearchCode, Presentation, Target, X, ChevronLeft, ChevronRight, Image } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: Users,
    title: "Mobile Application",
    description: "All Your Policy Work, Right from Your Phone",
    images: [
      { url: '/CRM.jpeg', caption: 'CRM Module - Mobile View' },
      { url: '/presentation.jpeg', caption: 'Presentation Module - Mobile View' },
      { url: '/service.jpeg', caption: 'Services Module - Mobile View' },
      { url: '/service-report.jpeg', caption: 'Servicing Reports - Mobile View' }
    ]
  },
  {
    icon: SearchCode,
    title: "Desktop Application",
    description: "Powerful Tools for Professional Policy Management",
    images: [
      { url: '/CRM(d).png', caption: 'CRM Module - Desktop View' },
      { url: '/presentation(d).png', caption: 'Presentation Module - Desktop View' },
      { url: '/presentation1(d).png', caption: 'Presentation Module - Desktop View 2' },
      { url: '/service(d).png', caption: 'Services Module - Desktop View' },
      { url: '/service2(d).png', caption: 'Services Module - Desktop View 2' },
      { url: '/service-report(d).png', caption: 'Servicing Reports - Desktop View' },
      { url: '/service-report1(d).png', caption: 'Servicing Reports - Desktop View 2' }
    ]
  },
  
];

export function EnhancedFeatures() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [showSlideshow, setShowSlideshow] = useState(false);
  const [currentFeature, setCurrentFeature] = useState<typeof features[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  const openSlideshow = (feature: typeof features[0], e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentFeature(feature);
    setCurrentImageIndex(0);
    setShowSlideshow(true);
  };

  const closeSlideshow = () => {
    setShowSlideshow(false);
    setCurrentFeature(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (currentFeature) {
      setCurrentImageIndex((prev) => (prev + 1) % currentFeature.images.length);
    }
  };

  const prevImage = () => {
    if (currentFeature) {
      setCurrentImageIndex((prev) => (prev - 1 + currentFeature.images.length) % currentFeature.images.length);
    }
  };

  return (
    <>
    <section
      id="products"
      ref={containerRef}
      className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
      style={{ position: 'relative' }}
    >
      {/* Animated background continuation */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-30" />
      </motion.div>

      {/* Floating grid lines */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
      >
        <svg width="100%" height="100%" className="text-blue-400">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-3">
            Our Products
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Smart software solutions designed to simplify, manage, and grow your insurance business
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto justify-center">
          {features.map((feature, index) => {
            const isMobile = feature.title === "Mobile Application";
            const imageUrl = feature.images[0].url;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                onClick={() => navigate(`/features?app=${isMobile ? 'mobile' : 'desktop'}`)}
                className="group relative cursor-pointer"
              >
                {/* Card glow effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
                  initial={false}
                />

                {/* Card content */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-500 h-48 flex flex-col">
                  <div className="flex items-start gap-3 mb-4">
                    <motion.div
                      className="inline-block p-3 bg-blue-500/10 rounded-xl"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <feature.icon className="w-8 h-8 text-blue-400" />
                    </motion.div>
                    <motion.div
                      className="p-3 bg-purple-500/10 rounded-xl cursor-pointer hover:bg-purple-500/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      onClick={(e) => openSlideshow(feature, e)}
                    >
                      <Image className="w-8 h-8 text-purple-400" />
                    </motion.div>
                  </div>

                  <h3 className="text-base font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {feature.title}
                  </h3>

                  <p className="text-blue-200/70 text-xs leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Slideshow Modal */}
    {showSlideshow && currentFeature && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={closeSlideshow}>
        <div className="relative max-w-4xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
          {/* Close button */}
          <button
            onClick={closeSlideshow}
            className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Image */}
          <div className="relative">
            <img
              src={currentFeature.images[currentImageIndex].url}
              alt={currentFeature.images[currentImageIndex].caption}
              className="w-full max-h-[70vh] object-contain rounded-lg"
            />
            
            {/* Navigation buttons */}
            {currentFeature.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* Caption */}
          <div className="bg-slate-800 text-white p-4 rounded-b-lg text-center">
            <p className="text-lg font-medium">{currentFeature.images[currentImageIndex].caption}</p>
            <p className="text-sm text-blue-300 mt-1">
              {currentImageIndex + 1} / {currentFeature.images.length}
            </p>
          </div>
        </div>
      </div>
    )}
    </>
  );
}