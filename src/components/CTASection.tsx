
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Truck, Building2 } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-primary-700 text-white">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Logistics?
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Join ShipperLink today and start saving on shipping costs or earning more on your empty return trips.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-20 transition-all">
              <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Drivers</h3>
              <p className="mb-6 opacity-90">
                Earn 50% more by filling your empty truck on return trips. Register now to access thousands of available shipments.
              </p>
              <Link to="/register?type=driver">
                <Button className="bg-white text-primary hover:bg-gray-100 hover:text-primary-600 w-full py-6">
                  Sign Up as Driver
                </Button>
              </Link>
            </div>

            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 hover:bg-opacity-20 transition-all">
              <div className="bg-white text-primary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Companies</h3>
              <p className="mb-6 opacity-90">
                Save up to 50% on transportation costs by utilizing trucks that are already making the journey. No more paying for empty returns.
              </p>
              <Link to="/register?type=company">
                <Button className="bg-white text-primary hover:bg-gray-100 hover:text-primary-600 w-full py-6">
                  Sign Up as Company
                </Button>
              </Link>
            </div>
          </div>

          <p className="mt-10 text-white opacity-80">
            Already have an account?{" "}
            <Link to="/login" className="text-white underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
