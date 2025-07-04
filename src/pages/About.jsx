import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiShield, FiUsers, FiGlobe, FiTarget, FiTrendingUp } = FiIcons;

const About = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [teamRef, teamInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [valuesRef, valuesInView] = useInView({ threshold: 0.3, triggerOnce: true });

  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      title: 'Founder & CEO',
      credentials: 'FEMA Certified, Emmy Award Winner',
      bio: 'Former CNN correspondent with 15+ years covering international crises. FEMA-certified emergency communicator.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Dr. James Rodriguez',
      title: 'Chief Strategy Officer',
      credentials: 'PhD Public Administration, Former FEMA Director',
      bio: 'Former FEMA Regional Director with extensive experience in multi-agency crisis coordination and emergency management.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    },
    {
      name: 'Amanda Chen',
      title: 'Director of Training',
      credentials: 'FEMA Master Trainer, PIO Specialist',
      bio: 'Lead trainer with 10+ years developing crisis communication curricula for government and corporate clients.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
    }
  ];

  const values = [
    {
      icon: FiShield,
      title: 'Excellence Under Pressure',
      description: 'We deliver exceptional results when stakes are highest and time is shortest.'
    },
    {
      icon: FiUsers,
      title: 'Collaborative Partnership',
      description: 'We work as an extension of your team, not just external consultants.'
    },
    {
      icon: FiTarget,
      title: 'Strategic Focus',
      description: 'Every action is purposeful, measurable, and aligned with your long-term objectives.'
    },
    {
      icon: FiGlobe,
      title: 'Global Perspective',
      description: 'International experience applied to local challenges for comprehensive solutions.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About CommSync - Elite Crisis Communications Team | FEMA-Certified Experts</title>
        <meta name="description" content="Meet the CommSync team: FEMA-certified communicators, Emmy-winning journalists, and seasoned public administrators. Elite crisis communication expertise serving Tampa, FL and Cheyenne, WY." />
        <meta name="keywords" content="about CommSync, crisis communications team, FEMA certified experts, Emmy winning journalists, Tampa crisis management, Cheyenne emergency communications" />
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
                Elite Professionals for <span className="gradient-text">High-Stakes Moments</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We are a collective of FEMA-certified communicators, Emmy-winning journalists, and seasoned public administrators united by one mission: to ensure your message cuts through the noise when it matters most.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
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
                  Our Mission
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  To transform how organizations communicate during their most critical moments. We don't just manage crises—we engineer outcomes that protect reputations, build trust, and create competitive advantages even in the face of adversity.
                </p>
                <blockquote className="border-l-4 border-primary-red pl-6 italic text-gray-600">
                  "When your reputation is the story, we author the outcome."
                </blockquote>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                  alt="CommSync team meeting"
                  className="w-full rounded-lg shadow-xl"
                  data-placeholder="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section ref={teamRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Leadership <span className="gradient-text">Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the experienced professionals who lead our crisis communication initiatives
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover-lift"
                >
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-64 object-cover"
                      data-placeholder="true"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary-red font-semibold mb-2">
                      {member.title}
                    </p>
                    <p className="text-sm text-gray-600 mb-3 font-medium">
                      {member.credentials}
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Credentials & Certifications */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Credentials & <span className="gradient-text">Certifications</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team brings the highest level of professional credentials and real-world experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: FiShield,
                  title: 'FEMA Certified',
                  description: 'Federal Emergency Management Agency certified public information officers and emergency communicators'
                },
                {
                  icon: FiAward,
                  title: 'Emmy Winners',
                  description: 'Award-winning broadcast journalists with decades of experience in high-pressure situations'
                },
                {
                  icon: FiUsers,
                  title: 'Public Administration',
                  description: 'Former government officials and public administrators with deep policy and regulatory experience'
                },
                {
                  icon: FiGlobe,
                  title: 'International Experience',
                  description: 'Global crisis communication experience across multiple continents and cultures'
                }
              ].map((credential, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <SafeIcon icon={credential.icon} className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-montserrat font-bold text-primary-charcoal mb-3">
                    {credential.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {credential.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section ref={valuesRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Our <span className="gradient-text">Core Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide our approach to crisis communication and client service
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={valuesInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-8 hover-lift"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-red to-red-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <SafeIcon icon={value.icon} className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 bg-primary-blue text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold mb-4">
                Strategic Locations
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Positioned to serve critical regions across the United States
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-xl">FL</span>
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-4">Tampa, Florida</h3>
                <p className="text-blue-100 leading-relaxed">
                  Our Southeast regional hub serves Florida government agencies, healthcare systems, and major corporations throughout the region.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-blue font-bold text-xl">WY</span>
                </div>
                <h3 className="text-2xl font-montserrat font-bold mb-4">Cheyenne, Wyoming</h3>
                <p className="text-blue-100 leading-relaxed">
                  Our Mountain West headquarters specializes in energy sector communications and federal agency support across the region.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary-red text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-6">
              Ready to Work with Elite Professionals?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Partner with the CommSync team for your next critical communication challenge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-red px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-red transition-colors font-semibold">
                View Our Credentials
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;