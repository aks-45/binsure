import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function EnhancedFooter() {
  return (
    <footer className="relative bg-slate-900 text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Binsure
            </h3>
            <p className="text-blue-200/70 text-sm leading-relaxed">
              Smart software for insurance agents to manage clients, policies, and growth — all in one place.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-base mb-3 text-blue-400">Quick Links</h4>
            <ul className="space-y-2 text-blue-200/70 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-base mb-3 text-blue-400">Contact</h4>
            <ul className="space-y-2 text-blue-200/70 text-sm">
              <li className="flex items-center gap-2 group">
                <Mail className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-xs">Binsuresoftware@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 group">
                <Phone className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-xs">+91 7219885007</span>
              </li>
              <li className="flex items-start gap-2 group">
                <MapPin className="w-4 h-4 mt-1 text-blue-400 group-hover:text-blue-300 transition-colors" />
                <span className="text-xs">Nagpur, India</span>
              </li>
            </ul>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-base mb-3 text-blue-400">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Twitter, label: "Twitter" },
                { icon: Facebook, label: "Facebook" },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href="#"
                  className="p-2 bg-blue-900/30 hover:bg-orange-500 rounded-lg transition-all duration-300 border border-blue-500/20 hover:border-orange-500"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-blue-900/50 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-blue-200/50 text-xs">
            &copy; 2026 Binsure. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}