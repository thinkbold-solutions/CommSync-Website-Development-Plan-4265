import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMail, FiPhone, FiMapPin, FiClock, FiSend } = FiIcons;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    urgency: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would normally send to your API endpoint
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        service: '',
        urgency: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact CommSync - Emergency Crisis Communications Consultation</title>
        <meta name="description" content="Contact CommSync for emergency crisis communications consultation. FEMA-certified experts available 24/7 for Tampa, Florida and Cheyenne, Wyoming." />
        <meta name="keywords" content="crisis communications contact, emergency consultation, Tampa crisis management, Cheyenne crisis communications" />
      </Helmet>

      <div className="pt-16 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="py-20 bg-primary-charcoal text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
                Get <span className="gradient-text">Expert Help</span> Now
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Crisis doesn't wait for business hours. Our FEMA-certified experts are ready to help you navigate any communication challenge.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiPhone} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-2">
                  Emergency Hotline
                </h3>
                <p className="text-gray-600 mb-4">
                  24/7 crisis support available
                </p>
                <a href="tel:+1-555-COMMSYNC" className="text-primary-red font-semibold hover:text-red-700 transition-colors">
                  +1 (555) COMM-SYNC
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiMail} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-2">
                  Email Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Secure communication channel
                </p>
                <a href="mailto:emergency@commsync.com" className="text-primary-red font-semibold hover:text-red-700 transition-colors">
                  emergency@commsync.com
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white rounded-lg shadow-lg p-8 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-red to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SafeIcon icon={FiClock} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-2">
                  Response Time
                </h3>
                <p className="text-gray-600 mb-4">
                  Emergency situations
                </p>
                <p className="text-primary-red font-semibold">
                  Within 1 Hour
                </p>
              </motion.div>
            </div>

            {/* Contact Form and Locations */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <h2 className="text-3xl font-montserrat font-bold text-primary-charcoal mb-6">
                  Request Consultation
                </h2>
                
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <p className="text-green-800">
                      Thank you for your message. We'll respond within 1 hour for emergency situations.
                    </p>
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                    <p className="text-red-800">
                      There was an error submitting your message. Please try again or call our emergency hotline.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                      >
                        <option value="">Select a service</option>
                        <option value="crisis-communications">Crisis Communications</option>
                        <option value="brand-engineering">Brand Engineering</option>
                        <option value="pio-training">PIO Training</option>
                        <option value="public-affairs">Public Affairs</option>
                        <option value="consultation">General Consultation</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                        Urgency Level
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                      >
                        <option value="">Select urgency</option>
                        <option value="emergency">Emergency (Active Crisis)</option>
                        <option value="urgent">Urgent (Within 24 hours)</option>
                        <option value="normal">Normal (Within 1 week)</option>
                        <option value="planning">Planning (Future needs)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your situation and how we can help..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary-red text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold flex items-center justify-center disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : (
                      <>
                        <SafeIcon icon={FiSend} className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* Locations */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-6">
                    Our Locations
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <SafeIcon icon={FiMapPin} className="w-6 h-6 text-primary-red mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary-charcoal">Tampa, Florida</h4>
                        <p className="text-gray-600">Serving the Southeast Region</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Strategic location for Florida government agencies, healthcare systems, and major corporations
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <SafeIcon icon={FiMapPin} className="w-6 h-6 text-primary-red mt-1" />
                      <div>
                        <h4 className="font-semibold text-primary-charcoal">Cheyenne, Wyoming</h4>
                        <p className="text-gray-600">Serving the Mountain West Region</p>
                        <p className="text-sm text-gray-500 mt-1">
                          Central hub for energy sector, federal agencies, and rural communication challenges
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-6">
                    Emergency Response
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">24/7 Crisis Hotline Active</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Rapid Response Team On-Call</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Secure Communication Channels</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-red-50 rounded-lg">
                    <p className="text-red-800 font-semibold">
                      In Active Crisis?
                    </p>
                    <p className="text-red-700 text-sm mt-1">
                      Call our emergency hotline immediately for immediate assistance.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;