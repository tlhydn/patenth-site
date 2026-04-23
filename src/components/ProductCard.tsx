import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="group cursor-pointer"
      onClick={() => onClick(product)}
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-surface border border-outline">
        <img 
          src={product.mainImage} 
          alt={product.name} 
          className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:scale-105 group-hover:grayscale-0"
          referrerPolicy="no-referrer"
        />
        
        {product.tags.length > 0 && (
          <div className="absolute top-4 left-4">
            {product.tags.map(tag => (
              <span key={tag} className="bg-primary text-on-primary px-4 py-1 text-[9px] font-bold tracking-[0.2em] uppercase">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-on-background border-b border-on-background pb-1">İNCELE</span>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-start border-b border-outline pb-4">
          <div>
            <h3 className="font-epilogue font-bold text-lg text-on-background uppercase tracking-tight">
              {product.name}
            </h3>
            <p className="mt-1 font-sans text-[10px] font-medium text-on-surface-variant uppercase tracking-[0.2em]">
              {product.category}
            </p>
          </div>
          <span className="font-epilogue font-bold text-base text-on-background">
            {product.price}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
