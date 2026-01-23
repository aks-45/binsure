import { motion, useScroll, useTransform } from "framer-motion";
import { Users, SearchCode, Presentation, Target } from "lucide-react";
import { useRef } from "react";

const features = [
  {
    icon: Users,
    title: "CRM",
    description: "Intelligent customer relationship management that scales with you",
  },
  {
    icon: SearchCode,
    title: "Research & Insights",
    description: "Data-driven analytics that power strategic decisions",
  },
  {
    icon: Presentation,
    title: "Presentation / Project Management",
    description: "Streamlined workflows from concept to delivery",
  },
  {
    icon: Target,
    title: "Project-Specific Service Projection",
    description: "Tailored solutions designed for your unique needs",
  },
];

export function EnhancedFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
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
            Key Features
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Enterprise-grade tools built for the modern Indian business
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
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
                className="group relative"
              >
                {/* Card glow effect */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"
                  initial={false}
                />

                {/* Card content */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-500 h-48 flex flex-col">
                  <motion.div
                    className="mb-4 inline-block p-3 bg-blue-500/10 rounded-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </motion.div>

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
  );
}