import { motion } from "motion/react";
import { Building2, TrendingUp, Shield } from "lucide-react";

const metrics = [
  { value: "500+", label: "Clients Served" },
  { value: "1000+", label: "Projects Completed" },
  { value: "5+", label: "Years of Experience" },
];

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl text-blue-600 mb-6">
              About BeInsure
            </h2>
            <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
              <p>
                At BeInsure, we understand the unique challenges faced by Indian
                businesses in today's rapidly evolving digital landscape. Founded
                with a vision to empower enterprises with cutting-edge technology,
                we've been at the forefront of business innovation.
              </p>
              <p>
                Our team combines deep industry expertise with a passion for
                excellence, delivering solutions that drive real results. We're
                not just a service provider – we're your trusted partner in growth.
              </p>
            </div>

            {/* Key values */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-3 bg-blue-100 rounded-full">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-blue-600">Trust</h4>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-3 bg-blue-100 rounded-full">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-blue-600">Innovation</h4>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-3 p-3 bg-blue-100 rounded-full">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="text-blue-600">Market Understanding</h4>
              </div>
            </div>
          </motion.div>

          {/* Right side - Metrics */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 gap-8"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <div className="text-5xl text-blue-600 mb-2">
                  {metric.value}
                </div>
                <div className="text-xl text-gray-600">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
