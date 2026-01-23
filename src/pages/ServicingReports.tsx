import {
  FileText,
  BarChart3,
  Eye,
  TrendingUp,
  CheckCircle,
  Calendar,
  DollarSign,
  Users,
  Settings,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const ServicingReports = () => {
  const premiumReports = [
    { icon: Calendar, label: "Premium Dues", description: "Upcoming premiums that need attention", color: "text-blue-600" },
    { icon: TrendingUp, label: "Outstanding Premiums", description: "Premiums that clients have missed", color: "text-red-600" },
    { icon: CheckCircle, label: "Lapsed Policies", description: "Policies gone into lapse due to non-payment", color: "text-orange-600" },
    { icon: FileText, label: "FUP-wise Due Reports", description: "Due reports categorized by First Unpaid Premium", color: "text-purple-600" },
    { icon: DollarSign, label: "Premium Paid Certificates", description: "Certificates for financial or tax purposes", color: "text-emerald-600" },
  ];

  const clientCharts = [
    { label: "Comprehensive Insurance Chart", description: "Full summary of all policies" },
    { label: "Cash Flow Chart", description: "Visual income, expenses, and premium commitments" },
    { label: "Premium Calendar Chart", description: "Month-wise view of upcoming premium payments" },
  ];

  const officeReports = [
    { label: "Policy Register", description: "Complete list of all policies issued" },
    { label: "Survival Benefit Register", description: "Track survival benefits and maturity events" },
    { label: "Maturity Benefit Register", description: "Manage maturity claims and payouts" },
    { label: "Age Attainment Register", description: "Track milestone age-based events" },
    { label: "Commission Outstanding Report", description: "Monitor pending commission payouts" },
    { label: "Greetings Reports", description: "Birthday and Anniversary reminders for clients" },
  ];

  const otherReports = [
    "In-Force Policies",
    "Lapsation Register",
    "Surrender Register",
    "Maturity Register",
    "Premium Waiver Register",
    "Fully Paid-Up Register",
    "Death Claim Register",
    "Policy Holder Register",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-blue-500/20 bg-slate-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Servicing Reports</h1>
              <p className="text-sm text-blue-300">Smart, Insightful, and Action-Oriented Reporting</p>
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
            <BarChart3 className="w-10 h-10 text-blue-400" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold mb-4 text-white"
          >
            Deep Dive into Smart <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400">
              Insightful Reporting
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            The Servicing Reports module empowers insurance advisors with every report needed for servicing, compliance, tracking, and client engagement. 
            From premium dues to maturity summaries and office registers, gain <span className="font-semibold text-white">complete visibility</span> into your entire portfolio—staying proactive, organized, and service-ready.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 flex justify-center"
          >
            <Badge className="px-4 py-2 text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
              <Eye className="w-4 h-4 mr-2" />
              Complete Portfolio Visibility
            </Badge>
          </motion.div>
        </div>

        <Tabs defaultValue="premium" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 h-auto gap-1 bg-slate-800/50 p-1 border border-blue-500/20">
            <TabsTrigger value="premium" className="text-xs md:text-sm py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">Premium Reports</TabsTrigger>
            <TabsTrigger value="presentations" className="text-xs md:text-sm py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">Client Presentations</TabsTrigger>
            <TabsTrigger value="office" className="text-xs md:text-sm py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">Office Reports</TabsTrigger>
            <TabsTrigger value="other" className="text-xs md:text-sm py-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white">Other Reports</TabsTrigger>
          </TabsList>

          {/* Premium Reports Tab */}
          <TabsContent value="premium" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-blue-500/20 shadow-lg bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-blue-500/20">
                    <FileText className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Premium Reports</CardTitle>
                    <CardDescription className="text-blue-300">Track, Manage & Support Premium Lifecycle</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-6 text-base leading-relaxed">
                  The Premium Reports section equips advisors with detailed insights into premium-related activities. 
                  These reports help advisors <span className="font-semibold text-white">ensure timely servicing and revive sales opportunities </span> 
                  by tracking dues, managing outstanding premiums, and identifying lapsed policies.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                  {premiumReports.map((report, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                      className="group relative p-5 rounded-xl border border-blue-500/20 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/30 hover:border-blue-400/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 cursor-pointer"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
                      <div className="flex flex-col items-center text-center gap-3">
                        <div className="p-3 rounded-full bg-blue-500/10 border border-blue-500/20 group-hover:border-blue-400/50 group-hover:scale-110 transition-all duration-300">
                          <report.icon className={`w-6 h-6 ${report.color} transition-transform duration-300`} />
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-white mb-2">{report.label}</h4>
                          <p className="text-xs text-blue-200 leading-relaxed">{report.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </TabsContent>

          {/* Client Presentations Tab */}
          <TabsContent value="presentations" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-blue-500/20 shadow-lg bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-cyan-500/20">
                    <BarChart3 className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Client Presentations</CardTitle>
                    <CardDescription className="text-blue-300">Visual and Analytical Charts</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-6 text-base leading-relaxed">
                  This section helps advisors present client information in a clear, visual, and impactful manner. 
                  These <span className="font-semibold text-white">charts help clients understand their insurance and financial planning</span> 
                  better while improving advisor professionalism and engagement.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {clientCharts.map((chart, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.15 * (index + 1) }}
                      className="group relative p-5 rounded-xl border border-cyan-500/20 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/30 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
                      <BarChart3 className="w-8 h-8 text-cyan-400 mb-3" />
                      <h4 className="font-semibold text-white mb-2">{chart.label}</h4>
                      <p className="text-sm text-blue-200">{chart.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </TabsContent>

          {/* Office Reports Tab */}
          <TabsContent value="office" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-blue-500/20 shadow-lg bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500/20">
                    <Settings className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Office Reports</CardTitle>
                    <CardDescription className="text-blue-300">Operational Registers for Daily Administration</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-6 text-base leading-relaxed">
                  The Office Reports segment provides all essential registers an advisor needs to manage day-to-day business operations efficiently. 
                  These reports ensure <span className="font-semibold text-white">smooth business operations and strengthen client servicing</span> 
                  with organized, accessible information.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {officeReports.map((report, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.12 * (index + 1) }}
                      className="group relative p-4 rounded-xl border border-amber-500/20 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/30 hover:border-amber-400/50 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 group-hover:border-amber-400/50 transition-all">
                          <FileText className="w-5 h-5 text-amber-400" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm text-white">{report.label}</h4>
                          <p className="text-xs text-blue-300">{report.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </TabsContent>

          {/* Other Reports Tab */}
          <TabsContent value="other" className="mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="border-blue-500/20 shadow-lg bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-rose-500/20">
                    <BarChart3 className="w-6 h-6 text-rose-400" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-white">Other Reports</CardTitle>
                    <CardDescription className="text-blue-300">Complete Portfolio Management Registers</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-blue-100 mb-6 text-base leading-relaxed">
                  This category includes all other important servicing and compliance registers essential for portfolio management. 
                  These reports give advisors a <span className="font-semibold text-white">complete picture of portfolio status</span> 
                  across all policy types and client scenarios.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {otherReports.map((report, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * (index + 1) }}
                      className="group relative p-4 rounded-xl border border-rose-500/20 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/30 hover:border-rose-400/50 hover:shadow-2xl hover:shadow-rose-500/20 transition-all duration-500 text-center"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500 -z-10" />
                      <CheckCircle className="w-6 h-6 text-rose-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-white">{report}</p>
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

export default ServicingReports;
