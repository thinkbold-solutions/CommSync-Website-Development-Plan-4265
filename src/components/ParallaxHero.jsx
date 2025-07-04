import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';

const { Shield, TrendingUp, Target, Users, Circle, Square, Triangle } = LucideIcons;

const ParallaxHero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Circle */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 opacity-5"
          style={{
            transform: `translateY(${parallaxOffset * 0.2}px) translateX(${mousePosition.x * 0.02}px)`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Circle className="w-full h-full text-primary-red" />
        </motion.div>

        {/* Medium Square */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 opacity-5"
          style={{
            transform: `translateY(${parallaxOffset * 0.3}px) translateX(${mousePosition.x * 0.03}px)`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <Square className="w-full h-full text-primary-blue" />
        </motion.div>

        {/* Small Triangle */}
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-16 h-16 opacity-5"
          style={{
            transform: `translateY(${parallaxOffset * 0.4}px) translateX(${mousePosition.x * 0.04}px)`,
          }}
          animate={{
            y: [0, -25, 0],
            rotate: [0, 120, 240, 360],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <Triangle className="w-full h-full text-primary-red" />
        </motion.div>

        {/* Additional smaller elements */}
        <motion.div
          className="absolute top-2/3 right-1/3 w-12 h-12 opacity-5"
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Circle className="w-full h-full text-primary-blue" />
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-8 h-8 opacity-5"
          animate={{
            y: [0, -8, 0],
            rotate: [0, 45, 90],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
        >
          <Square className="w-full h-full text-primary-red" />
        </motion.div>
      </div>

      {/* Background Layer - Animated Icons */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          transform: `translateY(${parallaxOffset * 0.3}px) translateX(${mousePosition.x * 0.03}px)`,
        }}
      >
        <motion.div 
          className="absolute top-1/4 left-1/4"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Shield className="w-16 h-16 md:w-20 md:h-20 text-primary-red" />
        </motion.div>
        
        <motion.div 
          className="absolute top-1/3 right-1/4"
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <TrendingUp className="w-12 h-12 md:w-16 md:h-16 text-primary-blue" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/3 left-1/3"
          animate={{
            y: [0, -25, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        >
          <Target className="w-14 h-14 md:w-18 md:h-18 text-primary-red" />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-1/4 right-1/3"
          animate={{
            y: [0, -18, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Users className="w-12 h-12 md:w-16 md:h-16 text-primary-blue" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
        style={{
          transform: `translateY(${parallaxOffset * 0.1}px)`,
        }}
      >
        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-montserrat font-black text-white mb-6 sm:mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          When Your Reputation is the Story,{' '}
          <span className="gradient-text block mt-2">We Author the Outcome</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed font-roboto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          In a 24/7 news cycle, perception becomes reality in an instant. We provide the decisive strategies and elite training to control the narrative, protect your brand, and emerge stronger from any challenge.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button className="btn-primary hover-glow text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
            Request Emergency Consultation
          </button>
          <button className="btn-secondary text-white border-white hover:bg-white hover:text-gray-900 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
            View Our Credentials
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center glass-effect">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ParallaxHero;