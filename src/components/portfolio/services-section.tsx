import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Globe, Smartphone, Database, Zap } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Creating responsive and interactive user interfaces with React, Vite, and modern CSS frameworks.",
      technologies: ["React", "Vite.js", "Tailwind CSS"]
    },
    {
      icon: Code,
      title: "Mobile App Development",
      description: "Creating responsive and interactive user interfaces with React Native.js, Expo, and modern CSS frameworks.",
      technologies: ["React Native.js", "Expo", "Tailwind CSS"]
    },
    {
      icon: Code,
      title: "Desktop App Development",
      description: "Creating responsive and interactive user interfaces with Electron JS, and modern CSS frameworks.",
      technologies: ["Electron JS", "Tailwind CSS"]
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Building robust server-side applications and APIs with Node.js, Python, and database integration.",
      technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma"]
    },
    {
      icon: Globe,
      title: "Full Stack Applications",
      description: "End-to-end web application development from concept to deployment.",
      technologies: ["MERN Stack", "Next.js", "GCP", "AWS"]
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Ensuring your applications work perfectly across all devices and screen sizes.",
      technologies: ["Mobile First", "PWA", "Cross-browser", "Accessibility"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing applications for speed, SEO, and better user experience.",
      technologies: ["Core Web Vitals", "SEO", "Performance", "Analytics"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">Services</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Solutions That <span className="text-gradient">Drive Results</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I provide comprehensive web development services to help businesses 
            establish their online presence and achieve their digital goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="card-hover group">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}