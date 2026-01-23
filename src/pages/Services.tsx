import { 
  Users, 
  UserPlus, 
  User, 
  FileText, 
  Shield, 
  Settings,
  Calendar,
  DollarSign,
  History,
  ClipboardCheck,
  Home,
  Briefcase,
  Building,
  MessageSquare,
  Presentation,
  FolderTree,
  Eye,
  TrendingUp,
  CheckCircle,
  Target,
  Clock,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const crmFeatures = [
    { icon: Home, label: "Family Head", description: "Overview of the primary client", color: "text-blue-600" },
    { icon: User, label: "Personal Information", description: "Complete profile and demographic details", color: "text-green-600" },
    { icon: TrendingUp, label: "Cash Flow", description: "Monthly/annual income–expense analysis", color: "text-purple-600" },
    { icon: Calendar, label: "Premium Calendar", description: "Upcoming premium schedules for all policies", color: "text-orange-600" },
    { icon: History, label: "Premium History", description: "Past payments with dates and status", color: "text-indigo-600" },
    { icon: Briefcase, label: "Commission History", description: "Advisor's earnings record for each policy", color: "text-emerald-600" },
    { icon: CheckCircle, label: "Policy's Current Status", description: "Active, lapsed, paid-up, or matured status", color: "text-red-600" },
  ];

  const masterItems = [
    { icon: Building, label: "Agency", description: "Configure agency details" },
    { icon: FolderTree, label: "Branch", description: "Manage branch information" },
    { icon: Users, label: "Category", description: "Client categorization setup" },
    { icon: MessageSquare, label: "Message Templates", description: "Pre-defined communication templates" },
    { icon: Presentation, label: "Presentation Master", description: "Presentation configurations" },
    { icon: Settings, label: "Other Classifications", description: "Additional master data" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-blue-500/20 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Services</h1>
              <p className="text-sm text-blue-300">Comprehensive Post-Sales Management</p>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="/" 
                className="flex items-center gap-2 px-3 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Back to Home
              </a>
              <Badge className="text-xs bg-blue-500/20 text-blue-300 border border-blue-500/30">BInsure</Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-500/10 mb-6"
          >
            <Settings className="w-10 h-10 text-blue-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold mb-4 text-white"
          >
            Deep Dive into Comprehensive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400">
              Post-Sales Management
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            The Services module gives insurance advisors complete control over their post-sales operations. 
            From managing family-wise policy details to maintaining financial history and plan-wise records, 
            this module ensures every client is served with <span className="font-semibold text-white">precision, clarity, and professionalism</span>.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 flex justify-center"
          >
            <Badge className="px-4 py-2 text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
              <Eye className="w-4 h-4 mr-2" />
              360° Client Servicing Hub
            </Badge>
          </motion.div>
        </div>

        <Tabs defaultValue="crm" className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto gap-1 bg-slate-800/50 p-1 border border-blue-500/20">
            <TabsTrigger value="crm" className="text-xs md:text-sm py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">CRM Center</TabsTrigger>
            <TabsTrigger value="family-group" className="text-xs md:text-sm py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">Family Group</TabsTrigger>
            <TabsTrigger value="family-member" className="text-xs md:text-sm py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">Family Member</TabsTrigger>
            <TabsTrigger value="lic" className="text-xs md:text-sm py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">LIC Policies</TabsTrigger>
            <TabsTrigger value="gic" className="text-xs md:text-sm py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">GIC Policies</TabsTrigger>
            <TabsTrigger value="masters" className="text-xs md:text-sm py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">Masters</TabsTrigger>
          </TabsList>

          {/* CRM Center Tab */}
          <TabsContent value="crm" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-blue-500/20 shadow-lg bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/20">
                    <Users className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">CRM Center</CardTitle>
                    <CardDescription className="text-blue-300">A Complete 360° Client Servicing Hub</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-6 text-base leading-relaxed">
                  The CRM Center is the heart of the Services module—your <span className="font-semibold text-white">one-stop command center</span> for all client-related information. 
                  Here, advisors can drill down from family-level to individual-level details with <span className="font-semibold text-blue-300">macro-to-micro navigation</span>, 
                  ensuring a complete 360° view of every client relationship.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {crmFeatures.map((feature, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                      className="group relative p-5 rounded-xl border border-blue-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-400/50 group-hover:scale-110 transition-all duration-300">
                          <feature.icon className={`w-6 h-6 ${feature.color} transition-transform duration-300`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-white mb-2">{feature.label}</h4>
                          <p className="text-xs text-blue-200 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </TabsContent>

          {/* Family Group Tab */}
          <TabsContent value="family-group" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-blue-500/20 shadow-lg bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-emerald-500/20">
                    <UserPlus className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Family Group</CardTitle>
                    <CardDescription className="text-blue-300">Create Family Profiles</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-6 text-base leading-relaxed">
                  The Family Group section allows advisors to create and maintain comprehensive family-level records. 
                  Here, you can <span className="font-semibold text-white">add a Family Head, capture household-level information, and build a structured family relationship tree</span>. 
                  This creates a strong foundation for organizing policies and reporting.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="group relative p-5 rounded-xl border border-emerald-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
                    <Home className="w-8 h-8 text-emerald-400 mb-3" />
                    <h4 className="font-semibold text-white mb-2">Add a Family Head</h4>
                    <p className="text-sm text-blue-200">Designate the primary client who heads the family unit</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="group relative p-5 rounded-xl border border-emerald-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
                    <FileText className="w-8 h-8 text-emerald-400 mb-3" />
                    <h4 className="font-semibold text-white mb-2">Household Information</h4>
                    <p className="text-sm text-blue-200">Capture comprehensive household-level details</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="group relative p-5 rounded-xl border border-emerald-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-emerald-400/50 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-500"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
                    <FolderTree className="w-8 h-8 text-emerald-400 mb-3" />
                    <h4 className="font-semibold text-white mb-2">Family Relationship Tree</h4>
                    <p className="text-sm text-blue-200">Build a structured family relationship hierarchy</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </TabsContent>

          {/* Family Member Tab */}
          <TabsContent value="family-member" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-blue-500/20 shadow-lg bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/20">
                    <User className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Family Member</CardTitle>
                    <CardDescription className="text-blue-300">Maintain Individual Family Details</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-6 text-base leading-relaxed">
                  Under the Family Head, the Family Member section helps maintain all individual members of that family. 
                  You can record <span className="font-semibold text-white">personal details, date of birth, occupation, relations, and member-wise insurance requirements</span>. 
                  This makes it easier to manage policies and future sales opportunities.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="group relative p-5 rounded-xl border border-blue-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 text-center"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-400/50 mb-3 mx-auto">
                      <User className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-white">Personal Details</h4>
                    <p className="text-sm text-blue-200 mt-2">Complete member profiles</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="group relative p-5 rounded-xl border border-blue-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 text-center"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-400/50 mb-3 mx-auto">
                      <Calendar className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-white">DOB, Occupation, Relations</h4>
                    <p className="text-sm text-blue-200 mt-2">Key demographic information</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="group relative p-5 rounded-xl border border-blue-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 text-center"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-400/50 mb-3 mx-auto">
                      <Shield className="w-6 h-6 text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-white">Insurance Requirements</h4>
                    <p className="text-sm text-blue-200 mt-2">Member-wise coverage needs</p>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </TabsContent>

          {/* LIC Policies Tab */}
          <TabsContent value="lic" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-blue-500/20 shadow-lg bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/20">
                    <FileText className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">LIC Policies</CardTitle>
                    <CardDescription className="text-blue-300">Maintain All Issued LIC Policies</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-6 text-base leading-relaxed">
                  This section helps advisors keep detailed records of all LIC policies issued to clients. 
                  It includes <span className="font-semibold text-white">plan name, term and PPT (Premium Paying Term), sum assured, policy number and dates, status and servicing details</span>. 
                  This ensures accurate tracking and quick access to all LIC-related information.
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-blue-500/20 bg-slate-700/30">
                        <th className="text-left p-3 text-sm font-semibold text-white">Field</th>
                        <th className="text-left p-3 text-sm font-semibold text-white">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { field: "Plan Name", desc: "Name of the LIC plan", icon: Target },
                        { field: "Term & PPT", desc: "Policy term and Premium Paying Term", icon: Clock },
                        { field: "Sum Assured", desc: "Total coverage amount", icon: DollarSign },
                        { field: "Policy Number", desc: "Unique policy identifier", icon: FileText },
                        { field: "Policy Dates", desc: "Start date and maturity date", icon: Calendar },
                        { field: "Status & Servicing", desc: "Current status and service details", icon: CheckCircle },
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-blue-500/10 hover:bg-slate-700/20 transition-colors">
                          <td className="p-4">
                            <div className="flex items-center gap-3">
                              <row.icon className="w-4 h-4 text-amber-400" />
                              <span className="text-sm font-medium text-white">{row.field}</span>
                            </div>
                          </td>
                          <td className="p-4 text-sm text-blue-200">{row.desc}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </TabsContent>

          {/* GIC Policies Tab */}
          <TabsContent value="gic" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-blue-500/20 shadow-lg bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-purple-500/20">
                    <Shield className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">GIC Policies</CardTitle>
                    <CardDescription className="text-blue-300">General Insurance Records</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-6 text-base leading-relaxed">
                  Similar to LIC policies, the GIC Policies section maintains all General Insurance policies. 
                  Advisors can record <span className="font-semibold text-white">policy type, sum insured, premium details, validity period, claims and renewal history</span>. 
                  This helps in managing non-life insurance portfolios efficiently.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                  {[
                    { label: "Policy Type", icon: FileText },
                    { label: "Sum Insured", icon: DollarSign },
                    { label: "Premium Details", icon: Briefcase },
                    { label: "Validity Period", icon: Calendar },
                    { label: "Claims & Renewal", icon: History },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.12 * (i + 1) }}
                      className="group relative p-4 rounded-xl border border-purple-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 text-center"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
                      <item.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-white">{item.label}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </TabsContent>

          {/* Masters Tab */}
          <TabsContent value="masters" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-blue-500/20 shadow-lg bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-rose-500/20">
                    <Settings className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Masters</CardTitle>
                    <CardDescription className="text-blue-300">Centralized Setup for All Master Data</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-6 text-base leading-relaxed">
                  The Masters section allows advisors to configure the important foundational data used across the application, such as 
                  <span className="font-semibold text-white">Agency, Branch, Category, Message Templates, Presentation Master, and other essential classifications</span>. 
                  This ensures consistency, easy setup, and smooth functioning of all modules.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {masterItems.map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 * (index + 1) }}
                      className="group relative p-4 rounded-xl border border-rose-500/20 bg-slate-800/50 backdrop-blur-sm hover:border-rose-400/50 hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-500"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-rose-500/10 border border-rose-500/20 group-hover:border-rose-400/50 transition-all">
                          <item.icon className="w-5 h-5 text-rose-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-white">{item.label}</h4>
                          <p className="text-xs text-blue-300">{item.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Services;
