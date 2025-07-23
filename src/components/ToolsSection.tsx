import { Code, Palette, BarChart3, Globe } from 'lucide-react';

const ToolsSection = () => {
  const toolCategories = [
    {
      category: 'Développement',
      icon: Code,
      tools: [
        { name: 'React', logo: '⚛️' },
        { name: 'Next.js', logo: '▲' },
        { name: 'TypeScript', logo: '🔷' },
        { name: 'Node.js', logo: '💚' }
      ]
    },
    {
      category: 'Design',
      icon: Palette,
      tools: [
        { name: 'Adobe Creative', logo: '🎨' },
        { name: 'Figma', logo: '🎯' },
        { name: 'Sketch', logo: '💎' },
        { name: 'Canva', logo: '🎪' }
      ]
    },
    {
      category: 'Analytics',
      icon: BarChart3,
      tools: [
        { name: 'Google Analytics', logo: '📊' },
        { name: 'Notion', logo: '📝' },
        { name: 'Hotjar', logo: '🔥' },
        { name: 'Mixpanel', logo: '📈' }
      ]
    },
    {
      category: 'Plateformes',
      icon: Globe,
      tools: [
        { name: 'Squarespace', logo: '⬛' },
        { name: 'Webflow', logo: '🌊' },
        { name: 'WordPress', logo: '📱' },
        { name: 'Shopify', logo: '🛍️' }
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 glass rounded-full px-6 py-3 mb-6">
            <span className="text-sm font-medium text-accent">Outils</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Technologies &
            <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              plateformes maîtrisées
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Nous utilisons les meilleurs outils du marché pour garantir 
            la qualité et l'efficacité de nos réalisations.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {toolCategories.map((category, categoryIndex) => (
            <div 
              key={category.category}
              className="glass rounded-2xl p-6 shadow-card hover:shadow-accent transition-smooth group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-lg">{category.category}</h3>
              </div>

              {/* Tools List */}
              <div className="space-y-3">
                {category.tools.map((tool, toolIndex) => (
                  <div 
                    key={tool.name}
                    className="flex items-center p-3 rounded-xl bg-background/50 hover:bg-accent/10 transition-smooth group/tool"
                    style={{ animationDelay: `${(categoryIndex * 4 + toolIndex) * 0.05}s` }}
                  >
                    <span className="text-2xl mr-3 group-hover/tool:scale-110 transition-transform">
                      {tool.logo}
                    </span>
                    <span className="font-medium group-hover/tool:text-accent transition-colors">
                      {tool.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certification badges */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Certifications & Partenariats</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {['Google Partner', 'Meta Business', 'Adobe Certified', 'AWS Partner'].map((cert, index) => (
              <div 
                key={cert}
                className="glass rounded-lg px-6 py-3 hover:opacity-100 transition-opacity"
              >
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;