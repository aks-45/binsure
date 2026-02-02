import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

export function EnhancedHero() {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background layers */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, rgba(59, 130, 246, 0.3), transparent 50%)`,
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: Math.random() * 0.5 + 0.2,
          }}
          animate={{
            y: [null, Math.random() * window.innerHeight],
            opacity: [null, Math.random() * 0.5 + 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500 rounded-full opacity-20 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Header currentPage="home" />

      {/* Main content section with top padding */}
      <div className="pt-20">

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
          {/* Left side - Content */}
          <div className="text-left">
            {/* Main statement */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Why
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400">
                BInsure?
              </span>
            </motion.h1>

            {/* Supporting description */}
            <motion.p
              className="text-base md:text-lg text-blue-100 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              BInsure is a powerful all-in-one desktop application designed specifically for insurance agents to simplify, streamline, and supercharge their business. It supports every stage of the agent's workflow—pre-sales, new sales, and post-sales servicing—with smart tools that save time, improve accuracy, and enhance client engagement.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="flex justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                className="group px-8 py-3 bg-transparent border-2 border-blue-400 text-blue-400 rounded-lg text-base relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
              >
                <motion.div
                  className="absolute inset-0 bg-blue-400"
                  initial={{ y: "100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 group-hover:text-slate-900 transition-colors">
                  Book a Call
                </span>
              </motion.button>
            </motion.div>
          </div>
          
          {/* Right side - Key Reasons */}
          <div className="lg:mt-0 mt-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl text-white mb-6 leading-tight">
                Key Reasons to Choose
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400">
                  BInsure
                </span>
              </h2>
              
              <div className="space-y-4">
                {[
                  "Manage leads & prospects with ease",
                  "Create powerful, customized sales presentations",
                  "Handle post-sales servicing effortlessly",
                  "Smart reminders for premiums, SB & client events",
                  "Supports LIC, GI, Mutual Funds & hybrid plans",
                  "Built specifically for real insurance agent workflows"
                ].map((reason, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  >
                    <motion.div
                      className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5"
                      whileHover={{ scale: 1.2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-white text-xs font-bold">✓</span>
                    </motion.div>
                    <p className="text-blue-100 text-sm leading-relaxed">
                      {reason}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>



      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-blue-400 text-xs uppercase tracking-widest">
          
        </span>
        
      </motion.div>
      </div>
    </section>
  );
}