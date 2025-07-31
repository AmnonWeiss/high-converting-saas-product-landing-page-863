import { motion } from "framer-motion";

const HedgehogHero = () => {
  const APP_URL = "https://hedgehog-app.MYDOMAIN.com/dashboard";

  return (
    <section className="min-h-screen bg-white flex items-center">
      <div className="max-w-7xl mx-auto container-padding grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h1 className="text-5xl lg:text-6xl font-semibold leading-tight">
            Tame Currency Volatility —{" "}
            <span className="text-primary">Sleep Better at Night</span>
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Hedgehog analyses your invoices, reveals FX risk, and lets you hedge in one click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Launch App
            </a>
            <button className="btn-secondary">
              Book Demo
            </button>
          </div>
        </motion.div>

        {/* Right Content - Animated Dashboard */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Live Dashboard</h3>
              <div className="grid grid-cols-2 gap-4">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0 }}
                  className="bg-neutral-100 rounded-lg p-4"
                >
                  <p className="text-sm text-neutral-600">Total Exposure</p>
                  <p className="text-2xl font-semibold text-primary">€2.4M</p>
                </motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="bg-neutral-100 rounded-lg p-4"
                >
                  <p className="text-sm text-neutral-600">VaR (95%)</p>
                  <p className="text-2xl font-semibold text-secondary">€120K</p>
                </motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="bg-neutral-100 rounded-lg p-4"
                >
                  <p className="text-sm text-neutral-600">Hedged</p>
                  <p className="text-2xl font-semibold text-primary">78%</p>
                </motion.div>
                <motion.div 
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  className="bg-neutral-100 rounded-lg p-4"
                >
                  <p className="text-sm text-neutral-600">Saved</p>
                  <p className="text-2xl font-semibold text-secondary">€45K</p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HedgehogHero;