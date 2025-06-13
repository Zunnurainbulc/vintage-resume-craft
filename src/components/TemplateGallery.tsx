
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const templates = [
  {
    id: 1,
    name: "Classic Executive",
    category: "Professional",
    description: "Traditional serif design with gold accents",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop&auto=format",
    color: "bg-vintage-brown"
  },
  {
    id: 2,
    name: "Art Deco Creative",
    category: "Creative",
    description: "1920s inspired geometric patterns",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop&auto=format",
    color: "bg-vintage-gold"
  },
  {
    id: 3,
    name: "Academic Scholar",
    category: "Academic",
    description: "Clean, scholarly layout with vintage typography",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop&auto=format",
    color: "bg-vintage-sepia"
  },
  {
    id: 4,
    name: "Tech Pioneer",
    category: "Technology",
    description: "Modern vintage blend for tech professionals",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop&auto=format",
    color: "bg-vintage-brown"
  }
];

export function TemplateGallery() {
  return (
    <section id="templates" className="py-20 bg-vintage-paper paper-texture">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-vintage-brown mb-4">
            Vintage Template Collection
          </h2>
          <p className="text-xl text-vintage-brown/70 max-w-2xl mx-auto font-crimson">
            Choose from our curated selection of vintage-inspired resume templates, 
            each designed to make a lasting impression.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {templates.map((template) => (
            <Card key={template.id} className="overflow-hidden vintage-shadow hover:vintage-glow transition-all duration-300 bg-vintage-cream border-vintage-sepia/30">
              <div className="relative">
                <div className={`h-48 ${template.color} flex items-center justify-center`}>
                  <div className="text-vintage-cream font-playfair text-2xl font-bold">
                    {template.name}
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-vintage-gold text-vintage-brown px-2 py-1 rounded text-xs font-crimson font-semibold">
                  {template.category}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-playfair font-bold text-vintage-brown mb-2">
                  {template.name}
                </h3>
                <p className="text-vintage-brown/70 mb-4 font-crimson">
                  {template.description}
                </p>
                <Button 
                  className="w-full bg-vintage-brown hover:bg-vintage-brown/90 text-vintage-cream"
                >
                  Use Template
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
