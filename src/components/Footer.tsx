
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Truck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Truck className="h-6 w-6 text-primary-400" />
              <span className="text-white">Miles Worth</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Connecting drivers with empty trucks to companies needing shipping - 
              save 50% on costs and earn 50% more on empty returns.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">For Users</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/register?type=driver" className="text-gray-400 hover:text-white transition-colors">Register as Driver</Link>
              </li>
              <li>
                <Link to="/register?type=company" className="text-gray-400 hover:text-white transition-colors">Register as Company</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors">Login</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQs</Link>
              </li>
              <li>
                <Link to="/support" className="text-gray-400 hover:text-white transition-colors">Support</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={20} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Logistics Way, Shipping City, SC 10101</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={20} className="text-gray-400 flex-shrink-0" />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-white transition-colors">+1 (123) 456-7890</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={20} className="text-gray-400 flex-shrink-0" />
                <a href="mailto:info@milesworth.com" className="text-gray-400 hover:text-white transition-colors">info@milesworth.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Miles Worth. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
