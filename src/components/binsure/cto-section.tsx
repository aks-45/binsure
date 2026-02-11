import { motion } from "framer-motion";
import { Award, Target, Briefcase } from "lucide-react";

export function CTOSection() {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-purple-500 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30 text-blue-300 text-sm font-semibold mb-4">
            Executive Leadership
          </span>
          <h2 className="text-3xl md:text-4xl text-white font-bold">Meet Our Leader</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl opacity-20 blur-xl" />
            <div className="relative bg-slate-800/50 backdrop-blur-sm p-4 rounded-3xl border border-white/10">
              <img src="/cto.jpeg" alt="Sandeep Jain" className="w-full rounded-2xl" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl md:text-4xl text-white font-bold mb-2">Sandeep Jain</h1>
              <h3 className="text-lg text-blue-300 font-semibold mb-1">Founder, Owner & Chief Executive Officer</h3>
              <h4 className="text-base text-blue-400">BeeInSure Software</h4>
            </div>

            <p className="text-blue-200 leading-relaxed">
              Sandeep Jain is the strategic force behind BeeInSure Software, leading the organization with a strong vision for innovation, digital transformation, and sustainable technology growth. His leadership blends deep technical expertise with strong business acumen to build enterprise-grade solutions.
            </p>

            <div className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-2xl border border-blue-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-5 h-5 text-blue-400" />
                <h2 className="text-xl text-white font-bold">Executive Vision</h2>
              </div>
              <p className="text-blue-200 text-sm leading-relaxed">
                Sandeep drives the company's long-term technology and product roadmap, ensuring BeeInSure remains at the forefront of fintech and enterprise software development.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-5 rounded-2xl border border-purple-500/20">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-5 h-5 text-purple-400" />
                <h2 className="text-xl text-white font-bold">Core Expertise</h2>
              </div>
              <ul className="space-y-2 text-sm">
                {[
                  "Enterprise Software Architecture",
                  "Cloud & Scalable Infrastructure",
                  "FinTech Platform Innovation",
                  "Engineering Team Development"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-blue-200">
                    <span className="text-purple-400 mt-1">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
