import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Feature {
  name: string;
  web: { standard: string | boolean; medium: string | boolean; premium: string | boolean };
  social: { standard: string | boolean; medium: string | boolean; premium: string | boolean };
  visual: { standard: string | boolean; medium: string | boolean; premium: string | boolean };
}

const ComparisonTable = () => {
  const features: Feature[] = [
    {
      name: "Articles de blog mensuels",
      web: { standard: "2/mois", medium: "4/mois", premium: "Illimités" },
      social: { standard: false, medium: false, premium: false },
      visual: { standard: false, medium: false, premium: false }
    },
    {
      name: "SEO (référencement naturel)",
      web: { standard: "Basique", medium: "Optimisé", premium: "Avancé + SEA" },
      social: { standard: false, medium: false, premium: false },
      visual: { standard: false, medium: false, premium: false }
    },
    {
      name: "Maintenance technique",
      web: { standard: "7j/7", medium: "7j/7", premium: "7j/7" },
      social: { standard: false, medium: false, premium: false },
      visual: { standard: false, medium: false, premium: false }
    },
    {
      name: "Formation / accompagnement",
      web: { standard: false, medium: "Formation incluse", premium: "Stratégie incluse" },
      social: { standard: false, medium: "Formation possible", premium: "Stratégie complète" },
      visual: { standard: false, medium: "Conseil stratégique", premium: "Accompagnement" }
    },
    {
      name: "Réseaux sociaux gérés",
      web: { standard: false, medium: false, premium: false },
      social: { standard: "1–2 réseaux", medium: "2–4 réseaux", premium: "5–6 réseaux" },
      visual: { standard: false, medium: false, premium: false }
    },
    {
      name: "Nombre de publications",
      web: { standard: false, medium: false, premium: false },
      social: { standard: "5–10/mois", medium: "10–20/mois", premium: ">20/mois" },
      visual: { standard: false, medium: false, premium: false }
    },
    {
      name: "Shooting photo/vidéo",
      web: { standard: false, medium: false, premium: false },
      social: { standard: false, medium: "1–2/mois", premium: "3–4/mois" },
      visual: { standard: false, medium: false, premium: false }
    },
    {
      name: "Campagnes Ads (Meta, TikTok...)",
      web: { standard: false, medium: "Selon besoins", premium: "Inclus" },
      social: { standard: false, medium: "1 campagne/mois", premium: "2–3 campagnes/mois" },
      visual: { standard: false, medium: false, premium: false }
    },
    {
      name: "Création de visuels (flyers, bannières...)",
      web: { standard: false, medium: false, premium: false },
      social: { standard: false, medium: false, premium: false },
      visual: { standard: "1–10/mois", medium: "10–20/mois", premium: ">20/mois" }
    },
    {
      name: "Création de logo",
      web: { standard: false, medium: false, premium: false },
      social: { standard: false, medium: false, premium: false },
      visual: { standard: "3 propositions", medium: "Branding Medium", premium: "Branding Complet" }
    },
    {
      name: "Charte graphique / univers de marque",
      web: { standard: false, medium: false, premium: false },
      social: { standard: false, medium: false, premium: false },
      visual: { standard: "Basique", medium: "Développement visuel", premium: "Complète" }
    }
  ];

  const plans = [
    { 
      category: 'web', 
      name: 'Web', 
      plans: [
        { level: 'standard', name: 'Standard', price: '899€', period: 'projet' },
        { level: 'medium', name: 'Medium', price: '1499€', period: 'projet', recommended: true },
        { level: 'premium', name: 'Premium', price: '2499€', period: 'projet' }
      ]
    },
    { 
      category: 'social', 
      name: 'Social', 
      plans: [
        { level: 'standard', name: 'Standard', price: '299€', period: 'mois' },
        { level: 'medium', name: 'Medium', price: '599€', period: 'mois', recommended: true },
        { level: 'premium', name: 'Premium', price: '999€', period: 'mois' }
      ]
    },
    { 
      category: 'visual', 
      name: 'Visual', 
      plans: [
        { level: 'standard', name: 'Standard', price: '599€', period: 'projet' },
        { level: 'medium', name: 'Medium', price: '999€', period: 'projet', recommended: true },
        { level: 'premium', name: 'Premium', price: '1599€', period: 'projet' }
      ]
    }
  ];

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-primary mx-auto" />
      ) : (
        <X className="w-5 h-5 text-muted-foreground mx-auto" />
      );
    }
    return <span className="text-sm font-medium text-primary">{value}</span>;
  };

  return (
    <div className="w-full overflow-x-auto">
      <Card className="glass shadow-card min-w-[1200px]">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-3xl font-bold mb-2">
            Tableau comparatif des forfaits
          </CardTitle>
          <p className="text-muted-foreground">
            Comparez toutes les fonctionnalités de nos différents forfaits
          </p>
        </CardHeader>
        
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              {/* Header with plans */}
              <thead>
                <tr>
                  <th className="text-left p-4 w-80">
                    <span className="text-lg font-semibold">Fonctionnalités</span>
                  </th>
                  {plans.map((category) => 
                    category.plans.map((plan) => (
                      <th key={`${category.category}-${plan.level}`} className="p-4 text-center min-w-[180px]">
                        <div className={`relative p-6 rounded-lg glass ${plan.recommended ? 'ring-2 ring-primary' : ''}`}>
                          {plan.recommended && (
                            <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 gradient-primary text-white">
                              Recommandé
                            </Badge>
                          )}
                          <div className="mb-2">
                            <span className="text-sm text-muted-foreground">{category.name}</span>
                          </div>
                          <div className="text-xl font-bold mb-1">{plan.name}</div>
                          <div className="text-2xl font-bold text-primary mb-1">{plan.price}</div>
                          <div className="text-sm text-muted-foreground mb-4">/{plan.period}</div>
                          <Button 
                            className={`w-full ${plan.recommended ? 'gradient-primary' : 'gradient-secondary'}`}
                            size="sm"
                          >
                            Choisir
                          </Button>
                        </div>
                      </th>
                    ))
                  )}
                </tr>
              </thead>
              
              {/* Features rows */}
              <tbody>
                {features.map((feature, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-muted/30' : ''}>
                    <td className="p-4 font-medium">
                      {feature.name}
                    </td>
                    {plans.map((category) => 
                      category.plans.map((plan) => (
                        <td key={`${category.category}-${plan.level}-${idx}`} className="p-4 text-center">
                          {renderFeatureValue(feature[category.category as keyof typeof feature][plan.level as keyof typeof feature.web])}
                        </td>
                      ))
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Notes */}
          <div className="mt-8 p-6 bg-muted/50 rounded-lg">
            <h4 className="font-semibold mb-3">💡 Notes importantes :</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Toutes les offres sont modulables sur 3, 6, 12, 24 ou 36 mois</li>
              <li>• L'identité visuelle est offerte pour tout engagement</li>
              <li>• Un <strong>forfait Global</strong> regroupe les 3 pôles : Web + Social + Visual</li>
              <li>• ⚡ Medium = formule boostée avec meilleures options (rapport qualité/prix)</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComparisonTable;