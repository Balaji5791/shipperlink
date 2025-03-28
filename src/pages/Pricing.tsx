
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PricingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the plan that works best for your logistics needs. Save costs as a company or maximize earnings as a driver.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Plan */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Basic</h3>
                  <p className="text-gray-600 mb-4">Perfect for small businesses and independent drivers</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$0</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Access to order marketplace</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Basic route planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>10% commission on transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Basic support</span>
                    </li>
                  </ul>
                  <Button className="w-full">Sign Up Free</Button>
                </div>
              </div>

              {/* Pro Plan */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-primary relative transform lg:scale-105 z-10">
                <div className="bg-primary text-white py-2 px-4 text-center font-medium">
                  Most Popular
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Professional</h3>
                  <p className="text-gray-600 mb-4">Ideal for growing businesses and active drivers</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$49</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>All Basic features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Advanced matching algorithm</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>7% commission on transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Analytics dashboard</span>
                    </li>
                  </ul>
                  <Button className="w-full bg-primary hover:bg-primary-600">Get Started</Button>
                </div>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <p className="text-gray-600 mb-4">For large logistics companies and fleet operators</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">$199</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>All Professional features</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>5% commission on transactions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Dedicated account manager</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>API access for integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary mt-0.5" />
                      <span>Custom reporting</span>
                    </li>
                  </ul>
                  <Button className="w-full">Contact Sales</Button>
                </div>
              </div>
            </div>

            <div className="mt-16 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Need a custom solution?</h3>
              <p className="text-gray-600 mb-6">
                We offer tailored plans for large enterprises with specific requirements.
                Our team will work with you to create the perfect solution.
              </p>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Contact Our Sales Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
