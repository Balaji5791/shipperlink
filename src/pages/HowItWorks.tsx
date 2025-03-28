
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorks";

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-gray-50 to-white py-16">
          <div className="container">
            <h1 className="text-4xl font-bold text-center mb-12">How Miles Worth Works</h1>
            <HowItWorksSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
