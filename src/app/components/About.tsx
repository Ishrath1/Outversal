import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl mb-8 text-center text-foreground"
          >
            À propos d'Outversal
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-base text-muted-foreground leading-relaxed"
          >
            <p>
              Outversal a été fondé par un diplômé d'HEC Paris, l'une des
              meilleures grandes écoles de commerce au monde, avec une
              conviction forte :{" "}
              <span className="text-foreground">
                le talent n'a pas de frontières
              </span>
              .
            </p>

            <p>
              Notre mission est de révéler et valoriser l'excellence des
              professionnels malgaches, au service de la croissance des
              entreprises françaises. Nous croyons fermement que le savoir-faire
              et la compétence malgaches méritent une visibilité internationale
              et que les chefs d'entreprise français ont tout à gagner à
              collaborer avec ces talents.
            </p>

            <p className="text-lg text-[#234660] text-center py-4">
              Outversal, c'est le pont stratégique entre deux mondes :
              l'exigence française et l'excellence malgache.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
