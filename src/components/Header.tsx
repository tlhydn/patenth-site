import { ShoppingBag, User, Search } from 'lucide-react';
import { ASSETS } from '../constants';

interface HeaderProps {
  onHomeClick: () => void;
}

export default function Header({ onHomeClick }: HeaderProps) {
  return (
    <nav className="fixed top-0 w-full z-[100] bg-background/80 backdrop-blur-xl border-b border-outline">
      <div className="flex justify-between items-center px-6 md:px-12 h-20 w-full max-w-screen-2xl mx-auto">
        <button 
          onClick={onHomeClick}
          className="text-2xl font-epilogue font-black tracking-tighter text-on-background hover:opacity-70 transition-opacity uppercase"
        >
          PATENTH
        </button>
        
        <div className="hidden lg:flex gap-12 font-sans font-medium text-[11px] tracking-[0.3em] uppercase text-on-surface-variant">
          <a href="#koleksiyon" className="hover:text-primary transition-colors">KOLEKSİYON</a>
          <a href="#hikayemiz" className="hover:text-primary transition-colors">HİKAYEMİZ</a>
          <a href="#kalite" className="hover:text-primary transition-colors">KALİTE</a>
          <a href="#iletisim" className="hover:text-primary transition-colors">İLETİŞİM</a>
        </div>

        <div className="flex gap-4 md:gap-8 text-on-surface items-center">
          <button aria-label="search" className="hover:text-on-surface-variant transition-colors p-1">
            <Search className="w-4 h-4" />
          </button>
          <button aria-label="shopping_bag" className="hover:text-on-surface-variant transition-colors p-1">
            <ShoppingBag className="w-4 h-4" />
          </button>
          <button aria-label="person" className="hover:text-on-surface-variant transition-colors p-1">
            <User className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
