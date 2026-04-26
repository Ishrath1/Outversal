import { ArrowRight, Mail, Phone } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary to-background">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl mb-4">Prêt à Optimiser Votre Entreprise ?</h2>
            <p className="text-lg text-muted-foreground">
              Discutons de vos besoins et découvrez comment nous pouvons vous aider à atteindre vos objectifs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Email</div>
                <div>contact@externalpro.fr</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Téléphone</div>
                <div>+33 1 23 45 67 89</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              Demander un devis gratuit
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
