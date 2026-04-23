import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BrandStory from './components/BrandStory';
import ProductGrid from './components/ProductGrid';
import QualityFeatures from './components/QualityFeatures';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import { Product } from './types';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedProduct]);

  const handleHomeClick = () => {
    setSelectedProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header onHomeClick={handleHomeClick} />
      
      <main className="flex-grow pt-20">
        <Hero />
        <BrandStory />
        <ProductGrid onProductClick={setSelectedProduct} />
        <QualityFeatures />
        <Reviews />
        <Contact />
      </main>

      <Footer />

      <ProductDetail 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
}
