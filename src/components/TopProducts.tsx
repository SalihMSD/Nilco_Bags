
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const topSellingProducts = [
  {
    id: 1,
    name: "Premium College Bag",
    image: "https://drive.google.com/uc?export=view&id=1fE72VoGbUD5Z6MatLN2AsIfN97Q1Um0x",
    category: "College Bags"
  },
  {
    id: 2,
    name: "24\" Premium Trolley",
    image: "https://drive.google.com/uc?export=view&id=18_uI7k1J_ez14tPZ2NLmmw4XOk47IRLR",
    category: "Trolley"
  },
  {
    id: 3,
    name: "Premium Ladies Purse",
    image: "https://drive.google.com/uc?export=view&id=1jDEoF5UbxTX6Y1XvmW5yrAcKOO-kF0cH",
    category: "Ladies Purses"
  },
  {
    id: 4,
    name: "Premium Travel Bag",
    image: "https://drive.google.com/uc?export=view&id=14CTvejogBxKY6G7siwnNfySHZOhqzOz4",
    category: "Travel Bags"
  }
];

const TopProducts = () => {
  return (
    <section id="top-selling" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-nilco-navy">TOP SELLING PRODUCTS</h2>
          <div className="h-1 w-20 bg-nilco-red mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {topSellingProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopProducts;
