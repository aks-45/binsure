import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          backgroundSize: "100% 100%",
        }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
          className="inline-block mb-6"
        >
          <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
            <Sparkles className="w-10 h-10 text-yellow-300" />
          </div>
        </motion.div>

        {/* Main statement */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Ready to Transform
          <br />
          Your Business?
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Join hundreds of Indian businesses achieving unprecedented growth with
          intelligent automation and insights
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group relative px-10 py-4 bg-orange-500 text-white rounded-xl text-lg overflow-hidden shadow-2xl"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600"
              initial={{ x: "-100%" }}
              whileHover={{ x: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 flex items-center gap-2">
              Start Your 5-Day Free Trial
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>

          <motion.button
            className="group px-10 py-4 bg-transparent border-2 border-white text-white rounded-xl text-lg relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ y: "100%" }}
              whileHover={{ y: 0 }}
              transition={{ duration: 0.4 }}
            />
            <span className="relative z-10 group-hover:text-blue-700 transition-colors">
              Book a Call
            </span>
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-blue-100 mb-4 text-sm">Trusted by Industry Leaders</p>
          <div className="flex flex-wrap justify-center gap-4 text-white/60 text-xs">
            <div>✓ No credit card required</div>
            <div>✓ Free 5-day trial</div>
            <div>✓ Cancel anytime</div>
            <div>✓ 24/7 support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}