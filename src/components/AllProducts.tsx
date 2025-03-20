
import { motion } from 'framer-motion';
import CategoryCard from './CategoryCard';

const categories = [
  {
    id: 1,
    name: "School Bags",
    count: 4,
    image: "https://drive.google.com/uc?export=view&id=1fE72VoGbUD5Z6MatLN2AsIfN97Q1Um0x",
    route: "school-bags"
  },
  {
    id: 2,
    name: "College Bags",
    count: 6,
    image: "https://drive.google.com/uc?export=view&id=1zQdCkb2p6OoJxYLgEtal3vHHdqGN6khM",
    route: "college-bags"
  },
  {
    id: 3,
    name: "Travel Bags",
    count: 4,
    image: "https://drive.google.com/uc?export=view&id=1OZiIADdvLohgghJagnZUANK43jXG3ly4",
    route: "travel-bags"
  },
  {
    id: 4,
    name: "Trekking Bags",
    count: 3,
    image: "https://drive.google.com/uc?export=view&id=1srjoHeN7iJcEhr3iCE28pfqt6achdevr",
    route: "trekking-bags"
  },
  {
    id: 5,
    name: "Backpacks",
    count: 2,
    image: "https://drive.google.com/uc?export=view&id=1HgpCaWWfsslXOCDimh2BWBWbsQ1DzAj3",
    route: "backpacks"
  },
  {
    id: 6,
    name: "Laptop Bags",
    count: 3,
    image: "https://drive.google.com/uc?export=view&id=1KAy9Fk5ei6MzeEsD80Qwit5Dpa2CsyRc",
    route: "laptop-bags"
  },
  {
    id: 7,
    name: "Duffle Bags",
    count: 3,
    image: "https://drive.google.com/uc?export=view&id=1_Bpt1KVI_iUJiqiODi8dgh_n_v-q4e4U",
    route: "duffle-bags"
  },
  {
    id: 8,
    name: "Trolleys",
    count: 12,
    image: "https://drive.google.com/uc?export=view&id=1jQiktAMl1pPBkC3_Hh-R9-jiTR8MvnJq",
    route: "trolleys"
  },
  {
    id: 9,
    name: "20\" Trolley",
    count: 4,
    image: "https://drive.google.com/uc?export=view&id=1u4XYHc0xSiwsKQQtOtCQBDJJJmlrKlDh",
    route: "trolley-20"
  },
  {
    id: 10,
    name: "24\" Trolley",
    count: 4,
    image: "https://drive.google.com/uc?export=view&id=1cdSzZyEntXwsr23YfU8PEx5BP8ZCDXgQ",
    route: "trolley-24"
  },
  {
    id: 11,
    name: "28\" Trolley",
    count: 4,
    image: "https://drive.google.com/uc?export=view&id=1eL3RIHKfO1Zyza6qfpjMOrlSF7crUzJl",
    route: "trolley-28"
  },
  {
    id: 12,
    name: "Lunch Bags",
    count: 8,
    image: "https://drive.google.com/uc?export=view&id=1bokpRseMxZgIr1DVVpmkneGOEzts9xaq",
    route: "lunch-bags"
  },
  {
    id: 13,
    name: "Ladies Purses",
    count: 9,
    image: "https://drive.google.com/uc?export=view&id=1Zs1nt1VjIJ8DZXdDyv36HzK3T4QNcj_c",
    route: "ladies-purses"
  },
  {
    id: 14,
    name: "Gents Purses",
    count: 10,
    image: "https://drive.google.com/uc?export=view&id=1L96i19VF_lO-RA7Q1va81iMTwrPa8TEQ",
    route: "gents-purses"
  },
  {
    id: 15,
    name: "Belts",
    count: 2,
    image: "https://drive.google.com/uc?export=view&id=1YnIYuafZho0VMJdEJvgJjxkhkjK9tb9Z",
    route: "belts"
  },
  {
    id: 16,
    name: "KG Bags",
    count: 4,
    image: "https://drive.google.com/uc?export=view&id=1Cm2ztenIkIlHtvuQJbU0ASgpuaG5p_uf",
    route: "kg-bags"
  },
  {
    id: 17,
    name: "Primary Bags",
    count: 4,
    image: "https://drive.google.com/uc?export=view&id=1HgpCaWWfsslXOCDimh2BWBWbsQ1DzAj3",
    route: "primary-bags"
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
              route={category.route}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProducts;
