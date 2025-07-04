import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, AlertTriangle, Phone, DollarSign, Calendar } from 'lucide-react';

const EmergencyResponseCalculator = () => {
  const [crisisData, setCrisisData] = useState({
    crisisType: '',
    severity: '5',
    timeElapsed: '1',
    companySize: '',
    industry: ''
  });
  const [showResults, setShowResults] = useState(false);
  const [showEmergencyForm, setShowEmergencyForm] = useState(false);
  const [emergencyContact, setEmergencyContact] = useState({
    name: '',
    phone: '',
    email: '',
    urgency: 'immediate'
  });

  const handleInputChange = (e) => {
    setCrisisData({ ...crisisData, [e.target.name]: e.target.value });
  };

  const calculateCrisisImpact = () => {
    const severity = parseInt(crisisData.severity);
    const timeElapsed = parseInt(crisisData.timeElapsed);
    
    // Base impact calculation
    let baseImpact = severity * 10000;
    
    // Time multiplier (damage increases exponentially with time)
    const timeMultiplier = Math.pow(1.5, timeElapsed - 1);
    
    // Industry multipliers
    const industryMultipliers = {
      'healthcare': 2.0,
      'financial': 2.5,
      'technology': 1.8,
      'retail': 1.5,
      'manufacturing': 1.3,
      'government': 1.7,
      'other': 1.0
    };
    
    // Company size multipliers
    const sizeMultipliers = {
      'startup': 0.5,
      'small': 1.0,
      'medium': 2.0,
      'large': 5.0,
      'enterprise': 10.0
    };
    
    const industryMult = industryMultipliers[crisisData.industry] || 1.0;
    const sizeMult = sizeMultipliers[crisisData.companySize] || 1.0;
    
    const hourlyLoss = baseImpact * timeMultiplier * industryMult * sizeMult;
    const dailyLoss = hourlyLoss * 24;
    const weeklyLoss = dailyLoss * 7;
    
    // Response time savings
    const professionalResponse = hourlyLoss * 0.7; // 70% reduction
    const timeToContainment = timeElapsed < 4 ? 2 : timeElapsed < 12 ? 6 : 24;
    
    return {
      hourlyLoss,
      dailyLoss,
      weeklyLoss,
      professionalResponse,
      timeToContainment,
      urgencyLevel: timeElapsed > 12 ? 'CRITICAL' : timeElapsed > 4 ? 'HIGH' : 'MODERATE'
    };
  };

  const handleCalculate = () => {
    if (!crisisData.crisisType || !crisisData.industry || !crisisData.companySize) {
      alert('Please fill in all required fields to calculate crisis impact');
      return;
    }
    setShowResults(true);
  };

  const handleEmergencySubmit = (e) => {
    e.preventDefault();
    console.log('Emergency contact captured:', emergencyContact);
    // Here you would send to emergency response system
    alert('Emergency response team has been notified. You will receive a call within 15 minutes.');
  };

  const results = showResults ? calculateCrisisImpact() : null;

  return (
    <section className="py-20 bg-red-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-lg mb-4">
            <AlertTriangle className="w-5 h-5 mr-2 animate-pulse" />
            <span className="font-semibold">CRISIS IMPACT CALCULATOR</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-primary-charcoal mb-4">
            Calculate Your <span className="text-red-600">Crisis Damage</span> in Real-Time
          </h2>
          <p className="text-xl text-gray-700 mb-6">
            See how much your crisis is costing every hour and what professional response can save
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-red-600 font-semibold">
            <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> Real-time calculation</span>
            <span className="flex items-center"><Phone className="w-4 h-4 mr-1" /> Emergency hotline ready</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Crisis Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-xl border-2 border-red-200"
          >
            <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-6 flex items-center">
              <AlertTriangle className="w-6 h-6 mr-2 text-red-600" />
              Current Crisis Details
            </h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Crisis *
                </label>
                <select
                  name="crisisType"
                  value={crisisData.crisisType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select crisis type</option>
                  <option value="data_breach">Data Breach / Cyber Attack</option>
                  <option value="product_recall">Product Recall / Safety Issue</option>
                  <option value="executive_scandal">Executive Scandal / Misconduct</option>
                  <option value="negative_media">Negative Media Coverage</option>
                  <option value="social_media">Social Media Crisis</option>
                  <option value="regulatory">Regulatory Investigation</option>
                  <option value="natural_disaster">Natural Disaster / Emergency</option>
                  <option value="other">Other Crisis Situation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Crisis Severity: {crisisData.severity}/10
                </label>
                <input
                  type="range"
                  name="severity"
                  min="1"
                  max="10"
                  value={crisisData.severity}
                  onChange={handleInputChange}
                  className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #FEE2E2 0%, #EF4444 ${crisisData.severity * 10}%, #E5E7EB ${crisisData.severity * 10}%, #E5E7EB 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>Minor</span>
                  <span>Moderate</span>
                  <span>Severe</span>
                  <span>Catastrophic</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hours Since Crisis Began *
                </label>
                <select
                  name="timeElapsed"
                  value={crisisData.timeElapsed}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="1">Less than 1 hour</option>
                  <option value="4">1-4 hours</option>
                  <option value="12">4-12 hours</option>
                  <option value="24">12-24 hours</option>
                  <option value="48">1-2 days</option>
                  <option value="72">2-3 days</option>
                  <option value="168">More than 3 days</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Size *
                </label>
                <select
                  name="companySize"
                  value={crisisData.companySize}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select company size</option>
                  <option value="startup">Startup (1-10 employees)</option>
                  <option value="small">Small (11-50 employees)</option>
                  <option value="medium">Medium (51-250 employees)</option>
                  <option value="large">Large (251-1000 employees)</option>
                  <option value="enterprise">Enterprise (1000+ employees)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Industry *
                </label>
                <select
                  name="industry"
                  value={crisisData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="">Select industry</option>
                  <option value="healthcare">Healthcare & Life Sciences</option>
                  <option value="financial">Financial Services</option>
                  <option value="technology">Technology</option>
                  <option value="retail">Retail & E-commerce</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="government">Government & Public Sector</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                onClick={handleCalculate}
                className="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg flex items-center justify-center"
              >
                <DollarSign className="w-5 h-5 mr-2" />
                Calculate Crisis Impact NOW
              </button>
            </div>
          </motion.div>

          {/* Results Panel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {showResults && results ? (
              <div className="bg-white rounded-lg shadow-xl p-8 border-2 border-red-200">
                <div className={`text-center mb-6 p-4 rounded-lg ${
                  results.urgencyLevel === 'CRITICAL' ? 'bg-red-100 text-red-800' :
                  results.urgencyLevel === 'HIGH' ? 'bg-orange-100 text-orange-800' :
                  'bg-yellow-100 text-yellow-800'
                }`}>
                  <h3 className="text-xl font-bold">
                    {results.urgencyLevel} SITUATION
                  </h3>
                </div>

                <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-6 text-center">
                  Crisis Financial Impact
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-red-800 mb-1">Hourly Loss</h4>
                    <p className="text-2xl font-bold text-red-600">
                      ${Math.round(results.hourlyLoss).toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-red-100 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-red-800 mb-1">Daily Loss</h4>
                    <p className="text-2xl font-bold text-red-600">
                      ${Math.round(results.dailyLoss).toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-green-800 mb-1">Professional Response Saves</h4>
                    <p className="text-xl font-bold text-green-600">
                      ${Math.round(results.professionalResponse).toLocaleString()}/hour
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg text-center">
                    <h4 className="font-semibold text-blue-800 mb-1">Time to Containment</h4>
                    <p className="text-xl font-bold text-blue-600">
                      {results.timeToContainment} hours
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-primary-charcoal mb-3 text-center">
                    🚨 Every Hour Counts
                  </h4>
                  <div className="text-center">
                    <p className="text-gray-700 mb-2">If this crisis continues for one week:</p>
                    <p className="text-3xl font-bold text-red-600 mb-4">
                      ${Math.round(results.weeklyLoss).toLocaleString()} in total losses
                    </p>
                    <p className="text-sm text-gray-600">
                      Professional crisis response can reduce this by up to 70%
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setShowEmergencyForm(true)}
                    className="w-full bg-red-600 text-white py-4 rounded-lg hover:bg-red-700 transition-colors font-bold text-lg flex items-center justify-center animate-pulse"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    GET EMERGENCY HELP NOW
                  </button>
                  
                  <a 
                    href="tel:+1-555-COMMSYNC"
                    className="w-full bg-primary-charcoal text-white py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Emergency Hotline: (555) COMM-SYNC
                  </a>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-8 shadow-xl text-center border-2 border-red-200">
                <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-red-600" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Crisis Impact Calculator
                </h3>
                <p className="text-gray-600">
                  Fill in your crisis details to see the real-time financial impact and get immediate help
                </p>
              </div>
            )}

            {/* Industry Crisis Stats */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-primary-charcoal mb-4">
                Industry Crisis Statistics
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Average crisis duration:</span>
                  <span className="font-semibold text-red-600">23 days</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Companies with crisis plan:</span>
                  <span className="font-semibold text-red-600">Only 29%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Recovery time without help:</span>
                  <span className="font-semibold text-red-600">6+ months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">With professional response:</span>
                  <span className="font-semibold text-green-600">2-3 weeks</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emergency Contact Modal */}
        {showEmergencyForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-8 max-w-md w-full"
            >
              <div className="text-center mb-6">
                <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-red-600 animate-pulse" />
                <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-2">
                  Emergency Response Request
                </h3>
                <p className="text-gray-600">
                  Our crisis team will contact you within 15 minutes
                </p>
              </div>

              <form onSubmit={handleEmergencySubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={emergencyContact.name}
                  onChange={(e) => setEmergencyContact({...emergencyContact, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number (for immediate callback)"
                  value={emergencyContact.phone}
                  onChange={(e) => setEmergencyContact({...emergencyContact, phone: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
                
                <input
                  type="email"
                  placeholder="Email Address"
                  value={emergencyContact.email}
                  onChange={(e) => setEmergencyContact({...emergencyContact, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />

                <select
                  value={emergencyContact.urgency}
                  onChange={(e) => setEmergencyContact({...emergencyContact, urgency: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  <option value="immediate">Call me immediately</option>
                  <option value="within_hour">Call within 1 hour</option>
                  <option value="within_day">Call today</option>
                </select>

                <div className="flex space-x-3">
                  <button type="submit" className="flex-1 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-bold">
                    ACTIVATE EMERGENCY RESPONSE
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowEmergencyForm(false)}
                    className="flex-1 btn-secondary hover-glow"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EmergencyResponseCalculator;