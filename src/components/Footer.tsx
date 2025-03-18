
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, MessageSquare } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-nilco-navy text-white mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-start">
            <img 
              src="/lovable-uploads/1a86d351-084d-44e6-88ed-74146d7de64d.png" 
              alt="Nilco Bags" 
              className="h-12 mb-4"
            />
            <p className="text-sm text-gray-300 max-w-xs">
              Established in 2013, Nilco Bags has been a trusted name in the world of bags and luggage for over 11 years.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-nilco-red transition-colors duration-300">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-nilco-red transition-colors duration-300">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-nilco-red transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0 text-nilco-red" />
                <span className="text-sm">+91 908722333</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram size={18} className="flex-shrink-0 text-nilco-red" />
                <a 
                  href="https://www.instagram.com/nilcoonlines?igsh=MWwzZnljNHlnZnM5aA==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-nilco-red transition-colors duration-300"
                >
                  Nilco Online
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="flex-shrink-0 text-nilco-red" />
                <a 
                  href="https://maps.app.goo.gl/hsoAjBt3SancHA3A6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-nilco-red transition-colors duration-300"
                >
                  View Store Locations
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare size={18} className="flex-shrink-0 text-nilco-red" />
                <a 
                  href="https://wa.me/9025266485" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm hover:text-nilco-red transition-colors duration-300"
                >
                  Chat with us on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© {currentYear} Nilco Bags. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
