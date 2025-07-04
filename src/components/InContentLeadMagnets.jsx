import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, CheckCircle, ArrowRight, Shield, FileText, Calendar } from 'lucide-react';

const InContentLeadMagnets = ({ placement = 'inline' }) => {
  const [selectedMagnet, setSelectedMagnet] = useState(null);
  const [leadData, setLeadData] = useState({ email: '', name: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const leadMagnets = {
    checklist: {
      title: "30-Day Brand Fortification Checklist",
      description: "Step-by-step action plan to strengthen your brand's crisis resilience",
      icon: CheckCircle,
      value: "$197 Value",
      features: [
        "30 daily action items",
        "Progress tracking templates",
        "Crisis prevention strategies",
        "Expert implementation tips"
      ],
      color: "from-green-500 to-green-600"
    },
    playbook: {
      title: "Brand Crisis Prevention Playbook",
      description: "Comprehensive guide used by Fortune 500 companies to prevent brand crises",
      icon: Shield,
      value: "$297 Value",
      features: [
        "40-page comprehensive guide",
        "Real crisis case studies",
        "Prevention frameworks",
        "Emergency response templates"
      ],
      color: "from-red-500 to-red-600"
    },
    template: {
      title: "Brand Engineering Blueprint",
      description: "Professional template for building crisis-resistant brand architecture",
      icon: FileText,
      value: "$147 Value",
      features: [
        "Editable framework template",
        "Brand audit worksheets",
        "Stakeholder mapping tools",
        "Implementation timeline"
      ],
      color: "from-blue-500 to-blue-600"
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Lead magnet submission:', {
      magnet: selectedMagnet,
      email: leadData.email,
      name: leadData.name
    });
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setSelectedMagnet(null);
    setLeadData({ email: '', name: '' });
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center"
      >
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Success! Check Your Email
        </h3>
        <p className="text-green-700 mb-4">
          Your {leadMagnets[selectedMagnet]?.title} is on its way to your inbox.
        </p>
        <div className="space-y-3">
          <button 
            onClick={resetForm}
            className="btn-secondary text-sm"
          >
            Download Another Resource
          </button>
          <div>
            <button className="btn-primary">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Free Strategy Session
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  if (selectedMagnet) {
    const magnet = leadMagnets[selectedMagnet];
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg"
      >
        <div className="flex items-start space-x-4 mb-6">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${magnet.color} flex items-center justify-center flex-shrink-0`}>
            <magnet.icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-primary-charcoal mb-2">
              {magnet.title}
            </h3>
            <p className="text-gray-600 mb-3">
              {magnet.description}
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <span className="bg-primary-red text-white px-2 py-1 rounded">
                FREE
              </span>
              <span className="text-green-600 font-semibold">
                {magnet.value}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
            <ul className="space-y-2">
              {magnet.features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={leadData.name}
                  onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Email *
                </label>
                <input
                  type="email"
                  required
                  value={leadData.email}
                  onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                  placeholder="you@company.com"
                />
              </div>

              <div className="space-y-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary hover-glow flex items-center justify-center"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Get Free {magnet.title}
                    </>
                  )}
                </button>
                
                <button
                  type="button"
                  onClick={() => setSelectedMagnet(null)}
                  className="w-full text-sm text-gray-500 hover:text-gray-700"
                >
                  ← Back to resources
                </button>
              </div>
              
              <p className="text-xs text-gray-500 text-center">
                We respect your privacy. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className={`${placement === 'sidebar' ? 'sticky top-24' : ''}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-gray-300"
      >
        <div className="text-center mb-6">
          <Download className="w-12 h-12 text-primary-red mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-primary-charcoal mb-2">
            Free Brand Protection Resources
          </h3>
          <p className="text-gray-600 text-sm">
            Download proven frameworks and checklists used by industry leaders
          </p>
        </div>

        <div className="space-y-3">
          {Object.entries(leadMagnets).map(([key, magnet]) => (
            <button
              key={key}
              onClick={() => setSelectedMagnet(key)}
              className="w-full text-left p-4 bg-white border border-gray-200 rounded-lg hover:border-primary-red hover:bg-red-50 transition-all group"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded bg-gradient-to-br ${magnet.color} flex items-center justify-center`}>
                    <magnet.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 text-sm">
                      {magnet.title}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {magnet.value} - FREE
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-primary-red transition-colors" />
              </div>
            </button>
          ))}
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <button className="w-full btn-primary text-sm flex items-center justify-center">
            <Calendar className="w-4 h-4 mr-2" />
            Book Free Strategy Session
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default InContentLeadMagnets;