import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-red to-primary-blue rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-sm">CS</span>
              </div>
              <span className="text-xl font-montserrat font-bold">CommSync</span>
            </div>
            <p className="text-gray-300 text-sm">
              Elite crisis communications and professional training for high-stakes situations. When your reputation is the story, we author the outcome.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover-glow p-2 rounded-lg">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover-glow p-2 rounded-lg">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors hover-glow p-2 rounded-lg">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-montserrat font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services/brand-engineering" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Brand Engineering
                </Link>
              </li>
              <li>
                <Link to="/services/crisis-communications" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Crisis Communications
                </Link>
              </li>
              <li>
                <Link to="/services/commsync-academy" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  CommSync Academy
                </Link>
              </li>
              <li>
                <Link to="/services/pio-network" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  PIO Network
                </Link>
              </li>
              <li>
                <Link to="/services/public-affairs" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  Corporate & Public Affairs
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="space-y-4">
            <h3 className="text-lg font-montserrat font-semibold">Locations</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-red" />
                <div>
                  <p className="font-medium">Tampa, Florida</p>
                  <p className="text-gray-400">Serving the Southeast</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-red" />
                <div>
                  <p className="font-medium">Cheyenne, Wyoming</p>
                  <p className="text-gray-400">Serving the Mountain West</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-montserrat font-semibold">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-red" />
                <a href="mailto:info@commsync.com" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  info@commsync.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-red" />
                <a href="tel:+1-555-COMMSYNC" className="text-gray-300 hover:text-white transition-colors hover:underline">
                  +1 (555) COMM-SYNC
                </a>
              </div>
            </div>
            <Link to="/contact" className="inline-block bg-primary-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm hover-glow">
              Request Consultation
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} CommSync. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors hover:underline">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;