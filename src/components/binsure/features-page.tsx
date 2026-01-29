import { motion, useScroll, useTransform } from "motion/react";
import { FileText, Presentation, Users, Target } from "lucide-react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: FileText,
    title: "My Presentation – Create Your Own Custom Proposals",
    description: "With My Presentation, agents have complete flexibility to design proposals exactly the way they want.",
    points: [
      "Build personalized combinations of LIC plans",
      "Align benefits and features with individual client goals",
      "Customize the layout and flow of the proposal",
      "Present need-based solutions with full control and creativity"
    ]
  },
  {
    icon: Presentation,
    title: "Special Presentation – Highlighting Premium LIC Plans",
    description: "The Special Presentation section focuses on important LIC plans that require detailed explanation and visual clarity.",
    points: [
      "Professionally designed cover pages",
      "Highlighted key features and benefits",
      "Comprehensive plan summaries",
      "Attractive and easy-to-understand illustrations"
    ]
  },
  {
    icon: Users,
    title: "Combinations – Expert-Crafted Ready Solutions",
    description: "Designed by BInsure's Insurance Advisor Board, the Combinations section gives advisors a set of powerful, ready-to-use need-based plan packages.",
    points: [
      "Smart Investor – For clients seeking higher returns",
      "Jeevan Mahotsav – For a comfortable and stress-free life",
      "Smart Lady – Focused on women-oriented financial protection",
      "Complete Education – Structured for child education and future goals"
    ]
  },
  {
    icon: Target,
    title: "Retirement Pack – Dedicated Retirement Planning Solutions",
    description: "The Retirement Pack is a specialized category designed exclusively for retirement-focused clients.",
    points: [
      "Carefully researched LIC retirement plan combinations",
      "Easy-to-present retirement income projections",
      "Long-term benefit illustrations",
      "Comprehensive presentations tailored for wealth creation after retirement"
    ]
  }
];

export function FeaturesPage() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{ y: backgroundY, opacity }}
      >
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-30" />
      </motion.div>

      {/* Header */}
      <motion.header
        className="absolute top-0 left-0 right-0 z-20 px-6 py-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-xl">
            Binsure
          </div>
          <nav className="hidden md:flex gap-8 text-white/80 text-sm">
            <button onClick={() => navigate('/')} className="hover:text-white transition-colors">
              Home
            </button>
            <span className="text-white">
              Features
            </span>
            <button onClick={() => navigate('/contact')} className="hover:text-white transition-colors">
              Contact
            </button>
          </nav>
        </div>
      </motion.header>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20">
        {/* Page title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Presentation Features
          </h1>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            The Presentation module in BInsure empowers insurance advisors to create powerful, 
            customized, and convincing sales presentations tailored to each client's needs. 
            The module offers multiple ways to prepare proposals—from fully custom combinations 
            to expert-designed ready-made solutions.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="space-y-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-blue-500/20 group-hover:border-blue-400/50 transition-all duration-500">
                <div className="flex items-start gap-6">
                  <motion.div
                    className="flex-shrink-0 p-4 bg-blue-500/10 rounded-xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <feature.icon className="w-8 h-8 text-blue-400" />
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-blue-200/80 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {feature.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start gap-3 text-blue-200/70">
                          <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>
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