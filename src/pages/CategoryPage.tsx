
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import ProductCard from '../components/ProductCard';
import { motion } from 'framer-motion';

// Product data organized by category with real product images
const productsByCategory = {
  'trekking-bags': [
    { id: 1, name: "Mountain Trekking Bag", image: "https://drive.google.com/uc?export=view&id=1srjoHeN7iJcEhr3iCE28pfqt6achdevr" },
    { id: 2, name: "Adventure Trekking Bag", image: "https://drive.google.com/uc?export=view&id=1DoL4JNvoDSzorbxyfcRBJG6JFdiahwBP" },
    { id: 3, name: "Pro Hiking Backpack", image: "https://drive.google.com/uc?export=view&id=1GUfdWs_orQOqnn1BtO9hog27NPUCndLL" },
  ],
  'travel-bags': [
    { id: 1, name: "Weekend Travel Bag", image: "https://drive.google.com/uc?export=view&id=1OZiIADdvLohgghJagnZUANK43jXG3ly4" },
    { id: 2, name: "Vacation Travel Bag", image: "https://drive.google.com/uc?export=view&id=1iwqW94eugn8_rHqepTC7Ut_ZRJd1V8wu" },
    { id: 3, name: "Premium Travel Bag", image: "https://drive.google.com/uc?export=view&id=14CTvejogBxKY6G7siwnNfySHZOhqzOz4" },
    { id: 4, name: "Executive Travel Bag", image: "https://drive.google.com/uc?export=view&id=1UuAzrZAoPkOYPLY1YAqwjeTdm_DqsyAJ" },
  ],
  'primary-bags': [
    { id: 1, name: "Basic Primary Bag", image: "https://drive.google.com/uc?export=view&id=1HgpCaWWfsslXOCDimh2BWBWbsQ1DzAj3" },
    { id: 2, name: "Standard Primary Bag", image: "https://drive.google.com/uc?export=view&id=1B84SUHmGIwh7lDRVQDi8eGExHdyMs9wB" },
    { id: 3, name: "Premium Primary Bag", image: "https://drive.google.com/uc?export=view&id=193Oe95KxiFev0U80vhgYieyGXGdnODt2" },
    { id: 4, name: "Deluxe Primary Bag", image: "https://drive.google.com/uc?export=view&id=1JJ0xrhSAHrk6i7lkbnzZPz88z0Gj8muj" },
  ],
  'lunch-bags': [
    { id: 1, name: "Standard Lunch Bag", image: "https://drive.google.com/uc?export=view&id=1bokpRseMxZgIr1DVVpmkneGOEzts9xaq" },
    { id: 2, name: "Insulated Lunch Bag", image: "https://drive.google.com/uc?export=view&id=1heXSbtjfAOIwITKC0u5uwP31HYg5_W1t" },
    { id: 3, name: "Compact Lunch Bag", image: "https://drive.google.com/uc?export=view&id=1iwOUfkoxo59doqCMWJiK5QCpM6xzmit8" },
    { id: 4, name: "Family Size Lunch Bag", image: "https://drive.google.com/uc?export=view&id=1McwxBrMSLLR1x96yTdK-KzWiNr3X2Sl2" },
    { id: 5, name: "Premium Lunch Bag", image: "https://drive.google.com/uc?export=view&id=1VQXRWOw2-s4Ipi2ZeNUyetUN7Jg6Cxcd" },
    { id: 6, name: "Stylish Lunch Bag", image: "https://drive.google.com/uc?export=view&id=14UHrDhQ8YjMLr3xuGoxlDTZ1bgC1nDCL" },
    { id: 7, name: "Adult Lunch Bag", image: "https://drive.google.com/uc?export=view&id=1YnIYuafZho0VMJdEJvgJjxkhkjK9tb9Z" },
    { id: 8, name: "Kids Lunch Bag", image: "https://drive.google.com/uc?export=view&id=1QovR0_F0PpwhUhxuZl6N3Sgi_FQGERGx" },
  ],
  'trolley-20': [
    { id: 1, name: "20\" Basic Trolley", image: "https://drive.google.com/uc?export=view&id=1jQiktAMl1pPBkC3_Hh-R9-jiTR8MvnJq" },
    { id: 2, name: "20\" Standard Trolley", image: "https://drive.google.com/uc?export=view&id=1u4XYHc0xSiwsKQQtOtCQBDJJJmlrKlDh" },
    { id: 3, name: "20\" Premium Trolley", image: "https://drive.google.com/uc?export=view&id=17ZQ-zQSPhf4iS9Um5JhJW0EBDrmrunSe" },
    { id: 4, name: "20\" Deluxe Trolley", image: "https://drive.google.com/uc?export=view&id=1l3vs5UfX30oYM0opOBgd041pnlfdA3Cf" },
  ],
  'trolley-24': [
    { id: 1, name: "24\" Basic Trolley", image: "https://drive.google.com/uc?export=view&id=1SrtJy4HoZQXxCNctpxbt_Hhw73LPoeSt" },
    { id: 2, name: "24\" Standard Trolley", image: "https://drive.google.com/uc?export=view&id=1cdSzZyEntXwsr23YfU8PEx5BP8ZCDXgQ" },
    { id: 3, name: "24\" Premium Trolley", image: "https://drive.google.com/uc?export=view&id=18_uI7k1J_ez14tPZ2NLmmw4XOk47IRLR" },
    { id: 4, name: "24\" Deluxe Trolley", image: "https://drive.google.com/uc?export=view&id=1O3x2scCy9cgLnzqOKVR0qGElAA7DpKRK" },
  ],
  'trolley-28': [
    { id: 1, name: "28\" Basic Trolley", image: "https://drive.google.com/uc?export=view&id=1eL3RIHKfO1Zyza6qfpjMOrlSF7crUzJl" },
    { id: 2, name: "28\" Standard Trolley", image: "https://drive.google.com/uc?export=view&id=1CHlw11aJjcIZPqr4Xa1_PGbR1BLE86LA" },
    { id: 3, name: "28\" Premium Trolley", image: "https://drive.google.com/uc?export=view&id=10vtp1Tx_YT6WaeqG8hI3TmpZwgtYONJs" },
    { id: 4, name: "28\" Deluxe Trolley", image: "https://drive.google.com/uc?export=view&id=1pCucBt-ULl4K4c5iLWE0I_a6qJis12vh" },
  ],
  'trolleys': [
    { id: 1, name: "20\" Basic Trolley", image: "https://drive.google.com/uc?export=view&id=1jQiktAMl1pPBkC3_Hh-R9-jiTR8MvnJq" },
    { id: 2, name: "24\" Standard Trolley", image: "https://drive.google.com/uc?export=view&id=1cdSzZyEntXwsr23YfU8PEx5BP8ZCDXgQ" },
    { id: 3, name: "28\" Premium Trolley", image: "https://drive.google.com/uc?export=view&id=10vtp1Tx_YT6WaeqG8hI3TmpZwgtYONJs" },
  ],
  'kg-bags': [
    { id: 1, name: "Basic KG Bag", image: "https://drive.google.com/uc?export=view&id=1Cm2ztenIkIlHtvuQJbU0ASgpuaG5p_uf" },
    { id: 2, name: "Standard KG Bag", image: "https://drive.google.com/uc?export=view&id=1GPSKLo-TfX8ZXwbbjFxCWDauoi6bsGUC" },
    { id: 3, name: "Premium KG Bag", image: "https://drive.google.com/uc?export=view&id=1mA6cHCdKw4uXfLN2j8v2VWDqA1H0ABSG" },
    { id: 4, name: "Deluxe KG Bag", image: "https://drive.google.com/uc?export=view&id=1xCir8PHW-yjYZON2-9RmiIsNojmA0czl" },
  ],
  'duffle-bags': [
    { id: 1, name: "Basic Duffle Bag", image: "https://drive.google.com/uc?export=view&id=1_Bpt1KVI_iUJiqiODi8dgh_n_v-q4e4U" },
    { id: 2, name: "Standard Duffle Bag", image: "https://drive.google.com/uc?export=view&id=12wnTQ1kjyTFsdfW1udQ0mmbxtZJzX4KG" },
    { id: 3, name: "Premium Duffle Bag", image: "https://drive.google.com/uc?export=view&id=1QZGXdc25o0g7KdNrOb1idYz8LbHn398y" },
  ],
  'laptop-bags': [
    { id: 1, name: "Basic Laptop Bag", image: "https://drive.google.com/uc?export=view&id=1KAy9Fk5ei6MzeEsD80Qwit5Dpa2CsyRc" },
    { id: 2, name: "Standard Laptop Bag", image: "https://drive.google.com/uc?export=view&id=16qnR8vcfQL6dWxVegoKUGJNUA9qgHLAa" },
    { id: 3, name: "Premium Laptop Bag", image: "https://drive.google.com/uc?export=view&id=1T7EwRKLInKL4tA9962KVJCg7Yz1zrriA" },
  ],
  'ladies-purses': [
    { id: 1, name: "Classic Ladies Purse", image: "https://drive.google.com/uc?export=view&id=1Zs1nt1VjIJ8DZXdDyv36HzK3T4QNcj_c" },
    { id: 2, name: "Elegant Ladies Purse", image: "https://drive.google.com/uc?export=view&id=1ySgTUGdxTmu8z2Wtc6bmvBTdLGtqnbYY" },
    { id: 3, name: "Modern Ladies Purse", image: "https://drive.google.com/uc?export=view&id=1oxvn1HbZ9DkrUNJzJzYbqr0uR_I8aUiu" },
    { id: 4, name: "Chic Ladies Purse", image: "https://drive.google.com/uc?export=view&id=1iMjUR1xwYsajbsW3qhztUDv5_u_himHm" },
    { id: 5, name: "Stylish Ladies Purse", image: "https://drive.google.com/uc?export=view&id=12LfKH_S8Pg_4JOh3O4PjVustX72ijF4q" },
    { id: 6, name: "Fashion Ladies Purse", image: "https://drive.google.com/uc?export=view&id=1S5ItV29IJh8Sg6ZiGsO8NN1xsX4fb6GP" },
    { id: 7, name: "Trendy Ladies Purse", image: "https://drive.google.com/uc?export=view&id=1Kv2JhaGgoMUp5LcNIre5z8DMTSFpia9t" },
    { id: 8, name: "Designer Ladies Purse", image: "https://drive.google.com/uc?export=view&id=1XggWX6t53NVR4_4PF1I5NGpMn23R-tN0" },
    { id: 9, name: "Premium Ladies Purse", image: "https://drive.google.com/uc?export=view&id=1jDEoF5UbxTX6Y1XvmW5yrAcKOO-kF0cH" },
  ],
  'gents-purses': [
    { id: 1, name: "Classic Gent's Purse", image: "https://drive.google.com/uc?export=view&id=1L96i19VF_lO-RA7Q1va81iMTwrPa8TEQ" },
    { id: 2, name: "Elegant Gent's Purse", image: "https://drive.google.com/uc?export=view&id=1lsKf_52njrfp40fI9-owGAqsUaJMbqEn" },
    { id: 3, name: "Modern Gent's Purse", image: "https://drive.google.com/uc?export=view&id=1kygKZYabfcYI74s5FwkCFAt8mrbJSuZm" },
    { id: 4, name: "Business Gent's Purse", image: "https://drive.google.com/uc?export=view&id=1_GaPiWdyIga_egIIesVKLdczAUR6vVdE" },
    { id: 5, name: "Professional Gent's Purse", image: "https://drive.google.com/uc?export=view&id=1gkTMWrr4Ij3YWlEysftyZLH0t17tbNtl" },
    { id: 6, name: "Executive Gent's Purse", image: "https://drive.google.com/uc?export=view&id=1fQT55J3n_Oo1L1ukwT2Gp87LaJNZTT-c" },
    { id: 7, name: "Casual Gent's Purse", image: "https://drive.google.com/uc?export=view&id=1DmgrLJW8g2hbiNIIBVTkZleNGo7Hnhly" },
    { id: 8, name: "Fashion Gent's Purse", image: "https://drive.google.com/uc?export=view&id=1oDXd-F9o6RMcbPY5CzzoMsfyTDq5HU2w" },
    { id: 9, name: "Premium Gent's Purse", image: "https://drive.google.com/uc?export=view&id=1HwtNL94dxYpnYv_iMnR-XLicYwrm8gT_" },
    { id: 10, name: "Luxury Gent's Purse", image: "https://drive.google.com/uc?export=view&id=1qGlZ-826q8xE81DU8ubsvBdyFPqR3LKw" },
  ],
  'purses': [
    { id: 1, name: "Classic Ladies Purse", image: "https://drive.google.com/uc?export=view&id=1Zs1nt1VjIJ8DZXdDyv36HzK3T4QNcj_c" },
    { id: 2, name: "Elegant Gent's Purse", image: "https://drive.google.com/uc?export=view&id=1lsKf_52njrfp40fI9-owGAqsUaJMbqEn" },
    { id: 3, name: "Modern Ladies Purse", image: "https://drive.google.com/uc?export=view&id=1oxvn1HbZ9DkrUNJzJzYbqr0uR_I8aUiu" },
    { id: 4, name: "Business Gent's Purse", image: "https://drive.google.com/uc?export=view&id=1_GaPiWdyIga_egIIesVKLdczAUR6vVdE" },
  ],
  'college-bags': [
    { id: 1, name: "Basic College Bag", image: "https://drive.google.com/uc?export=view&id=1zQdCkb2p6OoJxYLgEtal3vHHdqGN6khM" },
    { id: 2, name: "Standard College Bag", image: "https://drive.google.com/uc?export=view&id=1-6mRRrVFULIQ5qdEyTc1kwPnCyPffLaY" },
    { id: 3, name: "Premium College Bag", image: "https://drive.google.com/uc?export=view&id=1fE72VoGbUD5Z6MatLN2AsIfN97Q1Um0x" },
    { id: 4, name: "Deluxe College Bag", image: "https://drive.google.com/uc?export=view&id=1dMhpWctaNqxYmYhr5KBAbnrd5QShBvE6" },
    { id: 5, name: "Stylish College Bag", image: "https://drive.google.com/uc?export=view&id=1__iFEmFoFITmb4bGtfPCJlOulnAaTXvg" },
    { id: 6, name: "Modern College Bag", image: "https://drive.google.com/uc?export=view&id=11FvDUndsN6DehfwppQKNM2PgzS4q9To0" },
  ],
  'school-bags': [
    { id: 1, name: "Classic School Backpack", image: "https://images.unsplash.com/photo-1588072433116-9a1e2b4e4ad2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 2, name: "Elementary School Bag", image: "https://images.unsplash.com/photo-1445633629932-0029acc44e88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 3, name: "Kids Cartoon Backpack", image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 4, name: "Teen School Bag", image: "https://images.unsplash.com/photo-1544816155-12df9643f363?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
  ],
  'backpacks': [
    { id: 13, name: "Urban Backpack", image: "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
    { id: 14, name: "Daily Commuter", image: "https://images.unsplash.com/photo-1577733975197-3b950ca5cabe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" },
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
  'trolley-20': '20" Trolley',
  'trolley-24': '24" Trolley',
  'trolley-28': '28" Trolley',
  'lunch-bags': 'Lunch Bags',
  'purses': 'Purses',
  'ladies-purses': 'Ladies Purses',
  'gents-purses': 'Gents Purses',
  'belts': 'Belts',
  'kg-bags': 'KG Bags',
  'primary-bags': 'Primary Bags',
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
