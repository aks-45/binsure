import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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

export function EnhancedTestimonials() {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-blue-400 uppercase tracking-[0.3em] text-xs">
              Testimonials
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl text-white mb-3">
            What Our Clients Say
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Trusted by leading businesses across India
          </p>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />

              {/* Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-5 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/50 transition-all h-full flex flex-col">
                {/* Quote icon */}
                <Quote className="w-6 h-6 text-blue-400/30 mb-3" />

                {/* Review */}
                <p className="text-blue-100/70 text-xs mb-4 leading-relaxed flex-grow">
                  {testimonial.review}
                </p>

                {/* Star Rating */}
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 text-orange-400 fill-orange-400"
                    />
                  ))}
                </div>

                {/* Client Info */}
                <div className="flex items-center gap-3 pt-3 border-t border-blue-500/20">
                  <motion.img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover border-2 border-blue-500/30"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div>
                    <h4 className="text-white text-xs">
                      {testimonial.name}
                    </h4>
                    <p className="text-blue-300/60 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}