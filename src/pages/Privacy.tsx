import HedgehogHeader from "../components/hedgehog/HedgehogHeader";
import HedgehogFooter from "../components/hedgehog/HedgehogFooter";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <HedgehogHeader />
      <main className="pt-20 section-padding bg-white">
        <div className="max-w-4xl mx-auto container-padding">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-neutral-600 mb-8">
              Last updated: December 2024
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
              <p className="text-neutral-600 mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                use our services, or contact us for support.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
              <p className="text-neutral-600 mb-4">
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, and communicate with you.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p className="text-neutral-600 mb-4">
                We implement appropriate technical and organizational measures to protect your personal 
                information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">GDPR Compliance</h2>
              <p className="text-neutral-600 mb-4">
                If you are a resident of the European Economic Area (EEA), you have certain data 
                protection rights under the General Data Protection Regulation (GDPR).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p className="text-neutral-600">
                If you have any questions about this Privacy Policy, please contact us at 
                privacy@hedgehog.com.
              </p>
            </section>
          </div>
        </div>
      </main>
      <HedgehogFooter />
    </div>
  );
};

export default Privacy;