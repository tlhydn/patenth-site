import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Can Yılmaz',
    comment: 'Kumaş kalitesi inanılmaz. Streetwear markaları arasında gördüğüm en iyi işçilik.',
    role: 'Koleksiyoner'
  },
  {
    name: 'Deniz Aktaş',
    comment: 'Minimal tasarımı ve o ağır dokusu tam istediğim gibi. Paketleme bile çok klas.',
    role: 'Yazılımcı'
  },
  {
    name: 'Ege Demir',
    comment: 'Beden kalıpları mükemmel oturuyor. Oversize sevenler kesinlikle denemeli.',
    role: 'Tasarımcı'
  }
];

export default function Reviews() {
  return (
    <section className="w-full py-32 px-6 bg-background">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-epilogue font-bold text-2xl tracking-[0.3em] uppercase text-center mb-24 opacity-40">
          Deneyimler
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="border border-outline p-10 relative overflow-hidden"
            >
              <div className="flex gap-1 mb-8 text-primary">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
              </div>
              <p className="font-sans text-base text-on-surface leading-relaxed mb-8 italic">
                "{review.comment}"
              </p>
              <div>
                <div className="font-epilogue font-bold text-xs tracking-widest uppercase mb-1">{review.name}</div>
                <div className="text-[10px] text-on-surface-variant uppercase tracking-widest">{review.role}</div>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-5">
                 <span className="text-8xl font-epilogue font-black">"</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
