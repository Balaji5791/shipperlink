
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michael Thompson",
    role: "Truck Driver",
    company: "Independent",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content:
      "ShipperLink has completely changed how I operate my business. Instead of returning empty, I now earn an extra 45-50% on trips that would otherwise be a loss. The platform is easy to use and the payments are always on time.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Logistics Manager",
    company: "Global Goods Inc.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content:
      "As a company that ships products nationwide, we've reduced our transportation costs by nearly 40% using ShipperLink. The quality of drivers is excellent, and the tracking system gives us peace of mind knowing exactly where our shipments are.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Chen",
    role: "Fleet Owner",
    company: "Chen Logistics",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    content:
      "My fleet of trucks has increased profitability by 35% since we started using ShipperLink to fill our empty returns. The matching algorithm is impressive - it consistently finds loads that align perfectly with our routes.",
    rating: 4,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied drivers and companies who are already benefiting from ShipperLink.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
