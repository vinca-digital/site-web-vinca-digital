import { Users, Target, Shield, Zap, TrendingUp, Award } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      icon: Users,
      title: 'Équipe pluridisciplinaire',
      description: 'Designers, développeurs, CM et experts marketing réunis pour votre projet.',
      highlight: 'vs freelance isolé'
    },
    {
      icon: Target,
      title: 'Forfaits adaptés',
      description: 'Solutions sur mesure pour jeunes entrepreneurs avec économies garanties.',
      highlight: 'économie sur recrutement'
    },
    {
      icon: Shield,
      title: 'Partenariat long terme',
      description: 'Accompagnement continu comme un véritable partenaire de croissance.',
      highlight: 'plus qu\'un prestataire'
    },
    {
      icon: Zap,
      title: 'Réactivité maximale',
      description: 'Délais optimisés grâce à notre organisation en équipe dédiée.',
      highlight: 'livraison rapide'
    },
    {
      icon: TrendingUp,
      title: 'ROI optimisé',
      description: 'Stratégies data-driven pour maximiser votre retour sur investissement.',
      highlight: 'résultats mesurables'
    },
    {
      icon: Award,
      title: 'Expertise reconnue',
      description: 'Certifications et formations continues pour rester à la pointe.',
      highlight: 'qualité garantie'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 gradient-secondary rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 gradient-primary rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-medium text-secondary">Avantages</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Pourquoi choisir
            <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Vinca Digital ?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les avantages concrets de travailler avec notre équipe 
            pluridisciplinaire plutôt qu'avec des freelances isolés.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="group perspective"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative glass rounded-2xl p-8 shadow-card hover:shadow-secondary transition-smooth hover:rotate-y-12 transform-3d">
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center shadow-secondary">
                    <advantage.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20 rounded-2xl blur group-hover:blur-lg transition-all"></div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-secondary transition-colors">
                  {advantage.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {advantage.description}
                </p>

                {/* Highlight badge */}
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
                  <span className="text-xs font-medium text-secondary">
                    {advantage.highlight}
                  </span>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 glass rounded-3xl p-12 shadow-card">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                100+
              </div>
              <p className="text-muted-foreground">Projets réalisés</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold gradient-secondary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                95%
              </div>
              <p className="text-muted-foreground">Clients satisfaits</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                24h
              </div>
              <p className="text-muted-foreground">Délai de réponse</p>
            </div>
            <div className="group">
              <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                3 ans
              </div>
              <p className="text-muted-foreground">Expérience moyenne</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;