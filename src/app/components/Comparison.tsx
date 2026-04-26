import { Check, X } from "lucide-react";
import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const comparisons = [
  {
    category: "COÛTS",
    items: [
      {
        critere: "Coût de recrutement",
        outversal: "0€ Inclus dans la prestation",
        classique:
          "~5 000 € d'honoraires d'agence pour un poste de chargé de clientèle",
        advantage: true,
      },
      {
        critere: "Coût mensuel",
        outversal: "1 424€ / mois tout inclus",
        classique: "~2 180€ / mois pour un poste équivalent",
        advantage: true,
      },
      {
        critere: "Équipement & onboarding",
        outversal: "0€ Pris en charge",
        classique: "À la charge de l'entreprise",
        advantage: true,
      },
      {
        critere: "Prévisibilité budgétaire",
        outversal: "Forfait fixe mensuel, totalement transparent",
        classique: "Coûts variables et imprévus, coût réel explosif",
        advantage: true,
      },
    ],
  },
  {
    category: "DÉLAIS & FLEXIBILITÉ",
    items: [
      {
        critere: "Délai de démarrage",
        outversal: "25 jours",
        classique: "1 à 3 mois",
        advantage: true,
      },
      {
        critere: "Scalabilité des équipes",
        outversal:
          "Passez de 1 à 10 collaborateurs externalisés en quelques jours, selon vos pics d'activité.",
        classique:
          "Embaucher prend des mois. Réduire implique des procédures légales et des indemnités coûteuses.",
        advantage: true,
      },
    ],
  },
  {
    category: "RISQUES & RESPONSABILITÉS",
    items: [
      {
        critere: "Risque juridique RH",
        outversal: "Transféré à l'agence",
        classique: "Porté par l'entreprise",
        advantage: true,
      },
      {
        critere: "Fin du contrat",
        outversal:
          "Pas d'engagement, vous résiliez quand vous voulez, sans préavis sans motif",
        classique: "Formalités complexes et coûteuses",
        advantage: true,
      },
      {
        critere: "Absentéisme & turnover",
        outversal:
          "Soit nous mettons un autre talent à votre disposition, soit nous vous remboursons les jours non travaillés",
        classique:
          "Maladie, démission, congés : vous portez seul le risque. Chaque absence paralyse votre activité.",
        advantage: true,
      },
      {
        critere: "Litiges prud'homaux",
        outversal: "Aucun risque pour le client",
        classique: "Risque direct pour l'entreprise",
        advantage: true,
      },
    ],
  },
  {
    category: "EXPERTISE & GESTION",
    items: [
      {
        critere: "Charge RH & administrative",
        outversal:
          "Nulle. Contrats, paie, congés, URSSAF… Outversal gère tout. Vous vous concentrez sur votre cœur de métier.",
        classique:
          "Chaque employé génère des dizaines d'obligations légales : paie, entretiens annuels, déclarations sociales…",
        advantage: true,
      },
      {
        critere: "Suivi des performances",
        outversal:
          "Reporting régulier, KPIs définis dès le départ, point de contact dédié. Vous pilotez sans micro-manager",
        classique:
          "Sans process solide, la performance reste difficile à mesurer et à objectiver",
        advantage: true,
      },
    ],
  },
];

export function Comparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4 text-foreground">
            Tableau Comparatif: Outversal vs Recrutement Classique
          </h2>
        </motion.div>

        <div className="space-y-12">
          {comparisons.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                className="text-xl mb-6 text-[#234660]"
              >
                {section.category}
              </motion.h3>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      duration: 0.5,
                      delay: sectionIndex * 0.1 + itemIndex * 0.05,
                    }}
                    className="bg-secondary border border-border rounded-lg overflow-hidden"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-border">
                      <div className="p-4 bg-white">
                        <p className="text-sm text-foreground">
                          {item.critere}
                        </p>
                      </div>
                      <div className="p-4 bg-[#E8F5E9]">
                        <div className="flex items-start gap-2">
                          <Check
                            className="text-[#4CAF50] flex-shrink-0 mt-0.5"
                            size={16}
                          />
                          <p className="text-sm text-foreground">
                            {item.outversal}
                          </p>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-start gap-2">
                          <X
                            className="text-[#DC2626] flex-shrink-0 mt-0.5"
                            size={16}
                          />
                          <p className="text-sm text-muted-foreground">
                            {item.classique}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:hidden text-center bg-secondary p-6 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">
            Chaque ligne montre le critère, puis Outversal (vert), puis le
            recrutement classique (rouge)
          </p>
        </div>
      </div>
    </section>
  );
}
