import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Globe, Smartphone, Database, Zap, Monitor, Layers } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "Building modern, responsive, and high-performance web applications using React.js, Vite, and Tailwind CSS with reusable components and seamless user experiences.",
      technologies: [
        "React.js",
        "JavaScript",
        "Vite",
        "Tailwind CSS",
        "Redux Toolkit",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description:
        "Developing cross-platform mobile applications for Android and iOS using React Native and Expo, with API integration and intuitive user interfaces.",
      technologies: [
        "React Native",
        "Expo",
        "JavaScript",
        "REST APIs",
      ],
    },
    {
      icon: Monitor,
      title: "Desktop App Development",
      description:
        "Creating cross-platform desktop applications using Electron.js and React.js with modern interfaces and desktop-specific functionality.",
      technologies: [
        "Electron.js",
        "React.js",
        "JavaScript",
        "Tailwind CSS",
      ],
    },
    {
      icon: Database,
      title: "Backend & API Development",
      description:
        "Designing scalable backend systems and secure RESTful APIs with authentication, role-based access control, database integration, and efficient server-side architecture.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        // "PostgreSQL",
        "Prisma",
        "JWT",
      ],
    },
    {
      icon: Layers,
      title: "Full Stack Development",
      description:
        "Developing complete MERN Stack applications with secure authentication, real-time functionality, payment integrations, and scalable frontend and backend architectures.",
      technologies: [
        "MERN Stack",
        "React.js",
        "Node.js",
        "MongoDB",
        "REST APIs",
        "Stripe",
      ],
    },
    {
      icon: Globe,
      title: "Cloud Deployment & DevOps",
      description:
        "Deploying and maintaining web applications using cloud platforms, automated CI/CD pipelines, and modern hosting solutions for reliable application delivery.",
      technologies: [
        "AWS",
        "GCP",
        "Vercel",
        "GitHub Actions",
        "CI/CD",
      ],
    },
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