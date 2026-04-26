import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: 'ExternalPro nous a permis de réduire nos coûts de 35% tout en améliorant notre qualité de service. Une équipe professionnelle et réactive.',
    author: 'Marie Dupont',
    role: 'Directrice Générale',
    company: 'TechVision SAS'
  },
  {
    text: 'L\'externalisation de notre service client a été un tournant. Nos clients sont plus satisfaits et notre équipe peut se concentrer sur l\'innovation.',
    author: 'Jean Martin',
    role: 'CEO',
    company: 'InnovateCorp'
  },
  {
    text: 'Une flexibilité remarquable qui nous permet d\'adapter nos ressources en fonction de notre croissance. Je recommande vivement leurs services.',
    author: 'Sophie Bernard',
    role: 'DRH',
    company: 'GlobalTrade France'
  }
];

export function Testimonials() {
  return (
    <section id="temoignages" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl mb-4">Ce Que Disent Nos Clients</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La satisfaction de nos clients est notre meilleure référence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 relative"
            >
              <Quote className="text-primary/20 absolute top-6 right-6" size={40} />
              <p className="text-muted-foreground mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              <div className="border-t border-border pt-4">
                <div className="text-foreground">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
