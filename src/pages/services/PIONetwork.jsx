import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Shield, Star, CheckCircle, Clock, Zap, Award } from 'lucide-react';

const PIONetwork = () => {
  const [selectedPlan, setSelectedPlan] = useState('professional');

  const pricingPlans = [
    {
      id: 'essential',
      name: 'Essential',
      price: '$9.99',
      period: 'monthly',
      description: 'Perfect for getting started with professional PIO networking',
      features: [
        'Access to basic community forums',
        'Monthly resource library updates',
        'Peer-to-peer networking opportunities',
        'Basic crisis communication templates',
        'Email newsletter with industry updates',
        'Standard community support'
      ],
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-50',
      buttonClass: 'bg-gray-600 hover:bg-gray-700'
    },
    {
      id: 'professional',
      name: 'Professional',
      price: '$14.99',
      period: 'monthly',
      description: 'Enhanced access with expert guidance for serious professionals',
      features: [
        'Everything in Essential',
        'Access to advanced expert forums',
        'Direct responses from FEMA-certified professionals',
        'Weekly expert-led webinars',
        'Premium crisis response templates',
        'Priority community support',
        'Exclusive case study library',
        'Monthly virtual networking events'
      ],
      popular: true,
      color: 'from-primary-blue to-blue-600',
      bgColor: 'bg-blue-50',
      buttonClass: 'bg-primary-blue hover:bg-blue-700'
    },
    {
      id: 'vip',
      name: 'VIP Elite',
      price: '$19.99',
      period: 'monthly',
      description: 'Ultimate access with personalized crisis support',
      features: [
        'Everything in Professional',
        '2 monthly crisis questions with 72-hour expert response',
        'Direct access to Emmy-winning journalists',
        'Private VIP community forum',
        'One-on-one monthly mentor calls',
        'Custom crisis communication reviews',
        'Emergency hotline access',
        'Annual in-person networking event invitation'
      ],
      color: 'from-primary-red to-red-600',
      bgColor: 'bg-red-50',
      buttonClass: 'bg-primary-red hover:bg-red-700'
    }
  ];

  const communityFeatures = [
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Connect with FEMA-certified PIOs, Emmy-winning journalists, and seasoned crisis professionals.'
    },
    {
      icon: MessageCircle,
      title: 'Real-Time Support',
      description: 'Get answers to your crisis communication questions from experienced professionals.'
    },
    {
      icon: Shield,
      title: 'Proven Strategies',
      description: 'Access battle-tested communication strategies and templates from real crisis situations.'
    },
    {
      icon: Award,
      title: 'Continuous Learning',
      description: 'Stay updated with the latest best practices through exclusive training and resources.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>CommSync PIO Network - Professional Crisis Communication Community</title>
        <meta name="description" content="Join the premier online community for Public Information Officers. Get expert advice, training, and access to top crisis communication professionals. Multiple membership tiers available." />
        <meta name="keywords" content="PIO network, crisis communication community, public information officer, professional networking, crisis response training" />
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
              <Users className="w-20 h-20 mx-auto mb-6 text-primary-red" />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-montserrat font-bold mb-6">
                CommSync <span className="gradient-text">PIO Network</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
                Join the premier online community where Public Information Officers connect, learn, and grow together. Get expert advice, cutting-edge training, and direct access to industry leaders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary hover-glow"
                >
                  Join the Network
                </button>
                <button className="btn-secondary text-white border-white hover:bg-white hover:text-gray-900">
                  Learn More
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Community Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Why Join the PIO Network?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connect with the most experienced crisis communication professionals in the industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {communityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center card-enhanced hover-lift"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-montserrat font-bold text-primary-charcoal mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-montserrat font-bold text-primary-charcoal mb-6">
                  What Makes Our Network Different
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-red to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-charcoal mb-2">Expert-Led Community</h3>
                      <p className="text-gray-700">Direct access to FEMA-certified professionals, Emmy-winning journalists, and crisis veterans who respond to your questions personally.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-blue to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-charcoal mb-2">Rapid Response Support</h3>
                      <p className="text-gray-700">VIP members get 72-hour guaranteed responses to crisis questions from our expert team when you need help most.</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-red to-red-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-glow">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary-charcoal mb-2">Real-World Resources</h3>
                      <p className="text-gray-700">Access templates, case studies, and strategies used in actual crisis situations by our professional team.</p>
                    </div>
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
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="PIO Network Community"
                  className="w-full rounded-lg shadow-xl hover-lift"
                  data-placeholder="true"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                Choose Your Membership Level
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Select the membership that best fits your professional needs and career goals
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative bg-white rounded-lg shadow-xl overflow-hidden hover-lift ${
                    plan.popular ? 'ring-2 ring-primary-blue' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-primary-blue text-white text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`p-8 ${plan.bgColor} ${plan.popular ? 'pt-12' : ''}`}>
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-6 shadow-glow`}>
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal text-center mb-2">
                      {plan.name}
                    </h3>
                    
                    <div className="text-center mb-4">
                      <span className="text-4xl font-bold text-primary-charcoal">{plan.price}</span>
                      <span className="text-gray-600">/{plan.period}</span>
                    </div>
                    
                    <p className="text-gray-700 text-center mb-6 leading-relaxed">
                      {plan.description}
                    </p>
                  </div>

                  <div className="p-8">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <button 
                      className={`w-full text-white py-3 rounded-lg transition-colors font-semibold hover-glow ${plan.buttonClass}`}
                      onClick={() => setSelectedPlan(plan.id)}
                    >
                      Choose {plan.name}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                All memberships include a 7-day free trial. Cancel anytime.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>Secure payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>Cancel anytime</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Expert-verified content</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-montserrat font-bold text-primary-charcoal mb-4">
                What Network Members Say
              </h2>
              <p className="text-xl text-gray-600">
                Join thousands of satisfied PIO professionals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Jennifer Walsh',
                  title: 'Senior PIO, State Emergency Management',
                  content: 'The VIP tier saved my career. When we faced a major wildfire, I got expert guidance within hours that helped us manage the crisis effectively.',
                  plan: 'VIP Elite Member'
                },
                {
                  name: 'Marcus Thompson',
                  title: 'Communications Director, City Government',
                  content: 'The professional network is invaluable. Having direct access to Emmy-winning journalists and FEMA experts has elevated our entire communication strategy.',
                  plan: 'Professional Member'
                },
                {
                  name: 'Sarah Chen',
                  title: 'Corporate Communications Manager',
                  content: 'Even the essential membership provides incredible value. The templates and peer networking alone are worth the investment.',
                  plan: 'Essential Member'
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg shadow-lg p-6 card-enhanced hover-lift"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-primary-charcoal">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                    <p className="text-xs text-primary-red font-semibold mt-1">{testimonial.plan}</p>
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
              Ready to Join the Network?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Start your 7-day free trial today and connect with the most experienced crisis communication professionals in the industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-primary-blue px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold hover-glow"
              >
                Start Free Trial
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-primary-blue">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PIONetwork;