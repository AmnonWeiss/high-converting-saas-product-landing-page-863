import HedgehogHeader from "../components/hedgehog/HedgehogHeader";
import HedgehogFooter from "../components/hedgehog/HedgehogFooter";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <HedgehogHeader />
      <main className="pt-20 section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-neutral-600 mb-8">
              Last updated: December 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
              <p className="text-neutral-600 mb-4">
                By accessing and using Hedgehog's services, you accept and agree to be bound by the 
                terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Use License</h2>
              <p className="text-neutral-600 mb-4">
                Permission is granted to temporarily download one copy of Hedgehog's materials for 
                personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
              <p className="text-neutral-600 mb-4">
                We strive to maintain 99.9% uptime but cannot guarantee uninterrupted access to our 
                services due to maintenance, updates, or unforeseen circumstances.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Financial Disclaimer</h2>
              <p className="text-neutral-600 mb-4">
                Hedgehog provides risk management tools and recommendations, but users are responsible 
                for all trading and hedging decisions. Past performance does not guarantee future results.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
              <p className="text-neutral-600 mb-4">
                In no event shall Hedgehog or its suppliers be liable for any damages arising out of 
                the use or inability to use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <p className="text-neutral-600">
                If you have any questions about these Terms of Service, please contact us at 
                legal@hedgehog.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <HedgehogFooter />
    </div>
  );
};

export default Terms;