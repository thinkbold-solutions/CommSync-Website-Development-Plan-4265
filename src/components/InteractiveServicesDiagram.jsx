import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Target, Zap, Shield } from 'lucide-react';

const InteractiveServicesDiagram = () => {
  const [activeNode, setActiveNode] = useState(null);

  const nodes = [
    {
      id: 'assess',
      icon: Search,
      title: 'Assess',
      description: 'Comprehensive vulnerability analysis and risk assessment',
      position: { top: '20%', left: '20%' },
      color: 'from-primary-red to-red-600'
    },
    {
      id: 'strategize',
      icon: Target,
      title: 'Strategize',
      description: 'Develop tailored communication strategies and protocols',
      position: { top: '20%', right: '20%' },
      color: 'from-primary-blue to-blue-600'
    },
    {
      id: 'execute',
      icon: Zap,
      title: 'Execute',
      description: 'Implement training programs and communication systems',
      position: { bottom: '20%', right: '20%' },
      color: 'from-primary-red to-red-600'
    },
    {
      id: 'fortify',
      icon: Shield,
      title: 'Fortify',
      description: 'Continuous monitoring and strategy refinement',
      position: { bottom: '20%', left: '20%' },
      color: 'from-primary-blue to-blue-600'
    }
  ];

  const connections = [
    { from: 'assess', to: 'strategize' },
    { from: 'strategize', to: 'execute' },
    { from: 'execute', to: 'fortify' },
    { from: 'fortify', to: 'assess' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-montserrat font-bold text-primary-charcoal mb-4">
            The <span className="gradient-text">CommSync Method</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our proven four-phase approach ensures comprehensive crisis readiness and brand protection
          </p>
        </div>

        <div className="relative h-96 sm:h-[500px] bg-gray-50 rounded-2xl overflow-hidden hover-lift">
          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {connections.map((connection, index) => {
              const fromNode = nodes.find(n => n.id === connection.from);
              const toNode = nodes.find(n => n.id === connection.to);
              return (
                <motion.line
                  key={index}
                  x1="50%"
                  y1="50%"
                  x2="50%"
                  y2="50%"
                  stroke={activeNode === connection.from || activeNode === connection.to ? '#CC0000' : '#E5E7EB'}
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: index * 0.2 }}
                  className="animate-pulse"
                />
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map((node, index) => (
            <motion.div
              key={node.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              style={node.position}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br ${node.color} flex items-center justify-center shadow-lg transform transition-all duration-300 hover-glow ${
                activeNode === node.id ? 'scale-110 shadow-xl' : 'hover:scale-105'
              }`}>
                <node.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div className="text-center mt-2">
                <h3 className="font-montserrat font-bold text-primary-charcoal text-sm sm:text-base">
                  {node.title}
                </h3>
              </div>
            </motion.div>
          ))}

          {/* Description Panel */}
          <AnimatePresence>
            {activeNode && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="absolute bottom-4 left-4 right-4 bg-white rounded-lg p-4 shadow-xl border border-gray-200 glass-effect"
              >
                <h4 className="font-montserrat font-bold text-primary-charcoal mb-2">
                  {nodes.find(n => n.id === activeNode)?.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {nodes.find(n => n.id === activeNode)?.description}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary hover-glow">
            Learn More About Our Process
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServicesDiagram;