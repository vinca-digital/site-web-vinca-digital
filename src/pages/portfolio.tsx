import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Globe, Palette, Share2, Star } from 'lucide-react';

const Portfolio = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      clientName: "TechCorp Solutions",
      
      projectImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      description: "Refonte complète du site web avec une interface moderne et responsive, optimisation SEO et intégration e-commerce.",
      services: ["Site Web", "SEO", "E-commerce"],
      category: "web",
      stats: { visits: "150k+", conversion: "+45%" }
    },
    {
      id: 2,
      clientName: "Creative Studio",
      
      projectImage: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop&crop=center",
      description: "Création d'identité visuelle complète, design de logo et charte graphique pour une agence créative innovante.",
      services: ["Branding", "Logo", "Charte Graphique"],
      category: "visual",
      stats: { brand: "100%", recognition: "+80%" }
    },
    {
      id: 3,
      clientName: "Social Buzz",
      
      projectImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
      description: "Stratégie complète de réseaux sociaux, création de contenu engageant et campagnes publicitaires ciblées.",
      services: ["Social Media", "Content", "Publicité"],
      category: "social",
      stats: { followers: "+250%", engagement: "+120%" }
    },
    {
      id: 4,
      clientName: "EcoGreen Initiative",
      
      projectImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=center",
      description: "Développement d'une plateforme web écologique avec fonctionnalités avancées et design éco-responsable.",
      services: ["Développement", "UX/UI", "Écologie"],
      category: "web",
      stats: { users: "50k+", impact: "+90%" }
    },
    {
      id: 5,
      clientName: "Fashion Forward",
      
      projectImage: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&h=600&fit=crop&crop=center",
      description: "E-commerce de mode avec expérience utilisateur premium, système de recommandation IA et intégration omnicanal.",
      services: ["E-commerce", "IA", "UX"],
      category: "web",
      stats: { sales: "+300%", retention: "+65%" }
    },
    {
      id: 6,
      clientName: "HealthTech Pro",
      
      projectImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop&crop=center",
      description: "Application de santé connectée avec interface intuitive, sécurité renforcée et conformité RGPD.",
      services: ["App Mobile", "Sécurité", "RGPD"],
      category: "web",
      stats: { users: "25k+", satisfaction: "98%" }
    },
    {
      id: 7,
      clientName: "TechCorp Solutions",
      
      projectImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      description: "Refonte complète du site web avec une interface moderne et responsive, optimisation SEO et intégration e-commerce.",
      services: ["Site Web", "SEO", "E-commerce"],
      category: "web",
      stats: { visits: "150k+", conversion: "+45%" }
    },
    {
      id: 8,
      clientName: "TechCorp Solutions",
      
      projectImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      description: "Refonte complète du site web avec une interface moderne et responsive, optimisation SEO et intégration e-commerce.",
      services: ["Site Web", "SEO", "E-commerce"],
      category: "web",
      stats: { visits: "150k+", conversion: "+45%" }
    },
    {
      id: 9,
      clientName: "TechCorp Solutions",
      
      projectImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      description: "Refonte complète du site web avec une interface moderne et responsive, optimisation SEO et intégration e-commerce.",
      services: ["Site Web", "SEO", "E-commerce"],
      category: "web",
      stats: { visits: "150k+", conversion: "+45%" }
    },
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets', icon: Star, gradient: 'gradient-primary' },
    { id: 'web', label: 'Famille Web', icon: Globe, gradient: 'bg-gradient-to-r from-cyan-400 to-blue-600' },
    { id: 'visual', label: 'Famille Visual', icon: Palette, gradient: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { id: 'social', label: 'Famille Social', icon: Share2, gradient: 'bg-gradient-to-r from-red-400 to-red-600' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-primary-glow/10 animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-secondary/10 to-secondary-glow/10 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full bg-gradient-to-r from-accent/10 to-accent-electric/10 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Notre{' '}
              <span className="gradient-text animate-pulse-neon">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Découvrez nos réalisations et les succès de nos clients
            </p>
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full animate-fade-in" style={{animationDelay: '0.4s'}}>
              <Star className="w-5 h-5 text-primary animate-pulse" />
              <span className="text-sm font-medium">Plus de 100 projets réalisés</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? `${category.gradient} text-white shadow-lg hover:scale-105`
                      : 'glass hover:border-primary/50 hover:scale-105'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{category.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Card
                key={project.id}
                className={`group relative overflow-hidden border-0 glass hover:scale-105 transition-all duration-500 animate-fade-in h-[580px] ${
                  hoveredCard === project.id ? 'shadow-primary-glow' : ''
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Project Image - 70% of card height */}
                <div className="relative h-[70%] overflow-hidden">
                  <img 
                    src={project.projectImage} 
                    alt={`${project.clientName} project`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* External link button floating on image */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 transition-all duration-300">
                      <ExternalLink className="w-4 h-4 text-white" />
                    </button>
                  </div>

                  {/* Client name overlay on image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-glow transition-colors duration-300">
                      {project.clientName}
                    </h3>
                    <div className="flex items-center gap-2">
                      <Badge 
                        variant="secondary" 
                        className={`text-xs px-2 py-1 border-0 ${
                          project.category === 'web' 
                            ? 'bg-cyan-500/20 text-cyan-300 backdrop-blur-sm' 
                            : project.category === 'visual'
                            ? 'bg-yellow-500/20 text-yellow-300 backdrop-blur-sm'
                            : 'bg-red-500/20 text-red-300 backdrop-blur-sm'
                        }`}
                      >
                        {project.category === 'web' 
                          ? 'Famille Web' 
                          : project.category === 'visual'
                          ? 'Famille Visual'
                          : 'Famille Social'
                        }
                      </Badge>
                    </div>
                  </div>
                </div>
                
                {/* Content section - 30% of card height */}
                <CardContent className="relative h-[30%] p-6 flex flex-col justify-between">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    {/* Description */}
                    <p className="text-muted-foreground mb-3 leading-relaxed text-sm line-clamp-2">
                      {project.description}
                    </p>

                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.services.slice(0, 3).map((service) => (
                        <Badge
                          key={service}
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-colors text-xs px-2 py-0.5"
                        >
                          {service}
                        </Badge>
                      ))}
                      {project.services.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-muted text-muted-foreground text-xs px-2 py-0.5"
                        >
                          +{project.services.length - 3}
                        </Badge>
                      )}
                    </div>


                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prêt à rejoindre nos{' '}
              <span className="gradient-text">clients satisfaits</span> ?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Discutons de votre projet et créons ensemble quelque chose d'extraordinaire
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 gradient-primary text-white rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-primary">
                Démarrer un projet
              </button>
              <button className="px-8 py-4 glass border-primary/30 hover:border-primary rounded-full font-semibold hover:scale-105 transition-all duration-300">
                Voir plus de projets
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;