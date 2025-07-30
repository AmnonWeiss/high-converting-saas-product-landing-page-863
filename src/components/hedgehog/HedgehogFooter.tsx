import { Linkedin, Twitter } from "lucide-react";

const HedgehogFooter = () => {
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-padding py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🦔</span>
              <span className="text-xl font-bold">Hedgehog</span>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              FX Risk Copilot for growing businesses. Sleep better at night with automated risk management.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-neutral-400 hover:text-white transition-colors text-sm">Features</a></li>
              <li><a href="#pricing" className="text-neutral-400 hover:text-white transition-colors text-sm">Pricing</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Security</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">About</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Careers</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-neutral-400 hover:text-white transition-colors text-sm">Privacy Policy</a></li>
              <li><a href="/terms" className="text-neutral-400 hover:text-white transition-colors text-sm">Terms of Service</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Cookies</a></li>
              <li><a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © 2024 Hedgehog FX Risk Copilot. All rights reserved.
          </p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default HedgehogFooter;