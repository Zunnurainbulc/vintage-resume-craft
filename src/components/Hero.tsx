
import { Button } from "@/components/ui/button";
import { FileText, Share } from "lucide-react";

export function Hero() {
  return (
    <section className="py-20 bg-gradient-to-br from-vintage-cream via-vintage-paper to-vintage-sepia/20 paper-texture">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-block mb-6 animate-vintage-float">
            <div className="p-4 bg-vintage-gold/20 rounded-full vintage-shadow vintage-glow">
              <FileText className="h-12 w-12 text-vintage-brown" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-vintage-brown mb-6 animate-fade-in">
            Craft Your
            <span className="block text-vintage-gold">
              Vintage Legacy
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-vintage-brown/80 mb-8 font-crimson leading-relaxed animate-fade-in">
            Create stunning, vintage-inspired resumes that tell your professional story 
            with timeless elegance and modern AI assistance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button 
              size="lg"
              className="bg-vintage-brown hover:bg-vintage-brown/90 text-vintage-cream px-8 py-6 text-lg vintage-shadow"
            >
              <FileText className="mr-2 h-5 w-5" />
              Start Creating
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-vintage-brown text-vintage-brown hover:bg-vintage-gold/10 px-8 py-6 text-lg"
            >
              <Share className="mr-2 h-5 w-5" />
              View Templates
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-6 bg-vintage-paper/50 rounded-lg vintage-shadow">
              <div className="text-3xl font-playfair font-bold text-vintage-brown mb-2">AI-Powered</div>
              <p className="text-vintage-brown/70 font-crimson">Smart bullet points & summaries</p>
            </div>
            <div className="text-center p-6 bg-vintage-paper/50 rounded-lg vintage-shadow">
              <div className="text-3xl font-playfair font-bold text-vintage-brown mb-2">Vintage Style</div>
              <p className="text-vintage-brown/70 font-crimson">Timeless, elegant templates</p>
            </div>
            <div className="text-center p-6 bg-vintage-paper/50 rounded-lg vintage-shadow">
              <div className="text-3xl font-playfair font-bold text-vintage-brown mb-2">Share Easily</div>
              <p className="text-vintage-brown/70 font-crimson">PDF & web with analytics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
