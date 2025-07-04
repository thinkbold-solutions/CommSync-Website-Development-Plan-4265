import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, AlertTriangle, Download } from 'lucide-react';

const BrandROICalculator = () => {
  const [formData, setFormData] = useState({
    revenue: '',
    industry: '',
    employees: '',
    crisisImpact: '15'
  });
  const [showResults, setShowResults] = useState(false);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', email: '', company: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateROI = () => {
    const revenue = parseFloat(formData.revenue) || 0;
    const crisisImpact = parseFloat(formData.crisisImpact) || 15;
    
    // Industry multipliers
    const industryMultipliers = {
      'healthcare': 1.5,
      'financial': 1.8,
      'technology': 1.3,
      'retail': 1.4,
      'manufacturing': 1.2,
      'other': 1.0
    };
    
    const multiplier = industryMultipliers[formData.industry] || 1.0;
    
    // Calculations
    const potentialLoss = (revenue * (crisisImpact / 100)) * multiplier;
    const brandEngineeringCost = Math.min(potentialLoss * 0.05, 250000); // 5% of potential loss, max $250k
    const roiMultiplier = potentialLoss / brandEngineeringCost;
    const annualProtection = potentialLoss * 0.8; // 80% protection factor
    
    return {
      potentialLoss,
      brandEngineeringCost,
      roiMultiplier,
      annualProtection,
      monthlyProtection: annualProtection / 12
    };
  };

  const handleCalculate = () => {
    if (!formData.revenue || !formData.industry) {
      alert('Please fill in revenue and industry to calculate ROI');
      return;
    }
    setShowResults(true);
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    console.log('ROI Calculator Lead captured:', leadData);
    setShowLeadCapture(false);
    // Here you would send to your API
  };

  const results = showResults ? calculateROI() : null;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-primary-charcoal mb-4">
            Brand Protection <span className="gradient-text">ROI Calculator</span>
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Calculate the financial impact of protecting your brand reputation
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span className="flex items-center"><Calculator className="w-4 h-4 mr-1" /> Instant calculation</span>
            <span className="flex items-center"><TrendingUp className="w-4 h-4 mr-1" /> Industry-specific</span>
            <span className="flex items-center"><Download className="w-4 h-4 mr-1" /> Detailed report</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-lg p-8 card-enhanced"
          >
            <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-6">
              Enter Your Company Details
            </h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="revenue" className="block text-sm font-medium text-gray-700 mb-2">
                  Annual Revenue (USD) *
                </label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="number"
                    id="revenue"
                    name="revenue"
                    value={formData.revenue}
                    onChange={handleInputChange}
                    placeholder="10000000"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                  Industry *
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                >
                  <option value="">Select your industry</option>
                  <option value="healthcare">Healthcare & Life Sciences</option>
                  <option value="financial">Financial Services</option>
                  <option value="technology">Technology</option>
                  <option value="retail">Retail & Consumer Goods</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="employees" className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Employees
                </label>
                <select
                  id="employees"
                  name="employees"
                  value={formData.employees}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                >
                  <option value="">Select company size</option>
                  <option value="1-50">1-50 employees</option>
                  <option value="51-200">51-200 employees</option>
                  <option value="201-1000">201-1,000 employees</option>
                  <option value="1000+">1,000+ employees</option>
                </select>
              </div>

              <div>
                <label htmlFor="crisisImpact" className="block text-sm font-medium text-gray-700 mb-2">
                  Estimated Crisis Impact on Revenue: {formData.crisisImpact}%
                </label>
                <input
                  type="range"
                  id="crisisImpact"
                  name="crisisImpact"
                  min="5"
                  max="50"
                  value={formData.crisisImpact}
                  onChange={handleInputChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>5% (Minor)</span>
                  <span>25% (Moderate)</span>
                  <span>50% (Severe)</span>
                </div>
              </div>

              <button
                onClick={handleCalculate}
                className="w-full btn-primary hover-glow flex items-center justify-center"
              >
                <Calculator className="w-5 h-5 mr-2" />
                Calculate Brand Protection ROI
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
              <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
                <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2 text-green-500" />
                  Your Brand Protection ROI
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                      <h4 className="font-semibold text-red-800">Potential Crisis Loss</h4>
                    </div>
                    <p className="text-2xl font-bold text-red-600">
                      ${results.potentialLoss.toLocaleString()}
                    </p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                      <h4 className="font-semibold text-green-800">Annual Protection Value</h4>
                    </div>
                    <p className="text-2xl font-bold text-green-600">
                      ${results.annualProtection.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <h4 className="text-lg font-semibold text-blue-800 mb-2">Investment vs. Return</h4>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-700">Brand Engineering Investment:</span>
                    <span className="font-bold text-blue-800">${results.brandEngineeringCost.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-blue-700">ROI Multiplier:</span>
                    <span className="font-bold text-blue-800">{results.roiMultiplier.toFixed(1)}x</span>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-blue-600 mb-2">Every $1 invested protects</p>
                    <p className="text-3xl font-bold text-blue-800">${results.roiMultiplier.toFixed(0)}</p>
                    <p className="text-sm text-blue-600">in potential losses</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => setShowLeadCapture(true)}
                    className="w-full btn-primary hover-glow"
                  >
                    Get Detailed ROI Report (Free)
                  </button>
                  <button className="w-full bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                    Schedule Strategy Consultation
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <Calculator className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Ready to Calculate?
                </h3>
                <p className="text-gray-500">
                  Fill in your company details to see your personalized brand protection ROI
                </p>
              </div>
            )}

            {/* Industry Insights */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h4 className="text-lg font-semibold text-primary-charcoal mb-4">
                Industry Crisis Impact Statistics
              </h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Healthcare & Life Sciences:</span>
                  <span className="font-semibold">15-25% revenue impact</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Financial Services:</span>
                  <span className="font-semibold">20-30% revenue impact</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Technology:</span>
                  <span className="font-semibold">10-20% revenue impact</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Retail & Consumer:</span>
                  <span className="font-semibold">12-22% revenue impact</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Lead Capture Modal */}
        {showLeadCapture && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-lg p-8 max-w-md w-full"
            >
              <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-4">
                Get Your Detailed ROI Report
              </h3>
              <p className="text-gray-600 mb-6">
                Receive a comprehensive 10-page report with industry benchmarks and actionable recommendations.
              </p>
              
              <form onSubmit={handleLeadSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={leadData.name}
                  onChange={(e) => setLeadData({...leadData, name: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                  required
                />
                <input
                  type="email"
                  placeholder="Business Email"
                  value={leadData.email}
                  onChange={(e) => setLeadData({...leadData, email: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                  required
                />
                <input
                  type="text"
                  placeholder="Company Name"
                  value={leadData.company}
                  onChange={(e) => setLeadData({...leadData, company: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
                  required
                />
                
                <div className="flex space-x-3">
                  <button type="submit" className="flex-1 btn-primary hover-glow">
                    Send Report
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowLeadCapture(false)}
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

export default BrandROICalculator;