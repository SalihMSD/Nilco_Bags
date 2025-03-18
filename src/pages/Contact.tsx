
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { Phone, Instagram, MapPin, Send } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    alert('Message sent! We will get back to you soon.');
  };

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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-nilco-navy">Get in Touch</h2>
                <p className="text-gray-700">
                  Have questions about our products or services? We're here to help! Reach out to us using any of the contact methods below.
                </p>
                
                <div className="space-y-6">
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
                        href="https://instagram.com/nilcoonline" 
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
                        href="https://maps.google.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-nilco-red transition-colors"
                      >
                        View on Google Maps
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-white shadow-lg rounded-xl p-6 md:p-8">
                  <h2 className="text-2xl font-bold text-nilco-navy mb-6">Send a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nilco-navy focus:border-nilco-navy transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nilco-navy focus:border-nilco-navy transition-colors"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nilco-navy focus:border-nilco-navy transition-colors"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-nilco-navy focus:border-nilco-navy transition-colors resize-none"
                        required
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="flex items-center justify-center gap-2 w-full bg-nilco-navy text-white font-medium py-3 px-6 rounded-md hover:bg-nilco-navy/90 transition-colors"
                    >
                      <Send size={18} />
                      Send Message
                    </button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
