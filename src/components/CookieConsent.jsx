import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX } = FiIcons;

const CookieConsent = ({ onAccept }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <div className="flex-1 text-sm text-gray-600">
          <p>
            We use cookies to enhance your experience, analyze site traffic, and personalize content. 
            By continuing to use our site, you consent to our use of cookies.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={onAccept}
            className="bg-primary-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium text-sm"
          >
            Accept All Cookies
          </button>
          <button
            onClick={onAccept}
            className="text-gray-500 hover:text-gray-700 transition-colors"
            aria-label="Close cookie consent"
          >
            <SafeIcon icon={FiX} className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CookieConsent;