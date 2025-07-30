import { Link, Eye, TrendingUp, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect QuickBooks/Xero",
    description: "Seamlessly integrate with your existing accounting system in minutes.",
    icon: Link,
    color: "from-primary/20 to-primary/10"
  },
  {
    number: "02", 
    title: "See exposures instantly",
    description: "Automatically discover and categorize all your foreign exchange exposures.",
    icon: Eye,
    color: "from-secondary/20 to-secondary/10"
  },
  {
    number: "03",
    title: "Simulate VaR",
    description: "Run Value at Risk simulations to understand potential losses under different scenarios.",
    icon: TrendingUp,
    color: "from-primary/20 to-primary/10"
  },
  {
    number: "04",
    title: "Execute hedge",
    description: "Implement recommended hedging strategies with a single click through our partner network.",
    icon: Shield,
    color: "from-secondary/20 to-secondary/10"
  }
];

const HedgehogHowItWorks = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Get started with FX risk management in four simple steps. No complex setup, no manual data entry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="text-center mb-6">
                <div className="relative">
                  <div className={`w-20 h-20 mx-auto bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center`}>
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="text-center">
                <h3 className="font-semibold text-lg mb-3">{step.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 transform -translate-x-4"></div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-500 mb-6">Ready to get started?</p>
          <a 
            href="https://hedgehog-app.MYDOMAIN.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Try Hedgehog Free
          </a>
        </div>
      </div>
    </section>
  );
};

export default HedgehogHowItWorks;