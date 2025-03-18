
import { useEffect } from 'react';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import TopProducts from '../components/TopProducts';
import AllProducts from '../components/AllProducts';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <TopProducts />
        <AllProducts />
        
        <section className="py-20 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-nilco-navy mb-6">Trusted By Thousands Since 2013</h2>
                <p className="text-gray-700 mb-8">With 5+ stores across Tamil Nadu, we take pride in offering a diverse collection of bags, from travel and luggage to school, office, and fashion accessories.</p>
                <a 
                  href="/about" 
                  className="inline-block bg-nilco-navy text-white font-medium py-3 px-8 rounded-full shadow-md hover:bg-nilco-navy/90 transition-all duration-300"
                >
                  Learn More About Us
                </a>
              </motion.div>
            </div>
          </div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-nilco-red/10 rounded-full"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-nilco-navy/5 rounded-full"></div>
        </section>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
