import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import ParallaxHero from '../components/ParallaxHero';
import ScrollytellingAuthority from '../components/ScrollytellingAuthority';
import InteractiveServicesDiagram from '../components/InteractiveServicesDiagram';
import CrisisReadinessQuiz from '../components/CrisisReadinessQuiz';

const { FiShield, FiTarget, FiUsers, FiTrendingUp, FiMessageCircle, FiArrowRight, FiStar } = FiIcons;

const Home = () => {
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [networkRef, networkInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [academyRef, academyInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const services = [
    {
      icon: FiShield,
      title: 'Crisis Communications',
      description: 'From chaos to control in hours, not days. Expert crisis management when seconds matter.',
      link: '/services/crisis-communications',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FiTarget,
      title: 'Brand Engineering',
      description: 'Strategic brand positioning and reputation management for sustained market leadership.',
      link: '/services/brand-engineering',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FiUsers,
      title: 'CommSync Academy',
      description: 'FEMA-certified training programs for public information officers and communication professionals.',
      link: '/services/commsync-academy',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FiTrendingUp,
      title: 'Public Affairs',
      description: 'Navigate complex stakeholder relationships and policy communications with confidence.',
      link: '/services/public-affairs',
      color: 'from-blue-500 to-blue-600'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      title: 'CEO, TechCorp',
      content: 'CommSync transformed our crisis response capabilities. When we faced a major data breach, their team guided us through every step.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      title: 'Emergency Manager, City of Tampa',
      content: 'The Academy training was exceptional. Our team now handles media relations with confidence and professionalism.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      title: 'VP Communications, Healthcare Plus',
      content: 'Their brand engineering approach helped us rebuild trust after a challenging period. Highly recommended.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>CommSync - Elite Crisis Communications & Academy Training | Tampa & Cheyenne</title>
        <meta name="description" content="FEMA-certified crisis communications experts and Emmy-winning journalists. Elite academy training, brand engineering, and crisis management. Serving Tampa, FL and Cheyenne, WY." />
        <meta name="keywords" content="crisis communications, CommSync Academy, brand engineering, public affairs, Tampa, Cheyenne, FEMA certified, media training" />
        <link rel="canonical" href="https://commsync.com" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization", 
            "name": "CommSync",
            "description": "Elite crisis communications and academy training",
            "url": "https://commsync.com",
            "logo": "https://commsync.com/logo.png",
            "address": [
              {
                "@type": "PostalAddress",
                "addressLocality": "Tampa",
                "addressRegion": "FL", 
                "addressCountry": "US"
              },
              {
                "@type": "PostalAddress",
                "addressLocality": "Cheyenne",
                "addressRegion": "WY",
                "addressCountry": "US"
              }
            ],
            "contactPoint": {
              "@type": "ContactPoint", 
              "telephone": "+1-555-COMMSYNC",
              "contactType": "customer service"
            }
          })}
        </script>
      </Helmet>

      <main id="main-content">
        {/* Hero Section */}
        <ParallaxHero />

        {/* Authority Section */}
        <ScrollytellingAuthority />

        {/* Services Section */}
        <section ref={servicesRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-primary-charcoal mb-4">
                Elite <span className="gradient-text">Communication Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions for high-stakes communication challenges
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={service.link} className="block">
                    <div className="bg-white rounded-lg shadow-lg p-6 hover-lift h-full">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                        <SafeIcon icon={service.icon} className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary-red font-semibold group-hover:text-red-700 transition-colors">
                        <span>Learn More</span>
                        <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Services Diagram */}
        <InteractiveServicesDiagram />

        {/* PIO Network Section */}
        <section ref={networkRef} className="py-20 bg-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={networkInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl sm:text-5xl font-montserrat font-bold mb-6">
                  Join the <span className="gradient-text">PIO Network</span>
                </h2>
                <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                  Connect with the most experienced crisis communication professionals. Get expert advice, training, and 72-hour VIP crisis support when you need it most.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiMessageCircle} className="w-6 h-6 text-primary-red" />
                    <span>Expert responses from FEMA-certified professionals</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiUsers} className="w-6 h-6 text-primary-red" />
                    <span>Exclusive professional networking community</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiShield} className="w-6 h-6 text-primary-red" />
                    <span>VIP crisis support with 72-hour response guarantee</span>
                  </div>
                </div>
                <Link
                  to="/services/pio-network"
                  className="inline-block bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  Explore Membership Options
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={networkInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="PIO Network Community"
                    className="w-full h-full object-cover"
                    data-placeholder="true"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Crisis Readiness Quiz */}
        <CrisisReadinessQuiz />

        {/* Academy Community Section */}
        <section ref={academyRef} className="py-20 bg-primary-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={academyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl sm:text-5xl font-montserrat font-bold mb-6">
                  Elite <span className="gradient-text">Academy Training</span>
                </h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Get FEMA-certified through our comprehensive training programs. Access exclusive resources and stay ahead of emerging communication challenges.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiShield} className="w-6 h-6 text-primary-red" />
                    <span>FEMA-certified training modules</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiUsers} className="w-6 h-6 text-primary-red" />
                    <span>Expert-led workshops and seminars</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiTrendingUp} className="w-6 h-6 text-primary-red" />
                    <span>Advanced career development</span>
                  </div>
                </div>
                <a
                  href="https://academy.commsync.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  Join Academy Community
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={academyInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                    alt="CommSync Academy Training Session"
                    className="w-full h-full object-cover"
                    data-placeholder="true"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-primary-charcoal mb-4">
                Client <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-xl text-gray-600">
                See how we've helped organizations navigate their most challenging moments
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-primary-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section ref={ctaRef} className="py-20 bg-primary-red text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-montserrat font-bold mb-6">
                Ready to Fortify Your Communication Strategy?
              </h2>
              <p className="text-xl mb-8 leading-relaxed">
                Don't wait for a crisis to test your preparedness. Schedule a consultation with our experts today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-primary-red px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
                >
                  Request Emergency Consultation
                </Link>
                <Link
                  to="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-red transition-colors font-semibold"
                >
                  Explore All Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;