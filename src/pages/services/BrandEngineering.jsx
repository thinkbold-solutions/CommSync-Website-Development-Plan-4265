import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import BrandVulnerabilityAudit from '../../components/BrandVulnerabilityAudit';
import BrandROICalculator from '../../components/BrandROICalculator';
import UrgencyScarcityBanner from '../../components/UrgencyScarcityBanner';
import InContentLeadMagnets from '../../components/InContentLeadMagnets';

const { FiTarget, FiTrendingUp, FiShield, FiUsers, FiCheckCircle, FiStar, FiAward, FiClock } = FiIcons;

const BrandEngineering = () => {
  return (
    <>
      <Helmet>
        <title>Brand Engineering Services - CommSync | Strategic Brand Positioning</title>
        <meta name="description" content="Strategic brand engineering and reputation management services. Build resilient brand architecture that withstands crisis and drives growth." />
      </Helmet>
      
      <div className="pt-16">
        {/* Urgency Banner */}
        <UrgencyScarcityBanner type="consultation" />

        {/* Hero Section */}
        <section className="py-20 bg-primary-charcoal text-white mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex justify-center items-center space-x-3 mb-6">
                <SafeIcon icon={FiTarget} className="w-20 h-20 text-primary-red" />
                <div className="text-left">
                  <div className="flex items-center space-x-2 mb-2">
                    <SafeIcon icon={FiAward} className="w-5 h-5 text-yellow-400" />
                    <span className="text-sm text-yellow-400 font-semibold">Trusted by Fortune 500</span>
                  </div>
                  <div className="text-xs text-gray-300">
                    Only 3 consultation spots left this month
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
                <span className="gradient-text">Brand Engineering</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Build resilient brand architecture that not only withstands crisis but emerges stronger. Strategic positioning for sustained market leadership.
              </p>
              
              {/* Social Proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 mb-8 text-sm">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiUsers} className="w-4 h-4 text-primary-red" />
                  <span>500+ brands protected</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiStar} className="w-4 h-4 text-yellow-400" />
                  <span>98% client satisfaction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiClock} className="w-4 h-4 text-green-400" />
                  <span>24/7 crisis support</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary hover-glow text-base sm:text-lg px-8 py-4">
                  🔥 Book Free Strategy Session (3 Spots Left)
                </button>
                <button className="btn-secondary text-white border-white hover:bg-white hover:text-gray-900 text-base sm:text-lg px-8 py-4">
                  Get Free Brand Audit ($297 Value)
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brand Vulnerability Audit */}
        <BrandVulnerabilityAudit />

        {/* Client Success Stories with Specific Metrics */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Proven <span className="gradient-text">Results</span>
              </h2>
              <p className="text-xl text-gray-600">Real outcomes from our brand engineering process</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                {
                  metric: "847%",
                  description: "Average ROI on brand protection investment",
                  client: "Healthcare Fortune 500",
                  timeframe: "Within 12 months"
                },
                {
                  metric: "72 Hours",
                  description: "Crisis containment and reputation recovery",
                  client: "Technology Unicorn",
                  timeframe: "During data breach"
                },
                {
                  metric: "$2.3M",
                  description: "Revenue protected from potential brand crisis",
                  client: "Financial Services",
                  timeframe: "Q3 2023"
                }
              ].map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6 text-center"
                >
                  <div className="text-3xl font-bold text-primary-red mb-2">{result.metric}</div>
                  <h3 className="font-semibold text-primary-charcoal mb-2">{result.description}</h3>
                  <p className="text-sm text-gray-600">{result.client}</p>
                  <p className="text-xs text-gray-500">{result.timeframe}</p>
                </motion.div>
              ))}
            </div>

            {/* Testimonial with Photo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-blue-50 rounded-lg p-8"
            >
              <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                <div className="flex-shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                    alt="Client testimonial"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-lg text-gray-700 italic mb-4">
                    "CommSync's brand engineering saved us $2.3M during a potential crisis. Their framework is now embedded in everything we do."
                  </p>
                  <div>
                    <p className="font-semibold text-primary-charcoal">Sarah Mitchell</p>
                    <p className="text-sm text-gray-600">Chief Communications Officer, TechCorp</p>
                    <div className="flex items-center justify-center md:justify-start mt-2">
                      {[...Array(5)].map((_, i) => (
                        <SafeIcon key={i} icon={FiStar} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brand ROI Calculator */}
        <BrandROICalculator />

        {/* Services Overview with Lead Magnets */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-montserrat font-bold text-primary-charcoal mb-6">
                    Strategic Brand Architecture
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Your brand is more than a logo or tagline—it's the foundation of trust that determines how stakeholders respond during your most critical moments. Our brand engineering approach builds resilient communication frameworks that protect and amplify your reputation.
                  </p>

                  <div className="bg-white rounded-lg p-6 mb-8 shadow-lg">
                    <h3 className="text-xl font-semibold text-primary-charcoal mb-4">
                      🚨 Brand Crisis Reality Check
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div className="bg-red-50 p-3 rounded">
                        <p className="font-semibold text-red-800">87% of companies</p>
                        <p className="text-red-700">Experience reputation crisis within 5 years</p>
                      </div>
                      <div className="bg-red-50 p-3 rounded">
                        <p className="font-semibold text-red-800">$1.2B average</p>
                        <p className="text-red-700">Cost of major brand crisis for Fortune 500</p>
                      </div>
                      <div className="bg-red-50 p-3 rounded">
                        <p className="font-semibold text-red-800">72 hours</p>
                        <p className="text-red-700">Average time before irreversible damage</p>
                      </div>
                      <div className="bg-red-50 p-3 rounded">
                        <p className="font-semibold text-red-800">23% revenue loss</p>
                        <p className="text-red-700">Average impact from brand crisis</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Comprehensive brand audit and vulnerability assessment</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Message architecture development and testing</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <SafeIcon icon={FiCheckCircle} className="w-6 h-6 text-green-500 mt-0.5" />
                      <span className="text-gray-700">Stakeholder engagement strategy design</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar Lead Magnets */}
              <div className="lg:col-span-1">
                <InContentLeadMagnets placement="sidebar" />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section with Urgency */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Our Brand Engineering Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach to building brand resilience and market leadership
              </p>
              <div className="mt-4 inline-flex items-center bg-red-50 text-red-800 px-4 py-2 rounded-lg">
                <SafeIcon icon={FiClock} className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">Limited: Only 3 brand audits available this month</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FiTarget,
                  title: 'Discovery & Audit',
                  description: 'Comprehensive analysis of current brand positioning, stakeholder perceptions, and market dynamics.',
                  timeline: 'Week 1-2'
                },
                {
                  icon: FiTrendingUp,
                  title: 'Strategy Development',
                  description: 'Design resilient brand architecture with clear messaging frameworks and positioning strategies.',
                  timeline: 'Week 3-4'
                },
                {
                  icon: FiUsers,
                  title: 'Implementation',
                  description: 'Deploy brand strategies across all touchpoints with stakeholder-specific communication plans.',
                  timeline: 'Week 5-8'
                },
                {
                  icon: FiShield,
                  title: 'Monitoring & Optimization',
                  description: 'Continuous brand health monitoring with real-time adjustments and crisis preparedness.',
                  timeline: 'Ongoing'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={step.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {step.description}
                  </p>
                  <div className="text-sm font-semibold text-primary-red">
                    {step.timeline}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* In-Content Lead Magnet */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <InContentLeadMagnets placement="inline" />
          </div>
        </section>

        {/* Authority Section */}
        <section className="py-20 bg-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-montserrat font-bold mb-6">
                  Why Fortune 500 Companies Choose CommSync
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiAward} className="w-6 h-6 text-yellow-400" />
                    <span>FEMA-certified crisis communication experts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiStar} className="w-6 h-6 text-yellow-400" />
                    <span>Emmy-winning journalists on our team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiShield} className="w-6 h-6 text-yellow-400" />
                    <span>$2.3B+ in brand value protected</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiUsers} className="w-6 h-6 text-yellow-400" />
                    <span>500+ successful brand transformations</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-10 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Fortify Your Brand?</h3>
                  <p className="mb-6">Join the 500+ companies that trust CommSync with their reputation.</p>
                  <button className="bg-white text-primary-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                    Schedule Your Free Strategy Session
                  </button>
                  <p className="text-sm mt-3 opacity-75">
                    ⚡ Only 3 consultation spots remaining this month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA with Urgency */}
        <section className="py-20 bg-primary-red text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-6">
              Don't Wait for a Crisis to Test Your Brand
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              In today's 24/7 news cycle, your next crisis could be one tweet away. Fortify your brand now.
            </p>
            
            <div className="bg-white bg-opacity-20 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4">🔥 Limited Time Bonus Package</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>✅ Free Brand Vulnerability Audit ($297)</div>
                <div>✅ 30-Day Fortification Checklist ($147)</div>
                <div>✅ Crisis Response Templates ($197)</div>
              </div>
              <p className="text-xs mt-3 opacity-75">
                Available only with consultation booking this month
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-red px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
                🚨 Book Emergency Strategy Session
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-red transition-colors font-semibold text-lg">
                Download Free Brand Guide
              </button>
            </div>
            
            <div className="mt-6 text-sm opacity-75">
              <p>⏰ Consultation spots refill monthly | 📞 24/7 emergency hotline available</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BrandEngineering;