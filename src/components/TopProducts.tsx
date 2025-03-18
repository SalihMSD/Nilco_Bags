
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';

const topSellingProducts = [
  {
    id: 1,
    name: "Atlas School Bag",
    image: "https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "School Bags"
  },
  {
    id: 2,
    name: "Voyager College Backpack",
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "College Bags"
  },
  {
    id: 3,
    name: "Horizon Duffle Bag",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Duffle Bags"
  },
  {
    id: 4,
    name: "Expedition Trolley Set",
    image: "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "Trolley Set"
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
