
import { FileText } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-vintage-brown text-vintage-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-vintage-gold/20 rounded-lg">
                <FileText className="h-6 w-6 text-vintage-gold" />
              </div>
              <div>
                <h3 className="text-2xl font-playfair font-bold">RetroResume</h3>
                <p className="text-vintage-cream/70 font-crimson">Vintage-inspired career documents</p>
              </div>
            </div>
            <p className="text-vintage-cream/80 font-crimson leading-relaxed max-w-md">
              Create stunning, vintage-inspired resumes that combine timeless elegance 
              with modern AI technology to help you stand out in today's competitive job market.
            </p>
          </div>
          
          <div>
            <h4 className="font-playfair font-bold text-vintage-gold mb-4">Product</h4>
            <ul className="space-y-2 font-crimson">
              <li><a href="#" className="text-vintage-cream/80 hover:text-vintage-gold transition-colors">Templates</a></li>
              <li><a href="#" className="text-vintage-cream/80 hover:text-vintage-gold transition-colors">Features</a></li>
              <li><a href="#" className="text-vintage-cream/80 hover:text-vintage-gold transition-colors">Pricing</a></li>
              <li><a href="#" className="text-vintage-cream/80 hover:text-vintage-gold transition-colors">Examples</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-playfair font-bold text-vintage-gold mb-4">Company</h4>
            <ul className="space-y-2 font-crimson">
              <li><a href="#" className="text-vintage-cream/80 hover:text-vintage-gold transition-colors">About</a></li>
              <li><a href="#" className="text-vintage-cream/80 hover:text-vintage-gold transition-colors">Blog</a></li>
              <li><a href="#" className="text-vintage-cream/80 hover:text-vintage-gold transition-colors">Contact</a></li>
              <li><a href="#" className="text-vintage-cream/80 hover:text-vintage-gold transition-colors">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-vintage-cream/20 mt-12 pt-8 text-center">
          <p className="text-vintage-cream/70 font-crimson">
            © 2024 RetroResume. All rights reserved. Crafted with vintage elegance.
          </p>
        </div>
      </div>
    </footer>
  );
}
