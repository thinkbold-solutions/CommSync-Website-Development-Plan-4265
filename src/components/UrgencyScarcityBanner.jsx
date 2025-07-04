import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Users, AlertTriangle, X } from 'lucide-react';

const UrgencyScarcityBanner = ({ type = 'consultation' }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set end date (e.g., end of current month)
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 1, 0); // Last day of current month
  endDate.setHours(23, 59, 59, 999);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  const bannerConfigs = {
    consultation: {
      title: "⚡ Limited Brand Engineering Consultations Available",
      subtitle: "Only 3 consultation spots remaining this month",
      cta: "Secure Your Spot Now",
      urgency: "high",
      color: "bg-red-600"
    },
    audit: {
      title: "🔍 Exclusive: Free Brand Vulnerability Audit",
      subtitle: "Limited to 25 companies per month - 7 spots left",
      cta: "Claim Your Free Audit",
      urgency: "medium",
      color: "bg-orange-600"
    },
    bonus: {
      title: "🎁 Bonus: 30-Day Brand Fortification Checklist",
      subtitle: "Free with consultation booking - Ends soon!",
      cta: "Get Free Bonus",
      urgency: "low",
      color: "bg-blue-600"
    }
  };

  const config = bannerConfigs[type];

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-16 left-0 right-0 z-40 ${config.color} text-white shadow-lg`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {config.urgency === 'high' && <AlertTriangle className="w-5 h-5 animate-pulse" />}
                {config.urgency === 'medium' && <Clock className="w-5 h-5" />}
                {config.urgency === 'low' && <Users className="w-5 h-5" />}
                <div>
                  <p className="font-semibold text-sm sm:text-base">
                    {config.title}
                  </p>
                  <p className="text-xs sm:text-sm opacity-90">
                    {config.subtitle}
                  </p>
                </div>
              </div>

              {/* Countdown Timer */}
              <div className="hidden md:flex items-center space-x-4">
                <div className="text-xs">
                  <span className="font-mono text-lg">{String(timeLeft.days).padStart(2, '0')}</span>
                  <div className="text-xs opacity-75">Days</div>
                </div>
                <div className="text-xs">
                  <span className="font-mono text-lg">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <div className="text-xs opacity-75">Hours</div>
                </div>
                <div className="text-xs">
                  <span className="font-mono text-lg">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <div className="text-xs opacity-75">Min</div>
                </div>
                <div className="text-xs">
                  <span className="font-mono text-lg">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <div className="text-xs opacity-75">Sec</div>
                </div>
              </div>
            </div>

            {/* CTA and Close */}
            <div className="flex items-center space-x-3">
              <button className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                {config.cta}
              </button>
              <button
                onClick={() => setIsVisible(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close banner"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Progress bar for urgency */}
        <div className="h-1 bg-white bg-opacity-20">
          <motion.div
            className="h-full bg-white"
            initial={{ width: "100%" }}
            animate={{ width: "0%" }}
            transition={{ duration: 300, ease: "linear" }} // 5 minutes
          />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default UrgencyScarcityBanner;