import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTrendingUp, FiUsers, FiTarget, FiShield, FiCheckCircle } = FiIcons;

const PublicAffairs = () => {
  return (
    <>
      <Helmet>
        <title>Corporate & Public Affairs - CommSync | Strategic Stakeholder Communication</title>
        <meta name="description" content="Expert corporate and public affairs services. Navigate complex stakeholder relationships and policy communications with strategic guidance from seasoned professionals." />
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
              <SafeIcon icon={FiTrendingUp} className="w-20 h-20 mx-auto mb-6 text-primary-red" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
                Corporate & <span className="gradient-text">Public Affairs</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Navigate complex stakeholder relationships and policy communications with confidence. Strategic guidance for sustained influence and impact.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Strategic Public Affairs Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions for government relations, policy advocacy, and stakeholder engagement
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FiUsers,
                  title: 'Government Relations',
                  description: 'Build and maintain strategic relationships with key government officials and agencies.',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  icon: FiTarget,
                  title: 'Policy Advocacy',
                  description: 'Develop and execute advocacy strategies that influence policy outcomes.',
                  color: 'from-red-500 to-red-600'
                },
                {
                  icon: FiTrendingUp,
                  title: 'Stakeholder Engagement',
                  description: 'Design comprehensive engagement strategies for diverse stakeholder groups.',
                  color: 'from-blue-500 to-blue-600'
                },
                {
                  icon: FiShield,
                  title: 'Regulatory Support',
                  description: 'Navigate complex regulatory environments with expert guidance and support.',
                  color: 'from-red-500 to-red-600'
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 text-center border border-gray-200 hover-lift"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-4`}>
                    <SafeIcon icon={service.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-xl p-8"
              >
                <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-6">
                  Government Relations & Advocacy
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our seasoned public administrators and policy experts help you navigate complex government relationships and advance your organizational objectives through strategic advocacy.
                </p>
                <div className="space-y-4">
                  {[
                    'Legislative monitoring and analysis',
                    'Regulatory compliance strategy',
                    'Coalition building and management',
                    'Policy position development',
                    'Government stakeholder mapping',
                    'Advocacy campaign design and execution'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
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
                  Corporate Affairs & Communications
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Strengthen your corporate reputation and stakeholder relationships through strategic communication programs designed to build trust and drive business objectives.
                </p>
                <div className="space-y-4">
                  {[
                    'Corporate reputation management',
                    'Executive thought leadership programs',
                    'Investor relations support',
                    'Community engagement strategies',
                    'Corporate social responsibility communication',
                    'Crisis-ready corporate communication systems'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Industry Expertise */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Industry Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Deep sector knowledge and regulatory understanding across key industries
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Energy & Utilities',
                  description: 'Navigate complex energy regulations, environmental policies, and community relations in the rapidly evolving energy sector.',
                  focus: ['Renewable energy transitions', 'Regulatory compliance', 'Community engagement']
                },
                {
                  title: 'Healthcare & Life Sciences',
                  description: 'Strategic communication for healthcare organizations, pharmaceutical companies, and medical device manufacturers.',
                  focus: ['FDA regulations', 'Patient advocacy', 'Clinical communications']
                },
                {
                  title: 'Technology & Innovation',
                  description: 'Policy advocacy and stakeholder engagement for technology companies navigating privacy, security, and innovation policies.',
                  focus: ['Data privacy regulations', 'AI governance', 'Innovation policy']
                },
                {
                  title: 'Financial Services',
                  description: 'Regulatory affairs and stakeholder communication for banks, insurance companies, and fintech organizations.',
                  focus: ['Financial regulations', 'Consumer protection', 'Stakeholder trust']
                },
                {
                  title: 'Manufacturing & Trade',
                  description: 'Trade policy advocacy, supply chain communication, and regulatory navigation for manufacturing organizations.',
                  focus: ['Trade regulations', 'Supply chain resilience', 'Industry standards']
                },
                {
                  title: 'Public Sector',
                  description: 'Communication strategy and stakeholder engagement for government agencies, nonprofits, and public organizations.',
                  focus: ['Public engagement', 'Transparency initiatives', 'Community relations']
                }
              ].map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-3">
                    {industry.title}
                  </h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-600">Key Focus Areas:</p>
                    <ul className="space-y-1">
                      {industry.focus.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
              Ready to Strengthen Your Public Affairs Strategy?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Let our experienced team help you navigate complex stakeholder relationships and achieve your policy objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Schedule Strategy Session
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-blue transition-colors font-semibold">
                Download Public Affairs Guide
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PublicAffairs;