import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function HeroSection() {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-50"
        animate={{
          background: [
            "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #eff6ff 100%)",
            "linear-gradient(135deg, #dbeafe 0%, #ffffff 50%, #dbeafe 100%)",
            "linear-gradient(135deg, #eff6ff 0%, #ffffff 50%, #eff6ff 100%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating abstract shapes */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, 30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl"
        animate={{
          y: [0, -40, 0],
          x: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Brand */}
          <h1 className="text-6xl md:text-8xl mb-4 tracking-tight">
            <span className="text-blue-600">BeInsure</span>
            <span className="text-blue-600 mx-3">|</span>
            <span className="text-blue-600">BINSURE</span>
          </h1>

          {/* Tagline */}
          <motion.p
            className="text-xl md:text-2xl text-gray-700 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Empowering Indian Businesses with Intelligent Solutions for Growth,
            Efficiency, and Success
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <button 
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              onClick={() => navigate('/contact')}
            >
              Start Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg text-lg transition-all duration-300 transform hover:scale-105">
              Book a Call
            </button>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8 text-blue-600" />
        </motion.div>
      </div>
    </section>
  );
}
