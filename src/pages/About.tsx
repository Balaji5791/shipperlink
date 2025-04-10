
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Miles Worth</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Connecting empty trucks with shipping needs since 2023,
                revolutionizing the logistics industry one trip at a time.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Team meeting at Miles Worth"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-6">
                  At Miles Worth, we're on a mission to eliminate empty truck returns by connecting drivers with shipping companies. 
                  Our platform helps reduce carbon emissions, saves companies up to 50% on transportation costs, and allows drivers to earn 50% more on return trips.
                </p>
                <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-600">
                  We envision a future where no truck returns empty, creating a more efficient, sustainable, and profitable logistics ecosystem for everyone involved.
                </p>
              </div>
            </div>

            {/* Our Story */}
            <div className="mb-20">
              <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">
                  Miles Worth was founded in 2023 by a team of logistics experts who recognized a fundamental inefficiency in the transportation industry: the number of trucks returning empty after deliveries.
                </p>
                <p className="text-gray-600 mb-4">
                  Our founders saw an opportunity to create a win-win solution that would benefit both drivers and companies, while also reducing the environmental impact of empty miles.
                </p>
                <p className="text-gray-600">
                  Starting with a small network of drivers and companies in one region, we've now expanded nationwide, connecting thousands of drivers with shipping opportunities that would otherwise go unfilled.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Join Us in Revolutionizing Logistics</h2>
              <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
                Whether you're a driver looking to maximize your earnings or a company seeking to reduce shipping costs,
                Miles Worth is here to help you succeed in the modern logistics landscape.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/register?type=driver">
                  <Button className="bg-primary hover:bg-primary-600 text-white px-8 py-6 text-lg">
                    Sign Up as Driver
                  </Button>
                </Link>
                <Link to="/register?type=company">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg">
                    Sign Up as Company
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
