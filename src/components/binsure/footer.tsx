import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/logo.png"
              alt="Binsure"
              className="h-10 w-auto mb-4"
              style={{ height: '40px' }}
            />
            <p className="text-slate-600 text-sm leading-relaxed">
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
            <h4 className="text-base mb-3 text-slate-900 font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-slate-900 transition-colors hover:translate-x-1 inline-block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/features"
                  className="hover:text-slate-900 transition-colors hover:translate-x-1 inline-block"
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-slate-900 transition-colors hover:translate-x-1 inline-block"
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
            <h4 className="text-base mb-3 text-slate-900 font-semibold">Contact</h4>
            <ul className="space-y-2 text-slate-600 text-sm">
              <li className="flex items-center gap-2 group">
                <Mail className="w-4 h-4 text-slate-500 group-hover:text-slate-700 transition-colors" />
                <span className="text-xs">Binsuresoftware@gmail.com</span>
              </li>
              <li className="flex items-center gap-2 group">
                <Phone className="w-4 h-4 text-slate-500 group-hover:text-slate-700 transition-colors" />
                <span className="text-xs">+91 7219885007</span>
              </li>
              <li className="flex items-start gap-2 group">
                <MapPin className="w-4 h-4 mt-1 text-slate-500 group-hover:text-slate-700 transition-colors" />
                <span className="text-xs">Nagpur, India</span>
              </li>
            </ul>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-base mb-3 text-slate-900 font-semibold">Support</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
              Get help with BInsure software and maximize your insurance business potential.
            </p>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-gray-200 pt-6 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-500 text-xs">
            &copy; 2026 Binsure. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}