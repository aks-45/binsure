import { motion } from "framer-motion";
import { Star, Quote, User } from "lucide-react";

const testimonials = [
  {
    name: "Amit Gupta",
    role: "Senior Insurance Agent, Mumbai",
    review: "Since using BInsure, my business has grown 3x! The lead management system ensures I never lose a potential client, and the automated follow-ups have increased my conversion rate significantly.",
    rating: 5,
  },
  {
    name: "Sunita Sharma",
    role: "LIC Development Officer, Delhi",
    review: "BInsure's presentation tools are incredible! My clients are impressed with the professional proposals I create. The premium tracking feature has saved me countless hours and improved client satisfaction.",
    rating: 5,
  },
  {
    name: "Rajesh Patel",
    role: "General Insurance Agent, Ahmedabad",
    review: "Managing policies from multiple companies was a nightmare before BInsure. Now I have everything organized in one dashboard. My efficiency has doubled and client servicing has become seamless.",
    rating: 5,
  },
  {
    name: "Kavita Singh",
    role: "Insurance Advisor, Pune",
    review: "The servicing reports and renewal reminders are game-changers! I can provide proactive service to my clients, which has strengthened relationships and increased my retention rate to 95%.",
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
                  <motion.div
                    className="w-10 h-10 rounded-full bg-blue-500/20 border-2 border-blue-500/30 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <User className="w-5 h-5 text-blue-400" />
                  </motion.div>
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