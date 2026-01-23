import { Linkedin, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl mb-4">BeInsure | BINSURE</h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Empowering Indian businesses with intelligent solutions for growth
              and success.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-blue-200">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@beinsure.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 1800-XXX-XXXX</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span className="text-sm">Mumbai, India</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-blue-800 hover:bg-orange-500 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-blue-800 hover:bg-orange-500 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="p-3 bg-blue-800 hover:bg-orange-500 rounded-lg transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-blue-800 pt-8 text-center text-blue-200 text-sm">
          <p>&copy; 2026 BeInsure / BINSURE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
