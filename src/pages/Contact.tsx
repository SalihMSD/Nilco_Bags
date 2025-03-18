
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Phone, Instagram, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        
        <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-nilco-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-3xl md:text-4xl font-bold text-nilco-navy mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Contact Us
              </motion.h1>
              <motion.div 
                className="h-1 w-20 bg-nilco-red mx-auto mb-8"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 80 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              ></motion.div>
              <motion.p 
                className="text-gray-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Get in touch with us. We'd love to hear from you!
              </motion.p>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-3xl mx-auto space-y-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-nilco-navy">Get in Touch</h2>
              <p className="text-gray-700">
                Have questions about our products or services? We're here to help! Reach out to us using any of the contact methods below.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="bg-nilco-navy/10 p-3 rounded-full">
                    <Phone size={20} className="text-nilco-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-nilco-navy">Phone</h3>
                    <p className="text-gray-700">+91 908722333</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-nilco-navy/10 p-3 rounded-full">
                    <Instagram size={20} className="text-nilco-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-nilco-navy">Instagram</h3>
                    <a 
                      href="https://www.instagram.com/nilcoonlines?igsh=MWwzZnljNHlnZnM5aA==" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-nilco-red transition-colors"
                    >
                      Nilco Online
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-nilco-navy/10 p-3 rounded-full">
                    <MapPin size={20} className="text-nilco-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-nilco-navy">Location</h3>
                    <a 
                      href="https://maps.app.goo.gl/hsoAjBt3SancHA3A6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-nilco-red transition-colors"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-nilco-navy/10 p-3 rounded-full">
                    <MessageSquare size={20} className="text-nilco-navy" />
                  </div>
                  <div>
                    <h3 className="font-medium text-nilco-navy">WhatsApp</h3>
                    <a 
                      href="https://wa.me/9025266485" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-nilco-red transition-colors"
                    >
                      Chat with us on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
