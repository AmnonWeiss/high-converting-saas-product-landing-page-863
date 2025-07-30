import { Zap, Brain, Shield } from "lucide-react";

const benefits = [
  {
    title: "Automated Exposure Discovery",
    description: "Connect your accounting system and instantly see all your FX exposures across invoices, contracts, and payments.",
    icon: Zap,
    color: "text-primary"
  },
  {
    title: "AI-Driven Hedge Recommendations",
    description: "Our AI analyzes market conditions and your risk profile to suggest optimal hedging strategies in real-time.",
    icon: Brain,
    color: "text-secondary"
  },
  {
    title: "Bank-Grade Security",
    description: "SOC 2 Type II compliant, GDPR ready, with enterprise-level encryption and security monitoring.",
    icon: Shield,
    color: "text-neutral-700"
  },
];

const HedgehogBenefits = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to <span className="text-primary">Manage FX Risk</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            From automated discovery to intelligent hedging, Hedgehog provides comprehensive FX risk management for growing businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="glass-card p-8 text-center group hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
              </div>
              <h3 className="font-semibold text-xl mb-4">{benefit.title}</h3>
              <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HedgehogBenefits;