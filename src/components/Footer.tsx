import { ASSETS } from '../constants';

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-12 bg-white border-t border-outline">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 gap-8 w-full max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-primary">
          <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
             <span className="text-white text-[10px]">P</span>
          </div>
          PATENTH
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 font-sans font-semibold text-[11px] tracking-wider uppercase">
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">GİZLİLİK</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">MESAFELİ SATIŞ</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">YARDIM</a>
          <a href="#" className="text-on-surface-variant hover:text-primary transition-colors">INSTAGRAM</a>
        </div>

        <div className="text-on-surface-variant/50 font-sans text-[10px] font-bold tracking-widest uppercase">
          © 2024 PATENTH.
        </div>
      </div>
    </footer>
  );
}
