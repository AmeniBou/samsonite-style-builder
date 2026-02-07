import AnnouncementBar from "@/components/layout/AnnouncementBar";
import Header from "@/components/layout/Header";
import BenefitsBar from "@/components/layout/BenefitsBar";
import HeroSection from "@/components/sections/HeroSection";
import ProductGrid from "@/components/sections/ProductGrid";
import CollectionBanner from "@/components/sections/CollectionBanner";
import CategoryGrid from "@/components/sections/CategoryGrid";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <AnnouncementBar />
      <Header />
      <BenefitsBar />
      <main>
        <HeroSection />
        <ProductGrid />
        <CollectionBanner />
        <CategoryGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
