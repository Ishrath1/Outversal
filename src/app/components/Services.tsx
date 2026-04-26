import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";

const positions = [
  "Data Scientist",
  "Chargé de recrutement / Talent acquisition",
  "Community Manager",
  "Growth Hacker",
  "Copywriter",
  "SEO Manager",
  "Assistant virtuel",
  "Commercial BtoB",
  "Account Executive (SaaS)",
  "SAV / Customer Success Manager (CSM)",
  "Sales Development Representative (SDR)",
  "Chargé de Relation Client",
  "Traffic Manager",
  "Digital Marketing Manager",
  "Chargé de Communication Digitale",
  "Développeur Full Stack (React / Node.js)",
  "Développeur Back-End (Python / Java / PHP)",
  "Développeur Front-End (React / Vue.js)",
  "Développeur Mobile (iOS / Android / Flutter)",
  "Software Engineer",
  "Comptable / Finance CDG",
];

// Créer un tableau infini en dupliquant les éléments
const infinitePositions = [...positions, ...positions, ...positions];

export function Services() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isScrolling, setIsScrolling] = useState(true);

  useEffect(() => {
    if (!isScrolling) return;

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = 3;

        // Calculer la largeur d'un set d'éléments
        const itemWidth = container.scrollWidth / 3; // 3 sets d'éléments

        // Si on atteint la fin du deuxième set, revenir au début du deuxième set
        if (container.scrollLeft >= itemWidth * 2 - 10) {
          container.scrollLeft = itemWidth;
        } else {
          container.scrollBy({ left: scrollAmount, behavior: "auto" });
        }
      }
    }, 35); //ajuster la vitesse de défilement ici (plus petit = plus rapide)

    return () => clearInterval(interval);
  }, [isScrolling]);

  // Initialiser le scroll au début du deuxième set pour un effet infini
  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const itemWidth = container.scrollWidth / 3;
      container.scrollLeft = itemWidth;
    }
  }, []);

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4 text-foreground">
            Postes couverts
          </h2>
          <p className="text-lg text-muted-foreground">
            Des profils qualifiés pour tous vos besoins
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto mb-12">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto scrollbar-hide flex gap-3 px-4 py-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseEnter={() => setIsScrolling(false)}
            onMouseLeave={() => setIsScrolling(true)}
          >
            {infinitePositions.map((position, index) => (
              <motion.div
                key={`${position}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{
                  duration: 0.6,
                  delay: (index % positions.length) * 0.3,
                }}
                className="flex-shrink-0 px-5 py-3 bg-secondary border border-border rounded-full text-sm text-foreground hover:border-[#5AACB8] hover:bg-[#E0F2F7] transition-all whitespace-nowrap"
              >
                {position}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-lg mb-4 text-foreground">Besoin d'un talent ?</p>
          <a
            href="#contact"
            className="inline-block bg-[#5AACB8] text-white px-8 py-3 rounded-lg hover:bg-[#2D7F91] transition-colors"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </section>
  );
}
