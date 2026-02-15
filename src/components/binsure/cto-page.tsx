import { motion } from "framer-motion";
import { Award, Target, Users, Briefcase } from "lucide-react";
import { Header } from "./header";
import { Footer } from "./footer";

export function CTOPage() {
  return (
    <>
      <section className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        {/* Background Effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-30" />
        </div>

        <Header currentPage="cto" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* LEFT - Executive Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-xl" />
              <div className="relative bg-slate-800/50 backdrop-blur-sm p-4 rounded-3xl border border-white/10">
                <img
                  src="/cto.jpeg"
                  alt="Sandeep Jain"
                  className="w-full rounded-2xl"
                />
              </div>
            </motion.div>

            {/* RIGHT - Executive Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30">
                <span className="text-blue-300 text-sm font-semibold">Executive Leadership</span>
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl text-white font-bold mb-2">Sandeep Jain</h1>
                <h3 className="text-xl text-blue-300 font-semibold mb-1">Founder, Owner & Chief Executive Officer</h3>
                <h4 className="text-lg text-blue-400">BInsure Software</h4>
              </div>

              <p className="text-blue-200 text-lg leading-relaxed">
                Sandeep Jain is the strategic force behind BeeInSure Software, leading the organization with a strong vision for innovation, digital transformation, and sustainable technology growth. His leadership blends deep technical expertise with strong business acumen to build enterprise-grade solutions.
              </p>

              {/* Executive Vision */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-blue-400" />
                  <h2 className="text-2xl text-white font-bold">Executive Vision</h2>
                </div>
                <p className="text-blue-200 leading-relaxed">
                  Sandeep drives the company's long-term technology and product roadmap, ensuring BeeInSure remains at the forefront of fintech and enterprise software development. His philosophy centers on delivering scalable, secure, and customer-focused digital solutions.
                </p>
              </motion.div>

              {/* Core Leadership Expertise */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Award className="w-6 h-6 text-purple-400" />
                  <h2 className="text-2xl text-white font-bold">Core Leadership Expertise</h2>
                </div>
                <ul className="space-y-2">
                  {[
                    "Enterprise Software Architecture & System Design",
                    "Scalable Infrastructure Development",
                    "FinTech Platform Innovation",
                    "Engineering Team Development & Mentorship",
                    "Digital Business Transformation Strategy"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                      className="flex items-start gap-3 text-blue-200"
                    >
                      <span className="text-purple-400 mt-1">▸</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Professional Background */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-green-500/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Briefcase className="w-6 h-6 text-green-400" />
                  <h2 className="text-2xl text-white font-bold">Professional Background</h2>
                </div>
                <p className="text-blue-200 leading-relaxed">
                  With extensive experience in software engineering, product leadership, and enterprise system deployment, Sandeep has successfully led multiple high-impact projects. His leadership has helped businesses modernize operations, enhance customer engagement, and adopt future-ready digital ecosystems.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
