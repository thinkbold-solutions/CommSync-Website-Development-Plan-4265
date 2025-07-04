import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import CrisisReadinessQuiz from '../../components/CrisisReadinessQuiz';
import EmergencyResponseCalculator from '../../components/EmergencyResponseCalculator';
import CrisisLeadMagnets from '../../components/CrisisLeadMagnets';
import UrgencyScarcityBanner from '../../components/UrgencyScarcityBanner';

const { FiShield, FiClock, FiUsers, FiTarget, FiCheckCircle, FiPhone, FiAlertTriangle } = FiIcons;

const CrisisCommunications = () => {
  return (
    <>
      <Helmet>
        <title>Crisis Communications - CommSync | Emergency Response Experts</title>
        <meta name="description" content="Expert crisis communications services. From chaos to control in hours, not days. 24/7 emergency response by FEMA-certified professionals." />
      </Helmet>
      
      <div className="pt-16">
        {/* Emergency Banner */}
        <UrgencyScarcityBanner type="audit" />

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
                <SafeIcon icon={FiShield} className="w-20 h-20 text-primary-red" />
                <div className="text-left">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-400 font-semibold">24/7 Emergency Response Active</span>
                  </div>
                  <div className="text-xs text-gray-300">
                    Crisis team on standby • Response within 1 hour
                  </div>
                </div>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
                <span className="gradient-text">Crisis Communications</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                From chaos to control in hours, not days. When your reputation is under fire, our FEMA-certified experts provide immediate response and strategic guidance.
              </p>
              
              {/* Immediate Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <a
                  href="tel:+1-555-COMMSYNC"
                  className="bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-bold text-lg flex items-center justify-center animate-pulse"
                >
                  <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                  🚨 EMERGENCY HOTLINE: (555) COMM-SYNC
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  Download Crisis Emergency Kit (FREE)
                </button>
              </div>

              {/* Crisis Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-red-400">Less Than 1 Hour</div>
                  <div className="text-sm text-gray-300">Emergency Response Time</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-green-400">98%</div>
                  <div className="text-sm text-gray-300">Crisis Resolution Rate</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-400">24/7</div>
                  <div className="text-sm text-gray-300">Available Every Day</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Emergency Response Calculator */}
        <EmergencyResponseCalculator />

        {/* Emergency Response Capabilities */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Emergency <span className="gradient-text">Response Capabilities</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                When crisis strikes, every minute counts. Our emergency response system activates immediately.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-red-50 rounded-lg shadow-lg p-8 text-center border-2 border-red-100"
              >
                <SafeIcon icon={FiClock} className="w-16 h-16 mx-auto mb-4 text-red-600" />
                <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-2">
                  Immediate Response
                </h3>
                <p className="text-gray-600 mb-4">
                  Crisis team activation within 1 hour of contact. No situation is too complex for our experienced professionals.
                </p>
                <div className="bg-white rounded p-3">
                  <div className="text-lg font-bold text-red-600">15 Minutes</div>
                  <div className="text-xs text-gray-600">Average callback time</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-lg shadow-lg p-8 text-center border-2 border-blue-100"
              >
                <SafeIcon icon={FiUsers} className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-2">
                  Expert Crisis Team
                </h3>
                <p className="text-gray-600 mb-4">
                  FEMA-certified communicators, Emmy-winning journalists, and seasoned public administrators at your service.
                </p>
                <div className="bg-white rounded p-3">
                  <div className="text-lg font-bold text-blue-600">50+ Years</div>
                  <div className="text-xs text-gray-600">Combined experience</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-green-50 rounded-lg shadow-lg p-8 text-center border-2 border-green-100"
              >
                <SafeIcon icon={FiTarget} className="w-16 h-16 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-2">
                  Strategic Focus
                </h3>
                <p className="text-gray-600 mb-4">
                  Not just crisis management—strategic communication that protects and strengthens your long-term reputation.
                </p>
                <div className="bg-white rounded p-3">
                  <div className="text-lg font-bold text-green-600">72 Hours</div>
                  <div className="text-xs text-gray-600">Typical containment time</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Crisis Response Process with Urgency */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Our Crisis Response Protocol
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                Battle-tested process that has saved hundreds of organizations from reputation disaster
              </p>
              <div className="inline-flex items-center bg-red-50 text-red-800 px-4 py-2 rounded-lg">
                <SafeIcon icon={FiAlertTriangle} className="w-4 h-4 mr-2" />
                <span className="text-sm font-semibold">Time is critical - Every hour matters in a crisis</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: "Immediate Assessment",
                  description: "Rapid situation analysis and threat evaluation within 15 minutes of contact",
                  time: "0-15 min",
                  color: "bg-red-600"
                },
                {
                  step: "2", 
                  title: "Crisis Team Activation",
                  description: "Full crisis response team deployed with clear roles and responsibilities",
                  time: "15-30 min",
                  color: "bg-orange-600"
                },
                {
                  step: "3",
                  title: "Strategic Response",
                  description: "Coordinated communication strategy execution across all channels",
                  time: "30-60 min",
                  color: "bg-blue-600"
                },
                {
                  step: "4",
                  title: "Ongoing Management",
                  description: "Continuous monitoring, adjustment, and reputation recovery efforts",
                  time: "1+ hours",
                  color: "bg-green-600"
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 text-center hover-lift relative"
                >
                  <div className={`w-12 h-12 ${phase.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg`}>
                    {phase.step}
                  </div>
                  <h3 className="text-lg font-montserrat font-bold text-primary-charcoal mb-3">
                    {phase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    {phase.description}
                  </p>
                  <div className="text-sm font-semibold text-gray-500">
                    {phase.time}
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gray-300"></div>
                      <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Crisis Lead Magnets Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-montserrat font-bold text-primary-charcoal mb-6">
                  Crisis Communication Services
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  When crisis strikes, you need more than just damage control—you need strategic communication that protects your reputation and positions you for recovery. Our comprehensive crisis communication services are designed to help organizations not just survive crises, but emerge stronger.
                </p>

                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
                  <h3 className="text-lg font-semibold text-red-800 mb-3">
                    🚨 Crisis Reality Check
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong className="text-red-800">54% of crises</strong>
                      <p className="text-red-700">Escalate due to poor initial response</p>
                    </div>
                    <div>
                      <strong className="text-red-800">$1.65M average</strong>
                      <p className="text-red-700">Cost of major corporate crisis</p>
                    </div>
                    <div>
                      <strong className="text-red-800">22% stock drop</strong>
                      <p className="text-red-700">Average immediate impact</p>
                    </div>
                    <div>
                      <strong className="text-red-800">2+ years</strong>
                      <p className="text-red-700">Average recovery time without help</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-4">
                      Immediate Response Services
                    </h3>
                    <div className="space-y-3">
                      {[
                        'Crisis team activation and leadership',
                        'Media relations and statement development', 
                        'Stakeholder notification and management',
                        'Social media monitoring and response',
                        'Legal coordination and compliance',
                        'Real-time situation assessment'
                      ].map((service, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-4">
                      Strategic Recovery Services
                    </h3>
                    <div className="space-y-3">
                      {[
                        'Reputation recovery planning',
                        'Long-term brand rehabilitation',
                        'Stakeholder trust rebuilding',
                        'Crisis-proof communication systems',
                        'Executive coaching and training',
                        'Post-crisis analysis and improvement'
                      ].map((service, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Crisis Lead Magnets Sidebar */}
              <div className="lg:col-span-1">
                <CrisisLeadMagnets urgency="high" />
              </div>
            </div>
          </div>
        </section>

        {/* Crisis Readiness Quiz */}
        <CrisisReadinessQuiz />

        {/* Case Study with Metrics */}
        <section className="py-20 bg-primary-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-montserrat font-bold mb-6">
                  Case Study: Tech Firm Crisis Recovery
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  When a major technology company faced a significant data breach affecting 2.3 million customers, they needed more than crisis management—they needed reputation recovery.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">30 min</div>
                    <div className="text-sm text-gray-300">Crisis response activation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400 mb-2">72 hrs</div>
                    <div className="text-sm text-gray-300">Stock price stabilized</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">95%</div>
                    <div className="text-sm text-gray-300">Customer trust recovery</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-400 mb-2">$4.2M</div>
                    <div className="text-sm text-gray-300">Estimated losses prevented</div>
                  </div>
                </div>

                <button className="bg-white text-primary-charcoal px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Read Full Case Study
                </button>
              </div>

              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Crisis Management Team"
                  className="w-full rounded-lg shadow-xl"
                  data-placeholder="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-20 bg-red-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-6">
              In Crisis? We're Here 24/7
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Don't face a crisis alone. Our emergency response team is standing by to help you regain control.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-center">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <SafeIcon icon={FiClock} className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">Less Than 15 min</div>
                <div className="text-sm opacity-75">Response time</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <SafeIcon icon={FiPhone} className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">24/7</div>
                <div className="text-sm opacity-75">Always available</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <SafeIcon icon={FiShield} className="w-8 h-8 mx-auto mb-2" />
                <div className="font-bold">FEMA</div>
                <div className="text-sm opacity-75">Certified experts</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+1-555-COMMSYNC"
                className="bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-bold text-lg flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5 mr-2" />
                CALL EMERGENCY HOTLINE NOW
              </a>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-semibold">
                Request Immediate Callback
              </button>
            </div>
            
            <p className="text-sm mt-4 opacity-75">
              🔒 Confidential consultation • ⚡ Immediate response • 📞 (555) COMM-SYNC
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default CrisisCommunications;