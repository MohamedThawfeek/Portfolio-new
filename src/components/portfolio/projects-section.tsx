import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, AppWindowMac, AppWindowIcon, Webhook, AppWindowMacIcon } from "lucide-react";
import BlogImage from "@/assets/blog.png";
import PasswordManager from "@/assets/passwordmanager.jpeg";
import URLShortener from "@/assets/urlshortener.jpg";
import Taxi from "@/assets/taxi.jpeg";
import Chat from "@/assets/chat-app.png";
import ImageResizer from "@/assets/image-resize.jpeg";

export function ProjectsSection() {
  const projects = [
    {
      title: "DropTaxi App",
      description:
        "A taxi booking system with payment integration, inventory management, and admin dashboard.",
      image: Taxi,
      technologies: ["Vite", "React", "Tailwind CSS", "Whatsapp API", "Vercel"],
      demoUrl: ["#"],
      githubUrl: ["#"],
      featured: true,
    },
    {
      title: "Password Manager App",
      description:
        "A password manager application with password generation and storage features.",
      image: PasswordManager,
      technologies: [
        "Vite",
        "React",
        "Tailwind CSS",
        "Node",
        "Express",
        "MongoDB",
        "OAuth",
        "Vercel",
      ],
      demoUrl: ["https://password-manager-frontend-eight.vercel.app"],
      githubUrl: ["https://github.com/MohamedThawfeek/Password-Manager-Frontend", "https://github.com/MohamedThawfeek/Password-Manager-Backend"],
      featured: true,
    },
    {
      title: "URL Shortener App",
      description:
        "A URL shortener application with URL shortening and tracking features.",
      image: URLShortener,
      technologies: [
        "Vite",
        "React",
        "Tailwind CSS",
        "Node",
        "Express",
        "MongoDB",
        "OAuth",
        "Vercel",
      ],
      demoUrl: ["https://url-shortener-frontend-tau-smoky.vercel.app"],
      githubUrl: ["https://github.com/MohamedThawfeek/Url-Shortener-frontend", "https://github.com/MohamedThawfeek/Url-Shortener-backend"],
      featured: false,
    },
    {
      title: "Blog Platform",
      description:
        "A modern blogging platform with content management system and SEO optimization.",
      image: BlogImage,
      technologies: [
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Electron JS",
        "Tailwind CSS",
        "OAuth",
        "Vercel",
      ],
      demoUrl: ["#"],
      githubUrl: ["#"],
      featured: false,
    },
    {
      title: "Chat Application",
      description:
        "Real-time messaging application with group chats and file sharing capabilities.",
      image: Chat,
      technologies: [
        "React",
        "React Native",
        "Electron JS",
        "Node",
        "Express",
        "MongoDB",
        "Socket.io",
        "Vercel",
      ],
      demoUrl: ["#"],
      githubUrl: ["#"],
      featured: false,
    },
    // {
    //   title: "Login System",
    //   description: "Login system with email and password verification.",
    //   image: Chat,
    //   technologies: ["Electron JS", "Node.js", "MongoDB",],
    //   demoUrl: "#",
    //   githubUrl: "#",
    //   featured: false
    // },
    {
      title: "Image Rezizer",
      description:
        "Image rezizer application with image compression and optimization.",
      image: ImageResizer,
      technologies: ["Electron JS", "Tailwind CSS"],
      demoUrl: [
        "https://drive.usercontent.google.com/download?id=1xbqHqf7YyYaZRh18sI57Ae0wRJCNiBYo&export=download&authuser=0",
        "https://drive.usercontent.google.com/download?id=1M8kMR6HOFpiHEXtheKKzMmr8t4ULNt8K&export=download&authuser=0",
      ],
      githubUrl: ["https://github.com/MohamedThawfeek/image-resize-electronJS"],
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Projects
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Featured <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in
            web development and design.
          </p>
        </div>

        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`card-hover group overflow-hidden ${project.featured ? "md:col-span-1 lg:col-span-1" : ""
                }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-fill group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {Array.isArray(project.demoUrl) &&
                    project.demoUrl.map((url: string, index: number) => {
                      return (
                        <Button key={index} size="sm" variant="secondary" asChild>
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {
                              project.title === "Image Rezizer" ? index === 0 ? <AppWindowIcon className="w-4 h-4" /> : <AppWindowMacIcon className="w-4 h-4" /> : <Webhook className="w-4 h-4" />
                            }
                          </a>
                        </Button>
                      );
                    })}

                  {
                    Array.isArray(project.githubUrl) &&
                    project.githubUrl.map((url: string, index: number) => {
                      return (
                        <Button key={index} size="sm" variant="secondary" asChild>
                          <a href={url} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                      );
                    })
                  }


                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
