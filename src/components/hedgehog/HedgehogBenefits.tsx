import { motion } from "framer-motion";
import { Search, Brain, Shield } from "lucide-react";

const benefits = [
  {
    title: "Automated Exposure Discovery",
    description: "Our AI scans your invoices and automatically identifies all foreign exchange exposures across your business operations.",
    icon: Search,
    color: "text-primary"
  },
  {
    title: "AI-Driven Hedge Recommendations",
    description: "Advanced algorithms analyze market conditions and your risk profile to suggest optimal hedging strategies in real-time.",
    icon: Brain,
    color: "text-secondary"
  },
  {
    title: "Bank-Grade Security",
    description: "SOC 2 and GDPR compliant infrastructure ensures your financial data is protected with enterprise-level security.",
    icon: Shield,
    color: "text-neutral-700"
  },
];

const HedgehogBenefits = () => {
  return (
    <section className="section-padding bg-neutral-100">
      <div className="max-w-6xl mx-auto container-padding">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Why Choose <span className="text-primary">Hedgehog</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Advanced technology meets financial expertise to protect your business from currency volatility
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg p-8 text-center group hover:shadow-xl transition-all duration-150"
            >
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-150">
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-4">{benefit.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HedgehogBenefits;