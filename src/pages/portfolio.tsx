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
      clientName: "FitPass",
      projectImage: "public/fitpass.webp",
      description: "Application mobile de fitness et bien-être avec suivi personnalisé, programmes d'entraînement et intégration d'objets connectés.",
      services: ["App Mobile", "UX/UI", "Fitness Tech"],
      category: "web",
      stats: { users: "50k+", satisfaction: "95%" }
    },
    {
      id: 2,
      clientName: "CMI (Compagnie Marocaine Interprofessionnelle)",
      projectImage: "LOGO+CMI+.webp",
      description: "Refonte complète de l'identité visuelle et du site web pour cette institution financière marocaine de premier plan.",
      services: ["Branding", "Site Web", "Institutionnel"],
      category: "visual",
      stats: { brand: "100%", recognition: "+80%" }
    },
    {
      id: 3,
      clientName: "Barcelo Hotels & Resorts",
      projectImage: "Logo+barcelo.webp",
      description: "Stratégie digitale complète pour la chaîne hôtelière internationale, incluant site web et campagnes marketing.",
      services: ["Site Web", "Marketing", "Hôtellerie"],
      category: "social",
      stats: { bookings: "+200%", engagement: "+150%" }
    },
    {
      id: 4,
      clientName: "CEC (Centre d'Études et de Coopération)",
      projectImage: "logo%252Bcec-04.webp",
      description: "Plateforme web éducative et collaborative pour le centre d'études avec fonctionnalités de partage de connaissances.",
      services: ["Site Web", "Éducation", "Collaboration"],
      category: "web",
      stats: { students: "10k+", courses: "500+" }
    },
    {
      id: 5,
      clientName: "PSG (Paris Saint-Germain)",
      projectImage: "COUVER+PSG.webp",
      description: "Design de couverture et identité visuelle pour les campagnes marketing du club de football parisien.",
      services: ["Design", "Branding", "Sport"],
      category: "social",
      stats: { reach: "5M+", engagement: "+300%" }
    },
    {
      id: 6,
      clientName: "Omnidata",
      projectImage: "LOGO+OMNIDATA+(1).webp",
      description: "Application de gestion de données et analytics avec interface intuitive et sécurité renforcée.",
      services: ["App Mobile", "Data Analytics", "Sécurité"],
      category: "web",
      stats: { users: "25k+", data: "1TB+" }
    },
    {
      id: 7,
      clientName: "Amuzeum",
      projectImage: "COUVER+AMUZEUM.webp",
      description: "Design de couverture et identité visuelle pour cette institution culturelle et muséale innovante.",
      services: ["Design", "Culture", "Branding"],
      category: "visual",
      stats: { visitors: "100k+", exhibitions: "20+" }
    },
    {
      id: 8,
      clientName: "Injectoy",
      projectImage: "LOGO+INJECTOY.webp",
      description: "Identité visuelle et site web pour cette entreprise spécialisée dans les solutions d'injection plastique.",
      services: ["Branding", "Site Web", "Industrie"],
      category: "web",
      stats: { clients: "500+", projects: "1000+" }
    },
    {
      id: 9,
      clientName: "BA (Business Analytics)",
      projectImage: "COUVER+BA.webp ",
      description: "Design de couverture et identité visuelle pour cette société de conseil en analyse d'affaires.",
      services: ["Design", "Consulting", "Analytics"],
      category: "web",
      stats: { clients: "200+", insights: "10k+" }
    },
    {
      id: 10,
      clientName: "Atahri",
      projectImage: "Capture+décran+2024-10-23+à+18.40.56.webp",
      description: "Refonte complète du site web avec une interface moderne et responsive pour cette entreprise technologique.",
      services: ["Site Web", "Tech", "UX/UI"],
      category: "web",
      stats: { visits: "150k+", conversion: "+45%" }
    },
    {
      id: 11,
      clientName: "Atahri",
      projectImage: "atahri.webp",
      description: "Identité visuelle complète et stratégie de marque pour cette startup technologique innovante.",
      services: ["Branding", "Logo", "Tech"],
      category: "visual",
      stats: { brand: "100%", recognition: "+90%" }
    },
    {
      id: 12,
      clientName: "CLP (Compagnie de Logistique et de Production)",
      projectImage: "CLP.webp",
      description: "Site web professionnel et identité visuelle pour cette entreprise de logistique et production industrielle.",
      services: ["Site Web", "Logistique", "Industrie"],
      category: "web",
      stats: { operations: "1000+", efficiency: "+60%" }
    },
    {
      id: 13,
      clientName: "Nashi",
      projectImage: "nashi.webp",
      description: "Design de marque et site web pour cette entreprise spécialisée dans les produits naturels et bio.",
      services: ["Branding", "Site Web", "Bio"],
      category: "visual",
      stats: { products: "50+", customers: "10k+" }
    },
    {
      id: 14,
      clientName: "Velvet Cosmetics",
      projectImage: "Velvet+Cosmetics.webp",
      description: "E-commerce de cosmétiques premium avec expérience utilisateur luxueuse et gamme de produits exclusifs.",
      services: ["E-commerce", "Cosmétiques", "Luxe"],
      category: "visual",
      stats: { sales: "+400%", products: "200+" }
    },
    {
      id: 15,
      clientName: "Olea",
      projectImage: "olea.webp",
      description: "Identité visuelle et site web pour cette entreprise spécialisée dans les produits à base d'huile d'olive.",
      services: ["Branding", "Site Web", "Agroalimentaire"],
      category: "visual",
      stats: { production: "1000L+", quality: "A+" }
    },
    {
      id: 16,
      clientName: "Studio Bo",
      projectImage: "images+(3).webp",
      description: "Design de marque et identité visuelle pour ce studio créatif spécialisé dans la production audiovisuelle.",
      services: ["Branding", "Audiovisuel", "Créatif"],
      category: "visual",
      stats: { projects: "100+", clients: "50+" }
    },
    {
      id: 17,
      clientName: "Grimex",
      projectImage: "Grimex.webp",
      description: "Site web professionnel et identité visuelle pour cette entreprise de solutions industrielles et mécaniques.",
      services: ["Site Web", "Industrie", "Mécanique"],
      category: "web",
      stats: { solutions: "500+", reliability: "99%" }
    },
    {
      id: 18,
      clientName: "TFP (Technologies de Formation Professionnelle)",
      projectImage: "Capture+d'écran+2025-03-19+à+14.17.15.webp",
      description: "Plateforme de formation en ligne avec système de gestion des apprenants et suivi pédagogique avancé.",
      services: ["E-learning", "Formation", "Tech"],
      category: "web",
      stats: { learners: "5k+", courses: "200+" }
    },
    {
      id: 19,
      clientName: "TFP",
      projectImage: "tfp.webp",
      description: "Identité visuelle complète et site web pour cette organisation de formation professionnelle.",
      services: ["Branding", "Site Web", "Formation"],
      category: "visual",
      stats: { students: "10k+", success: "95%" }
    },
    {
      id: 20,
      clientName: "Studio Bo",
      projectImage: "Studio+Bo.webp",
      description: "Refonte complète de l'identité visuelle et du site web pour ce studio de production audiovisuelle.",
      services: ["Branding", "Site Web", "Production"],
      category: "visual",
      stats: { productions: "200+", awards: "15+" }
    },
    {
      id: 21,
      clientName: "Moroccan Zey",
      projectImage: "Moroccan+Zey.webp",
      description: "E-commerce de produits marocains authentiques avec design traditionnel et expérience utilisateur moderne.",
      services: ["E-commerce", "Artisanat", "Maroc"],
      category: "web",
      stats: { products: "300+", artisans: "100+" }
    },
    {
      id: 22,
      clientName: "Cays Studio",
      projectImage: "LOGO+Cays+studio+BLUE.webp",
      description: "Identité visuelle et site web pour ce studio créatif spécialisé dans le design graphique et digital.",
      services: ["Branding", "Site Web", "Design"],
      category: "visual",
      stats: { projects: "150+", creativity: "100%" }
    },
    {
      id: 23,
      clientName: "B Padel",
      projectImage: "B+PADEL+LG+-2.webp",
      description: "Site web et identité visuelle pour cette entreprise spécialisée dans les équipements de padel et sports de raquette.",
      services: ["Site Web", "Sport", "Équipements"],
      category: "social",
      stats: { equipment: "500+", players: "10k+" }
    },
    {
      id: 24,
      clientName: "Medicor",
      projectImage: "COUVER+MEDICOR.webp",
      description: "Design de couverture et identité visuelle pour cette entreprise de solutions médicales et paramédicales.",
      services: ["Design", "Médical", "Santé"],
      category: "visual",
      stats: { solutions: "100+", patients: "50k+" }
    },
    {
    id: 25,
      clientName: "Finegan",
      projectImage: "307990730_574520681133922_8578853240172728940_n.webp",
      description: "Identité visuelle et stratégie de marque pour cette entreprise de services financiers et de conseil.",
      services: ["Branding", "Finance", "Conseil"],
      category: "visual",
      stats: { clients: "1000+", assets: "100M+" }
    },
    {
      id: 26,
      clientName: "FLB (Fédération de Lutte Belge)",
      projectImage: "flb.webp",
      description: "Site web institutionnel et identité visuelle pour la fédération nationale de lutte sportive.",
      services: ["Site Web", "Sport", "Fédération"],
      category: "social",
      stats: { members: "5k+", clubs: "100+" }
    },
    {
      id: 27,
      clientName: "YST",
      projectImage: "COUVER+YST_.webp",
      description: "Design de couverture et identité visuelle pour cette entreprise de technologies et solutions digitales.",
      services: ["Design", "Tech", "Solutions"],
      category: "visual",
      stats: { solutions: "200+", clients: "500+" }
    },
    {
      id: 28,
      clientName: "Philip Martins",
      projectImage: "philipmartins.webp",
      description: "Site web personnel et identité visuelle pour ce professionnel indépendant ou consultant.",
      services: ["Site Web", "Personal Branding", "Consulting"],
      category: "visual",
      stats: { projects: "50+", expertise: "15+" }
    },
    {
      id: 29,
      clientName: "VSL",
      projectImage: "VSL.webp",
      description: "Identité visuelle et site web pour cette entreprise de services ou solutions spécialisées.",
      services: ["Branding", "Site Web", "Services"],
      category: "web",
      stats: { services: "20+", clients: "300+" }
    },
    {
      id: 30,
      clientName: "La Signature",
      projectImage: "la+signature.webp",
      description: "Design de marque et site web pour cette entreprise de services premium ou de luxe.",
      services: ["Branding", "Site Web", "Luxe"],
      category: "visual",
      stats: { clients: "200+", satisfaction: "98%" }
    },
    {
      id: 31,
      clientName: "Scuba Soukw",
      projectImage: "scuba+soukw.webp",
      description: "E-commerce spécialisé dans les équipements de plongée et sports nautiques avec gamme complète de produits.",
      services: ["E-commerce", "Plongée", "Sports Nautiques"],
      category: "web",
      stats: { products: "1000+", divers: "5k+" }
    },
    {
      id: 32,
      clientName: "Akademed",
      projectImage: "AKADEMED.webp",
      description: "Plateforme éducative et médicale avec formation continue et ressources pour professionnels de santé.",
      services: ["E-learning", "Médical", "Formation"],
      category: "web",
      stats: { courses: "300+", professionals: "10k+" }
    },
    {
      id: 33,
      clientName: "Dr. Douiri",
      projectImage: "Dr+Douiri.webp",
      description: "Site web professionnel et identité visuelle pour ce médecin ou cabinet médical spécialisé.",
      services: ["Site Web", "Médical", "Cabinet"],
      category: "web",
      stats: { patients: "5k+", experience: "20+" }
    },
    {
      id: 34,
      clientName: "Finegan",
      projectImage: "FINEGAN.webp",
      description: "Identité visuelle complète et stratégie de marque pour cette entreprise de services financiers.",
      services: ["Branding", "Finance", "Services"],
      category: "visual",
      stats: { clients: "1000+", trust: "99%" }
    },
    {
      id: 35,
      clientName: "H",
      projectImage: "H.webp",
      description: "Design minimaliste et identité visuelle pour cette marque ou entreprise avec approche épurée.",
      services: ["Branding", "Minimalisme", "Design"],
      category: "visual",
      stats: { simplicity: "100%", impact: "High" }
    },
    {
      id: 36,
      clientName: "F",
      projectImage: "logo+f.webp",
      description: "Identité visuelle et site web pour cette entreprise ou marque avec design moderne et épuré.",
      services: ["Branding", "Site Web", "Modern"],
      category: "visual",
      stats: { projects: "100+", innovation: "90%" }
    },
    {
      id: 37,
      clientName: "Matière Pro",
      projectImage: "MATIERE+PRO.webp",
      description: "Site web et identité visuelle pour cette entreprise spécialisée dans les matériaux professionnels et industriels.",
      services: ["Site Web", "Matériaux", "Industrie"],
      category: "web",
      stats: { materials: "500+", quality: "Premium" }
    },
    {
      id: 38,
      clientName: "Ose Agency",
      projectImage: "Ose+agency.webp",
      description: "Identité visuelle et site web pour cette agence créative spécialisée dans la communication et le marketing.",
      services: ["Branding", "Site Web", "Marketing"],
      category: "social",
      stats: { campaigns: "200+", creativity: "100%" }
    },
    {
      id: 39,
      clientName: "Pro'Cess",
      projectImage: "Pro'Cess.webp",
      description: "Site web et identité visuelle pour cette entreprise de solutions de processus et d'optimisation industrielle.",
      services: ["Site Web", "Processus", "Optimisation"],
      category: "web",
      stats: { processes: "100+", efficiency: "+70%" }
    },
    {
      id: 40,
      clientName: "Be in Agriculture",
      projectImage: "2.webp",
      description: "Identité visuelle et site web pour cette entreprise spécialisée dans les solutions agricoles et agroalimentaires.",
      services: ["Branding", "Site Web", "Agriculture"],
      category: "web",
      stats: { solutions: "50+", farmers: "1000+" }
    },
    {
      id: 41,
      clientName: "Be in Agriculture",
      projectImage: "Be+in+Agriculture.webp",
      description: "Plateforme digitale et identité visuelle pour cette entreprise innovante dans le secteur agricole.",
      services: ["Site Web", "Agriculture", "Innovation"],
      category: "web",
      stats: { innovation: "100%", impact: "High" }
    },
    {
      id: 42,
      clientName: "JIN",
      projectImage: "JIN+2.webp",
      description: "Identité visuelle et site web pour cette marque ou entreprise avec design moderne et contemporain.",
      services: ["Branding", "Site Web", "Modern"],
      category: "visual",
      stats: { projects: "80+", design: "Award-winning" }
    }
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