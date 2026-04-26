import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const steps = [
  {
    number: 1,
    title: 'Consultation d\'une heure',
    description: 'Nous prenons le temps de comprendre précisément votre contexte, vos attentes techniques et culturelles, et la durée de la mission.',
    timeline: 'Jour 1'
  },
  {
    number: 2,
    title: 'Recrutement et formation',
    description: 'Nous activons notre réseau et lançons la recherche. Chaque candidat passe par des entretiens techniques et comportementaux stricts.',
    timeline: 'Jours 2-20'
  },
  {
    number: 3,
    title: 'Présentation du profil retenu',
    description: 'Vous recevez un profil soigneusement sélectionné, avec une synthèse détaillée. Vous choisissez.',
    timeline: 'Jour 21'
  },
  {
    number: 4,
    title: '5 jours d\'essai offerts',
    description: 'Le talent intègre vos équipes. Nous assurons l\'onboarding, la gestion administrative, et un suivi régulier de la mission.',
    timeline: 'Jours 22-26'
  },
  {
    number: 5,
    title: 'Validation et abonnement',
    description: 'Si vous validez : abonnement mensuel sans engagement. Sinon, aucun frais.',
    timeline: 'Dès le jour 27'
  }
];

function TimelineStep({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative flex gap-6"
    >
      <div className="flex flex-col items-center flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-[#5AACB8] text-white flex items-center justify-center text-lg z-10">
          {step.number}
        </div>
        {index < steps.length - 1 && (
          <div className="w-0.5 h-full bg-[#5AACB8]/30 mt-2"></div>
        )}
      </div>

      <div className="pb-12 flex-1">
        <h3 className="text-xl mb-2 text-foreground">{step.title}</h3>
        <p className="text-muted-foreground mb-3 leading-relaxed">
          {step.description}
        </p>
        <span className="inline-block px-3 py-1 bg-[#E0F2F7] text-[#234660] text-sm rounded-full">
          {step.timeline}
        </span>
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="comment" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4 text-foreground">Comment ça marche ?</h2>
          <p className="text-lg text-muted-foreground">
            De la consultation à l'intégration : notre processus en 5 étapes
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <TimelineStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
