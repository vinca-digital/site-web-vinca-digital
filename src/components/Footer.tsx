import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const footerSections = [
    {
      title: 'Services',
      links: [
        { name: 'Développement Web', href: '#web' },
        { name: 'Social Media', href: '#social' },
        { name: 'Design & Branding', href: '#visual' },
        { name: 'SEO & Marketing', href: '#seo' },
        { name: 'Consultation Gratuite', href: '#consultation' }
      ]
    },
    {
      title: 'Entreprise',
      links: [
        { name: 'À propos', href: '#about' },
        { name: 'Notre équipe', href: '#team' },
        { name: 'Carrières', href: '#careers' },
        { name: 'Partenariats', href: '#partners' },
        { name: 'Presse', href: '#press' }
      ]
    },
    {
      title: 'Ressources',
      links: [
        { name: 'Blog', href: '#blog' },
        { name: 'Guides', href: '#guides' },
        { name: 'Études de cas', href: '#case-studies' },
        { name: 'Newsletter', href: '#newsletter' },
        { name: 'Webinaires', href: '#webinars' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Centre d\'aide', href: '#help' },
        { name: 'Contact', href: '#contact' },
        { name: 'FAQ', href: '#faq' },
        { name: 'Statut des services', href: '#status' },
        { name: 'Documentation API', href: '#api' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', name: 'LinkedIn', color: 'hover:text-blue-400' },
    { icon: Instagram, href: '#', name: 'Instagram', color: 'hover:text-pink-400' },
    { icon: Twitter, href: '#', name: 'Twitter', color: 'hover:text-sky-400' }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/20 border-t border-border">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 left-0 w-80 h-80 gradient-primary rounded-full opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-40 right-0 w-80 h-80 gradient-secondary rounded-full opacity-5 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="pt-16 pb-12">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-primary">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Vinca Digital
                </span>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 mr-3 text-primary" />
                  <span>contact@vinca.digital</span>
                </div>
                <div className="flex items-center text-sm">
                  <Phone className="w-4 h-4 mr-3 text-primary" />
                  <span>+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center text-sm">
                  <MapPin className="w-4 h-4 mr-3 text-primary" />
                  <span>Paris, France</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 glass rounded-lg flex items-center justify-center transition-smooth ${social.color} hover:scale-110`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section, index) => (
              <div key={section.title} className="lg:col-span-1">
                <h3 className="font-bold text-lg mb-6 text-foreground">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 inline-block"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-12 border-t border-border">
          <div className="glass rounded-3xl p-8 md:p-12">
            <div className="text-center md:text-left md:flex md:items-center md:justify-between">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl font-bold mb-2">
                  Prêt à accélérer votre croissance ?
                </h3>
                <p className="text-muted-foreground">
                  Réservez votre consultation gratuite dès aujourd'hui.
                </p>
              </div>
              <Button 
                size="lg" 
                className="gradient-primary shadow-primary hover:scale-105 transition-bounce px-8 py-4 text-lg"
              >
                Consultation Gratuite
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <span>© 2024 Vinca Digital. Tous droits réservés.</span>
              <div className="flex items-center space-x-6">
                <a href="#privacy" className="hover:text-primary transition-colors">
                  Politique de confidentialité
                </a>
                <a href="#terms" className="hover:text-primary transition-colors">
                  Conditions d'utilisation
                </a>
                <a href="#cookies" className="hover:text-primary transition-colors">
                  Cookies
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <span className="text-muted-foreground">Propulsé par</span>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 gradient-secondary rounded-md flex items-center justify-center">
                  <span className="text-xs font-bold text-white">V</span>
                </div>
                <span className="font-medium">Vinca Tech</span>
              </div>
            </div>
          </div>
        </div>

        {/* Made with love indicator */}
        <div className="text-center py-4">
          <p className="text-xs text-muted-foreground flex items-center justify-center">
            Fait avec <span className="text-red-500 mx-1">❤️</span> à Paris
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;