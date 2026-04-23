import { motion } from 'motion/react';
import { ShieldCheck, Truck, RotateCcw, Package } from 'lucide-react';

const FEATURES = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: 'Üstün Kalite',
    desc: 'Dünyanın en iyi pamuklarından, 400gsm ağırlığında özel dokuma kumaşlar.'
  },
  {
    icon: <Truck className="w-8 h-8" />,
    title: 'VIP Teslimat',
    desc: 'Siparişleriniz 24 saat içinde kargoya verilir, premium kutu setiyle gelir.'
  },
  {
    icon: <RotateCcw className="w-8 h-8" />,
    title: 'Kolay İade',
    desc: 'Memnun kalmadığınız ürünlerde 30 gün içinde sorgusuz sualsiz iade hakkı.'
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: 'Özel Ambalaj',
    desc: 'Her paket bir sanat eseri gibi hazırlanır, koleksiyon değeri taşır.'
  }
];

export default function QualityFeatures() {
  return (
    <section className="w-full py-32 px-6 bg-surface border-y border-outline" id="kalite">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-epilogue font-bold text-3xl md:text-5xl uppercase tracking-tighter mb-4"
          >
            Lüks Dokunuş, Elit İşçilik
          </motion.h2>
          <div className="w-20 h-[1px] bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group text-center"
            >
              <div className="mb-8 flex justify-center text-on-surface-variant group-hover:text-primary transition-colors duration-500">
                {feature.icon}
              </div>
              <h3 className="font-epilogue font-bold text-sm tracking-[0.2em] uppercase mb-4">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed max-w-[250px] mx-auto">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
