import { Mail, MapPin, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section className="w-full py-32 px-6 bg-surface border-t border-outline" id="iletisim">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24">
        <div>
          <h2 className="font-epilogue font-bold text-4xl md:text-6xl uppercase tracking-tighter mb-12">
            BIZE<br/>ULAŞIN.
          </h2>
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center border border-outline text-on-surface-variant">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] tracking-widest uppercase text-on-surface-variant mb-1 font-bold">E-Posta</div>
                <div className="text-sm font-medium">contact@patenth.com</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center border border-outline text-on-surface-variant">
                <Instagram className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] tracking-widest uppercase text-on-surface-variant mb-1 font-bold">Instagram</div>
                <div className="text-sm font-medium">@patenth.archive</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-12 h-12 flex items-center justify-center border border-outline text-on-surface-variant">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] tracking-widest uppercase text-on-surface-variant mb-1 font-bold">Stüdyo</div>
                <div className="text-sm font-medium">Nişantaşı, İstanbul, TR</div>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-6 pt-4" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="text" 
              placeholder="ADINIZ" 
              className="w-full bg-background border border-outline px-6 py-4 text-[11px] font-bold tracking-widest uppercase focus:border-primary outline-none transition-colors"
            />
            <input 
              type="email" 
              placeholder="E-POSTA" 
              className="w-full bg-background border border-outline px-6 py-4 text-[11px] font-bold tracking-widest uppercase focus:border-primary outline-none transition-colors"
            />
          </div>
          <textarea 
            placeholder="MESAJINIZ" 
            rows={5}
            className="w-full bg-background border border-outline px-6 py-4 text-[11px] font-bold tracking-widest uppercase focus:border-primary outline-none transition-colors resize-none"
          ></textarea>
          <button className="w-full bg-on-background text-background py-5 font-bold text-[11px] uppercase tracking-[0.4em] hover:bg-on-surface-variant transition-colors">
            GÖNDER
          </button>
        </form>
      </div>
    </section>
  );
}
