import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Shield, AlertTriangle, Phone, Clock, CheckCircle } from 'lucide-react';

const CrisisLeadMagnets = ({ urgency = 'normal' }) => {
  const [selectedMagnet, setSelectedMagnet] = useState(null);
  const [leadData, setLeadData] = useState({ name: '', email: '', phone: '', urgency: 'normal' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const crisisLeadMagnets = {
    emergency_kit: {
      title: "Crisis Emergency Kit",
      description: "Immediate response templates and checklists for active crisis situations",
      icon: AlertTriangle,
      value: "FREE",
      urgency: "immediate",
      features: [
        "1-hour crisis response checklist",
        "Emergency statement templates",
        "Stakeholder contact sheets",
        "Media response scripts"
      ],
      color: "from-red-500 to-red-600",
      downloadTime: "Instant download"
    },
    playbook: {
      title: "24-Hour Crisis Survival Playbook",
      description: "Hour-by-hour guide to managing the first 24 hours of any crisis",
      icon: Clock,
      value: "$497 Value",
      urgency: "high",
      features: [
        "24-hour timeline template",
        "Decision-making frameworks",
        "Communication protocols",
        "Damage control strategies"
      ],
      color: "from-orange-500 to-red-500",
      downloadTime: "Instant download"
    },
    prevention: {
      title: "Crisis Prevention Toolkit",
      description: "Proactive strategies to prevent crises before they happen",
      icon: Shield,
      value: "$297 Value",
      urgency: "normal",
      features: [
        "Risk assessment templates",
        "Early warning indicators",
        "Prevention protocols",
        "Monitoring systems setup"
      ],
      color: "from-blue-500 to-blue-600",
      downloadTime: "Instant download"
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Crisis lead magnet submission:', {
      magnet: selectedMagnet,
      ...leadData
    });
    
    setSubmitted(true);
    setIsSubmitting(false);
  };

  const resetForm = () => {
    setSelectedMagnet(null);
    setLeadData({ name: '', email: '', phone: '', urgency: 'normal' });
    setSubmitted(false);
  };

  if (submitted) {
    const magnet = crisisLeadMagnets[selectedMagnet];
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 border-2 border-green-200 rounded-lg p-6 text-center"
      >
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Download Started!
        </h3>
        <p className="text-green-700 mb-4">
          Your {magnet?.title} is downloading now. Check your email for additional resources.
        </p>
        <div className="space-y-3">
          <button 
            onClick={resetForm}
            className="btn-secondary text-sm"
          >
            Download Another Resource
          </button>
          <div>
            <a 
              href="tel:+1-555-COMMSYNC"
              className="btn-primary flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Need Immediate Help? Call Now
            </a>
          </div>
        </div>
      </motion.div>
    );
  }

  if (selectedMagnet) {
    const magnet = crisisLeadMagnets[selectedMagnet];
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-2 border-red-200 rounded-lg p-6 shadow-lg"
      >
        <div className="flex items-start space-x-4 mb-6">
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${magnet.color} flex items-center justify-center flex-shrink-0 ${magnet.urgency === 'immediate' ? 'animate-pulse' : ''}`}>
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
              <span className={`px-2 py-1 rounded ${magnet.urgency === 'immediate' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                {magnet.value}
              </span>
              <span className="text-blue-600 font-semibold">
                {magnet.downloadTime}
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  value={leadData.email}
                  onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="you@company.com"
                />
              </div>

              {magnet.urgency === 'immediate' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone (for immediate callback)
                  </label>
                  <input
                    type="tel"
                    value={leadData.phone}
                    onChange={(e) => setLeadData({...leadData, phone: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder="Your phone number"
                  />
                </div>
              )}

              <div className="space-y-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center transition-colors ${
                    magnet.urgency === 'immediate' 
                      ? 'bg-red-600 text-white hover:bg-red-700 animate-pulse' 
                      : 'btn-primary hover-glow'
                  }`}
                >
                  {isSubmitting ? (
                    'Downloading...'
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      {magnet.urgency === 'immediate' ? 'GET EMERGENCY KIT NOW' : `Download ${magnet.title}`}
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
                {magnet.urgency === 'immediate' ? 'Emergency response team will contact you within 30 minutes' : 'We respect your privacy. Unsubscribe anytime.'}
              </p>
            </form>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-gray-50 rounded-lg p-6 border-2 border-dashed border-red-300">
      <div className="text-center mb-6">
        <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-3" />
        <h3 className="text-xl font-semibold text-primary-charcoal mb-2">
          Crisis Response Resources
        </h3>
        <p className="text-gray-600 text-sm">
          Get immediate access to proven crisis management tools and templates
        </p>
      </div>

      <div className="space-y-3">
        {Object.entries(crisisLeadMagnets).map(([key, magnet]) => (
          <button
            key={key}
            onClick={() => setSelectedMagnet(key)}
            className={`w-full text-left p-4 bg-white border rounded-lg transition-all group hover:shadow-lg ${
              magnet.urgency === 'immediate' 
                ? 'border-red-300 hover:border-red-500 hover:bg-red-50' 
                : 'border-gray-200 hover:border-red-300 hover:bg-red-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded bg-gradient-to-br ${magnet.color} flex items-center justify-center ${magnet.urgency === 'immediate' ? 'animate-pulse' : ''}`}>
                  <magnet.icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 text-sm">
                    {magnet.title}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {magnet.value} - {magnet.downloadTime}
                  </p>
                </div>
              </div>
              {magnet.urgency === 'immediate' && (
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded font-semibold animate-pulse">
                  URGENT
                </span>
              )}
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200">
        <a 
          href="tel:+1-555-COMMSYNC"
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center hover:bg-red-700 transition-colors"
        >
          <Phone className="w-4 h-4 mr-2" />
          Emergency Hotline: (555) COMM-SYNC
        </a>
      </div>
    </div>
  );
};

export default CrisisLeadMagnets;