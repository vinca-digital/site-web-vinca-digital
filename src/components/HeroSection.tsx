import { ArrowRight, Play, Stars, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 gradient-primary rounded-full opacity-20 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 gradient-secondary rounded-full opacity-20 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] gradient-card rounded-full opacity-10 blur-3xl animate-pulse"></div>
      </div>

      {/* 3D Grid Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: 'perspective(500px) rotateX(20deg)',
          transformOrigin: 'center top'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-8 animate-pulse-glow">
            <Stars className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Plus qu'un prestataire, votre partenaire</span>
            <Zap className="w-5 h-5 text-secondary" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block">Votre croissance</span>
            <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-border">
              digitale accélérée
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Une équipe pluridisciplinaire de designers, développeurs et experts marketing 
            pour transformer votre vision en succès numérique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              size="lg" 
              className="gradient-primary shadow-primary hover:scale-105 transition-bounce text-lg px-8 py-4 rounded-xl"
            >
              Découvrir nos forfaits
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="glass border-primary/30 hover:border-primary text-lg px-8 py-4 rounded-xl group"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Voir notre présentation
            </Button>
          </div>

          {/* 3D Cards Preview */}
          <div className="perspective">
            <div className="flex justify-center items-center space-x-6 transform-3d">
              {/* Web Card */}
              <div className="glass rounded-2xl p-6 shadow-card hover:rotate-y-12 transition-bounce w-64 h-40 flex flex-col justify-center items-center">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-3">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="font-bold text-lg">Web</h3>
                <p className="text-sm text-muted-foreground">Sites & Apps</p>
              </div>

              {/* Social Card */}
              <div className="glass rounded-2xl p-6 shadow-card hover:rotate-y-12 transition-bounce w-64 h-40 flex flex-col justify-center items-center" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center mb-3">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-bold text-lg">Social</h3>
                <p className="text-sm text-muted-foreground">Réseaux & Contenu</p>
              </div>

              {/* Visual Card */}
              <div className="glass rounded-2xl p-6 shadow-card hover:rotate-y-12 transition-bounce w-64 h-40 flex flex-col justify-center items-center" style={{ animationDelay: '0.4s' }}>
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mb-3">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="font-bold text-lg">Visual</h3>
                <p className="text-sm text-muted-foreground">Design & Branding</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;