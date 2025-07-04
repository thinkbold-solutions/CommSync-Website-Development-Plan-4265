import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCalendar, FiClock, FiMapPin, FiUsers, FiExternalLink } = FiIcons;

const Events = () => {
  const upcomingEvents = [
    {
      title: 'Crisis Communication Masterclass for Executives',
      date: '2024-03-15',
      time: '9:00 AM - 4:00 PM EST',
      location: 'Tampa, FL (In-Person)',
      type: 'Workshop',
      description: 'Intensive one-day masterclass for C-suite executives on crisis leadership and strategic communication.',
      capacity: 25,
      price: '$1,299'
    },
    {
      title: 'FEMA Communication Certification Course',
      date: '2024-03-22',
      time: '8:00 AM - 5:00 PM MST',
      location: 'Cheyenne, WY (Hybrid)',
      type: 'Certification',
      description: 'Comprehensive FEMA-certified Public Information Officer training program with hands-on exercises.',
      capacity: 40,
      price: '$899'
    },
    {
      title: 'Digital Crisis Response Webinar',
      date: '2024-04-05',
      time: '2:00 PM - 3:30 PM EST',
      location: 'Virtual Event',
      type: 'Webinar',
      description: 'Learn advanced strategies for managing crisis communications in the digital age.',
      capacity: 500,
      price: 'Free'
    }
  ];

  const pastEvents = [
    {
      title: 'Annual Academy Summit 2023',
      date: '2023-11-10',
      location: 'Tampa, FL',
      attendees: 150,
      description: 'Two-day summit featuring the latest in crisis communication best practices.'
    },
    {
      title: 'Energy Sector Crisis Communications',
      date: '2023-09-15',
      location: 'Cheyenne, WY',
      attendees: 75,
      description: 'Specialized training for energy sector communication professionals.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Events & Training - CommSync | Crisis Communication Workshops & Webinars</title>
        <meta name="description" content="Join CommSync's crisis communication events, workshops, and FEMA-certified training programs. Expert-led sessions for communication professionals and executives." />
        <meta name="keywords" content="crisis communication training, academy workshops, FEMA certification, communication events, executive training" />
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
              <SafeIcon icon={FiCalendar} className="w-20 h-20 mx-auto mb-6 text-primary-red" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
                Events & <span className="gradient-text">Training</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Join our expert-led workshops, certification programs, and exclusive events designed to elevate your crisis communication skills.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Upcoming Events
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Register now for our upcoming training sessions and professional development opportunities
              </p>
            </div>

            <div className="space-y-8">
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover-lift"
                >
                  <div className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            event.type === 'Workshop' ? 'bg-red-100 text-red-800' :
                            event.type === 'Certification' ? 'bg-blue-100 text-blue-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {event.type}
                          </span>
                          {event.price === 'Free' && (
                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                              Free
                            </span>
                          )}
                        </div>
                        <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-3">
                          {event.title}
                        </h3>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {event.description}
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <SafeIcon icon={FiCalendar} className="w-4 h-4 text-primary-red" />
                            <span className="text-gray-600">
                              {new Date(event.date).toLocaleDateString('en-US', {
                                weekday: 'short',
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <SafeIcon icon={FiClock} className="w-4 h-4 text-primary-red" />
                            <span className="text-gray-600">{event.time}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <SafeIcon icon={FiMapPin} className="w-4 h-4 text-primary-red" />
                            <span className="text-gray-600">{event.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 lg:mt-0 lg:ml-8 flex-shrink-0">
                        <div className="text-center lg:text-right">
                          <div className="mb-4">
                            <div className="text-2xl font-bold text-primary-charcoal">{event.price}</div>
                            <div className="text-sm text-gray-600">
                              <SafeIcon icon={FiUsers} className="w-4 h-4 inline mr-1" />
                              {event.capacity} spots available
                            </div>
                          </div>
                          <button className="bg-primary-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold w-full lg:w-auto">
                            Register Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Training Programs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of crisis communication training options
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Executive Workshops',
                  description: 'Intensive leadership training for C-suite executives and senior management.',
                  features: [
                    'Crisis leadership strategies',
                    'Media interview training',
                    'Board communication',
                    'Stakeholder management'
                  ],
                  duration: '1-2 days',
                  format: 'In-person'
                },
                {
                  title: 'FEMA Certification',
                  description: 'Official FEMA-certified Public Information Officer training programs.',
                  features: [
                    'Federal certification',
                    'Emergency protocols',
                    'Multi-agency coordination',
                    'Continuing education credits'
                  ],
                  duration: '3-5 days',
                  format: 'Hybrid'
                },
                {
                  title: 'Virtual Learning',
                  description: 'Convenient online training sessions and webinars for busy professionals.',
                  features: [
                    'Flexible scheduling',
                    'Interactive sessions',
                    'Recorded access',
                    'Global participation'
                  ],
                  duration: '1-3 hours',
                  format: 'Virtual'
                }
              ].map((program, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-8"
                >
                  <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-4">
                    {program.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-medium text-primary-charcoal">{program.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Format:</span>
                      <span className="font-medium text-primary-charcoal">{program.format}</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-primary-charcoal text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {program.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-red rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-primary-blue text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                    Learn More
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Academy Community CTA */}
        <section className="py-20 bg-primary-red text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-montserrat font-bold mb-6">
              Join the Elite Academy Community
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Get exclusive access to advanced training resources, networking opportunities, and continuing education programs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://academy.commsync.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-red px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold inline-flex items-center justify-center"
              >
                Join Academy Community
                <SafeIcon icon={FiExternalLink} className="w-5 h-5 ml-2" />
              </a>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-primary-red transition-colors font-semibold">
                View Membership Benefits
              </button>
            </div>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Past Events
              </h2>
              <p className="text-xl text-gray-600">
                See what we've accomplished and the professionals we've trained
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pastEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-lg p-6"
                >
                  <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-3">
                    {event.title}
                  </h3>
                  <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiCalendar} className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiMapPin} className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <SafeIcon icon={FiUsers} className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {event.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Events;