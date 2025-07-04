import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiMapPin, FiShield, FiUsers, FiTrendingUp } = FiIcons;

const Florida = () => {
  return (
    <>
      <Helmet>
        <title>Crisis Communications Florida - CommSync | Statewide Emergency Response</title>
        <meta name="description" content="Comprehensive crisis communications services throughout Florida. FEMA-certified experts serving state agencies, healthcare systems, and corporations across the Sunshine State." />
        <meta name="keywords" content="crisis communications Florida, Florida emergency management, statewide PIO training, Florida crisis response" />
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
                CommSync <span className="gradient-text">Florida</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive crisis communications and emergency management support throughout the state of Florida, from the Panhandle to the Keys.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Statewide Coverage */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Statewide Crisis Communication Excellence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From hurricane response to corporate crises, we provide comprehensive communication support across all Florida regions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: FiShield,
                  title: 'Emergency Management Support',
                  description: 'Specialized support for Florida\'s unique emergency management challenges including hurricanes, flooding, and severe weather events.',
                  regions: ['State Emergency Operations Center', 'County EOCs', 'Municipal Emergency Management']
                },
                {
                  icon: FiUsers,
                  title: 'Healthcare System Coordination',
                  description: 'Crisis communication services for Florida\'s extensive healthcare network and medical tourism industry.',
                  regions: ['Hospital systems statewide', 'Public health departments', 'Medical research institutions']
                },
                {
                  icon: FiTrendingUp,
                  title: 'Tourism & Economic Development',
                  description: 'Protecting Florida\'s vital tourism industry and supporting economic development organizations across the state.',
                  regions: ['Tourism boards', 'Convention centers', 'Economic development councils']
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
                    {service.regions.map((region, regionIndex) => (
                      <div key={regionIndex} className="text-sm text-gray-600 flex items-center justify-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                        <span>{region}</span>
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
                Comprehensive Florida Coverage
              </h2>
              <p className="text-xl text-gray-600">
                Expert crisis communication services across all Florida regions and major metropolitan areas
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  region: 'North Florida',
                  cities: ['Tallahassee', 'Jacksonville', 'Gainesville', 'Pensacola'],
                  focus: 'State government, universities, military bases'
                },
                {
                  region: 'Central Florida',
                  cities: ['Orlando', 'Tampa', 'Lakeland', 'Ocala'],
                  focus: 'Tourism, healthcare, aerospace, agriculture'
                },
                {
                  region: 'South Florida',
                  cities: ['Miami', 'Fort Lauderdale', 'West Palm Beach', 'Naples'],
                  focus: 'International business, ports, finance, tourism'
                },
                {
                  region: 'Southwest Florida',
                  cities: ['Sarasota', 'Fort Myers', 'Bradenton', 'Port Charlotte'],
                  focus: 'Healthcare, tourism, retirement communities'
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
                      <p className="text-sm font-semibold text-gray-600 mb-2">Major Cities:</p>
                      <div className="grid grid-cols-2 gap-1 text-sm text-gray-700">
                        {area.cities.map((city, cityIndex) => (
                          <div key={cityIndex}>{city}</div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-600 mb-1">Key Industries:</p>
                      <p className="text-sm text-gray-700">{area.focus}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary-blue text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-6">
              Ready to Protect Your Florida Organization?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Whether you're facing a hurricane, corporate crisis, or need ongoing communication support, our Florida team is ready to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Request Statewide Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-blue transition-colors font-semibold">
                Download Florida Emergency Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Florida;