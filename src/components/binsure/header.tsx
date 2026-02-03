import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage }: HeaderProps) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.header
      className="absolute top-0 left-0 right-0 z-20 bg-white shadow-sm"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => { window.scrollTo(0, 0); navigate('/'); }}>
          <img
            src="/logo.png"
            alt="Binsure"
            className="h-12 w-auto"
            style={{ height: '48px' }}
          />
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-slate-600 text-sm">
          {currentPage === 'home' ? (
            <span className="text-slate-900 font-medium">Home</span>
          ) : (
            <button onClick={() => { window.scrollTo(0, 0); navigate('/'); }} className="hover:text-slate-900 transition-colors">
              Home
            </button>
          )}
          {currentPage === 'products' ? (
            <span className="text-slate-900 font-medium">Our Products</span>
          ) : (
            <button onClick={() => { window.scrollTo(0, 0); navigate('/features'); }} className="hover:text-slate-900 transition-colors">
              Our Products
            </button>
          )}
          {currentPage === 'contact' ? (
            <span className="text-slate-900 font-medium">Contact</span>
          ) : (
            <button onClick={() => { window.scrollTo(0, 0); navigate('/contact'); }} className="hover:text-slate-900 transition-colors">
              Contact
            </button>
          )}
        </nav>

        {/* Mobile Hamburger Menu */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-slate-600" />
          ) : (
            <Menu className="w-6 h-6 text-slate-600" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-slate-200"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <nav className="px-6 py-4 space-y-4">
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left ${
                currentPage === 'home' ? 'text-slate-900 font-medium' : 'text-slate-600 hover:text-slate-900'
              } transition-colors`}
            >
              Home
            </button>
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/features');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left ${
                currentPage === 'products' ? 'text-slate-900 font-medium' : 'text-slate-600 hover:text-slate-900'
              } transition-colors`}
            >
              Our Products
            </button>
            <button
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/contact');
                setIsMenuOpen(false);
              }}
              className={`block w-full text-left ${
                currentPage === 'contact' ? 'text-slate-900 font-medium' : 'text-slate-600 hover:text-slate-900'
              } transition-colors`}
            >
              Contact
            </button>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}