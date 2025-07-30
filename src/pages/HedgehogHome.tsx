import HedgehogHeader from "../components/hedgehog/HedgehogHeader";
import HedgehogHero from "../components/hedgehog/HedgehogHero";
import HedgehogBenefits from "../components/hedgehog/HedgehogBenefits";
import HedgehogHowItWorks from "../components/hedgehog/HedgehogHowItWorks";
import HedgehogPricing from "../components/hedgehog/HedgehogPricing";
import HedgehogTestimonials from "../components/hedgehog/HedgehogTestimonials";
import HedgehogFooter from "../components/hedgehog/HedgehogFooter";

const HedgehogHome = () => {
  return (
    <div className="min-h-screen">
      <HedgehogHeader />
      <main>
        <HedgehogHero />
        <HedgehogBenefits />
        <HedgehogHowItWorks />
        <HedgehogPricing />
        <HedgehogTestimonials />
      </main>
      <HedgehogFooter />
    </div>
  );
};

export default HedgehogHome;