import { ArrowRight } from "lucide-react";
import step1Image from "../../../assets/step1-connect.webp";
import step2Image from "../../../assets/step2-exposures.webp";
import step3Image from "../../../assets/step3-simulate.webp";
import step4Image from "../../../assets/step4-hedge.webp";

const steps = [
  {
    number: "01",
    title: "Connect Your System",
    description: "Seamlessly integrate with QuickBooks, Xero, or other accounting systems in under 5 minutes.",
    image: step1Image,
    highlight: "2-minute setup"
  },
  {
    number: "02", 
    title: "Auto-Discover Exposures",
    description: "Our AI automatically identifies and categorizes all your foreign exchange exposures across accounts.",
    image: step2Image,
    highlight: "100% automated"
  },
  {
    number: "03",
    title: "Simulate Risk Scenarios",
    description: "Run advanced Value at Risk simulations to understand potential losses under market volatility.",
    image: step3Image,
    highlight: "Real-time analysis"
  },
  {
    number: "04",
    title: "Execute Smart Hedges",
    description: "Implement AI-recommended hedging strategies instantly through our vetted partner network.",
    image: step4Image,
    highlight: "One-click execution"
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

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-xl blur opacity-25 group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative bg-white rounded-xl p-2">
                      <img 
                        src={step.image} 
                        alt={step.title}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                        {step.highlight}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-neutral-600 text-lg leading-relaxed mb-6">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="flex items-center text-primary font-medium">
                      <span className="mr-2">Next step</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  )}
                </div>
              </div>

              {/* Flow connector for mobile */}
              {index < steps.length - 1 && (
                <div className="flex justify-center my-8 lg:hidden">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-primary rotate-90" />
                  </div>
                </div>
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