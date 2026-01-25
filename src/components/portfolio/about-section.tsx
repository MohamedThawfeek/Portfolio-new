import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Zap } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Building end-to-end solutions with modern technologies"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences"
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Delivering fast and efficient web applications"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-4">About Me</Badge>
            <h2 className="text-4xl font-bold mb-6">
              Crafting Digital Experiences with 
              <span className="text-gradient"> Passion & Precision</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm Mohamed Thawfeek, a passionate full-stack web developer with over 3 years 
                of experience creating digital solutions that make a difference. Based in India, 
                I specialize in building modern web applications that are both beautiful and functional.
              </p>
              <p>
                My journey in web development started with a curiosity about how things work on the web, 
                and it has evolved into a career where I get to solve complex problems and bring 
                creative ideas to life every day.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing my knowledge with the developer community.
              </p>
            </div>
          </div>

          {/* Right Content - Highlights Grid */}
          <div className="grid gap-6 animate-slide-in-right">
            {highlights.map((item, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}