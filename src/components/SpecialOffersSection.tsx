import { Sparkles, Gift, Crown, Zap, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SpecialOffersSection = () => {
  const offers = [
    {
      id: 'nexus',
      title: 'Nexus',
      subtitle: 'IA & Data Science',
      description: 'Solutions d\'intelligence artificielle et d\'analyse de données pour optimiser vos performances business.',
      features: [
        'Analyse prédictive avancée',
        'Automation intelligente',
        'Dashboard IA personnalisé',
        'Insights comportementaux',
        'Recommandations automatisées'
      ],
      status: 'À venir',
      icon: Zap,
      gradient: 'from-purple-600 via-pink-600 to-red-600',
      badgeText: 'Révolutionnaire',
      comingSoon: true
    },
    {
      id: 'family',
      title: 'Vinca Family',
      subtitle: 'Programme de fidélité',
      description: 'Un programme exclusif de points et d\'avantages pour nos clients les plus fidèles avec des récompenses exceptionnelles.',
      features: [
        'Points sur chaque projet',
        'Réductions progressives',
        'Accès prioritaire aux services',
        'Consultations gratuites bonus',
        'Cadeaux et surprises'
      ],
      status: 'Disponible',
      icon: Crown,
      gradient: 'from-yellow-600 via-orange-600 to-red-600',
      badgeText: 'Exclusif',
      comingSoon: false
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6 animate-pulse-glow">
            <Gift className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Offres Spéciales</span>
            <Sparkles className="w-4 h-4 text-secondary" />
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Programmes
            <span className="block bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-gradient-border">
              exclusifs
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos offres spéciales et programmes innovants conçus pour 
            accompagner votre croissance à long terme.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {offers.map((offer, index) => (
            <Card 
              key={offer.id}
              className={`relative overflow-hidden glass shadow-card hover:shadow-glow transition-smooth group ${
                offer.comingSoon ? 'opacity-90' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                  offer.comingSoon 
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                    : 'bg-green-500/20 text-green-300 border border-green-500/30'
                }`}>
                  {offer.status}
                </div>
              </div>

              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>

              <CardHeader className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${offer.gradient} rounded-2xl flex items-center justify-center shadow-glow mr-4 group-hover:scale-110 transition-transform`}>
                    <offer.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold">{offer.title}</CardTitle>
                    <p className="text-primary font-medium">{offer.subtitle}</p>
                  </div>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
                  <Star className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">{offer.badgeText}</span>
                </div>
              </CardHeader>

              <CardContent className="relative z-10 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {offer.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {offer.features.map((feature, featureIndex) => (
                    <div 
                      key={featureIndex}
                      className="flex items-center"
                      style={{ animationDelay: `${(index * 5 + featureIndex) * 0.1}s` }}
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${offer.gradient} rounded-full mr-3 animate-pulse`}></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="pt-4">
                  {offer.comingSoon ? (
                    <Button 
                      disabled
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-70 cursor-not-allowed"
                    >
                      Bientôt disponible
                      <Sparkles className="ml-2 w-4 h-4" />
                    </Button>
                  ) : (
                    <Button 
                      className={`w-full bg-gradient-to-r ${offer.gradient} hover:scale-105 transition-bounce shadow-glow`}
                    >
                      Rejoindre le programme
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  )}
                </div>
              </CardContent>

              {/* Animated border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${offer.gradient} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`}></div>
            </Card>
          ))}
        </div>

        {/* Newsletter signup for updates */}
        <div className="mt-16 text-center glass rounded-3xl p-12 shadow-card">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Restez informé de nos nouveautés
            </h3>
            <p className="text-muted-foreground mb-8">
              Soyez les premiers à découvrir nos nouvelles offres et programmes exclusifs.
              Inscrivez-vous pour recevoir les dernières mises à jour.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre email"
                className="flex-1 px-4 py-3 glass rounded-lg border border-primary/30 focus:border-primary focus:outline-none"
              />
              <Button className="gradient-primary shadow-primary hover:scale-105 transition-bounce px-6">
                Être notifié
                <Sparkles className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersSection;