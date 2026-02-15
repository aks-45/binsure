import { motion } from "framer-motion";

export function ConnectionMap() {

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl text-white mb-3">
            Pan-India Presence
          </h2>
          <p className="text-lg text-blue-200 max-w-2xl mx-auto">
            Connecting businesses across major cities
          </p>
        </motion.div>

        {/* Map container with static image */}
        <motion.div
          className="relative w-full max-w-4xl mx-auto rounded-2xl border border-blue-500/20 overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/map.png"
            alt="Pan-India Presence Map"
            className="w-full h-auto"
          />
        </motion.div>

        {/* Stats below map */}
        <motion.div
          className="grid grid-cols-3 gap-6 mt-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-1">36+</div>
            <div className="text-blue-200 text-sm">State/UT Capitals<br></br>(Available all over India)</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-1">25000+</div>
            <div className="text-blue-200 text-sm">Active Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl text-blue-400 mb-1">Dedicated</div>
            <div className="text-blue-200 text-sm">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
