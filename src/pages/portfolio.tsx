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
<<<<<<< HEAD
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
=======
      clientName: "FitPass",
      projectImage: "public/fitpass.webp",
      description: "Application mobile de fitness avec suivi personnalisé, intégration d'objets connectés et communauté d'utilisateurs motivés.",
      services: ["App Mobile", "Fitness", "IoT"],
      category: "web",
      stats: { users: "50k+", retention: "+75%" }
    },
    {
      id: 2,
      clientName: "CMI",
      projectImage: "LOGO+CMI+.webp",
      description: "Identité visuelle moderne pour une entreprise d'innovation technologique, design épuré et professionnel.",
      services: ["Branding", "Logo", "Identité Visuelle"],
      category: "visual",
      stats: { brand: "100%", recognition: "+60%" }
    },
    {
      id: 3,
      clientName: "Barcelo",
      projectImage: "Logo+barcelo.webp",
      description: "Refonte complète de l'identité visuelle pour une marque de luxe, design sophistiqué et élégant.",
      services: ["Branding", "Luxury", "Design"],
      category: "visual",
      stats: { brand: "100%", premium: "+90%" }
    },
    {
      id: 4,
      clientName: "CEC",
      projectImage: "logo%252Bcec-04.webp",
      description: "Identité visuelle pour une entreprise de construction écologique, design durable et responsable.",
      services: ["Branding", "Écologie", "Construction"],
      category: "visual",
      stats: { brand: "100%", impact: "+85%" }
    },
    {
      id: 5,
      clientName: "PSG",
      projectImage: "COUVER+PSG.webp",
      description: "Design de couverture et identité visuelle pour une marque sportive de renommée internationale.",
      services: ["Design", "Sport", "Branding"],
      category: "visual",
      stats: { reach: "1M+", engagement: "+200%" }
    },
    {
      id: 6,
      clientName: "Omnidata",
      projectImage: "LOGO+OMNIDATA+(1).webp",
      description: "Identité visuelle pour une entreprise de data science, design moderne et technologique.",
      services: ["Branding", "Tech", "Data"],
      category: "visual",
      stats: { brand: "100%", tech: "+95%" }
    },
    {
      id: 7,
      clientName: "Amuzeum",
      projectImage: "COUVER+AMUZEUM.webp",
      description: "Design de couverture et identité visuelle pour une institution culturelle innovante.",
      services: ["Design", "Culture", "Branding"],
      category: "visual",
      stats: { visitors: "100k+", culture: "+150%" }
    },
    {
      id: 8,
      clientName: "Injectoy",
      projectImage: "LOGO+INJECTOY.webp",
      description: "Identité visuelle pour une entreprise de jouets innovants, design créatif et ludique.",
      services: ["Branding", "Jouets", "Innovation"],
      category: "visual",
      stats: { brand: "100%", kids: "+120%" }
    },
    {
      id: 9,
      clientName: "BA",
      projectImage: "COUVER+BA.webp ",
      description: "Design de couverture et identité visuelle pour une marque de mode contemporaine.",
      services: ["Design", "Mode", "Branding"],
      category: "visual",
      stats: { fashion: "+180%", style: "+90%" }
    },
    {
      id: 10,
      clientName: "Atahri",
      projectImage: "Capture+décran+2024-10-23+à+18.40.56.webp",
      description: "Identité visuelle pour une entreprise technologique innovante, design futuriste et moderne.",
      services: ["Branding", "Tech", "Innovation"],
      category: "visual",
      stats: { brand: "100%", future: "+200%" }
    },
    {
      id: 11,
      clientName: "Atahri",
      projectImage: "atahri.webp",
      description: "Identité visuelle complète pour une startup technologique, design épuré et professionnel.",
      services: ["Branding", "Startup", "Tech"],
      category: "visual",
      stats: { brand: "100%", growth: "+300%" }
    },
    {
      id: 12,
      clientName: "CLP",
      projectImage: "CLP.webp",
      description: "Identité visuelle pour une entreprise de services professionnels, design corporate et fiable.",
      services: ["Branding", "Corporate", "Services"],
      category: "visual",
      stats: { brand: "100%", trust: "+85%" }
    },
    {
      id: 13,
      clientName: "Nashi",
      projectImage: "nashi.webp",
      description: "Identité visuelle pour une marque de cosmétiques naturels, design organique et authentique.",
      services: ["Branding", "Cosmétiques", "Naturel"],
      category: "visual",
      stats: { brand: "100%", natural: "+150%" }
    },
    {
      id: 14,
      clientName: "Velvet Cosmetics",
      projectImage: "Velvet+Cosmetics.webp",
      description: "Identité visuelle pour une marque de cosmétiques premium, design luxueux et élégant.",
      services: ["Branding", "Luxury", "Cosmétiques"],
      category: "visual",
      stats: { brand: "100%", luxury: "+200%" }
    },
    {
      id: 15,
      clientName: "Olea",
      projectImage: "olea.webp",
      description: "Identité visuelle pour une marque d'huiles essentielles, design naturel et apaisant.",
      services: ["Branding", "Bien-être", "Naturel"],
      category: "visual",
      stats: { brand: "100%", wellness: "+120%" }
    },
    {
      id: 16,
      clientName: "Studio Images",
      projectImage: "images+(3).webp",
      description: "Identité visuelle pour un studio de photographie créatif, design artistique et inspirant.",
      services: ["Branding", "Photographie", "Art"],
      category: "visual",
      stats: { brand: "100%", creativity: "+180%" }
    },
    {
      id: 17,
      clientName: "Grimex",
      projectImage: "Grimex.webp",
      description: "Identité visuelle pour une entreprise industrielle, design robuste et professionnel.",
      services: ["Branding", "Industrie", "Corporate"],
      category: "visual",
      stats: { brand: "100%", industrial: "+90%" }
    },
    {
      id: 18,
      clientName: "Digital Agency",
      projectImage: "Capture+d'écran+2025-03-19+à+14.17.15.webp",
      description: "Identité visuelle pour une agence digitale, design moderne et innovant.",
      services: ["Branding", "Digital", "Agency"],
      category: "visual",
      stats: { brand: "100%", digital: "+250%" }
    },
    {
      id: 19,
      clientName: "TFP",
      projectImage: "tfp.webp",
      description: "Identité visuelle pour une entreprise de formation professionnelle, design éducatif et inspirant.",
      services: ["Branding", "Formation", "Éducation"],
      category: "visual",
      stats: { brand: "100%", education: "+140%" }
    },
    {
      id: 20,
      clientName: "Studio Bo",
      projectImage: "Studio+Bo.webp",
      description: "Identité visuelle pour un studio créatif, design artistique et contemporain.",
      services: ["Branding", "Studio", "Créatif"],
      category: "visual",
      stats: { brand: "100%", creative: "+160%" }
    },
    {
      id: 21,
      clientName: "Moroccan Zey",
      projectImage: "Moroccan+Zey.webp",
      description: "Identité visuelle pour une marque marocaine authentique, design culturel et traditionnel.",
      services: ["Branding", "Culture", "Tradition"],
      category: "visual",
      stats: { brand: "100%", culture: "+180%" }
    },
    {
      id: 22,
      clientName: "Cays Studio",
      projectImage: "LOGO+Cays+studio+BLUE.webp",
      description: "Identité visuelle pour un studio de design, design moderne et professionnel.",
      services: ["Branding", "Studio", "Design"],
      category: "visual",
      stats: { brand: "100%", design: "+200%" }
    },
    {
      id: 23,
      clientName: "B Padel",
      projectImage: "B+PADEL+LG+-2.webp",
      description: "Identité visuelle pour une marque de padel, design sportif et dynamique.",
      services: ["Branding", "Sport", "Padel"],
      category: "visual",
      stats: { brand: "100%", sport: "+150%" }
    },
    {
      id: 24,
      clientName: "Medicor",
      projectImage: "COUVER+MEDICOR.webp",
      description: "Design de couverture et identité visuelle pour une entreprise médicale, design professionnel et rassurant.",
      services: ["Design", "Médical", "Santé"],
      category: "visual",
      stats: { trust: "95%", medical: "+120%" }
    },
    {
      id: 25,
      clientName: "Social Media Brand",
      projectImage: "307990730_574520681133922_8578853240172728940_n.webp",
      description: "Identité visuelle pour une marque de réseaux sociaux, design moderne et connecté.",
      services: ["Branding", "Social Media", "Digital"],
      category: "social",
      stats: { followers: "+300%", engagement: "+180%" }
    },
    {
      id: 26,
      clientName: "FLB",
      projectImage: "flb.webp",
      description: "Identité visuelle pour une entreprise de services financiers, design professionnel et fiable.",
      services: ["Branding", "Finance", "Corporate"],
      category: "visual",
      stats: { brand: "100%", trust: "+90%" }
    },
    {
      id: 27,
      clientName: "YST",
      projectImage: "COUVER+YST_.webp",
      description: "Design de couverture et identité visuelle pour une marque innovante, design futuriste.",
      services: ["Design", "Innovation", "Tech"],
      category: "visual",
      stats: { innovation: "+250%", future: "+180%" }
    },
    {
      id: 28,
      clientName: "Philip Martins",
      projectImage: "philipmartins.webp",
      description: "Identité visuelle personnelle pour un professionnel, design élégant et sophistiqué.",
      services: ["Branding", "Personal", "Luxury"],
      category: "visual",
      stats: { brand: "100%", personal: "+200%" }
    },
    {
      id: 29,
      clientName: "VSL",
      projectImage: "VSL.webp",
      description: "Identité visuelle pour une entreprise de services, design moderne et professionnel.",
      services: ["Branding", "Services", "Corporate"],
      category: "visual",
      stats: { brand: "100%", services: "+140%" }
    },
    {
      id: 30,
      clientName: "La Signature",
      projectImage: "la+signature.webp",
      description: "Identité visuelle pour une marque de luxe, design exclusif et raffiné.",
      services: ["Branding", "Luxury", "Exclusif"],
      category: "visual",
      stats: { brand: "100%", luxury: "+300%" }
    },
    {
      id: 31,
      clientName: "Scuba Soukw",
      projectImage: "scuba+soukw.webp",
      description: "Identité visuelle pour une marque de plongée, design marin et aventureux.",
      services: ["Branding", "Plongée", "Aventure"],
      category: "visual",
      stats: { brand: "100%", adventure: "+160%" }
    },
    {
      id: 32,
      clientName: "Akademed",
      projectImage: "AKADEMED.webp",
      description: "Identité visuelle pour une institution médicale éducative, design professionnel et académique.",
      services: ["Branding", "Médical", "Éducation"],
      category: "visual",
      stats: { brand: "100%", education: "+180%" }
    },
    {
      id: 33,
      clientName: "Dr Douiri",
      projectImage: "Dr+Douiri.webp",
      description: "Identité visuelle personnelle pour un professionnel de santé, design médical et rassurant.",
      services: ["Branding", "Médical", "Personal"],
      category: "visual",
      stats: { brand: "100%", trust: "+95%" }
    },
    {
      id: 34,
      clientName: "Finegan",
      projectImage: "FINEGAN.webp",
      description: "Identité visuelle pour une marque premium, design sophistiqué et élégant.",
      services: ["Branding", "Premium", "Luxury"],
      category: "visual",
      stats: { brand: "100%", premium: "+220%" }
    },
    {
      id: 35,
      clientName: "H Brand",
      projectImage: "H.webp",
      description: "Identité visuelle minimaliste pour une marque moderne, design épuré et contemporain.",
      services: ["Branding", "Minimaliste", "Modern"],
      category: "visual",
      stats: { brand: "100%", modern: "+180%" }
    },
    {
      id: 36,
      clientName: "F Brand",
      projectImage: "logo+f.webp",
      description: "Identité visuelle pour une marque de mode, design élégant et tendance.",
      services: ["Branding", "Mode", "Fashion"],
      category: "visual",
      stats: { brand: "100%", fashion: "+160%" }
    },
    {
      id: 37,
      clientName: "Matière Pro",
      projectImage: "MATIERE+PRO.webp",
      description: "Identité visuelle pour une entreprise de matériaux professionnels, design industriel et robuste.",
      services: ["Branding", "Industrie", "Matériaux"],
      category: "visual",
      stats: { brand: "100%", industrial: "+140%" }
    },
    {
      id: 38,
      clientName: "Ose Agency",
      projectImage: "Ose+agency.webp",
      description: "Identité visuelle pour une agence créative audacieuse, design innovant et inspirant.",
      services: ["Branding", "Agency", "Créatif"],
      category: "visual",
      stats: { brand: "100%", creative: "+200%" }
    },
    {
      id: 39,
      clientName: "Pro'Cess",
      projectImage: "Pro'Cess.webp",
      description: "Identité visuelle pour une entreprise de processus industriels, design professionnel et efficace.",
      services: ["Branding", "Industrie", "Processus"],
      category: "visual",
      stats: { brand: "100%", efficiency: "+160%" }
    },
    {
      id: 40,
      clientName: "Digital Brand",
      projectImage: "2.webp",
      description: "Identité visuelle pour une marque digitale, design moderne et connecté.",
      services: ["Branding", "Digital", "Tech"],
      category: "visual",
      stats: { brand: "100%", digital: "+180%" }
    },
    {
      id: 41,
      clientName: "Be in Agriculture",
      projectImage: "Be+in+Agriculture.webp",
      description: "Identité visuelle pour une entreprise agricole innovante, design naturel et durable.",
      services: ["Branding", "Agriculture", "Durable"],
      category: "visual",
      stats: { brand: "100%", sustainable: "+140%" }
    },
    {
      id: 42,
      clientName: "JIN",
      projectImage: "JIN+2.webp",
      description: "Identité visuelle pour une marque asiatique, design culturel et authentique.",
      services: ["Branding", "Culture", "Asiatique"],
      category: "visual",
      stats: { brand: "100%", culture: "+160%" }
>>>>>>> 804f145 (Premier commit - mise à jour site Vinca)
    },
  ];

  const categories = [
    { id: 'all', label: 'Tous les projets', icon: Star, gradient: 'gradient-primary' },
    { id: 'web', label: 'Famille Web', icon: Globe, gradient: 'bg-gradient-to-r from-cyan-400 to-blue-600' },
    { id: 'visual', label: 'Famille Visual', icon: Palette, gradient: 'bg-gradient-to-r from-yellow-400 to-yellow-600' },
    { id: 'social', label: 'Famille Social', icon: Share2, gradient: 'bg-gradient-to-r from-red-400 to-red-600' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

<<<<<<< HEAD
  const filteredProjects = activeCategory === 'all' 
    ? projects 
=======
  const filteredProjects = activeCategory === 'all'
    ? projects
>>>>>>> 804f145 (Premier commit - mise à jour site Vinca)
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
<<<<<<< HEAD
      
=======

>>>>>>> 804f145 (Premier commit - mise à jour site Vinca)
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 gradient-primary opacity-5"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-primary/10 to-primary-glow/10 animate-float"></div>
<<<<<<< HEAD
          <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-secondary/10 to-secondary-glow/10 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full bg-gradient-to-r from-accent/10 to-accent-electric/10 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
=======
          <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-gradient-to-r from-secondary/10 to-secondary-glow/10 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/3 w-20 h-20 rounded-full bg-gradient-to-r from-accent/10 to-accent-electric/10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

>>>>>>> 804f145 (Premier commit - mise à jour site Vinca)
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Notre{' '}
              <span className="gradient-text animate-pulse-neon">Portfolio</span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{animationDelay: '0.2s'}}>
              Découvrez nos réalisations et les succès de nos clients
            </p>
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full animate-fade-in" style={{animationDelay: '0.4s'}}>
=======
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Découvrez nos réalisations et les succès de nos clients
            </p>
            <div className="inline-flex items-center gap-2 glass px-6 py-3 rounded-full animate-fade-in" style={{ animationDelay: '0.4s' }}>
>>>>>>> 804f145 (Premier commit - mise à jour site Vinca)
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
<<<<<<< HEAD
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? `${category.gradient} text-white shadow-lg hover:scale-105`
                      : 'glass hover:border-primary/50 hover:scale-105'
                  }`}
=======
                  className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${activeCategory === category.id
                      ? `${category.gradient} text-white shadow-lg hover:scale-105`
                      : 'glass hover:border-primary/50 hover:scale-105'
                    }`}
>>>>>>> 804f145 (Premier commit - mise à jour site Vinca)
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
<<<<<<< HEAD
                className={`group relative overflow-hidden border-0 glass hover:scale-105 transition-all duration-500 animate-fade-in h-[580px] ${
                  hoveredCard === project.id ? 'shadow-primary-glow' : ''
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
=======
                className={`group relative overflow-hidden border-0 glass hover:scale-105 transition-all duration-500 animate-fade-in h-[580px] ${hoveredCard === project.id ? 'shadow-primary-glow' : ''
                  }`}
                style={{ animationDelay: `${index * 0.1}s` }}
>>>>>>> 804f145 (Premier commit - mise à jour site Vinca)
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Project Image - 70% of card height */}
                <div className="relative h-[70%] overflow-hidden">
<<<<<<< HEAD
                  <img 
                    src={project.projectImage} 
=======
                  <img
                    src={project.projectImage}
>>>>>>> 804f145 (Premier commit - mise à jour site Vinca)
                    alt={`${project.clientName} project`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
<<<<<<< HEAD
                  
=======

>>>>>>> 804f145 (Premier commit - mise à jour site Vinca)
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
<<<<<<< HEAD
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
=======
                      <Badge
                        variant="secondary"
                        className={`text-xs px-2 py-1 border-0 ${project.category === 'web'
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
>>>>>>> 804f145 (Premier commit - mise à jour site Vinca)
                        }
                      </Badge>
                    </div>
                  </div>
                </div>
<<<<<<< HEAD
                
=======

>>>>>>> 804f145 (Premier commit - mise à jour site Vinca)
                {/* Content section - 30% of card height */}
                <CardContent className="relative h-[30%] p-6 flex flex-col justify-between">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<<<<<<< HEAD
                  
=======

>>>>>>> 804f145 (Premier commit - mise à jour site Vinca)
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