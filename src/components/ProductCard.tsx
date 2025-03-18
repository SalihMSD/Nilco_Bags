
import { motion } from 'framer-motion';

interface ProductCardProps {
  image: string;
  name: string;
  delay?: number;
}

const ProductCard = ({ image, name, delay = 0 }: ProductCardProps) => {
  return (
    <motion.div 
      className="group relative overflow-hidden rounded-xl bg-white shadow-md hover-scale"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
    >
      <div className="aspect-square w-full overflow-hidden bg-gray-100">
        <img 
          src={image} 
          alt={name} 
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-sm md:text-base truncate">{name}</h3>
      </div>
    </motion.div>
  );
};

export default ProductCard;
