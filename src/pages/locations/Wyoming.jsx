import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMapPin, FiShield, FiUsers, FiTrendingUp } = FiIcons;

const Wyoming = () => {
  return (
    <>
      <Helmet>
        <title>Crisis Communications Wyoming - CommSync | Statewide Energy & Rural Expertise</title>
        <meta name="description" content="Comprehensive crisis communications services throughout Wyoming. Specialized expertise in energy sector communications, rural emergency management, and federal agency support." />
        <meta name="keywords" content="crisis communications Wyoming, Wyoming energy communications, rural emergency management, Mountain West crisis response" />
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
                CommSync <span className="gradient-text">Wyoming</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive crisis communications across the Equality State, with specialized expertise in energy sector communications and rural emergency management.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Statewide Expertise */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Wyoming Communication Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From energy corridors to rural communities, we provide specialized crisis communication services across Wyoming's diverse landscape
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: FiShield,
                  title: 'Energy Sector Leadership',
                  description: 'Specialized crisis communication for Wyoming\'s dominant energy industries including oil, gas, coal, and renewable energy.',
                  specialties: ['Environmental incidents', 'Regulatory compliance', 'Community stakeholder relations']
                },
                {
                  icon: FiUsers,
                  title: 'Rural Communication Strategies',
                  description: 'Expert strategies for reaching diverse populations across Wyoming\'s vast geography and unique communities.',
                  specialties: ['Multi-channel messaging', 'Cultural sensitivity', 'Resource optimization']
                },
                {
                  icon: FiTrendingUp,
                  title: 'Federal & State Coordination',
                  description: 'Seamless coordination with federal installations, state agencies, and tribal governments throughout Wyoming.',
                  specialties: ['Inter-agency protocols', 'Military coordination', 'Tribal relations']
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-8 text-center"
                >
                  <SafeIcon icon={service.icon} className="w-16 h-16 mx-auto mb-4 text-primary-red" />
                  <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.specialties.map((specialty, specialtyIndex) => (
                      <div key={specialtyIndex} className="text-sm text-gray-600 flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                        <span>{specialty}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Coverage */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Comprehensive Wyoming Coverage
              </h2>
              <p className="text-xl text-gray-600">
                Expert crisis communication services across all Wyoming regions and key economic centers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  region: 'Southeast Wyoming',
                  cities: ['Cheyenne', 'Laramie', 'Wheatland'],
                  focus: 'State government, wind energy, agriculture, transportation corridors',
                  industries: ['Government', 'Energy', 'Agriculture', 'Transportation']
                },
                {
                  region: 'Central Wyoming',
                  cities: ['Casper', 'Douglas', 'Glenrock'],
                  focus: 'Oil & gas operations, refining, logistics, healthcare',
                  industries: ['Oil & Gas', 'Refining', 'Healthcare', 'Logistics']
                },
                {
                  region: 'Northeast Wyoming',
                  cities: ['Gillette', 'Sheridan', 'Buffalo'],
                  focus: 'Coal mining, powder river basin, energy production',
                  industries: ['Coal Mining', 'Energy Production', 'Rail Transport']
                },
                {
                  region: 'Southwest Wyoming',
                  cities: ['Rock Springs', 'Green River', 'Evanston'],
                  focus: 'Natural gas, trona mining, rail transportation',
                  industries: ['Natural Gas', 'Mining', 'Rail', 'Chemicals']
                },
                {
                  region: 'Northwest Wyoming',
                  cities: ['Jackson', 'Cody', 'Pinedale'],
                  focus: 'Tourism, natural gas, outdoor recreation, national parks',
                  industries: ['Tourism', 'Natural Gas', 'Recreation', 'Hospitality']
                },
                {
                  region: 'Federal Installations',
                  cities: ['F.E. Warren AFB', 'Various Sites'],
                  focus: 'Military communications, federal emergency coordination',
                  industries: ['Defense', 'Federal Government', 'Security']
                }
              ].map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6"
                >
                  <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-3">
                    {area.region}
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-2">Key Cities:</p>
                      <div className="text-sm text-gray-700">
                        {area.cities.join(', ')}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-2">Focus Areas:</p>
                      <p className="text-sm text-gray-700">{area.focus}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-2">Industries:</p>
                      <div className="flex flex-wrap gap-1">
                        {area.industries.map((industry, industryIndex) => (
                          <span key={industryIndex} className="text-xs bg-gray-100 px-2 py-1 rounded">
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Energy Sector Focus */}
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
                  Energy Sector Communication Expertise
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Wyoming leads the nation in energy production, and we understand the unique communication challenges facing energy companies, from environmental incidents to community relations and regulatory compliance.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-charcoal mb-2">Coal Production</h4>
                    <p className="text-sm text-gray-600">#1 in US coal production</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-charcoal mb-2">Natural Gas</h4>
                    <p className="text-sm text-gray-600">Major gas producer</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-charcoal mb-2">Wind Energy</h4>
                    <p className="text-sm text-gray-600">Fastest growing sector</p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-primary-charcoal mb-2">Oil Production</h4>
                    <p className="text-sm text-gray-600">Top 10 US producer</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1497436072909-f5e4be462ea4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
                  alt="Wyoming Energy Infrastructure"
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
              Ready to Strengthen Your Wyoming Operations?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Whether you're in energy, agriculture, tourism, or government, our Wyoming team understands your unique communication challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Request Wyoming Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-blue transition-colors font-semibold">
                Download Wyoming Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Wyoming;