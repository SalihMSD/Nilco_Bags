
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  image: string;
  name: string;
  count: number;
  delay?: number;
  route?: string;
}

const CategoryCard = ({ image, name, count, delay = 0, route }: CategoryCardProps) => {
  const categoryPath = route || name.toLowerCase().replace(/\s+/g, '-');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <Link to={`/category/${categoryPath}`} className="block">
        <div className="group relative overflow-hidden rounded-xl bg-white shadow-md hover-scale">
          <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
            <img 
              src={image} 
              alt={name} 
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={(e) => {
                // Fallback image if image fails to load
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4 md:p-6">
              <h3 className="font-semibold text-white text-base md:text-lg">{name}</h3>
              <p className="text-white/80 text-xs mt-1">{count} Products</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CategoryCard;
