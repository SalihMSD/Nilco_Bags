
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const handleScrollDown = () => {
    const topSellingSection = document.getElementById('top-selling');
    if (topSellingSection) {
      topSellingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen overflow-hidden bg-nilco-gray">
      <div className="absolute inset-0 bg-gradient-to-r from-nilco-navy/10 to-nilco-navy/5 z-10"></div>
      
      <div className="container mx-auto h-full flex flex-col items-center justify-center px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-3xl"
        >
          <img 
            src="/lovable-uploads/1a86d351-084d-44e6-88ed-74146d7de64d.png" 
            alt="Nilco Bags" 
            className="h-24 md:h-32 mx-auto mb-8 animate-float"
          />
          
          <motion.h1 
            className="text-nilco-navy text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Quality Bags For Every Journey
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 text-balance"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            From school to travel, find the perfect bag to carry your essentials with style and durability.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button 
              className="bg-nilco-navy text-white font-medium py-3 px-8 rounded-full shadow-lg hover:bg-nilco-navy/90 transition-all duration-300 hover:shadow-xl"
              onClick={handleScrollDown}
            >
              Explore Collection
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.5, 
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.2
        }}
        onClick={handleScrollDown}
      >
        <ChevronDown size={28} className="text-nilco-navy" />
      </motion.div>
    </section>
  );
};

export default Hero;
