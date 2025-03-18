
import { motion } from 'framer-motion';
import CategoryCard from './CategoryCard';

const categories = [
  {
    id: 1,
    name: "School Bags",
    count: 12,
    image: "https://images.unsplash.com/photo-1588072433116-9a1e2b4e4ad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "College Bags",
    count: 8,
    image: "https://images.unsplash.com/photo-1580087433295-ab2600c1030e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Travel Bags",
    count: 5,
    image: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Trekking Bags",
    count: 4,
    image: "https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Backpacks",
    count: 4,
    image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Laptop Bags",
    count: 4,
    image: "https://images.unsplash.com/photo-1531578683379-9723f821994c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Duffle Bags",
    count: 3,
    image: "https://images.unsplash.com/photo-1539635257242-1e414e9c0e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Trolleys",
    count: 14,
    image: "https://images.unsplash.com/photo-1604702650603-68c9c77f373d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Lunch Bags",
    count: 8,
    image: "https://images.unsplash.com/photo-1595424389456-7b32121e37ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Purses",
    count: 20,
    image: "https://images.unsplash.com/photo-1614179689702-66d0fef4b9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 11,
    name: "Belts",
    count: 6,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const AllProducts = () => {
  return (
    <section className="py-16 md:py-24 bg-nilco-gray">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-nilco-navy">ALL PRODUCTS</h2>
          <div className="h-1 w-20 bg-nilco-red mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              count={category.count}
              image={category.image}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
