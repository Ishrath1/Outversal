import { motion } from "motion/react";
import logo2 from "../../imports/logo_principal.png";

export function Hero() {
  return (
    <section className="pt-20 lg:pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Background image transparente*/}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-4 h-full"
            style={{ backgroundImage: `url(${logo2})` }}
          />

          <div className="relative z-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F5E9] rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-[#4CAF50] rounded-full"></span>
              <span className="text-sm text-[#2E7D32]">
                Externalisation · Recrutement sans contraintes
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-foreground"
            >
              Outversal
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-3xl lg:text-4xl mb-6 text-foreground"
            >
              Externalisez votre recrutement sans charges, sans CDI, sans
              risque.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Outversal identifie, sélectionne et vous présente des profils
              qualifiés francophones, opérationnels rapidement et jusqu'à 60 %
              moins coûteux qu'un équivalent en France.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground italic mb-12"
            >
              Vous gardez le pilotage. On gère le reste.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap justify-center gap-3 mb-12"
            >
              {[
                "Externalisation offshore",
                "Talents francophones qualifiés",
                "Sans charges sociales",
                "Recrutement externalisé",
                "Outsourcing sur mesure",
              ].map((tag, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground border border-border"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="#contact"
                className="bg-[#234660] text-white px-8 py-3 rounded-lg hover:bg-[#1A3549] transition-colors inline-block"
              >
                Trouver mon talent
              </a>
              <a
                href="#comment"
                className="bg-white text-foreground border-2 border-border px-8 py-3 rounded-lg hover:bg-secondary transition-colors inline-block"
              >
                Voir comment ça marche
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
