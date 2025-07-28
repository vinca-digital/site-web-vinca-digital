import React, { useState } from 'react';
import { Check, X, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ComparisonTable from '@/components/ComparisonTable';

const Forfaits = () => {
  const [activeTab, setActiveTab] = useState('web');

  const pricingData = {
    web: {
      title: 'Forfait Web',
      subtitle: 'Développement & Optimisation',
      plans: [
        {
          name: 'Standard',
          price: '899',
          period: 'projet',
          features: [
            { name: 'Articles de blog mensuels', included: '2/mois' },
            { name: 'SEO (référencement naturel)', included: 'Basique' },
            { name: 'Maintenance technique', included: '7j/7' },
            { name: 'Formation / accompagnement', included: false },
            { name: 'Campagnes Ads (Meta, TikTok...)', included: false },
            { name: 'E-commerce avancé', included: false },
            { name: 'Analytics premium', included: false },
            { name: 'Support prioritaire', included: false }
          ]
        },
        {
          name: 'Medium',
          price: '1499',
          period: 'projet',
          recommended: true,
          features: [
            { name: 'Articles de blog mensuels', included: '4/mois' },
            { name: 'SEO (référencement naturel)', included: 'Optimisé' },
            { name: 'Maintenance technique', included: '7j/7' },
            { name: 'Formation / accompagnement', included: 'Formation incluse' },
            { name: 'Campagnes Ads (Meta, TikTok...)', included: 'Selon besoins' },
            { name: 'E-commerce avancé', included: true },
            { name: 'Analytics premium', included: true },
            { name: 'Support prioritaire', included: false }
          ]
        },
        {
          name: 'Premium',
          price: '2499',
          period: 'projet',
          features: [
            { name: 'Articles de blog mensuels', included: 'Illimités' },
            { name: 'SEO (référencement naturel)', included: 'Avancé + SEA' },
            { name: 'Maintenance technique', included: '7j/7' },
            { name: 'Formation / accompagnement', included: 'Stratégie incluse' },
            { name: 'Campagnes Ads (Meta, TikTok...)', included: 'Inclus' },
            { name: 'E-commerce avancé', included: true },
            { name: 'Analytics premium', included: true },
            { name: 'Support prioritaire', included: true }
          ]
        }
      ]
    },
    social: {
      title: 'Forfait Social',
      subtitle: 'Stratégie & Contenu',
      plans: [
        {
          name: 'Standard',
          price: '299',
          period: 'mois',
          features: [
            { name: 'Réseaux sociaux gérés', included: '1–2 réseaux' },
            { name: 'Nombre de publications', included: '5–10/mois' },
            { name: 'Shooting photo/vidéo', included: false },
            { name: 'Formation / accompagnement', included: false },
            { name: 'Campagnes Ads (Meta, TikTok...)', included: false },
            { name: 'Community management', included: false },
            { name: 'Stories & Reels', included: false },
            { name: 'Support prioritaire', included: false }
          ]
        },
        {
          name: 'Medium',
          price: '599',
          period: 'mois',
          recommended: true,
          features: [
            { name: 'Réseaux sociaux gérés', included: '2–4 réseaux' },
            { name: 'Nombre de publications', included: '10–20/mois' },
            { name: 'Shooting photo/vidéo', included: '1–2/mois' },
            { name: 'Formation / accompagnement', included: 'Formation possible' },
            { name: 'Campagnes Ads (Meta, TikTok...)', included: '1 campagne/mois' },
            { name: 'Community management', included: true },
            { name: 'Stories & Reels', included: true },
            { name: 'Support prioritaire', included: false }
          ]
        },
        {
          name: 'Premium',
          price: '999',
          period: 'mois',
          features: [
            { name: 'Réseaux sociaux gérés', included: '5–6 réseaux' },
            { name: 'Nombre de publications', included: '>20/mois' },
            { name: 'Shooting photo/vidéo', included: '3–4/mois' },
            { name: 'Formation / accompagnement', included: 'Stratégie complète' },
            { name: 'Campagnes Ads (Meta, TikTok...)', included: '2–3 campagnes/mois' },
            { name: 'Community management', included: true },
            { name: 'Stories & Reels', included: true },
            { name: 'Support prioritaire', included: true }
          ]
        }
      ]
    },
    visual: {
      title: 'Forfait Visual',
      subtitle: 'Design & Branding',
      plans: [
        {
          name: 'Standard',
          price: '599',
          period: 'projet',
          features: [
            { name: 'Création de visuels (flyers, bannières...)', included: '1–10/mois' },
            { name: 'Création de logo', included: '3 propositions' },
            { name: 'Charte graphique / univers de marque', included: 'Basique' },
            { name: 'Formation / accompagnement', included: false },
            { name: 'Déclinaisons multiples', included: false },
            { name: 'Animation & motion design', included: false },
            { name: 'Révisions illimitées', included: false },
            { name: 'Support prioritaire', included: false }
          ]
        },
        {
          name: 'Medium',
          price: '999',
          period: 'projet',
          recommended: true,
          features: [
            { name: 'Création de visuels (flyers, bannières...)', included: '10–20/mois' },
            { name: 'Création de logo', included: 'Branding Medium' },
            { name: 'Charte graphique / univers de marque', included: 'Développement visuel' },
            { name: 'Formation / accompagnement', included: 'Conseil stratégique' },
            { name: 'Déclinaisons multiples', included: true },
            { name: 'Animation & motion design', included: false },
            { name: 'Révisions illimitées', included: false },
            { name: 'Support prioritaire', included: false }
          ]
        },
        {
          name: 'Premium',
          price: '1599',
          period: 'projet',
          features: [
            { name: 'Création de visuels (flyers, bannières...)', included: '>20/mois' },
            { name: 'Création de logo', included: 'Branding Complet' },
            { name: 'Charte graphique / univers de marque', included: 'Complète' },
            { name: 'Formation / accompagnement', included: 'Accompagnement' },
            { name: 'Déclinaisons multiples', included: true },
            { name: 'Animation & motion design', included: true },
            { name: 'Révisions illimitées', included: true },
            { name: 'Support prioritaire', included: true }
          ]
        }
      ]
    }
  };

  const currentData = pricingData[activeTab as keyof typeof pricingData];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6">
              <span className="text-sm font-medium text-primary">Forfaits</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Choisissez votre
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                forfait idéal
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Des solutions complètes adaptées à vos besoins, avec une tarification 
              transparente et des services de qualité professionnelle.
            </p>
          </div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-16 glass">
              <TabsTrigger value="web" className="flex items-center gap-2">
                <span className="text-lg">🌐</span>
                <span>Web</span>
              </TabsTrigger>
              <TabsTrigger value="social" className="flex items-center gap-2">
                <span className="text-lg">📱</span>
                <span>Social</span>
              </TabsTrigger>
              <TabsTrigger value="visual" className="flex items-center gap-2">
                <span className="text-lg">🎨</span>
                <span>Visual</span>
              </TabsTrigger>
            </TabsList>

            {/* Tab Content */}
            <TabsContent value={activeTab} className="space-y-8">
              {/* Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">{currentData.title}</h2>
                <p className="text-lg text-muted-foreground">{currentData.subtitle}</p>
              </div>

              {/* Pricing Grid */}
              <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {currentData.plans.map((plan, index) => (
                  <Card 
                    key={plan.name}
                    className={`glass shadow-card hover:shadow-glow transition-smooth relative ${
                      plan.recommended ? 'ring-2 ring-primary scale-105' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {plan.recommended && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className="gradient-primary px-4 py-1 text-white">
                          <Zap className="w-4 h-4 mr-1" />
                          Recommandé
                        </Badge>
                      </div>
                    )}
                    
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                      <div className="mt-4">
                        <span className="text-4xl font-bold text-primary">{plan.price}€</span>
                        <span className="text-muted-foreground ml-2">/{plan.period}</span>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6">
                      <ul className="space-y-3">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="flex-shrink-0 w-5 h-5 mt-0.5 mr-3">
                              {feature.included === true ? (
                                <Check className="w-5 h-5 text-primary" />
                              ) : feature.included === false ? (
                                <X className="w-5 h-5 text-muted-foreground" />
                              ) : (
                                <Check className="w-5 h-5 text-primary" />
                              )}
                            </div>
                            <span className={`text-sm ${
                              feature.included === false ? 'text-muted-foreground line-through' : ''
                            }`}>
                              {typeof feature.included === 'string' ? (
                                <>
                                  {feature.name}: <span className="font-medium text-primary">{feature.included}</span>
                                </>
                              ) : (
                                feature.name
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        className={`w-full transition-bounce group ${
                          plan.recommended 
                            ? 'gradient-primary hover:scale-105' 
                            : 'gradient-secondary hover:scale-105'
                        }`}
                        size="lg"
                      >
                        Prendre ce forfait
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {/* Comparison Table */}
          <div className="mt-16">
            <ComparisonTable />
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 glass rounded-3xl p-12 shadow-card">
            <h3 className="text-3xl font-bold mb-4">
              Besoin d'un forfait sur mesure ?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de vos besoins spécifiques et obtenir 
              un devis personnalisé adapté à votre projet.
            </p>
            <Button 
              size="lg" 
              className="gradient-primary shadow-primary hover:scale-105 transition-bounce px-8 py-4 text-lg"
            >
              Demander un devis personnalisé
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Forfaits;