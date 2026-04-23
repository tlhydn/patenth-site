import { motion } from 'motion/react';
import { ASSETS } from '../constants';

export default function BrandStory() {
  return (
    <section className="w-full py-32 px-6 md:px-12 bg-background" id="hikayemiz">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-20 items-center">
        <div className="w-full md:w-1/2">
          <motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="relative aspect-[4/5] overflow-hidden grayscale border border-outline"
          >
            <img 
              src={ASSETS.fabric} 
              alt="Premium Fabric" 
              className="w-full h-full object-cover transition-transform duration-2000 hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-background/20 mix-blend-overlay"></div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="font-epilogue font-bold text-4xl md:text-6xl text-on-surface mb-10 tracking-tighter leading-none uppercase">
              SESSİZ BİR<br/><span className="text-on-surface-variant font-light italic">MANIFESTO.</span>
            </h2>
            
            <div className="space-y-8 max-w-lg">
              <p className="font-sans text-lg text-on-surface-variant leading-relaxed font-medium">
                PATENTH, sokak kültürünün ham enerjisini modern lüksün inceliğiyle harmanlar. Biz sadece giysi değil, bir duruş tasarlıyoruz.
              </p>
              <p className="font-sans text-base text-on-surface-variant/70 leading-relaxed">
                Her dikiş, her doku ve her form, minimalist mükemmeliyetçilik anlayışımızın bir yansımasıdır. Gösterişten uzak, ama her zaman fark edilen bir otorite.
              </p>
              
              <div className="pt-10 flex gap-12">
                <div>
                   <div className="text-3xl font-epilogue font-bold text-on-background mb-1">01</div>
                   <div className="text-[10px] tracking-widest uppercase text-on-surface-variant">Zamansız Tasarım</div>
                </div>
                <div>
                   <div className="text-3xl font-epilogue font-bold text-on-background mb-1">02</div>
                   <div className="text-[10px] tracking-widest uppercase text-on-surface-variant">Elit İşçilik</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
