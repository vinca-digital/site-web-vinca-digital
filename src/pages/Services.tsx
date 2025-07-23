import { useState } from 'react';
import { ArrowRight, Globe, Users, Palette, Star, CheckCircle, Sparkles, Target, Zap, Camera, Play, PenTool } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('web');

  const serviceCategories = [
    {
      id: 'web',
      title: 'Services Web',
      icon: Globe,
      gradient: 'from-cyan-400 to-blue-600',
      description: 'Solutions digitales complètes pour votre présence en ligne'
    },
    {
      id: 'social',
      title: 'Services Social',
      icon: Users,
      gradient: 'from-red-400 to-red-600', // couleur rouge
      description: 'Stratégies réseaux sociaux pour développer votre communauté'
    },
    {
      id: 'visual',
      title: 'Services Visual',
      icon: Palette,
      gradient: 'from-yellow-300 to-yellow-500', // couleur jaune
      description: 'Création graphique et visuelle pour votre identité de marque'
    }
  ];

  const services = {
    web: [
      {
        id: 'SW-01',
        title: 'Conception de site vitrine',
        icon: Globe,
        features: [
          'Création d\'une fiche Google My Business (si besoin)',
          'Conception de site vitrine sur Squarespace ou WordPress (1 à 20 pages)',
          'Achat de nom de domaine (si besoin)',
          'Connexion du nom de domaine via DNS',
          'Formation de base pour Squarespace',
          'Maintenance et gestion (inclus dans le Forfait Web)'
        ]
      },
      {
        id: 'SW-02',
        title: 'Conception de site e-commerce',
        icon: Target,
        features: [
          'Création d\'une fiche Google My Business (si besoin)',
          'Conception de site e-commerce sur Shopify ou WooCommerce (1 à 200 pages)',
          'Achat de nom de domaine (si fiches produits)',
          'Connexion du nom de domaine via DNS',
          'Formation de base pour Shopify, Squarespace ou WooCommerce',
          'Maintenance et gestion (inclus dans le Forfait Web)'
        ]
      },
      {
        id: 'SW-03',
        title: 'Fiche Google My Business',
        icon: Star,
        features: [
          'Création et configuration de la fiche GMB',
          'Shooting photo (service VISUAL en option)',
          'Optimisation et gestion de la fiche pour améliorer la visibilité locale, attirer des clients et récolter des avis'
        ]
      },
      {
        id: 'SW-04',
        title: 'Audit et analyse du site',
        icon: Zap,
        features: [
          'Analyse approfondie (SEO, vitesse, UX, contenu)',
          'Recommandations précises pour corriger les points faibles et maximiser l\'impact digital'
        ]
      }
    ],
    social: [
      {
        id: 'SS-01',
        title: 'Actions organiques',
        icon: Users,
        features: [
          'Stratégies et contenus optimisés pour développer l\'audience naturellement (sans publicité)',
          'Publications engageantes, optimisation SEO, gestion des réseaux sociaux'
        ]
      },
      {
        id: 'SS-02',
        title: 'Actions collaboratives',
        icon: Star,
        features: [
          'Mise en place de partenariats et collaborations avec marques/influenceurs/créateurs',
          'Création de campagnes à fort impact'
        ]
      },
      {
        id: 'SS-03',
        title: 'Configuration campagne Ads',
        icon: Target,
        features: [
          'Paramétrage complet des campagnes publicitaires (Meta, Google, TikTok…)',
          'Ciblage précis, création visuels/textes',
          'Réglages techniques et suivi des performances pour maximiser le ROI'
        ]
      }
    ],
    visual: [
      {
        id: 'SV-01',
        title: 'Création de logo',
        icon: Sparkles,
        features: [
          'Logo sur mesure (3 propositions), moderne et impactant, reflétant l\'identité de la marque'
        ]
      },
      {
        id: 'SV-02',
        title: 'Charte graphique Standard',
        icon: Palette,
        features: [
          'Charte incluant couleurs, typographies et logos pour assurer la cohérence visuelle'
        ]
      },
      {
        id: 'SV-03',
        title: 'Charte graphique Medium',
        icon: PenTool,
        features: [
          'Identité visuelle plus complète avec déclinaisons pour réseaux sociaux, papeterie, supports print/web'
        ]
      },
      {
        id: 'SV-04',
        title: 'Charte graphique Premium',
        icon: Star,
        features: [
          'Charte complète avec guidelines, exemples d\'utilisation et déclinaisons avancées'
        ]
      },
      {
        id: 'SV-05',
        title: 'Forfait Conceptions (X pages)',
        icon: Globe,
        features: [
          'Création graphique sur plusieurs pages (site, brochure, rapport, catalogue) avec design harmonisé'
        ]
      },
      {
        id: 'SV-06',
        title: 'Shooting Photos/Vidéos',
        icon: Camera,
        features: [
          'Shooting pro en studio ou extérieur pour produits, équipes ou événements'
        ]
      },
      {
        id: 'SV-07',
        title: 'Vidéo Motion Design',
        icon: Play,
        features: [
          'Vidéos animées créatives pour présenter services ou projets de manière dynamique'
        ]
      },
      {
        id: 'SV-08',
        title: 'Vincartoon',
        icon: Sparkles,
        features: [
          'Illustrations ou bandes dessinées personnalisées, ludiques et engageantes (optionnel aux forfaits)'
        ]
      }
    ]
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : Globe;
  };

  const getCategoryGradient = (categoryId: string) => {
    const category = serviceCategories.find(cat => cat.id === categoryId);
    return category ? category.gradient : 'from-primary to-secondary';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-600/20 animate-float"></div>
          <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-gradient-to-r from-pink-400/20 to-purple-600/20 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-12 h-12 rounded-full bg-gradient-to-r from-orange-400/20 to-red-600/20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Nos Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Solutions digitales complètes pour propulser votre entreprise vers le succès
            </p>
            <div className="flex justify-center mb-12 animate-fade-in" style={{animationDelay: '0.4s'}}>
              <div className="glass p-1 rounded-2xl border-electric">
                <div className="flex space-x-1">
                  {serviceCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`px-6 py-3 rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                          activeCategory === category.id
                            ? `bg-gradient-to-r ${category.gradient} text-white shadow-electric`
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{category.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className={`bg-gradient-to-r ${getCategoryGradient(activeCategory)} bg-clip-text text-transparent`}>
                {serviceCategories.find(cat => cat.id === activeCategory)?.title}
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {serviceCategories.find(cat => cat.id === activeCategory)?.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {services[activeCategory as keyof typeof services].map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={service.id} 
                  className="group glass border-electric hover:shadow-electric transition-all duration-500 p-8 animate-fade-in hover:scale-105 cursor-pointer"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="flex items-start space-x-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryGradient(activeCategory)} shadow-electric`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="outline" className="mb-2 border-electric text-primary">
                        {service.id}
                      </Badge>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-border">
                    <Button className={`w-full bg-gradient-to-r ${getCategoryGradient(activeCategory)} hover:scale-105 transition-bounce shadow-electric group`}>
                      Découvrir ce service
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-10"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto glass p-12 rounded-3xl border-electric">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Prêt à transformer votre vision en réalité ?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Discutons de votre projet lors d'une consultation gratuite de 30 minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary shadow-electric hover:scale-105 transition-bounce">
                <Sparkles className="w-5 h-5 mr-2" />
                Consultation Gratuite
              </Button>
              <Button size="lg" variant="outline" className="glass border-electric hover:border-primary">
                Voir nos forfaits
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;