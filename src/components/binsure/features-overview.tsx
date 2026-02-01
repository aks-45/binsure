import { motion } from "framer-motion";
import { Users, Presentation, Settings, FileText, CheckCircle, Calendar, Bell, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

const features = [
  {
    id: 1,
    icon: Users,
    title: "CRM – Powerful Pre-Sales & Lead Management",
    description: "BInsure's CRM module gives agents full control over their pre-sales activities.",
    points: [
      "Maintain a detailed prospect list",
      "Track leads with clear status updates",
      "Manage follow-ups with reminders",
      "Organize client interactions in one place"
    ],
    benefit: "",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: Presentation,
    title: "Presentation – Smart, Need-Based Proposal Builder",
    description: "Create professional and personalized proposals for both new and existing clients.",
    points: [
      "Combine multiple plans as per client needs",
      "Support for LIC, General Insurance, Mutual Funds, and hybrid combinations",
      "Present clear, convincing illustrations",
      "Tailor proposals based on existing investments"
    ],
    benefit: "",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    icon: Settings,
    title: "Services – Comprehensive Post-Sales Support",
    description: "BInsure simplifies policy servicing and daily operational tasks.",
    points: [
      "Maintain a detailed policy register",
      "Track premium schedules and due dates",
      "Manage commissions and payouts",
      "Update policy status and follow-up actions"
    ],
    benefit: "",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    icon: FileText,
    title: "Servicing Reports – Ensuring Consistent Client Engagement",
    description: "After-sales commitment is key to client trust. BInsure provides intelligent reports and alerts to help agents stay connected throughout the policy tenure.",
    points: [
      "Premium due reminders",
      "SB (Survival Benefit) due alerts",
      "Maturity reminders",
      "Lapse alerts and revival opportunities",
      "Reports that help pitch new policies at the right moment"
    ],
    benefit: "",
    color: "from-orange-500 to-red-500"
  }
];

export function FeaturesOverview() {
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            Complete Insurance Management
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Suite
            </span>
          </h1>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            From lead generation to policy servicing, BInsure provides everything insurance agents need to grow their business and serve clients better.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${feature.color} bg-opacity-20`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white">0{feature.id}</div>
                </div>
                
                <h2 className="text-2xl md:text-3xl text-white mb-4 leading-tight">
                  {feature.title}
                </h2>
                
                <p className="text-blue-200 mb-6 text-lg leading-relaxed">
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
                      <span className="text-blue-100">{point}</span>
                    </motion.div>
                  ))}
                </div>

                {feature.benefit && (
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${feature.color} bg-opacity-10 border border-white/10`}>
                    <p className="text-white font-medium italic">
                      {feature.benefit}
                    </p>
                  </div>
                )}

                <motion.button
                  className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    if (feature.id === 1) {
                      navigate('/crm');
                    } else if (feature.id === 2) {
                      navigate('/presentation');
                    } else if (feature.id === 3) {
                      navigate('/services-module');
                    } else if (feature.id === 4) {
                      navigate('/servicing-reports-module');
                    } else {
                      navigate('/contact');
                    }
                  }}
                >
                  Explore More
                </motion.button>
              </div>

              {/* Visual Element */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <div className={`absolute -inset-4 bg-gradient-to-r ${feature.color} rounded-3xl opacity-20 blur-xl`} />
                  <div className="relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                    <div className="grid grid-cols-2 gap-4">
                      {[Calendar, Bell, TrendingUp, CheckCircle].map((Icon, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center"
                        >
                          <Icon className="w-8 h-8 text-white/70" />
                        </motion.div>
                      ))}
                    </div>
                    <div className="mt-6 text-center">
                      <div className={`inline-block p-3 rounded-full bg-gradient-to-r ${feature.color}`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      </section>
      <Footer />
    </>
  );
}