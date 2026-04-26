import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const processSteps = [
  'Sélection manuelle, pas algorithmique',
  'Entretien approfondi',
  'Tests d\'aptitude, de logique',
  'Validation de compétence',
  'Formation interne',
  '5 jours avec vous avant validation'
];

export function Benefits() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-100px" });

  return (
    <section id="avantages" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-6 text-foreground">Pourquoi nous ?</h2>
          <p className="text-xl mb-4 text-foreground max-w-3xl mx-auto">
            Seuls les meilleurs profils passent chez nous.
          </p>
          <p className="text-base text-muted-foreground max-w-3xl mx-auto">
            Nous ne vous envoyons pas des CV en masse. Nous vous présentons des candidats qui ont été
            rigoureusement sélectionnés, testés et validés à chaque étape de notre processus.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl mb-6 text-center text-foreground"
          >
            Notre processus :
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="flex items-start gap-3 bg-white p-4 rounded-lg border border-border"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#E0F2F7] text-[#234660] flex items-center justify-center text-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <span className="text-sm text-foreground pt-1">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 30 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center bg-white p-8 rounded-xl border border-border max-w-3xl mx-auto"
        >
          <p className="text-lg mb-4 text-foreground">Vous avez un besoin ? Parlez-nous en.</p>
          <p className="text-base text-muted-foreground mb-6">On s'occupe du reste.</p>
          <a
            href="#contact"
            className="inline-block bg-[#234660] text-white px-8 py-3 rounded-lg hover:bg-[#1A3549] transition-colors"
          >
            Prendre contact
          </a>
        </motion.div>
      </div>
    </section>
  );
}
