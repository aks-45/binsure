import { motion } from "motion/react";
import { CheckCircle, Zap, BarChart3, Shield } from "lucide-react";

const highlights = [
  {
    icon: Zap,
    title: "Lightning Fast Implementation",
    description: "Get started in minutes, not weeks",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Track performance with live dashboards",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security for your data",
  },
];

export function PresentationSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              Transform Your Business Today
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Join hundreds of Indian businesses that have already accelerated
              their growth with BeInsure's comprehensive business solutions.
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-10">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="mt-1 p-2 bg-blue-500 rounded-lg">
                    <highlight.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg mb-1">{highlight.title}</h4>
                    <p className="text-blue-200">{highlight.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xl transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              Start 5-Day Free Trial
            </motion.button>
          </motion.div>

          {/* Right side - Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
          >
            <h3 className="text-2xl mb-6 text-center">Why Choose BeInsure?</h3>
            <div className="space-y-4">
              {[
                "Complete business management suite",
                "Customizable to your needs",
                "24/7 dedicated support",
                "Seamless integrations",
                "Regular updates & new features",
                "No hidden costs",
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
