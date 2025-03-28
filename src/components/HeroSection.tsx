
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Shield } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-primary">Save 50%</span> on Shipping,{" "}
              <span className="text-primary">Earn 50%</span> More
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Miles Worth connects drivers with empty trucks to companies needing shipping. 
              Reduce empty miles, increase profits, and lower transportation costs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/register?type=driver">
                <Button className="bg-primary hover:bg-primary-600 text-white px-8 py-6 text-lg w-full sm:w-auto">
                  I'm a Driver
                </Button>
              </Link>
              <Link to="/register?type=company">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg w-full sm:w-auto">
                  I'm a Company
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-primary-50 p-3 rounded-full mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-1">50% Extra Earnings</h3>
                <p className="text-gray-500 text-sm">For drivers on return trips</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-primary-50 p-3 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Quick Matching</h3>
                <p className="text-gray-500 text-sm">Find loads in minutes</p>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="bg-primary-50 p-3 rounded-full mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-1">Secure Platform</h3>
                <p className="text-gray-500 text-sm">Vetted users & secure payments</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1586366775916-7018ef19ff34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Truck driver using Miles Worth app" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary rounded-full opacity-30 z-0"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary rounded-full opacity-20 z-0"></div>
          </div>
        </div>
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-b from-primary-100 to-transparent opacity-50 rounded-bl-full"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-t from-secondary-100 to-transparent opacity-50 rounded-tr-full"></div>
    </section>
  );
};

export default HeroSection;
