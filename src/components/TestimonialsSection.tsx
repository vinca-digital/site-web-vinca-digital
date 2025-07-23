import { Star, Quote, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Marie Dubois',
      role: 'Fondatrice, EcoTech Startup',
      avatar: '👩‍💼',
      rating: 5,
      text: 'Vinca Digital a transformé notre présence en ligne. En 3 mois, notre trafic a augmenté de 300% et nos ventes ont doublé. Une équipe exceptionnelle !',
      platform: 'Trustpilot'
    },
    {
      name: 'Thomas Martin',
      role: 'CEO, Tech Solutions',
      avatar: '👨‍💻',
      rating: 5,
      text: 'Enfin une agence qui comprend les enjeux des startups ! Forfaits adaptés, équipe réactive, résultats au rendez-vous. Je recommande vivement.',
      platform: 'Google'
    },
    {
      name: 'Sophie Laurent',
      role: 'Directrice Marketing, InnoVibe',
      avatar: '👩‍🎨',
      rating: 5,
      text: 'Leur approche pluridisciplinaire fait toute la différence. Design, développement, marketing... tout est coordonné à la perfection.',
      platform: 'LinkedIn'
    }
  ];

  const socialProof = [
    { metric: '4.9/5', label: 'Note Trustpilot', icon: '⭐' },
    { metric: '150+', label: 'Avis clients', icon: '💬' },
    { metric: '98%', label: 'Recommandations', icon: '👍' },
    { metric: '24h', label: 'Délai de réponse', icon: '⚡' }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Témoignages</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ils nous font
            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              confiance
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les retours de nos clients qui ont choisi de faire 
            confiance à notre expertise pour leur croissance digitale.
          </p>
        </div>

        {/* Social Proof Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {socialProof.map((item, index) => (
            <div 
              key={index}
              className="text-center glass rounded-xl p-6 shadow-card hover:shadow-accent transition-smooth group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-1">
                {item.metric}
              </div>
              <p className="text-sm text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="glass shadow-card hover:shadow-accent transition-smooth group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12" />
              </div>

              <CardContent className="p-8">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">
                    via {testimonial.platform}
                  </span>
                </div>

                {/* Testimonial text */}
                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center text-2xl mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="text-center glass rounded-3xl p-12 shadow-card">
          <h3 className="text-2xl font-bold mb-8">Nos certifications et partenariats</h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: 'Trustpilot', rating: '4.9/5', badge: '🏆' },
              { name: 'Google Partner', badge: '🎯' },
              { name: 'Meta Business', badge: '📱' },
              { name: 'LinkedIn Marketing', badge: '💼' }
            ].map((trust, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 glass rounded-lg px-6 py-3 hover:shadow-primary transition-smooth group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">
                  {trust.badge}
                </span>
                <div>
                  <p className="font-medium">{trust.name}</p>
                  {trust.rating && (
                    <p className="text-sm text-accent">{trust.rating}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href="#" 
              className="flex items-center text-primary hover:text-secondary transition-colors group"
            >
              <span className="mr-2">Voir tous nos avis Trustpilot</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <span className="text-muted-foreground">•</span>
            <a 
              href="#" 
              className="flex items-center text-primary hover:text-secondary transition-colors group"
            >
              <span className="mr-2">Suivez-nous sur LinkedIn</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;