import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiUsers, FiShield, FiAward, FiTrendingUp, FiCheckCircle, FiExternalLink } = FiIcons;

const CommSyncAcademy = () => {
  return (
    <>
      <Helmet>
        <title>CommSync Academy - FEMA-Certified Training Programs</title>
        <meta name="description" content="Elite FEMA-certified crisis communication training programs for public information officers and communication professionals. Join the premier crisis communication training academy." />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-primary-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <SafeIcon icon={FiUsers} className="w-20 h-20 mx-auto mb-6 text-primary-red" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
                <span className="gradient-text">CommSync Academy</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Elite FEMA-certified training programs that transform communication professionals into crisis-ready leaders. Where expertise meets excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://academy.commsync.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary-red text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center"
                >
                  Join Academy Community
                  <SafeIcon icon={FiExternalLink} className="w-5 h-5 ml-2" />
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold">
                  View Course Catalog
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                FEMA-Certified Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our training programs meet the highest federal standards for emergency communication professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-lg p-8 text-center"
              >
                <SafeIcon icon={FiShield} className="w-16 h-16 mx-auto mb-4 text-primary-blue" />
                <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-3">
                  FEMA Certified
                </h3>
                <p className="text-gray-700">
                  All programs meet Federal Emergency Management Agency standards for public information officer training.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-red-50 rounded-lg p-8 text-center"
              >
                <SafeIcon icon={FiAward} className="w-16 h-16 mx-auto mb-4 text-primary-red" />
                <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-3">
                  Expert Instructors
                </h3>
                <p className="text-gray-700">
                  Learn from Emmy-winning journalists, seasoned public administrators, and crisis communication veterans.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-lg p-8 text-center"
              >
                <SafeIcon icon={FiTrendingUp} className="w-16 h-16 mx-auto mb-4 text-primary-blue" />
                <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-3">
                  Career Advancement
                </h3>
                <p className="text-gray-700">
                  Advance your career with nationally recognized certification and exclusive networking opportunities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Comprehensive Training Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From foundational skills to advanced crisis management, we offer training for every level
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-xl p-8"
              >
                <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-6">
                  Core Communication Certification
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    'FEMA-certified curriculum and assessment',
                    'Media relations and interview techniques',
                    'Crisis communication planning',
                    'Social media management for emergencies',
                    'Stakeholder engagement strategies',
                    'Legal and ethical considerations'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Duration: 40 hours</p>
                    <p className="text-sm text-gray-600">Format: Online + In-person</p>
                  </div>
                  <button className="bg-primary-red text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                    Enroll Now
                  </button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-xl p-8"
              >
                <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-6">
                  Advanced Crisis Leadership
                </h3>
                <div className="space-y-4 mb-8">
                  {[
                    'Executive-level crisis decision making',
                    'Multi-agency coordination protocols',
                    'International crisis communication',
                    'Post-crisis analysis and improvement',
                    'Advanced media strategy development',
                    'Crisis simulation exercises'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Duration: 80 hours</p>
                    <p className="text-sm text-gray-600">Format: Intensive Workshop</p>
                  </div>
                  <button className="bg-primary-blue text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Community Benefits */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-montserrat font-bold text-primary-charcoal mb-6">
                  Join the Elite Academy Community
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Beyond training, CommSync Academy offers exclusive access to a community of crisis communication professionals, ongoing education, and career advancement opportunities.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Exclusive member-only resources and templates</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Monthly webinars with industry experts</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Professional networking and mentorship opportunities</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">Continuing education credits and certification maintenance</span>
                  </div>
                </div>
                <a
                  href="https://academy.commsync.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-primary-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  Join Community
                  <SafeIcon icon={FiExternalLink} className="w-5 h-5 ml-2" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                  alt="CommSync Academy Training Session"
                  className="w-full rounded-lg shadow-xl"
                  data-placeholder="true"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-6">
              Ready to Advance Your Career?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Join thousands of professionals who have elevated their crisis communication skills through CommSync Academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Browse Courses
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-blue transition-colors font-semibold">
                Schedule Consultation
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CommSyncAcademy;