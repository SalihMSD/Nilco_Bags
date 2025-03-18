
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import { motion } from 'framer-motion';
import { ShoppingBag, Award, Users, Store } from 'lucide-react';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    {
      id: 1,
      value: '11+',
      label: 'Years of Experience',
      icon: ShoppingBag,
    },
    {
      id: 2,
      value: '5+',
      label: 'Stores in Tamil Nadu',
      icon: Store,
    },
    {
      id: 3,
      value: '1000+',
      label: 'Happy Customers',
      icon: Users,
    },
    {
      id: 4,
      value: '100+',
      label: 'Quality Products',
      icon: Award,
    },
  ];

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
                About Nilco Bags
              </motion.h1>
              <motion.div 
                className="h-1 w-20 bg-nilco-red mx-auto mb-8"
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 80 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              ></motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
                    alt="Nilco Bags Store" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-nilco-navy mb-6">Our Story</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Established in 2013, Nilco Bags has been a trusted name in the world of bags and luggage for over 11 years. With a commitment to quality, durability, and style, we have grown to become one of the leading retailers and dealers of travel essentials.
                  </p>
                  <p>
                    With 5+ stores across Tamil Nadu, we take pride in offering a diverse collection of bags, from travel and luggage to school, office, and fashion accessories. Our mission is to provide our customers with the best quality products at affordable prices, ensuring they find the perfect bag for every need.
                  </p>
                  <p>
                    At Nilco Bags, customer satisfaction is our priority. We constantly strive to bring the latest designs and innovations, keeping up with modern trends while maintaining the durability and reliability our customers trust.
                  </p>
                  <p>
                    Join us in your journey and experience the perfect blend of quality, affordability, and variety with Nilco Bags!
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-16 md:py-24 bg-nilco-gray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <motion.h2 
                className="text-2xl md:text-3xl font-bold text-nilco-navy mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Why Choose Us
              </motion.h2>
              <motion.div 
                className="h-1 w-20 bg-nilco-red mx-auto mb-8"
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              ></motion.div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-nilco-red/10 text-nilco-red mb-6">
                    <stat.icon size={24} />
                  </div>
                  <h3 className="text-3xl font-bold text-nilco-navy mb-2">{stat.value}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
