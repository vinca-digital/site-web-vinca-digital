import { ArrowRight, Globe, Smartphone, Palette, Code, TrendingUp, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      id: 'web',
      icon: Globe,
      title: 'Web',
      subtitle: 'Développement & Optimisation',
      description: 'Création de sites web, applications, SEO, Google Ads et gestion de contenu pour maximiser votre présence en ligne.',
      features: ['Sites web sur mesure', 'Applications web', 'SEO & Google Ads', 'Gestion de contenu', 'E-commerce'],
      gradient: 'from-blue-600 to-purple-600',
      bgGradient: 'bg-gradient-to-br from-blue-500/10 to-purple-500/10',
      iconBg: 'bg-gradient-to-r from-blue-600 to-purple-600'
    },
    {
      id: 'social',
      icon: Smartphone,
      title: 'Social',
      subtitle: 'Stratégie & Contenu',
      description: 'Stratégie réseaux sociaux, production de contenu, reporting détaillé et gestion d\'influence pour engager votre audience.',
      features: ['Stratégie social media', 'Création de contenu', 'Community management', 'Influence marketing', 'Analytics & reporting'],
      gradient: 'from-pink-600 to-red-600',
      bgGradient: 'bg-gradient-to-br from-pink-500/10 to-red-500/10',
      iconBg: 'bg-gradient-to-r from-pink-600 to-red-600'
    },
    {
      id: 'visual',
      icon: Palette,
      title: 'Visual',
      subtitle: 'Design & Branding',
      description: 'Design graphique, branding complet, packaging, photographie, vidéo et motion design pour une identité forte.',
      features: ['Identité visuelle', 'Design graphique', 'Packaging', 'Photo & vidéo', 'Motion design'],
      gradient: 'from-yellow-400 to-yellow-600',
      bgGradient: 'bg-gradient-to-br from-yellow-200/30 to-yellow-400/20',
      iconBg: 'bg-gradient-to-r from-yellow-400 to-yellow-600'
    }
  ];

  const additionalServices = [
    { icon: Code, title: 'Développement', description: 'Applications sur mesure' },
    { icon: TrendingUp, title: 'Analytics', description: 'Suivi des performances' },
    { icon: Camera, title: 'Production', description: 'Contenu multimédia' }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-medium text-primary">Services</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            Trois familles de
            <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              services expertises
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une équipe pluridisciplinaire pour couvrir tous vos besoins digitaux, 
            de la conception à la réalisation.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={service.id} 
              className={`glass shadow-card hover:shadow-glow transition-smooth group cursor-pointer ${service.bgGradient}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 relative">
                  <div className={`w-16 h-16 ${service.iconBg} rounded-2xl flex items-center justify-center shadow-primary`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur group-hover:blur-md transition-all"></div>
                </div>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                <p className="text-primary font-medium">{service.subtitle}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full gradient-primary hover:scale-105 transition-bounce group"
                >
                  Découvrir le forfait
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">Services complémentaires</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <div 
                key={index}
                className="glass rounded-xl p-6 hover:shadow-primary transition-smooth group"
              >
                <service.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h4 className="font-semibold mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center glass rounded-3xl p-12 shadow-card">
          <h3 className="text-3xl font-bold mb-4">
            Prêt à transformer votre présence digitale ?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Réservez votre consultation gratuite et découvrez comment nous pouvons 
            accélérer votre croissance numérique.
          </p>
          <Button 
            size="lg" 
            className="gradient-primary shadow-primary hover:scale-105 transition-bounce px-8 py-4 text-lg"
          >
            Réserver ma consultation gratuite
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;