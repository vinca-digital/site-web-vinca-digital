import { ArrowRight, BookOpen, Mail, TrendingUp, Brain, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const BlogNewsletterSection = () => {
  const blogPosts = [
    {
      title: 'IA et Marketing Digital : Révolution en cours',
      excerpt: 'Comment l\'intelligence artificielle transforme les stratégies marketing et les opportunités pour les entreprises.',
      category: 'IA',
      readTime: '5 min',
      icon: Brain,
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'SEO 2024 : Les nouvelles règles du jeu',
      excerpt: 'Les dernières mises à jour Google et les stratégies SEO qui fonctionnent vraiment cette année.',
      category: 'SEO',
      readTime: '7 min',
      icon: TrendingUp,
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Stratégie Social Media pour entrepreneurs',
      excerpt: 'Guide complet pour développer sa présence sur les réseaux sociaux avec un budget limité.',
      category: 'Marketing',
      readTime: '6 min',
      icon: Target,
      gradient: 'from-green-600 to-teal-600'
    }
  ];

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 gradient-primary rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 gradient-secondary rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Blog Section */}
          <div>
            <div className="mb-12">
              <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Blog</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                Derniers
                <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  articles
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Nos experts partagent leurs connaissances sur les dernières 
                tendances du digital, de l'IA au marketing.
              </p>
            </div>

            {/* Blog Posts */}
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <Card 
                  key={index}
                  className="glass shadow-card hover:shadow-primary transition-smooth group cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${post.gradient} rounded-lg flex items-center justify-center`}>
                          <post.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-medium text-primary">{post.category}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">{post.readTime}</span>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                    <div className="flex items-center text-primary hover:translate-x-1 transition-transform">
                      <span className="text-sm font-medium">Lire l'article</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="outline" className="glass border-primary/30 hover:border-primary group">
                Voir tous les articles
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="sticky top-24">
            <div className="glass rounded-3xl p-8 shadow-card">
              <div className="text-center mb-8">
                <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-secondary">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4">
                  Newsletter
                  <span className="block bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    Expertise
                  </span>
                </h3>
                <p className="text-muted-foreground">
                  Recevez chaque semaine nos conseils exclusifs et les dernières 
                  tendances du digital directement dans votre boîte mail.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                {[
                  '📈 Stratégies marketing avancées',
                  '🔥 Tendances IA et tech',
                  '💡 Conseils d\'experts',
                  '🎯 Études de cas exclusives'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Newsletter Form */}
              <form className="space-y-4">
                <Input 
                  type="email" 
                  placeholder="Votre adresse email"
                  className="glass border-primary/30 focus:border-primary"
                />
                <Button 
                  type="submit"
                  className="w-full gradient-secondary shadow-secondary hover:scale-105 transition-bounce"
                >
                  S'abonner gratuitement
                  <Mail className="ml-2 w-4 h-4" />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Pas de spam, désinscription en un clic. 
                <br />
                <strong>2000+</strong> entrepreneurs nous font déjà confiance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogNewsletterSection;