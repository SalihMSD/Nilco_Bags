
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

interface ProductCardProps {
  image: string;
  name?: string;
  delay?: number;
  hideTitle?: boolean;
}

const ProductCard = ({ image, name = '', delay = 0, hideTitle = false }: ProductCardProps) => {
  const handleWhatsAppClick = () => {
    // Create a WhatsApp message with product details and image
    const message = name ? `Hi, I'm interested in the ${name} from Nilco Bags. Can you provide more details?` : 
                          `Hi, I'm interested in this product from Nilco Bags. Can you provide more details?`;
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with the prepared message
    window.open(`https://wa.me/9025266485?text=${encodedMessage}%0A${encodeURIComponent(image)}`, '_blank');
  };

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
          alt={name || "Nilco product"} 
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          onError={(e) => {
            // Fallback image if Google Drive image fails to load
            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
          }}
        />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-center">
          {!hideTitle && name && (
            <h3 className="font-medium text-sm md:text-base truncate">{name}</h3>
          )}
          <button 
            onClick={handleWhatsAppClick}
            className={`flex items-center justify-center p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors ${hideTitle ? 'ml-auto' : ''}`}
            aria-label="Chat on WhatsApp"
          >
            <MessageSquare size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
