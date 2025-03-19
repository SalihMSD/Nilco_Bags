
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

// Dummy product data organized by category
const productsByCategory = {
  'school-bags': [
    { id: 1, name: "Classic School Backpack", image: "https://images.unsplash.com/photo-1588072433116-9a1e2b4e4ad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Elementary School Bag", image: "https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Kids Cartoon Backpack", image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Teen School Bag", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  ],
  'college-bags': [
    { id: 5, name: "Campus Backpack", image: "https://images.unsplash.com/photo-1580087433295-ab2600c1030e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 6, name: "Student Laptop Bag", image: "https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 7, name: "Book Carrier", image: "https://images.unsplash.com/photo-1608889175157-718b6205a50d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  ],
  'travel-bags': [
    { id: 8, name: "Weekend Travel Bag", image: "https://images.unsplash.com/photo-1581553673739-c4906b5d0de8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 9, name: "Duffel Travel Bag", image: "https://images.unsplash.com/photo-1539635257242-1e414e9c0e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 10, name: "Executive Travel Case", image: "https://images.unsplash.com/photo-1623393945964-27dbb23e1c9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  ],
  'trekking-bags': [
    { id: 11, name: "Mountain Backpack", image: "https://images.unsplash.com/photo-1520121401995-928cd50d4e27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 12, name: "Hiking Rucksack", image: "https://images.unsplash.com/photo-1622213148749-42a9bacb3bac?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  ],
  'backpacks': [
    { id: 13, name: "Urban Backpack", image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 14, name: "Daily Commuter", image: "https://images.unsplash.com/photo-1577733975197-3b950ca5cabe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  ],
  'laptop-bags': [
    { id: 15, name: "Professional Laptop Bag", image: "https://images.unsplash.com/photo-1531578683379-9723f821994c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 16, name: "Tech Sleeve", image: "https://images.unsplash.com/photo-1559896276-8a5b38b41cb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  ],
  'duffle-bags': [
    { id: 17, name: "Sports Duffle", image: "https://images.unsplash.com/photo-1539635257242-1e414e9c0e1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 18, name: "Gym Bag", image: "https://images.unsplash.com/photo-1578389591100-e0b9d98dfeb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  ],
  'trolleys': [
    { id: 19, name: "Cabin Trolley", image: "https://images.unsplash.com/photo-1604702650603-68c9c77f373d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 20, name: "Check-in Luggage", image: "https://images.unsplash.com/photo-1581553680321-4fffae59fcfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  ],
  'lunch-bags': [
    { id: 21, name: "Adult Lunch Bag", image: "https://images.unsplash.com/photo-1595424389456-7b32121e37ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 22, name: "Kids Lunch Box", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  ],
  'purses': [
    { id: 23, name: "Evening Purse", image: "https://images.unsplash.com/photo-1614179689702-66d0fef4b9b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 24, name: "Fashion Clutch", image: "https://images.unsplash.com/photo-1559139670-e913185b0e38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  ],
  'belts': [
    { id: 25, name: "Formal Leather Belt", image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 26, name: "Casual Belt", image: "https://images.unsplash.com/photo-1553704571-c32d38ec9d21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  ],
};

// Map for category display names
const categoryNames = {
  'school-bags': 'School Bags',
  'college-bags': 'College Bags',
  'travel-bags': 'Travel Bags',
  'trekking-bags': 'Trekking Bags',
  'backpacks': 'Backpacks',
  'laptop-bags': 'Laptop Bags',
  'duffle-bags': 'Duffle Bags',
  'trolleys': 'Trolleys',
  'lunch-bags': 'Lunch Bags',
  'purses': 'Purses',
  'belts': 'Belts',
};

const CategoryPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  const products = categoryId ? productsByCategory[categoryId as keyof typeof productsByCategory] || [] : [];
  const categoryName = categoryId ? categoryNames[categoryId as keyof typeof categoryNames] || 'Products' : 'Products';

  return (
    <PageTransition>
      <div className="min-h-screen">
        <Navbar />
        
        <div className="pt-28 pb-16 bg-nilco-gray">
          <div className="container mx-auto px-4">
            <motion.h1 
              className="text-2xl md:text-4xl font-bold text-nilco-navy text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {categoryName}
              <div className="h-1 w-20 bg-nilco-red mx-auto mt-4"></div>
            </motion.h1>
            
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    name={product.name} 
                    image={product.image}
                    delay={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-lg text-gray-600">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default CategoryPage;
