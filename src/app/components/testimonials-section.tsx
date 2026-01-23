import { motion } from "motion/react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "CEO, TechStart India",
    image: "https://images.unsplash.com/photo-1653379672421-40c464f335e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFufGVufDF8fHx8MTc2ODk2ODA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "BeInsure transformed our business operations. Their CRM solution helped us increase customer retention by 40%. Highly recommended!",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    role: "Founder, GrowthHub Solutions",
    image: "https://images.unsplash.com/photo-1706185651641-70fde5591275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBidXNpbmVzcyUyMG1hbiUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg5NjgwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "The research and analytics tools provided by BeInsure are exceptional. Data-driven decisions have never been easier for our team.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Director, Innovation Labs",
    image: "https://images.unsplash.com/photo-1562583616-e8a045ed56e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBlbnRyZXByZW5ldXIlMjBzdGFydHVwfGVufDF8fHx8MTc2ODk2ODA5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "Outstanding service! The project management tools streamlined our workflow and improved team productivity significantly.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Managing Partner, NextGen Ventures",
    image: "https://images.unsplash.com/photo-1765518875443-34ac74ef5ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB0ZWNoJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODk2ODA5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "BeInsure understands the Indian market perfectly. Their custom solutions have been instrumental in scaling our operations.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-blue-600 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading businesses across India
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Client Image */}
              <div className="mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mx-auto"
                />
              </div>

              {/* Star Rating */}
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-orange-500 fill-orange-500"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                "{testimonial.review}"
              </p>

              {/* Client Info */}
              <div className="text-center">
                <h4 className="text-blue-600">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
