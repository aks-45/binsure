import { motion } from "framer-motion";
import { Presentation, Edit3, Star, Package, PiggyBank, CheckCircle, ArrowDown, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

const presentationFeatures = [
  {
    id: 1,
    icon: Edit3,
    title: "My Presentation",
    subtitle: "Create Your Own Custom Proposals",
    description: "With My Presentation, agents have complete flexibility to design proposals exactly the way they want. This section allows advisors to:",
    points: [
      "Build personalized combinations of LIC plans",
      "Align benefits and features with individual client goals",
      "Customize the layout and flow of the proposal",
      "Present need-based solutions with full control and creativity"
    ],
    benefit: "This is ideal for advisors who prefer a personalized presentation style.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: Star,
    title: "Special Presentation",
    subtitle: "Highlighting Premium LIC Plans",
    description: "The Special Presentation section focuses on important LIC plans that require detailed explanation and visual clarity. It offers:",
    points: [
      "Professionally designed cover pages",
      "Highlighted key features and benefits",
      "Comprehensive plan summaries",
      "Attractive and easy-to-understand illustrations"
    ],
    benefit: "These presentations help agents showcase the uniqueness of special LIC plans with maximum impact.",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    icon: Package,
    title: "Combinations",
    subtitle: "Expert-Crafted Ready Solutions",
    description: "Designed by BInsure's Insurance Advisor Board, the Combinations section gives advisors a set of powerful, ready-to-use need-based plan packages such as:",
    points: [
      "Smart Investor – For clients seeking higher returns",
      "Jeevan Mahotsav – For a comfortable and stress-free life",
      "Smart Lady – Focused on women-oriented financial protection",
      "Complete Education – Structured for child education and future goals"
    ],
    benefit: "These combinations allow advisors to offer instant, professional, need-based solutions without manual plan-building.",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    icon: PiggyBank,
    title: "Retirement Pack",
    subtitle: "Dedicated Retirement Planning Solutions",
    description: "The Retirement Pack is a specialized category designed exclusively for retirement-focused clients. It provides:",
    points: [
      "Carefully researched LIC retirement plan combinations",
      "Easy-to-present retirement income projections",
      "Long-term benefit illustrations",
      "Comprehensive presentations tailored for wealth creation after retirement"
    ],
    benefit: "This section helps advisors offer clients the most suitable and optimized retirement planning proposals.",
    color: "from-orange-500 to-red-500"
  }
];

export function PresentationPage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-30" />
        </div>

        <Header currentPage="products" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/30 to-purple-500/10 mb-6">
            <Presentation className="w-10 h-10 text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            🎯 Presentation – Deep Dive into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Smart, Need-Based Proposal Building
            </span>
          </h1>
          <p className="text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed mb-8">
            The Presentation module in BInsure empowers insurance advisors to create powerful, customized, and convincing sales presentations tailored to each client's needs. The module offers multiple ways to prepare proposals—from fully custom combinations to expert-designed ready-made solutions.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-purple-400"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {presentationFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`} />
              
              {/* Main Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10 h-full">
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color}`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h2 className="text-xl font-bold text-white">{feature.title}</h2>
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-slate-900">
                        {feature.id}
                      </div>
                    </div>
                    <h3 className={`text-sm bg-gradient-to-r ${feature.color} bg-clip-text text-transparent font-semibold`}>
                      {feature.subtitle}
                    </h3>
                  </div>
                </div>
                
                <p className="text-blue-200 mb-6 text-base leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-3 mb-6">
                  {feature.points.map((point, pointIndex) => (
                    <motion.div
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: pointIndex * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-100 text-sm">{point}</span>
                    </motion.div>
                  ))}
                </div>

                <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} bg-opacity-10 border border-white/10`}>
                  <p className="text-white font-medium italic text-sm">
                    {feature.benefit}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Presentation Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <img
            src="/presentation.jpeg"
            alt="BInsure Presentation Module"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </div>
      </section>
      <Footer />
    </>
  );
}