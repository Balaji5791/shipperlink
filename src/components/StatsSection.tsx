
import { Truck, Building2, Package, DollarSign } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-primary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            ShipperLink is revolutionizing the logistics industry by connecting empty trucks with available shipments.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-opacity-20 transition-all">
            <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Truck className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold mb-2">5,000+</div>
            <div className="text-lg opacity-90">Active Drivers</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-opacity-20 transition-all">
            <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Building2 className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold mb-2">2,500+</div>
            <div className="text-lg opacity-90">Registered Companies</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-opacity-20 transition-all">
            <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <Package className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold mb-2">25,000+</div>
            <div className="text-lg opacity-90">Shipments Completed</div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-opacity-20 transition-all">
            <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
              <DollarSign className="h-8 w-8" />
            </div>
            <div className="text-4xl font-bold mb-2">$2.5M+</div>
            <div className="text-lg opacity-90">Saved on Shipping Costs</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
