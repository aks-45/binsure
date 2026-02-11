import { motion } from "framer-motion";
import { Users, FileText, Search, Phone, Mail, MessageSquare, Share2, CheckCircle, Calendar, Target, ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Header } from "./header";
import { Footer } from "./footer";

const crmFeatures = [
  {
    id: 1,
    icon: Users,
    title: "Lead Entry",
    subtitle: "Build and Organize Your Prospects",
    description: "Start by capturing every new lead with complete clarity. The Lead Entry feature helps you:",
    points: [
      "Record personal and basic contact details",
      "Categorize leads based on source, interest level, or type",
      "Prioritize potential clients for efficient follow-ups"
    ],
    benefit: "This becomes the foundation for building your prospect pipeline.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: Search,
    title: "Fact Findings",
    subtitle: "Understand Your Client Deeply",
    description: "A successful proposal requires understanding the client's needs. The Fact Findings section helps you gather in-depth insights such as:",
    points: [
      "Personal and family information",
      "Financial background and income flow",
      "Savings habits and risk appetite",
      "Existing investments and policies",
      "Future plans, goals, and protection needs"
    ],
    benefit: "With this information, you can create accurate, need-based plans and increase your chances of conversion.",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    icon: Calendar,
    title: "Follow-Ups",
    subtitle: "Stay Connected Until Closure",
    description: "Closing a deal depends on the right timing and consistent touchpoints. The Follow Ups feature allows you to:",
    points: [
      "Schedule follow-ups for each prospect",
      "Track progress through every stage",
      "Update lead status based on discussions",
      "Never miss an important callback or meeting"
    ],
    benefit: "This structured follow-up cycle keeps the sales journey active and organized.",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    icon: Share2,
    title: "Multi-Channel Communication",
    subtitle: "Engage the Modern Way",
    description: "BInsure makes it easy to stay connected with prospects using multiple channels:",
    points: [
      "Email communication",
      "WhatsApp messages",
      "Social media outreach"
    ],
    benefit: "These built-in touchpoints ensure you can engage prospects the way they prefer, strengthening your relationship and increasing the likelihood of converting them into clients.",
    color: "from-orange-500 to-red-500"
  }
];

export function CRMPage() {
  const navigate = useNavigate();
  const [searchParams] = useState(() => new URLSearchParams(window.location.search));
  const appType = searchParams.get('app') || 'desktop';

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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-500/10 mb-6">
            <Users className="w-10 h-10 text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            CRM – Deep Dive into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Pre-Sales Excellence
            </span>
          </h1>
          <p className="text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed mb-8">
            The CRM module in BInsure is designed to strengthen your entire pre-sales workflow—right from collecting initial lead details to nurturing prospects until the deal is closed. It ensures that every potential customer is tracked, understood, and engaged with in the most effective manner.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-blue-400"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {crmFeatures.map((feature, index) => (
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

        {/* CRM Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <img
            src={appType === 'mobile' ? '/CRM.jpeg' : '/CRM(d).png'}
            alt={`BInsure CRM Module - ${appType === 'mobile' ? 'Mobile' : 'Desktop'} View`}
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </div>
      </section>
      <Footer />
    </>
  );
}