import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Services', path: '/services' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink 
          to="/" 
          className={({ isActive }) =>
            `flex items-center space-x-2 transition-all duration-300 ${
              isActive ? 'scale-105' : 'hover:scale-105'
            }`
          }
        >
          <span className="text-2xl font-bold font-display gradient-text">
            SAIsha
          </span>
          <span className={`hidden md:inline text-lg transition-colors duration-300 ${isScrolled ? 'text-slate-800' : 'text-white'}`}>
            Plastics Management Consultant
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-base font-medium transition-all duration-300 ${
                  isActive
                    ? isScrolled
                      ? 'text-primary-600 font-semibold'
                      : 'text-white font-semibold'
                    : isScrolled
                      ? 'text-slate-700 hover:text-primary-600'
                      : 'text-white/90 hover:text-white'
                } ${
                  isActive
                    ? 'after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-accent-500 after:rounded-full'
                    : 'after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-full'
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `btn ${isActive ? 'btn-secondary' : 'btn-primary'}`
            }
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? 'text-slate-700' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/80 backdrop-blur-lg border-t"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `relative text-base font-medium py-2 px-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? 'text-primary-600 bg-primary-50 border-l-4 border-accent-500'
                        : 'text-slate-700 hover:text-primary-600 hover:bg-primary-50/50'
                    }`
                  }
                >
                  {link.title}
                </NavLink>
              ))}
              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `btn text-center ${isActive ? 'btn-secondary' : 'btn-primary'}`
                }
              >
                Contact Us
              </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;