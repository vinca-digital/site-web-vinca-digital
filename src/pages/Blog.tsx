import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: string;
  category: string;
}

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState('Tous');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: "Les Secrets du SEO pour Booster Votre Visibilité",
      excerpt: "Découvrez des stratégies SEO avancées pour améliorer votre classement sur les moteurs de recherche et attirer plus de trafic qualifié vers votre site web.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=800&q=80",
      date: "27 Oct 2023",
      author: "Sophie Martin",
      category: "Marketing"
    },
    {
      id: 2,
      title: "Web Design Moderne : Tendances et Bonnes Pratiques",
      excerpt: "Plongez dans les dernières tendances du web design et apprenez comment créer des sites web esthétiques, fonctionnels et performants qui captivent vos visiteurs.",
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?fit=crop&w=800&q=80",
      date: "25 Oct 2023",
      author: "Lucas Dubois",
      category: "Web Design"
    },
    {
      id: 3,
      title: "L'Importance Cruciale de l'Identité Visuelle",
      excerpt: "Comprendre comment une identité visuelle forte peut renforcer votre marque et créer une connexion durable avec votre audience cible.",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?fit=crop&w=800&q=80",
      date: "23 Oct 2023",
      author: "Emma Rousseau",
      category: "Identité Visuelle"
    },
    {
      id: 4,
      title: "Stratégies Réseaux Sociaux qui Convertissent",
      excerpt: "Les meilleures pratiques pour transformer vos abonnés en clients fidèles grâce à des stratégies de contenu efficaces et engageantes.",
      imageUrl: "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?fit=crop&w=800&q=80",
      date: "20 Oct 2023",
      author: "Thomas Bernard",
      category: "Réseaux Sociaux"
    },
    {
      id: 5,
      title: "IA et Marketing : L'Avenir du Digital",
      excerpt: "Comment l'intelligence artificielle révolutionne les stratégies marketing et les opportunités qu'elle offre aux entreprises modernes.",
      imageUrl: "https://images.unsplash.com/photo-1500673922987-e212871fec22?fit=crop&w=800&q=80",
      date: "18 Oct 2023",
      author: "Marie Lefort",
      category: "Marketing"
    },
    {
      id: 6,
      title: "UX/UI : Créer des Expériences Inoubliables",
      excerpt: "Les principes fondamentaux pour concevoir des interfaces utilisateur intuitives qui améliorent l'engagement et la satisfaction client.",
      imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?fit=crop&w=800&q=80",
      date: "15 Oct 2023",
      author: "Antoine Moreau",
      category: "Web Design"
    }
  ];

  const categories = ['Tous', 'Marketing', 'Web Design', 'Identité Visuelle', 'Réseaux Sociaux'];

  const filteredPosts = activeFilter === 'Tous' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 gradient-primary rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 gradient-secondary rounded-full opacity-10 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8">
              <BookOpen className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Blog</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Nos dernières
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                réflexions & idées digitales
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Conseils, études de cas et analyses pour booster votre marque dans l'univers digital.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className="transition-smooth hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="group glass shadow-card hover:shadow-primary transition-smooth cursor-pointer overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image - 70% of card */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="glass text-xs font-medium px-3 py-1.5 rounded-full text-primary">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content - 30% of card */}
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.author}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-smooth line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-primary hover:text-primary/80 group/btn"
                  >
                    Lire plus
                    <ArrowRight className="w-4 h-4 ml-2 transition-smooth group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 gradient-primary rounded-full opacity-20 blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Envie de passer à l'action ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discutons de votre projet et découvrons ensemble comment nous pouvons 
            transformer votre vision en réalité digitale.
          </p>
          <Button size="lg" className="shadow-glow">
            Contactez-nous
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;