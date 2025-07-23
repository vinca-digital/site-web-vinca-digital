import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import ToolsSection from '@/components/ToolsSection';
import BlogNewsletterSection from '@/components/BlogNewsletterSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import SpecialOffersSection from '@/components/SpecialOffersSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <ToolsSection />
      <TestimonialsSection />
      <BlogNewsletterSection />
      <SpecialOffersSection />
      <Footer />
    </div>
  );
};

export default Index;
