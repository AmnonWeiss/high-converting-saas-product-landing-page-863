import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Hedgehog transformed our FX risk management. We went from spending hours on manual analysis to having real-time insights in minutes.",
    author: "Sarah Chen",
    role: "CFO at Acme Imports",
    company: "Acme Imports",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1e5?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "The automated exposure discovery alone saved us from a $50K loss we didn't even know we had. The ROI was immediate.",
    author: "Mark Thompson", 
    role: "Controller at SolarParts EU",
    company: "SolarParts EU",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    quote: "Finally, FX hedging that doesn't require a PhD in finance. Hedgehog makes complex risk management surprisingly intuitive.",
    author: "Elena Rodriguez",
    role: "CEO at SpiceWorld GmbH", 
    company: "SpiceWorld GmbH",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
];

const HedgehogTestimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-primary">Customers</span> Say
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Hedgehog to protect them from FX volatility.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8">
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/30" />
              </div>
              
              <p className="text-neutral-600 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-neutral-900">{testimonial.author}</p>
                  <p className="text-sm text-neutral-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-neutral-600 mb-6">Ready to join them?</p>
          <a 
            href="https://hedgehog-app.MYDOMAIN.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default HedgehogTestimonials;