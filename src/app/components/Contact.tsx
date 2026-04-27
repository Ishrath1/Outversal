import { Mail, Phone, Send } from "lucide-react";
import { useState, useRef } from "react";
import { motion } from "motion/react";
import { useInView } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    entreprise: "",
    message: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Merci pour votre message ! Nous vous recontacterons dans les plus brefs délais.",
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl mb-4 text-foreground">
            Contactez-nous
          </h2>
          <p className="text-lg text-muted-foreground">
            Discutons de vos besoins en externalisation
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl border border-border">
            <h3 className="text-xl mb-6 text-foreground">
              Envoyez-nous un message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="nom"
                  className="block text-sm mb-2 text-foreground"
                >
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  required
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5AACB8]"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm mb-2 text-foreground"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5AACB8]"
                />
              </div>

              <div>
                <label
                  htmlFor="telephone"
                  className="block text-sm mb-2 text-foreground"
                >
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5AACB8]"
                />
              </div>

              <div>
                <label
                  htmlFor="entreprise"
                  className="block text-sm mb-2 text-foreground"
                >
                  Entreprise
                </label>
                <input
                  type="text"
                  id="entreprise"
                  name="entreprise"
                  value={formData.entreprise}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5AACB8]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm mb-2 text-foreground"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5AACB8] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#234660] text-white px-6 py-3 rounded-lg hover:bg-[#1A3549] transition-colors flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Envoyer le message
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl border border-border">
              <h3 className="text-xl mb-6 text-foreground">Nos coordonnées</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E0F2F7] flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#234660]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <a
                      href="mailto:contact@outversal.com"
                      className="text-foreground hover:text-[#5AACB8] transition-colors"
                    >
                      contact@outversal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#E0F2F7] flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#234660]" size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Téléphone
                    </p>
                    <a
                      href="tel:+33761742151"
                      className="text-foreground hover:text-[#5AACB8] transition-colors"
                    >
                      +33 7 61 74 21 51
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#234660] text-white p-8 rounded-xl">
              <h3 className="text-xl mb-4">Période d'essai gratuite</h3>
              <p className="text-sm mb-6 opacity-90">
                5 jours offerts pour tester nos services sans aucun engagement.
                Aucune carte bancaire requise.
              </p>
              <ul className="text-sm space-y-2 opacity-90">
                <li>✓ Sans engagement</li>
                <li>✓ Résiliable à tout moment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
