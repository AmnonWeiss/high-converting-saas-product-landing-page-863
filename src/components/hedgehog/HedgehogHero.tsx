import { ArrowRight, Calendar } from "lucide-react";

const HedgehogHero = () => {
  const APP_URL = "https://hedgehog-app.MYDOMAIN.com/dashboard";

  return (
    <section className="pt-24 pb-16 section-padding bg-gradient-to-br from-white to-neutral-50">
      <div className="max-w-6xl mx-auto container-padding text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
          The world is full of <span className="text-primary">Risk</span>,<br />
          Hedgehog helps you <span className="text-secondary">Sleep Better</span> at Night.
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          Hedgehog analyses your Invoices, Reveals your risks, and allows you to Hedge easily and naturally.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a 
            href={APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center gap-2"
          >
            View App
            <ArrowRight className="w-4 h-4" />
          </a>
          <button className="btn-secondary flex items-center justify-center gap-2">
            <Calendar className="w-4 h-4" />
            Book Demo
          </button>
        </div>
        
        {/* Product Animation Placeholder */}
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                🦔
              </div>
              <p className="text-neutral-600 font-medium">Interactive Dashboard Preview</p>
              <p className="text-sm text-neutral-500 mt-2">Real-time FX risk monitoring and hedging recommendations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HedgehogHero;