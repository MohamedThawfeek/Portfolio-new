import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.png";

interface HeroSectionProps {
  onContactScroll: (move: string) => void;
}

export function HeroSection({ onContactScroll }: HeroSectionProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/60" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <p className="text-accent text-lg mb-4 animate-slide-in-right">
            Hello, I'm
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">Mohamed Thawfeek</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground mb-6 space-y-2">
            <p>Full Stack Developer</p>
            <p>Web App Development & Mobile App Development</p>
            <p>Desktop App Development</p>

          </div>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I'm a passionate web developer based in India, dedicated to creating 
            beautiful, functional, and user-centered digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" onClick={() => onContactScroll("contact")} className="group">
              Let's Work Together
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button onClick={() => onContactScroll("projects")} variant="outline" size="lg">
              View My Work
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/MohamedThawfeek?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamed-thawfeek-346a23220" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:thawfeek96@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}