import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Star, Diamond, Leaf, Truck, RotateCcw } from 'lucide-react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetail({ product, onClose }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState<string>('L');
  const [activeImage, setActiveImage] = useState<string>(product?.mainImage || '');

  if (!product) return null;

  const allImages = [product.mainImage, ...product.images];

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[150] flex items-end md:items-center justify-center p-0 md:p-6 lg:p-12"
      >
        <div 
          className="absolute inset-0 bg-white/60 backdrop-blur-xl"
          onClick={onClose}
        />
        
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          className="relative w-full max-w-6xl max-h-[90vh] md:max-h-[85vh] overflow-y-auto bg-white shadow-2xl shadow-primary/10 rounded-2xl md:rounded-3xl border border-outline no-scrollbar"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-[160] p-2 bg-background text-on-surface hover:text-primary transition-colors rounded-full border border-outline"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Gallery */}
            <div className="lg:col-span-7 p-6 md:p-10 flex flex-col md:flex-row gap-6 bg-background/50">
              {/* Thumbnails */}
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto no-scrollbar w-full md:w-[80px] shrink-0">
                {allImages.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`aspect-square w-16 md:w-full border rounded-lg overflow-hidden transition-all duration-300 ${
                      activeImage === img ? 'border-primary ring-2 ring-primary/20 scale-105' : 'border-outline opacity-60 hover:opacity-100 hover:border-zinc-400'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover grayscale" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>

              {/* Display */}
              <div className="flex-grow aspect-[4/5] bg-white rounded-2xl overflow-hidden relative border border-outline shadow-sm">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src={activeImage}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Info */}
            <div className="lg:col-span-5 p-8 md:p-10 flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex gap-2 mb-4 text-[10px] font-bold text-primary tracking-widest uppercase">
                    <span className="px-2 py-1 bg-primary/10 rounded">PREMIUM</span>
                    <span className="px-2 py-1 bg-background border border-outline rounded">LIMITLI ADET</span>
                </div>
                <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-on-surface tracking-tight leading-tight mb-4 lowercase first-letter:uppercase">
                  {product.name}
                </h2>
                <p className="font-sans font-bold text-2xl text-primary">
                  {product.price}
                </p>
              </div>

              <div className="mb-8 pt-8 border-t border-outline">
                <p className="font-sans text-base text-on-surface-variant mb-8 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-background border border-outline">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                       <Diamond className="w-4 h-4" />
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-on-surface tracking-tighter leading-none">KALİTE</p>
                       <p className="text-[9px] text-on-surface-variant font-medium">Premium Pamuk</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 p-3 rounded-xl bg-background border border-outline">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                       <Leaf className="w-4 h-4" />
                    </div>
                    <div>
                       <p className="text-[10px] font-bold text-on-surface tracking-tighter leading-none">EKOLOJİ</p>
                       <p className="text-[9px] text-on-surface-variant font-medium">%100 Organik</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex justify-between items-center mb-4 px-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Beden Seçimi</span>
                  <button className="text-[10px] font-bold text-primary hover:underline">SİZE CHART</button>
                </div>
                <div className="flex gap-3">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex-1 py-3 font-bold text-xs transition-all duration-300 rounded-xl border ${
                        selectedSize === size 
                          ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20' 
                          : 'bg-white text-on-surface border-outline hover:border-primary hover:text-primary shadow-sm'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full bg-on-background text-background py-5 rounded-xl font-bold text-[13px] uppercase tracking-widest transition-all hover:bg-primary hover:text-white shadow-xl shadow-on-background/10">
                SEPETE EKLE
              </button>

              <div className="mt-8 pt-8 border-t border-outline flex items-center justify-between">
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <Truck className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Hızlı Kargo</span>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <RotateCcw className="w-4 h-4 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-wider">Kolay İade</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
