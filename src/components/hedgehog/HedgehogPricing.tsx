import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free Prototype",
    price: "$0",
    period: "",
    description: "Perfect for testing and small businesses",
    features: [
      "1 accounting connector",
      "Manual hedging tools",
      "Basic exposure analysis",
      "Email support",
      "Up to 10 invoices/month"
    ],
    cta: "Start Free",
    popular: false
  },
  {
    name: "Growth",
    price: "$99",
    period: "/mo",
    description: "Ideal for growing businesses with regular FX exposure",
    features: [
      "Auto-hedge recommendations",
      "Unlimited invoices",
      "Advanced VaR analytics",
      "Priority support",
      "Multi-currency dashboards",
      "Risk reporting & alerts"
    ],
    cta: "Start Growth Plan",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Contact us",
    period: "",
    description: "Custom solutions for large organizations",
    features: [
      "Dedicated SRE support",
      "Custom risk limits",
      "API access",
      "White-label options",
      "Advanced integrations",
      "Custom hedge strategies"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const HedgehogPricing = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="text-primary">Transparent</span> Pricing
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Choose the plan that fits your business needs. Start free and scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`glass-card p-8 relative ${plan.popular ? 'ring-2 ring-primary shadow-xl scale-105' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="font-semibold text-xl mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-neutral-500">{plan.period}</span>
                </div>
                <p className="text-neutral-600 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full ${plan.popular ? 'btn-primary' : 'btn-secondary'} flex items-center justify-center gap-2`}>
                {plan.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-500 text-sm">
            All plans include bank-grade security, SOC 2 compliance, and GDPR protection.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HedgehogPricing;