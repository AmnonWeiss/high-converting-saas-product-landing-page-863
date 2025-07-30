import { Link, Eye, TrendingUp, Shield, Activity } from "lucide-react";
import step1Image from "../../assets/step1-connect.webp";
import step2Image from "../../assets/step2-exposures.webp";
import step3Image from "../../assets/step3-simulate.webp";
import step4Image from "../../assets/step4-hedge.webp";
import step5Image from "../../assets/step5-monitor.webp";

const steps = [
  {
    number: "01",
    title: "Connect QuickBooks/Xero",
    description: "Seamlessly integrate with your existing accounting system in minutes.",
    icon: Link,
    color: "from-primary/20 to-primary/10",
    image: step1Image
  },
  {
    number: "02", 
    title: "See exposures instantly",
    description: "Automatically discover and categorize all your foreign exchange exposures.",
    icon: Eye,
    color: "from-secondary/20 to-secondary/10",
    image: step2Image
  },
  {
    number: "03",
    title: "Simulate VaR",
    description: "Run Value at Risk simulations to understand potential losses under different scenarios.",
    icon: TrendingUp,
    color: "from-primary/20 to-primary/10",
    image: step3Image
  },
  {
    number: "04",
    title: "Execute hedge",
    description: "Implement recommended hedging strategies with a single click through our partner network.",
    icon: Shield,
    color: "from-secondary/20 to-secondary/10",
    image: step4Image
  },
  {
    number: "05",
    title: "Monitor & sleep better",
    description: "Continuously track your risk exposure and enjoy peace of mind with automated monitoring.",
    icon: Activity,
    color: "from-primary/20 to-primary/10",
    image: step5Image
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

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group cursor-pointer">
              {/* Interactive Image */}
              <div className="mb-6 overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Step Number Badge */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                {step.number}
              </div>
              
              {/* Content */}
              <div className="text-center">
                <div className={`w-12 h-12 mx-auto mb-4 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors duration-300">{step.title}</h3>
                <p className="text-neutral-600 text-sm leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-24 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-secondary/30 transform -translate-x-4"></div>
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