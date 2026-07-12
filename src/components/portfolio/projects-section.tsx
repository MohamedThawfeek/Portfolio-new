import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, AppWindowMac, AppWindowIcon, Webhook, AppWindowMacIcon, ChevronLeft, ChevronRight } from "lucide-react";
import BlogImage from "@/assets/blog.png";
import PasswordManager from "@/assets/passwordmanager.jpeg";
import URLShortener from "@/assets/urlshortener.jpg";
import SpeechText from "@/assets/Speech-Text.png";
import FoodRecipe from "@/assets/food-receipe.png";


import Taxi from "@/assets/taxi.jpeg";
import Chat from "@/assets/chat-app.png";
import ImageResizer from "@/assets/image-resize.jpeg";

export function ProjectsSection() {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);

  const projects = [
    {
      title: "DropTaxi App",
      description:
        "A taxi booking system with payment integration, inventory management, and admin dashboard.",
      image: Taxi,
      technologies: ["Vite", "React", "Tailwind CSS", "Vercel"],
      demoUrl: ["https://drop-taxi-booking-app.vercel.app"],
      githubUrl: ["https://github.com/MohamedThawfeek/Drop-taxi-booking-app"],
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
      title: "Speech to Text App",
      description:
        "Convert speech into text with high accuracy and translate it into multiple languages in real time. Save, copy, or share your transcriptions with ease. A simple and powerful tool for breaking language barriers.",
      image: SpeechText,
      technologies: [
        "Next Js",
        "Tailwind CSS",
        "Vercel",
      ],
      demoUrl: ["https://speech-to-text-indol.vercel.app"],
      githubUrl: ["https://github.com/MohamedThawfeek/speech-to-text-all-language"],
      featured: false,
    },
    {
      title: "Food Recipe App",
      description:
        "Discover thousands of delicious recipes from around the world. Follow easy step-by-step instructions and cook with confidence. Perfect for beginners and experienced home chefs alike.",
      image: FoodRecipe,
      technologies: [
        "React Js",
        "Tailwind CSS",
        "Vercel",
      ],
      demoUrl: ["https://food-recipe-swart-psi.vercel.app"],
      githubUrl: ["https://github.com/MohamedThawfeek/Food_Recipe"],
      featured: false,
    },
    // {
    //   title: "Chat Application",
    //   description:
    //     "Real-time messaging application with group chats and file sharing capabilities.",
    //   image: Chat,
    //   technologies: [
    //     "React",
    //     "React Native",
    //     "Electron JS",
    //     "Node",
    //     "Express",
    //     "MongoDB",
    //     "Socket.io",
    //     "Vercel",
    //   ],
    //   demoUrl: ["https://chat-app-react-lemon.vercel.app/login", "https://drive.google.com/file/d/1V2sz33-UFc475looyWkuLDs07QYyK9Tv/view?usp=drive_link"],
    //   githubUrl: ["https://github.com/MohamedThawfeek/Chat-app-react", "https://github.com/MohamedThawfeek/chat-app-react-native", "https://github.com/MohamedThawfeek/chat-app-backend", "https://github.com/MohamedThawfeek/chat-app-desktop"],
    //   featured: false,
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
    }
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

        <Swiper
          modules={[Navigation, Pagination]}
          // navigation={{ prevEl, nextEl }}
          // pagination={{ el: paginationEl, clickable: true }}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1536: { slidesPerView: 4 },
          }}
          className="projects-swiper pb-2"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="h-auto">
              <Card className="card-hover group overflow-hidden h-full cursor-move">
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

                    {/* {
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
                    } */}


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
            </SwiperSlide>
          ))}
        </Swiper>

        {/* <div className="flex items-center justify-center gap-4 mt-10">
          <Button
            ref={setPrevEl}
            type="button"
            variant="outline"
            size="icon"
            aria-label="Previous project"
            className="rounded-full"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <div ref={setPaginationEl} className="projects-pagination flex items-center gap-2" />
          <Button
            ref={setNextEl}
            type="button"
            variant="outline"
            size="icon"
            aria-label="Next project"
            className="rounded-full"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div> */}

      </div>

      {/* Theme the Swiper pagination to match the site's design tokens */}
      <style>{`
        .projects-pagination .swiper-pagination-bullet {
          background: hsl(var(--muted-foreground));
          opacity: 0.5;
          width: 8px;
          height: 8px;
          margin: 0 4px !important;
        }
        .projects-pagination .swiper-pagination-bullet-active {
          background: hsl(var(--primary));
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
