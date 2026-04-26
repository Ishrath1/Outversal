import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

const pricingData = [
  {
    poste: "Salaire brut mensuel (SMIC)",
    cdi: "1 801,80 €",
    external: "1 424,00 €",
    economie: "377,80 €",
  },
  {
    poste: "Charges patronales (+43%)",
    cdi: "774,77 €",
    external: "0,00 €",
    economie: "774,77 €",
  },
  {
    poste: "Recrutement (annualisé)",
    cdi: "150,00 €",
    external: "0,00 €",
    economie: "150,00 €",
  },
  {
    poste: "Onboarding & formation",
    cdi: "41,67 €",
    external: "0,00 €",
    economie: "41,67 €",
  },
  {
    poste: "Matériel & licences logiciels",
    cdi: "100,00 €",
    external: "0,00 €",
    economie: "100,00 €",
  },
  {
    poste: "Gestion RH interne (temps estimé)",
    cdi: "200,00 €",
    external: "0,00 €",
    economie: "200,00 €",
  },
  {
    poste: "Risque juridique & contentieux",
    cdi: "150,00 €",
    external: "0,00 €",
    economie: "150,00 €",
  },
  {
    poste: "Absentéisme moyen (7%)",
    cdi: "126,13 €",
    external: "0,00 €",
    economie: "126,13 €",
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tarifs" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4 text-foreground">
            Nos tarifs
          </h2>
          <p className="text-xl text-muted-foreground">
            Comparaison: Coût réel d'un CDI vs Externalisation
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
          }
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl border border-border overflow-hidden max-w-5xl mx-auto mb-12"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#234660] text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-sm">Poste de coût</th>
                  <th className="px-4 py-3 text-right text-sm">
                    CDI (estimation)
                  </th>
                  <th className="px-4 py-3 text-right text-sm">
                    Externalisation
                  </th>
                  <th className="px-4 py-3 text-right text-sm">
                    Économie réalisée
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {pricingData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-secondary transition-colors"
                  >
                    <td className="px-4 py-3 text-sm text-foreground">
                      {row.poste}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-foreground">
                      {row.cdi}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-[#4CAF50]">
                      {row.external}
                    </td>
                    <td className="px-4 py-3 text-sm text-right text-[#5AACB8]">
                      {row.economie}
                    </td>
                  </tr>
                ))}
                <tr className="bg-[#E0F2F7]">
                  <td className="px-4 py-4 text-foreground">
                    TOTAL MENSUEL ESTIMÉ
                  </td>
                  <td className="px-4 py-4 text-right text-foreground">
                    3 344,37 €
                  </td>
                  <td className="px-4 py-4 text-right text-[#4CAF50]">
                    1 424,00 €
                  </td>
                  <td className="px-4 py-4 text-right text-[#234660]">
                    1 920,37 €
                  </td>
                </tr>
                <tr className="bg-[#234660] text-white">
                  <td className="px-4 py-4" colSpan={3}>
                    Économie en %
                  </td>
                  <td className="px-4 py-4 text-right text-xl">57,4%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-xl border border-border"
          >
            <p className="text-xl mb-2 text-foreground">
              Un CDI au SMIC peut vous coûter jusqu'à{" "}
              <span className="text-[#234660]">3 300 €/mois</span>.
            </p>
            <p className="text-xl mb-4 text-foreground">
              Chez Outversal, vous démarrez à{" "}
              <span className="text-[#5AACB8]">1 424 €/mois</span>.
              <span className="text-sm text-muted-foreground ml-2">
                (tarif de base pouvant en fonction des profils)
              </span>
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Salaire brut, charges patronales, mutuelle, onboarding, gestion
              RH… Le coût réel d'un salarié va bien au-delà de sa fiche de paie.
              Chez Outversal, un collaborateur à temps plein (40h/semaine) vous
              revient à partir de 8,90 €/heure, soit 1 424 €/mois, tout compris.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-[#E8F5E9] p-8 rounded-xl border border-[#4CAF50]/30"
          >
            <h3 className="text-xl mb-3 text-foreground">
              Pas convaincu ? Testez gratuitement pendant 5 jours.
            </h3>
            <p className="text-base text-muted-foreground mb-6">
              Aucun engagement. Vous validez le profil, vous constatez les
              résultats puis vous décidez.
            </p>
            <p className="text-sm text-muted-foreground">
              Au-delà de la période d'essai, notre offre fonctionne en
              abonnement mensuel, sans engagement de durée. Vous restez libre de
              résilier à tout moment, sans préavis contraignant et sans
              pénalité.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
