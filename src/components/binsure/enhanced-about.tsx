import { motion, useScroll, useTransform } from "framer-motion";
import { Building2, TrendingUp, Shield } from "lucide-react";
import { useRef } from "react";

const metrics = [
  { value: "500+", label: "Clients Served" },
  { value: "1000+", label: "Projects Completed" },
  { value: "5+", label: "Years of Experience" },
];

export function EnhancedAbout() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950"
      style={{ position: 'relative' }}
    >
      {/* Animated background */}
      <motion.div className="absolute inset-0 opacity-20" style={{ y }}>
        <div className="absolute top-20 right-20 w-[500px] h-[500px] bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-[600px] h-[600px] bg-purple-600 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-blue-400 uppercase tracking-[0.3em] text-xs">
                About Us
              </span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl text-white mb-6">
              Built for Agents,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Designed for Success
              </span>
            </h2>

            <div className="space-y-4 text-blue-100/70 text-base leading-relaxed">
              <p>
                We build innovative software solutions that help insurance agents work smarter and grow faster. Our tools are designed to simplify policy management, strengthen client relationships, and streamline everyday operations.
              </p>
              <p>
                By combining industry knowledge with modern technology, we provide digital platforms that support agents at every step — from tracking leads to managing active policies. Whether in the office or on the move, our solutions ensure insurance professionals stay productive, efficient, and in control.
              </p>
            </div>

            {/* Key values */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[
                { icon: Shield, label: "Trust" },
                { icon: TrendingUp, label: "Innovation" },
                { icon: Building2, label: "Market Understanding" },
              ].map((value, index) => (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <motion.div
                    className="mb-2 p-3 bg-blue-500/10 rounded-xl inline-block border border-blue-500/20 group-hover:border-blue-400/50 transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <value.icon className="w-5 h-5 text-blue-400" />
                  </motion.div>
                  <h4 className="text-white text-xs">{value.label}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-4"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

                {/* Card */}
                <div className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/50 transition-all">
                  <motion.div
                    className="text-4xl md:text-5xl mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {metric.value}
                  </motion.div>
                  <div className="text-lg text-blue-200">{metric.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}