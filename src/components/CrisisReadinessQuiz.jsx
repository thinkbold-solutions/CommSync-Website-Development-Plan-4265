import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, AlertTriangle, Shield, ArrowRight } from 'lucide-react';

const CrisisReadinessQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showLeadCapture, setShowLeadCapture] = useState(false);
  const [leadData, setLeadData] = useState({ name: '', email: '' });

  const questions = [
    {
      id: 'crisis_plan',
      question: 'Does your organization have a documented crisis communication plan?',
      options: [
        { value: 'comprehensive', text: 'Yes, comprehensive and regularly updated', score: 3 },
        { value: 'basic', text: 'Yes, but basic and rarely updated', score: 2 },
        { value: 'informal', text: 'Informal plan only', score: 1 },
        { value: 'none', text: 'No formal plan', score: 0 }
      ]
    },
    {
      id: 'media_training',
      question: 'How recently have your executives received media training?',
      options: [
        { value: 'recent', text: 'Within the last 6 months', score: 3 },
        { value: 'year', text: 'Within the last year', score: 2 },
        { value: 'old', text: 'More than a year ago', score: 1 },
        { value: 'never', text: 'Never', score: 0 }
      ]
    },
    {
      id: 'response_team',
      question: 'Do you have a designated crisis response team?',
      options: [
        { value: 'trained', text: 'Yes, trained and ready', score: 3 },
        { value: 'designated', text: 'Yes, but limited training', score: 2 },
        { value: 'informal', text: 'Informal team only', score: 1 },
        { value: 'none', text: 'No designated team', score: 0 }
      ]
    },
    {
      id: 'monitoring',
      question: 'How do you monitor your brand reputation online?',
      options: [
        { value: 'professional', text: 'Professional monitoring tools', score: 3 },
        { value: 'basic', text: 'Basic Google alerts', score: 2 },
        { value: 'manual', text: 'Manual checking occasionally', score: 1 },
        { value: 'none', text: 'No monitoring', score: 0 }
      ]
    },
    {
      id: 'stakeholder_list',
      question: 'Do you maintain an updated stakeholder contact list for emergencies?',
      options: [
        { value: 'current', text: 'Yes, current and accessible', score: 3 },
        { value: 'outdated', text: 'Yes, but needs updating', score: 2 },
        { value: 'basic', text: 'Basic list only', score: 1 },
        { value: 'none', text: 'No formal list', score: 0 }
      ]
    }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowLeadCapture(true);
    }
  };

  const calculateScore = () => {
    return Object.values(answers).reduce((total, answer) => total + answer.score, 0);
  };

  const getResultLevel = (score) => {
    if (score >= 12) return 'fortified';
    if (score >= 8) return 'prepared';
    return 'vulnerable';
  };

  const getResultData = (level) => {
    const results = {
      vulnerable: {
        title: 'Vulnerable',
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        icon: AlertTriangle,
        description: 'Your organization faces significant risks in a crisis situation. Immediate action is needed to protect your reputation.',
        recommendations: [
          'Develop a comprehensive crisis communication plan',
          'Establish a trained crisis response team',
          'Implement reputation monitoring systems',
          'Schedule executive media training'
        ]
      },
      prepared: {
        title: 'Prepared',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        icon: CheckCircle,
        description: 'You have basic crisis readiness but gaps remain. Strengthening your strategy will improve outcomes.',
        recommendations: [
          'Update and test your crisis plan regularly',
          'Enhance media training programs',
          'Improve stakeholder communication systems',
          'Strengthen reputation monitoring'
        ]
      },
      fortified: {
        title: 'Fortified',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        icon: Shield,
        description: 'Excellent crisis readiness! You have strong foundations but can always refine your approach.',
        recommendations: [
          'Conduct regular crisis simulations',
          'Stay updated on emerging threats',
          'Enhance cross-cultural communication',
          'Optimize response times'
        ]
      }
    };
    return results[level];
  };

  const handleLeadSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send the lead data to your API
    console.log('Lead captured:', leadData);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setShowLeadCapture(false);
    setLeadData({ name: '', email: '' });
  };

  if (showResults) {
    const score = calculateScore();
    const level = getResultLevel(score);
    const resultData = getResultData(level);

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 card-enhanced"
      >
        <div className={`text-center mb-8 p-6 rounded-lg ${resultData.bgColor}`}>
          <resultData.icon className={`w-16 h-16 mx-auto mb-4 ${resultData.color}`} />
          <h3 className={`text-2xl font-montserrat font-bold mb-2 ${resultData.color}`}>
            Crisis Readiness Level: {resultData.title}
          </h3>
          <p className="text-gray-700 text-lg">
            Score: {score}/15
          </p>
        </div>

        <div className="mb-8">
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            {resultData.description}
          </p>
          
          <h4 className="font-montserrat font-bold text-primary-charcoal mb-4">
            Recommended Actions:
          </h4>
          <ul className="space-y-2">
            {resultData.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start space-x-2">
                <ArrowRight className="w-5 h-5 text-primary-red mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary hover-glow">
            Book a Free Consultation to Fortify Your Strategy
          </button>
          <button onClick={resetQuiz} className="btn-secondary hover-glow">
            Retake Quiz
          </button>
        </div>
      </motion.div>
    );
  }

  if (showLeadCapture) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md mx-auto bg-white rounded-lg shadow-xl p-8 card-enhanced"
      >
        <div className="text-center mb-6">
          <Shield className="w-16 h-16 mx-auto mb-4 text-primary-red" />
          <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-2">
            Get Your Personalized Action Plan
          </h3>
          <p className="text-gray-600">
            Enter your details to receive your crisis readiness results and customized recommendations.
          </p>
        </div>

        <form onSubmit={handleLeadSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={leadData.name}
              onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              value={leadData.email}
              onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-red"
            />
          </div>

          <button type="submit" className="w-full btn-primary hover-glow">
            Get My Action Plan
          </button>
        </form>
      </motion.div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-primary-charcoal mb-4">
            How <span className="gradient-text">Crisis-Ready</span> is Your Organization?
          </h2>
          <p className="text-xl text-gray-600">
            Take our 5-minute assessment to discover your vulnerabilities and get a personalized action plan.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {questions.length}</span>
              <span className="text-sm text-gray-600">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-primary-red h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-lg shadow-lg p-8 card-enhanced"
            >
              <h3 className="text-2xl font-montserrat font-bold text-primary-charcoal mb-6">
                {question.question}
              </h3>
              <div className="space-y-3">
                {question.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(question.id, option)}
                    className="w-full text-left p-4 border border-gray-200 rounded-lg hover:border-primary-red hover:bg-red-50 transition-colors hover-glow"
                  >
                    <span className="text-gray-700">{option.text}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default CrisisReadinessQuiz;