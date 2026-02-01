import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  currentPage?: string;
}

export function Header({ currentPage }: HeaderProps) {
  const navigate = useNavigate();

  return (
    <motion.header
      className="absolute top-0 left-0 right-0 z-20 bg-white shadow-sm"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <button onClick={() => navigate('/')}>
          <img
            src="/logo.png"
            alt="Binsure"
            className="h-12 w-auto"
            style={{ height: '48px' }}
          />
        </button>
        <nav className="hidden md:flex gap-8 text-slate-600 text-sm">
          {currentPage === 'home' ? (
            <span className="text-slate-900 font-medium">Home</span>
          ) : (
            <button onClick={() => navigate('/')} className="hover:text-slate-900 transition-colors">
              Home
            </button>
          )}
          {currentPage === 'products' ? (
            <span className="text-slate-900 font-medium">Our Products</span>
          ) : (
            <button onClick={() => navigate('/features')} className="hover:text-slate-900 transition-colors">
              Our Products
            </button>
          )}
          {currentPage === 'contact' ? (
            <span className="text-slate-900 font-medium">Contact</span>
          ) : (
            <button onClick={() => navigate('/contact')} className="hover:text-slate-900 transition-colors">
              Contact
            </button>
          )}
        </nav>
      </div>
    </motion.header>
  );
}