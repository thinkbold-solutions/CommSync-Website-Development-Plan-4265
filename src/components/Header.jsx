import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const servicesDropdown = [
    { name: 'Brand Engineering', path: '/services/brand-engineering' },
    { name: 'Crisis Communications', path: '/services/crisis-communications' },
    { name: 'CommSync Academy', path: '/services/commsync-academy' },
    { name: 'PIO Network', path: '/services/pio-network' },
    { name: 'Corporate & Public Affairs', path: '/services/public-affairs' }
  ];

  const locationsDropdown = [
    { name: 'Tampa, Florida', path: '/locations/tampa' },
    { name: 'Florida', path: '/locations/florida' },
    { name: 'Cheyenne, Wyoming', path: '/locations/cheyenne' },
    { name: 'Wyoming', path: '/locations/wyoming' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'nav-glass shadow-glow' : 'nav-glass'
    }`}>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-glow rounded-lg p-2 -m-2">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-red to-primary-blue rounded-xl flex items-center justify-center shadow-glow">
              <span className="text-white font-black text-lg lg:text-xl">CS</span>
            </div>
            <span className="text-2xl lg:text-3xl font-montserrat font-black text-primary-charcoal">
              CommSync
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-primary-red transition-all duration-300 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-red transition-all duration-300 group-hover:w-full"></span>
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdown('services')}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-red transition-all duration-300 font-medium group"
              >
                <span>Services</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === 'services' ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-72 glass-effect rounded-2xl shadow-glow py-3"
                  >
                    {servicesDropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-primary-red transition-all duration-300 font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Locations Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdown('locations')}
                className="flex items-center space-x-1 text-gray-700 hover:text-primary-red transition-all duration-300 font-medium group"
              >
                <span>Locations</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    activeDropdown === 'locations' ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              <AnimatePresence>
                {activeDropdown === 'locations' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-0 mt-2 w-56 glass-effect rounded-2xl shadow-glow py-3"
                  >
                    {locationsDropdown.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        className="block px-6 py-3 text-gray-700 hover:bg-white/50 hover:text-primary-red transition-all duration-300 font-medium"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/events" 
              className="text-gray-700 hover:text-primary-red transition-all duration-300 font-medium relative group"
            >
              Events
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-red transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-primary-red transition-all duration-300 font-medium relative group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-red transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              to="/contact" 
              className="btn-primary hover-glow text-sm px-6 py-3"
            >
              Request Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-3 rounded-xl hover:bg-gray-100 transition-colors hover-glow"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden glass-effect border-t border-white/20 mt-4 rounded-2xl overflow-hidden"
            >
              <div className="px-6 py-6 space-y-4">
                <Link 
                  to="/" 
                  className="block text-gray-700 hover:text-primary-red transition-colors font-medium py-2"
                >
                  Home
                </Link>

                <div>
                  <button
                    onClick={() => handleDropdown('mobile-services')}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-primary-red transition-colors font-medium py-2"
                  >
                    <span>Services</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === 'mobile-services' ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'mobile-services' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 pl-4 space-y-3 border-l-2 border-primary-red/20"
                      >
                        {servicesDropdown.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            className="block text-gray-600 hover:text-primary-red transition-colors font-medium"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div>
                  <button
                    onClick={() => handleDropdown('mobile-locations')}
                    className="flex items-center justify-between w-full text-left text-gray-700 hover:text-primary-red transition-colors font-medium py-2"
                  >
                    <span>Locations</span>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === 'mobile-locations' ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  <AnimatePresence>
                    {activeDropdown === 'mobile-locations' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 pl-4 space-y-3 border-l-2 border-primary-red/20"
                      >
                        {locationsDropdown.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            className="block text-gray-600 hover:text-primary-red transition-colors font-medium"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link 
                  to="/events" 
                  className="block text-gray-700 hover:text-primary-red transition-colors font-medium py-2"
                >
                  Events
                </Link>
                <Link 
                  to="/about" 
                  className="block text-gray-700 hover:text-primary-red transition-colors font-medium py-2"
                >
                  About Us
                </Link>
                <Link 
                  to="/contact" 
                  className="block btn-primary text-center mt-4 w-full"
                >
                  Request Consultation
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;