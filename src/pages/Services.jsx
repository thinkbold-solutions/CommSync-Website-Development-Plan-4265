import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiTarget, FiUsers, FiTrendingUp, FiMessageCircle, FiArrowRight, FiCheckCircle } = FiIcons;

const Services = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const services = [
    {
      icon: FiShield,
      title: 'Crisis Communications',
      description: 'From chaos to control in hours, not days. Expert crisis management when seconds matter.',
      features: [
        'Immediate response team activation',
        'Media relations and stakeholder management',
        'Crisis message development',
        'Reputation recovery strategies'
      ],
      link: '/services/crisis-communications',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FiTarget,
      title: 'Brand Engineering',
      description: 'Strategic brand positioning and reputation management for sustained market leadership.',
      features: [
        'Brand strategy development',
        'Reputation monitoring systems',
        'Message architecture design',
        'Stakeholder engagement plans'
      ],
      link: '/services/brand-engineering',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: FiUsers,
      title: 'CommSync Academy',
      description: 'FEMA-certified training programs for public information officers and communication professionals.',
      features: [
        'FEMA-certified curriculum',
        'Media training workshops',
        'Crisis simulation exercises',
        'Professional certification'
      ],
      link: '/services/commsync-academy',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50'
    },
    {
      icon: FiMessageCircle,
      title: 'PIO Network',
      description: 'Premium online community with expert advice, training, and VIP crisis support.',
      features: [
        'Expert community access',
        '72-hour VIP crisis support',
        'Professional networking',
        'Exclusive training resources'
      ],
      link: '/services/pio-network',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: FiTrendingUp,
      title: 'Corporate & Public Affairs',
      description: 'Navigate complex stakeholder relationships and policy communications with confidence.',
      features: [
        'Government relations strategy',
        'Policy communication planning',
        'Stakeholder mapping and engagement',
        'Legislative monitoring and analysis'
      ],
      link: '/services/public-affairs',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Crisis Communication Services - CommSync | FEMA-Certified Experts</title>
        <meta name="description" content="Comprehensive crisis communication services including brand engineering, CommSync Academy training, PIO Network community, and public affairs. FEMA-certified experts serving Tampa, FL and Cheyenne, WY." />
        <meta name="keywords" content="crisis communications, brand engineering, CommSync Academy, PIO Network, public affairs, FEMA certified, Tampa, Cheyenne" />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section ref={heroRef} className="py-20 bg-primary-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
                Elite <span className="gradient-text">Communication Services</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                From crisis management to professional networking, our FEMA-certified experts deliver comprehensive solutions for high-stakes communication challenges.
              </p>
              <button className="bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                Schedule Consultation
              </button>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section ref={servicesRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-xl overflow-hidden hover-lift"
                >
                  <div className={`p-8 ${service.bgColor}`}>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                      <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="p-8">
                    <h4 className="font-semibold text-primary-charcoal mb-4">Key Features:</h4>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-primary-red font-semibold hover:text-red-700 transition-colors group"
                    >
                      <span>Learn More</span>
                      <SafeIcon icon={FiArrowRight} className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-red text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-6">
              Ready to Strengthen Your Communication Strategy?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Our experts are standing by to help you navigate any communication challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-red px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Request Emergency Consultation
              </Link>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-red transition-colors font-semibold">
                View Case Studies
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;