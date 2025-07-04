import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Shield, Users, Globe } from 'lucide-react';

const ScrollytellingAuthority = () => {
  const [titleRef, titleInView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [timelineRef, timelineInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [textRef, textInView] = useInView({ threshold: 0.5, triggerOnce: true });

  const credentials = [
    {
      icon: Shield,
      title: "FEMA Certified",
      description: "Federal Emergency Management Agency certified communicators",
      color: "text-primary-red",
      bgColor: "bg-red-50"
    },
    {
      icon: Award,
      title: "Emmy-Winning Journalists",
      description: "Award-winning media professionals with decades of experience",
      color: "text-primary-blue",
      bgColor: "bg-blue-50"
    },
    {
      icon: Users,
      title: "Public Administrators",
      description: "Seasoned public sector leaders and policy experts",
      color: "text-primary-red",
      bgColor: "bg-red-50"
    },
    {
      icon: Globe,
      title: "International Trainers",
      description: "Global expertise in cross-cultural communication strategies",
      color: "text-primary-blue",
      bgColor: "bg-blue-50"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary-red rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-primary-blue rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div 
          ref={titleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-montserrat font-black text-primary-charcoal mb-6">
            Your Partners in{' '}
            <span className="gradient-text">High-Stakes Communication</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elite professionals with proven expertise in crisis management and strategic communication
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative mb-16 sm:mb-20">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-red to-primary-blue rounded-full hidden lg:block"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {credentials.map((credential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:pl-12'}`}
              >
                <div className="card-enhanced hover-lift">
                  <div className={`flex items-center ${index % 2 === 0 ? 'lg:justify-end' : 'justify-start'} mb-6`}>
                    <div className={`w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${
                      credential.color.includes('red') ? 'from-primary-red to-red-600' : 'from-primary-blue to-blue-600'
                    } flex items-center justify-center shadow-glow mr-4 ${
                      index % 2 === 0 ? 'lg:mr-0 lg:ml-4 lg:order-2' : ''
                    }`}>
                      <credential.icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </div>
                    <h3 className="text-xl lg:text-2xl font-montserrat font-bold text-primary-charcoal">
                      {credential.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                    {credential.description}
                  </p>
                </div>

                {/* Timeline dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-white border-4 border-primary-red rounded-full shadow-glow hidden lg:block"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Final text and team photo */}
        <motion.div 
          ref={textRef}
          initial={{ opacity: 0, y: 50 }}
          animate={textInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
        >
          <div className="order-2 lg:order-1">
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-6">
              We are a collective of FEMA-certified communicators, public administrators, Emmy-winning journalists, and brand strategists. Our team brings decades of combined international experience from the front lines of public information and corporate boardrooms.
            </p>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8">
              We don't just teach theory; we provide actionable strategies proven to protect reputations, build trust, and ensure your message cuts through the noise.
            </p>
            <button className="btn-primary hover-glow text-base lg:text-lg">
              Meet Our Team
            </button>
          </div>
          
          <div className="relative order-1 lg:order-2">
            <div className="aspect-w-4 aspect-h-3 rounded-2xl lg:rounded-3xl overflow-hidden shadow-glow hover-lift">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="CommSync Team"
                className="w-full h-full object-cover"
                data-placeholder="true"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl lg:rounded-3xl"></div>
            
            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 glass-effect rounded-2xl p-4 lg:p-6"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm lg:text-base font-semibold text-gray-800">Available 24/7</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScrollytellingAuthority;