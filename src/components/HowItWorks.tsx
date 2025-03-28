
import { ArrowRight, Truck, Building2, DollarSign } from "lucide-react";

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How ShipperLink Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform makes it easy for drivers with empty trucks to find shipments and for companies to save on transportation costs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* For Drivers */}
          <div className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden border-t-4 border-primary">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary-50 rounded-bl-full -mt-20 -mr-20 z-0"></div>
            <div className="relative z-10">
              <div className="bg-primary text-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Truck className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">For Drivers</h3>
              <ol className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="bg-primary-100 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span>Register and create your driver profile with vehicle details</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary-100 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span>Browse available shipments matching your route and vehicle</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary-100 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span>Accept shipments and earn extra income on trips you'd make anyway</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-primary-100 text-primary font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <span>Deliver goods and get paid securely through our platform</span>
                </li>
              </ol>
              <p className="text-primary font-semibold">Earn 50% extra on empty return trips</p>
            </div>
          </div>

          {/* For Companies */}
          <div className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden border-t-4 border-secondary">
            <div className="absolute top-0 right-0 w-40 h-40 bg-secondary-50 rounded-bl-full -mt-20 -mr-20 z-0"></div>
            <div className="relative z-10">
              <div className="bg-secondary text-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Building2 className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">For Companies</h3>
              <ol className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="bg-secondary-100 text-secondary font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                  <span>Register and create your company profile</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-secondary-100 text-secondary font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                  <span>Post your shipment details including pickup, delivery, and package info</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-secondary-100 text-secondary font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                  <span>Get matched with drivers who are already making the trip</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-secondary-100 text-secondary font-bold rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                  <span>Track your shipment in real-time and pay only when delivered</span>
                </li>
              </ol>
              <p className="text-secondary font-semibold">Save up to 50% on transportation costs</p>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-lg shadow-lg p-8 relative overflow-hidden border-t-4 border-accent">
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent-50 rounded-bl-full -mt-20 -mr-20 z-0"></div>
            <div className="relative z-10">
              <div className="bg-accent text-white rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <DollarSign className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-bold mb-4">Benefits for Everyone</h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-accent">✓</span>
                  <span>Reduce environmental impact by eliminating empty miles</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">✓</span>
                  <span>Increase efficiency in the logistics industry</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">✓</span>
                  <span>Transparent pricing with no hidden fees</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">✓</span>
                  <span>Secure, vetted community of drivers and companies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">✓</span>
                  <span>Real-time tracking and communication</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent">✓</span>
                  <span>Rating system to ensure quality service</span>
                </li>
              </ul>
              <p className="text-accent font-semibold">A win-win for drivers, companies, and the planet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
