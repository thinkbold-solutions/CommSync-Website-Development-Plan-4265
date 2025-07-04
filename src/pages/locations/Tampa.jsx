import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMapPin, FiPhone, FiMail, FiClock } = FiIcons;

const Tampa = () => {
  return (
    <>
      <Helmet>
        <title>Crisis Communications Tampa - CommSync | Florida Emergency Response</title>
        <meta name="description" content="Expert crisis communications services in Tampa, Florida. FEMA-certified professionals serving the Tampa Bay area with 24/7 emergency response and PIO training." />
        <meta name="keywords" content="crisis communications Tampa, Tampa crisis management, Florida PIO training, Tampa emergency communications" />
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
              <SafeIcon icon={FiMapPin} className="w-20 h-20 mx-auto mb-6 text-primary-red" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
                CommSync <span className="gradient-text">Tampa</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Serving the Tampa Bay area and Southeast region with elite crisis communications, PIO training, and emergency response services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Location Info */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-montserrat font-bold text-primary-charcoal mb-6">
                  Strategic Southeast Hub
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our Tampa office serves as the strategic hub for the Southeast region, providing immediate response capabilities for Florida government agencies, healthcare systems, major corporations, and emergency management organizations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-primary-red mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-charcoal">Strategic Location</h3>
                      <p className="text-gray-600">Central to Florida's government, healthcare, and business centers</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiClock} className="w-6 h-6 text-primary-red mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-charcoal">24/7 Emergency Response</h3>
                      <p className="text-gray-600">Immediate crisis team activation for Tampa Bay area</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-8"
              >
                <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-6">
                  Contact Tampa Office
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiPhone} className="w-5 h-5 text-primary-red" />
                    <div>
                      <p className="font-medium text-primary-charcoal">Emergency Hotline</p>
                      <a href="tel:+1-555-COMMSYNC" className="text-primary-red hover:text-red-700">
                        +1 (555) COMM-SYNC
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <SafeIcon icon={FiMail} className="w-5 h-5 text-primary-red" />
                    <div>
                      <p className="font-medium text-primary-charcoal">Email</p>
                      <a href="mailto:tampa@commsync.com" className="text-primary-red hover:text-red-700">
                        tampa@commsync.com
                      </a>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button className="w-full bg-primary-red text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                      Request Tampa Consultation
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services for Tampa */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Tampa Bay Area Specializations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tailored services for the unique communication challenges of the Tampa Bay region
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Healthcare Systems',
                  description: 'Specialized crisis communication for Tampa Bay\'s major health systems and medical centers.',
                  features: ['Patient safety communications', 'Medical crisis response', 'Community health messaging']
                },
                {
                  title: 'Government Agencies',
                  description: 'Expert support for city, county, and state agencies throughout Central Florida.',
                  features: ['Emergency management support', 'Public information services', 'Multi-agency coordination']
                },
                {
                  title: 'Corporate Headquarters',
                  description: 'Strategic communication services for Fortune 500 companies and regional businesses.',
                  features: ['Executive communications', 'Investor relations support', 'Brand protection strategies']
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-montserrat font-bold text-primary-charcoal mb-4">
                Serving the Greater Tampa Bay Area
              </h2>
              <p className="text-lg text-gray-600">
                Our Tampa office provides comprehensive coverage for the entire Tampa Bay metropolitan area
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <p className="text-gray-600 mb-4">Interactive map would be embedded here showing coverage area</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>Tampa</div>
                <div>St. Petersburg</div>
                <div>Clearwater</div>
                <div>Brandon</div>
                <div>Lakeland</div>
                <div>Sarasota</div>
                <div>Bradenton</div>
                <div>Plant City</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tampa;