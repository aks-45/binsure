import { motion } from "framer-motion";
import { Settings, Users, UserPlus, User, FileText, Shield, Database, CheckCircle, ArrowDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Header } from "./header";
import { Footer } from "./footer";

const servicesFeatures = [
  {
    id: 1,
    icon: Users,
    title: "CRM Center",
    subtitle: "A Complete 360° Client Servicing Hub",
    description: "The CRM Center is the heart of the Services module—your one-stop command center for all client-related information. Here, advisors can drill down from family-level to individual-level details, including:",
    points: [
      "Family Head – Overview of the primary client",
      "Personal Information – Complete profile and demographic details",
      "Cash Flow – Monthly/annual income–expense analysis",
      "Premium Calendar – Upcoming premium schedules for all policies",
      "Premium History – Past payments with dates and status",
      "Commission History – Advisor's earnings record for each policy",
      "Policy's Current Status – Active, lapsed, paid-up, or matured status"
    ],
    benefit: "This macro-to-micro navigation ensures the advisor has a 360° view of every client relationship.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    icon: UserPlus,
    title: "Family Group",
    subtitle: "Create Family Profiles",
    description: "The Family Group section allows advisors to create and maintain comprehensive family-level records. Here, you can:",
    points: [
      "Add a Family Head",
      "Capture household-level information",
      "Build a structured family relationship tree"
    ],
    benefit: "This creates a strong foundation for organizing policies and reporting.",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    icon: User,
    title: "Family Member",
    subtitle: "Maintain Individual Family Details",
    description: "Under the Family Head, the Family Member section helps maintain all individual members of that family. You can record:",
    points: [
      "Personal details",
      "Date of birth, occupation, relations, etc.",
      "Member-wise insurance requirements"
    ],
    benefit: "This makes it easier to manage policies and future sales opportunities.",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    icon: FileText,
    title: "LIC Policies",
    subtitle: "Maintain All Issued LIC Policies",
    description: "This section helps advisors keep detailed records of all LIC policies issued to clients. It includes:",
    points: [
      "Plan name",
      "Term and PPT (Premium Paying Term)",
      "Sum Assured",
      "Policy number and dates",
      "Status and servicing details"
    ],
    benefit: "This ensures accurate tracking and quick access to all LIC-related information.",
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    icon: Shield,
    title: "GIC Policies",
    subtitle: "General Insurance Records",
    description: "Similar to LIC policies, the GIC Policies section maintains all General Insurance policies. Advisors can record:",
    points: [
      "Policy type",
      "Sum insured",
      "Premium details",
      "Validity period",
      "Claims and renewal history"
    ],
    benefit: "This helps in managing non-life insurance portfolios efficiently.",
    color: "from-indigo-500 to-blue-500"
  },
  {
    id: 6,
    icon: Database,
    title: "Masters",
    subtitle: "Centralized Setup for All Master Data",
    description: "The Masters section allows advisors to configure the important foundational data used across the application, such as:",
    points: [
      "Agency",
      "Branch",
      "Category",
      "Message Templates",
      "Presentation Master",
      "Other essential classifications"
    ],
    benefit: "This ensures consistency, easy setup, and smooth functioning of all modules.",
    color: "from-teal-500 to-green-500"
  }
];

export function ServicesPage() {
  const navigate = useNavigate();

  return (
    <>
      <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-green-500 rounded-full blur-3xl opacity-30" />
        </div>

        <Header currentPage="products" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500/30 to-green-500/10 mb-6">
            <Settings className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl text-white mb-6">
            🛠 Services – Deep Dive into
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
              Comprehensive Post-Sales Management
            </span>
          </h1>
          <p className="text-lg text-blue-200 max-w-4xl mx-auto leading-relaxed mb-8">
            The Services module in BInsure is designed to give insurance advisors complete control over their post-sales operations. From managing family-wise policy details to maintaining financial history and plan-wise records, this module ensures every client is served with precision, clarity, and professionalism. It centralizes all service-related information in one easy-to-navigate place.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-green-400"
          >
            <ArrowDown className="w-6 h-6 mx-auto" />
          </motion.div>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {servicesFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              {/* Card Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${feature.color} rounded-3xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`} />
              
              {/* Main Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-3xl border border-white/10 h-full">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${feature.color}`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-lg font-bold text-white">{feature.title}</h2>
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-xs font-bold text-slate-900">
                        {feature.id}
                      </div>
                    </div>
                    <h3 className={`text-xs bg-gradient-to-r ${feature.color} bg-clip-text text-transparent font-semibold`}>
                      {feature.subtitle}
                    </h3>
                  </div>
                </div>
                
                <p className="text-blue-200 mb-4 text-sm leading-relaxed">
                  {feature.description}
                </p>

                <div className="space-y-2 mb-4">
                  {feature.points.map((point, pointIndex) => (
                    <motion.div
                      key={pointIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: pointIndex * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-blue-100 text-xs">{point}</span>
                    </motion.div>
                  ))}
                </div>

                <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} bg-opacity-10 border border-white/10`}>
                  <p className="text-white font-medium italic text-xs">
                    {feature.benefit}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <img
            src="/service.jpeg"
            alt="BInsure Services Module"
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </div>
      </section>
      <Footer />
    </>
  );
}