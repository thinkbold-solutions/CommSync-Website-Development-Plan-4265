import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMapPin, FiPhone, FiMail, FiClock } = FiIcons;

const Cheyenne = () => {
  return (
    <>
      <Helmet>
        <title>Crisis Communications Cheyenne - CommSync | Wyoming Emergency Response</title>
        <meta name="description" content="Expert crisis communications services in Cheyenne, Wyoming. FEMA-certified professionals serving the Mountain West with specialized energy sector and rural communication expertise." />
        <meta name="keywords" content="crisis communications Cheyenne, Wyoming crisis management, Mountain West PIO training, Cheyenne emergency communications" />
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
                CommSync <span className="gradient-text">Cheyenne</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Serving the Mountain West region from our Cheyenne headquarters with specialized expertise in energy sector communications and rural emergency management.
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
                  Mountain West Regional Hub
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Our Cheyenne office serves as the strategic center for Mountain West operations, providing specialized crisis communication services for the energy sector, federal agencies, and rural communities across Wyoming and neighboring states.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiMapPin} className="w-6 h-6 text-primary-red mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-charcoal">Strategic Mountain West Location</h3>
                      <p className="text-gray-600">Central hub for energy sector and federal agency communications</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <SafeIcon icon={FiClock} className="w-6 h-6 text-primary-red mt-1" />
                    <div>
                      <h3 className="font-semibold text-primary-charcoal">24/7 Rural Emergency Response</h3>
                      <p className="text-gray-600">Specialized support for rural and remote communication challenges</p>
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
                  Contact Cheyenne Office
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
                      <a href="mailto:cheyenne@commsync.com" className="text-primary-red hover:text-red-700">
                        cheyenne@commsync.com
                      </a>
                    </div>
                  </div>
                  <div className="pt-4">
                    <button className="w-full bg-primary-red text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                      Request Cheyenne Consultation
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Specialized Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Mountain West Specializations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized communication services tailored for the unique challenges of the Mountain West region
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Energy Sector Communications',
                  description: 'Specialized crisis communication for oil, gas, coal, wind, and renewable energy operations.',
                  features: ['Environmental incident response', 'Regulatory communications', 'Community relations']
                },
                {
                  title: 'Federal Agency Support',
                  description: 'Expert communication services for federal installations and agencies throughout the region.',
                  features: ['Military base communications', 'Federal emergency response', 'Inter-agency coordination']
                },
                {
                  title: 'Rural & Remote Communications',
                  description: 'Specialized strategies for reaching diverse populations across vast geographic areas.',
                  features: ['Multi-channel messaging', 'Cultural sensitivity', 'Resource optimization']
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

        {/* Coverage Area */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-montserrat font-bold text-primary-charcoal mb-4">
                Serving the Greater Mountain West
              </h2>
              <p className="text-lg text-gray-600">
                Our Cheyenne office provides comprehensive coverage for Wyoming and surrounding Mountain West states
              </p>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-primary-charcoal mb-3">Primary Coverage</h3>
                  <div className="space-y-2 text-gray-700">
                    <div>Wyoming (Statewide)</div>
                    <div>Cheyenne Metropolitan Area</div>
                    <div>Federal Installations</div>
                    <div>Energy Corridors</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-primary-charcoal mb-3">Extended Coverage</h3>
                  <div className="space-y-2 text-gray-700">
                    <div>Northern Colorado</div>
                    <div>Western Nebraska</div>
                    <div>Southern Montana</div>
                    <div>Eastern Utah</div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-primary-charcoal mb-3">Key Industries</h3>
                  <div className="space-y-2 text-gray-700">
                    <div>Energy & Mining</div>
                    <div>Federal Government</div>
                    <div>Agriculture & Ranching</div>
                    <div>Tourism & Recreation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Cheyenne;