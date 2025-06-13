
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Share, Search } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "AI-Generated Content",
    description: "Smart algorithms create compelling bullet points and professional summaries tailored to your industry.",
    color: "bg-vintage-gold/20"
  },
  {
    icon: FilePdf,
    title: "Multiple Export Options", 
    description: "Download as high-quality PDF or share as a beautifully designed web resume with custom URLs.",
    color: "bg-vintage-sepia/20"
  },
  {
    icon: Search,
    title: "Career-Specific Themes",
    description: "Templates designed for different industries - academic, creative, tech, and corporate roles.",
    color: "bg-vintage-brown/20"
  },
  {
    icon: Share,
    title: "Shareable Analytics",
    description: "Get insights on who views your resume with shareable short URLs and detailed analytics.",
    color: "bg-vintage-gold/20"
  }
];

// Import FilePdf from lucide-react
import { FileText as FilePdf } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-20 bg-vintage-cream/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-vintage-brown mb-4">
            Modern Tools, Vintage Style
          </h2>
          <p className="text-xl text-vintage-brown/70 max-w-2xl mx-auto font-crimson">
            Combine the elegance of vintage design with cutting-edge AI technology 
            to create resumes that truly stand out.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-8 vintage-shadow hover:vintage-glow transition-all duration-300 bg-vintage-paper border-vintage-sepia/30">
              <CardContent className="p-0">
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-lg ${feature.color} vintage-shadow`}>
                    <feature.icon className="h-8 w-8 text-vintage-brown" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-playfair font-bold text-vintage-brown mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-vintage-brown/80 font-crimson leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
