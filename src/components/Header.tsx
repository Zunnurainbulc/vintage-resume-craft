
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export function Header() {
  return (
    <header className="bg-vintage-paper paper-texture border-b border-vintage-sepia/30 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-vintage-gold/20 rounded-lg vintage-shadow">
              <FileText className="h-6 w-6 text-vintage-brown" />
            </div>
            <div>
              <h1 className="text-2xl font-playfair font-bold text-vintage-brown">
                RetroResume
              </h1>
              <p className="text-sm text-vintage-brown/70 font-crimson">
                Vintage-inspired career documents
              </p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#templates" className="text-vintage-brown hover:text-vintage-gold transition-colors font-crimson">
              Templates
            </a>
            <a href="#features" className="text-vintage-brown hover:text-vintage-gold transition-colors font-crimson">
              Features
            </a>
            <a href="#examples" className="text-vintage-brown hover:text-vintage-gold transition-colors font-crimson">
              Examples
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              className="border-vintage-brown text-vintage-brown hover:bg-vintage-gold/10"
            >
              Sign In
            </Button>
            <Button 
              className="bg-vintage-brown hover:bg-vintage-brown/90 text-vintage-cream vintage-shadow"
            >
              Create Resume
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
