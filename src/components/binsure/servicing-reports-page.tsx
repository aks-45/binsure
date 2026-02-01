import { motion } from "framer-motion";
import { BarChart3, DollarSign, PieChart, FileText, Folder, CheckCircle, ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

const reportingFeatures = [
  {
    id: 1,
    icon: DollarSign,
    title: "Premium Reports",
    subtitle: "Track, Manage & Support Premium Lifecycle",
    description: "The Premium Reports section equips advisors with detailed insights into premium-related activities. It includes reports such as:",
    points: [
      "Premium Dues – Upcoming premiums that need attention",
      "Outstanding Premiums – Premiums that clients have missed",
      "Lapsed Policies – Policies that have gone into lapse due to non-payment",
      "FUP-wise Due Reports – Due reports categorized by First Unpaid Premium",
      "Premium Paid Certificates – Certificates generated for clients for financial or tax purposes"
    ],
    benefit: "These reports help advisors ensure timely servicing and revive sales opportunities.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: PieChart,
    title: "Client Presentations",
    subtitle: "Visual and Analytical Charts",
    description: "This section helps advisors present client information in a clear, visual, and impactful manner. Charts include:",
    points: [
      "Comprehensive Insurance Chart – Full summary of all policies",
      "Cash Flow Chart – Visual representation of income, expenses, and premium commitments",
      "Premium Calendar Chart – A month-wise view of upcoming premium payments"
    ],
    benefit: "These charts help clients understand their insurance and financial planning better while improving advisor professionalism.",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    icon: FileText,
    title: "Office Reports",
    subtitle: "Operational Registers for Daily Administration",
    description: "The Office Reports segment provides all essential registers an advisor needs to manage day-to-day business operations efficiently. These include:",
    points: [
      "Policy Register",
      "Survival Benefit Register",
      "Maturity Benefit Register",
      "Age Attainment Register",
      "Commission Outstanding Report",
      "Greetings Reports – Birthday and Anniversary reminders"
    ],
    benefit: "These reports ensure smooth business operations and strengthen client servicing.",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    icon: Folder,
    title: "Other Reports",
    subtitle: "Complete Portfolio Management Registers",
    description: "This category includes all other important servicing and compliance registers such as:",
    points: [
      "In-Force Policies",
      "Lapsation Register",
      "Surrender Register",
      "Maturity Register",
      "Premium Waiver Register",
      "Fully Paid-Up Register",
      "Death Claim Register",
      "Policy Holder Register"
    ],
    benefit: "These reports give advisors a complete picture of their portfolio status across all policy types and client scenarios.",
    color: "from-orange-500 to-red-500"
  }
];

export function ServicingReportsPage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-orange-500 rounded-full blur-3xl opacity-30" />
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-orange-500/30 to-orange-500/10 mb-6">
            <BarChart3 className="w-10 h-10 text-orange-400" />
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            📊 Servicing Reports – Deep Dive into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Smart, Insightful, and Action-Oriented Reporting
            </span>
          </h1>
          <p className="text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed mb-8">
            The Servicing Reports module in BInsure is designed to empower insurance advisors with every report needed for servicing, compliance, tracking, and client engagement. From premium dues to maturity summaries and office registers, this module provides complete visibility into the advisor's entire portfolio—helping them stay proactive, organized, and service-ready.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-orange-400"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {reportingFeatures.map((feature, index) => (
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

        {/* Service Report Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <img
            src="/service-report.jpeg"
            alt="BInsure Servicing Reports Module"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </div>
      </section>
      <Footer />
    </>
  );
}