
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TemplateGallery } from "@/components/TemplateGallery";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <TemplateGallery />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
