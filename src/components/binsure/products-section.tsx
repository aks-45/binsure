import { motion } from "motion/react";
import { Users, SearchCode, Presentation, Target } from "lucide-react";

const products = [
  {
    icon: Users,
    title: "CRM",
    description: "Manage customers, leads, and data efficiently with our powerful CRM system",
  },
  {
    icon: SearchCode,
    title: "Presentation",
    description: "Data-driven insights and analytics to make informed business decisions",
  },
  {
    icon: Presentation,
    title: "Presentation / Project Management",
    description: "Create, manage, and present projects professionally with ease",
  },
  {
    icon: Target,
    title: "Project-Specific Service Projection",
    description: "Custom solutions tailored to client-specific needs and requirements",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-blue-600 mb-4">
            Our Key Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to streamline your business operations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="mb-6 inline-block p-4 bg-blue-50 rounded-lg">
                <product.icon className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl text-blue-600 mb-3">
                {product.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
