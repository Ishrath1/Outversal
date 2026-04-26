import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const stats = [
  { value: '-60%', label: 'sur le coût d\'un poste équivalent en France' },
  { value: '25 jours', label: 'pour avoir votre talent opérationnel' },
  { value: '0', label: 'contrainte administrative ou RH pour vous' }
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-border">
      <div className="container mx-auto max-w-7xl">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center pt-8 md:pt-0"
            >
              <div className="text-4xl sm:text-5xl mb-2 text-[#234660]">{stat.value}</div>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
