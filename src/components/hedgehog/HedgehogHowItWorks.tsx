import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Link, Eye, BarChart3, Shield, ChevronDown } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Connect Accounts",
    description: "Plug in QuickBooks or Xero in 30 seconds.",
    icon: Link,
    color: "bg-primary",
    iconColor: "text-secondary"
  },
  {
    number: "2", 
    title: "See Exposure",
    description: "Instant dashboard shows open FX risk by currency.",
    icon: Eye,
    color: "bg-primary",
    iconColor: "text-secondary"
  },
  {
    number: "3",
    title: "Simulate VaR",
    description: "AI crunches 1,000 scenarios, surfaces 95% worst-case.",
    icon: BarChart3,
    color: "bg-primary", 
    iconColor: "text-secondary"
  },
  {
    number: "4",
    title: "Hedge in 1 Click",
    description: "Lock today's rate and sleep easy.",
    icon: Shield,
    color: "bg-primary",
    iconColor: "text-secondary"
  }
];

const HedgehogHowItWorks = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: shouldReduceMotion ? 0 : 20 
    },
    visible: {
      opacity: 1,
      y: 0,
    }
  };

  const iconVariants = {
    idle: { scale: 1 },
    hover: { 
      scale: [1, 1.2, 1],
      transition: { duration: 0.4 }
    }
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-6xl mx-auto container-padding">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Get started with FX risk management in four simple steps
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-neutral-200"></div>
            <div className="absolute top-20 left-0 w-full h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-30"></div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariants}
                  transition={{
                    delay: shouldReduceMotion ? 0 : index * 0.2,
                    duration: shouldReduceMotion ? 0 : 0.6,
                    ease: "easeOut"
                  }}
                  viewport={{ once: true }}
                  className="relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Timeline connector */}
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-primary rounded-full z-10"></div>
                  
                  {/* Card */}
                  <motion.div 
                    className={`bg-white rounded-xl p-6 text-center transition-all duration-300 ${
                      hoveredCard === index ? 'shadow-xl' : 'shadow-lg'
                    } hover:shadow-xl`}
                    whileHover={{ y: -4 }}
                  >
                    {/* Step number */}
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-semibold text-lg">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <motion.div 
                      className="mb-4"
                      variants={iconVariants}
                      animate={hoveredCard === index ? "hover" : "idle"}
                    >
                      <step.icon 
                        className="w-8 h-8 text-secondary mx-auto" 
                        aria-label={`${step.title} icon`}
                      />
                    </motion.div>
                    
                    {/* Content */}
                    <h3 className="font-semibold text-lg mb-3 text-neutral-900">{step.title}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden space-y-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              transition={{
                delay: shouldReduceMotion ? 0 : index * 0.2,
                duration: shouldReduceMotion ? 0 : 0.6,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                aria-expanded={expandedCard === index}
                aria-controls={`step-${index}-content`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-neutral-900">{step.title}</h3>
                    <p className="text-neutral-600 text-sm">{step.description}</p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: expandedCard === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-neutral-400" />
                </motion.div>
              </button>
              
              <motion.div
                id={`step-${index}-content`}
                initial={false}
                animate={{ 
                  height: expandedCard === index ? "auto" : 0,
                  opacity: expandedCard === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <div className="flex items-center justify-center p-4 bg-neutral-50 rounded-lg">
                    <step.icon 
                      className="w-12 h-12 text-secondary" 
                      aria-label={`${step.title} icon`}
                    />
                  </div>
                  <p className="text-center text-neutral-600 mt-4 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-neutral-500 mb-6">Ready to get started?</p>
          <a 
            href="https://hedgehog-app.MYDOMAIN.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Launch App
          </a>
        </motion.div>
      </div>
      
      {/* Mobile Sticky CTA */}
      <motion.div 
        className="lg:hidden fixed bottom-6 left-4 right-4 z-40"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
      >
        <a 
          href="https://hedgehog-app.MYDOMAIN.com/dashboard"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full text-center block shadow-lg"
        >
          Launch App
        </a>
      </motion.div>
    </section>
  );
};

export default HedgehogHowItWorks;