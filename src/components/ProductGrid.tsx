import { ArrowRight } from 'lucide-react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';

interface ProductGridProps {
  onProductClick: (product: Product) => void;
}

export default function ProductGrid({ onProductClick }: ProductGridProps) {
  return (
    <section className="w-full py-20 px-6 md:px-12 bg-background" id="koleksiyon">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="font-sans font-extrabold text-3xl md:text-5xl text-on-surface tracking-tight mb-2">
              Koleksiyon
            </h2>
            <p className="text-on-surface-variant font-medium">Özenle seçilmiş, zamansız parçalar.</p>
          </div>
          <button className="flex items-center gap-2 group font-sans text-xs font-bold text-primary hover:bg-primary hover:text-white px-5 py-3 rounded-full border border-primary transition-all uppercase tracking-widest">
            Tümünü Gör
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {PRODUCTS.map((product, index) => (
            <div key={product.id} className={index === 1 ? 'lg:mt-24' : ''}>
              <ProductCard 
                product={product} 
                onClick={onProductClick} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
