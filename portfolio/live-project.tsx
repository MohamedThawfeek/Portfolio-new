import { useState } from "react";
import { Link } from "react-router-dom";
import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, ExternalLink, Maximize2 } from "lucide-react";

import { liveProjects, type LiveProject } from "@/data/live-project";

function LiveProjectCard({ project }: { project: LiveProject }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
      {/* Gallery */}
      <div className="min-w-0">
        {/* nested: lets this swipe independently of the project swiper it sits inside */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Thumbs]}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          thumbs={{ swiper: thumbsSwiper }}
          loop={project.images.length > 1}
          nested
          className="live-project-swiper rounded-2xl overflow-hidden border border-border shadow-xl"
        >
          {project.images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`${project.title} screenshot ${index + 1}`}
                className="w-full h-[240px] sm:h-[340px] lg:h-[420px] object-fill"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail strip — hidden on small screens to save space */}
        {project.images.length > 1 && (
          <Swiper
            modules={[Thumbs]}
            onSwiper={setThumbsSwiper}
            watchSlidesProgress
            slidesPerView={4}
            spaceBetween={12}
            nested
            className="live-project-thumbs mt-3 hidden sm:block"
          >
            {project.images.map((image, index) => (
              <SwiperSlide key={index} className="cursor-pointer">
                <img
                  src={image}
                  alt={`${project.title} thumbnail ${index + 1}`}
                  className="w-full h-16 md:h-20 object-cover rounded-lg border border-border opacity-60 transition-opacity"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      {/* Details */}
      <div className="min-w-0 flex flex-col gap-6">
        <div>
          <Link
            to={`/live-project/${project.slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 mb-3"
          >
            <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <Maximize2 className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
          <p className="text-muted-foreground">{project.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {
            project.demoUrl ? <Button asChild>

              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo Video
              </a>
            </Button> : null
          }

          {
            project.githubUrl ? <Button variant="outline" asChild>
              <a href={project?.githubUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />

                Live Link
              </a>
            </Button> : null
          }


        </div>
      </div>
    </div>
  );
}

export function LiveProjectSection() {
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [paginationEl, setPaginationEl] = useState<HTMLDivElement | null>(null);
  const hasMultipleProjects = liveProjects.length > 1;

  return (
    <section id="live-project" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Live Project
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Project <span className="text-gradient">Spotlight</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A closer look at some of my recent builds — screenshots, stack, and the story behind each one.
          </p>
        </div>

        {/* One swiper for the whole section — swipe or use the arrows below to move between projects */}
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{ prevEl, nextEl }}
          pagination={{ el: paginationEl, clickable: true }}
          loop={hasMultipleProjects}
          autoHeight
          className="live-project-outer-swiper"
        >
          {liveProjects.map((project) => (
            <SwiperSlide key={project.slug}>
              <LiveProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>

        {hasMultipleProjects && (
          <div className="flex items-center justify-center gap-4 mt-10">
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
            <div ref={setPaginationEl} className="live-project-outer-pagination flex items-center gap-2" />
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
          </div>
        )}
      </div>

      {/* Theme the Swiper controls to match the site's design tokens */}
      <style>{`
        .live-project-swiper .swiper-button-next,
        .live-project-swiper .swiper-button-prev {
          color: hsl(var(--primary));
          background: hsl(var(--background) / 0.75);
          width: 40px;
          height: 40px;
          border-radius: 9999px;
        }
        .live-project-swiper .swiper-button-next::after,
        .live-project-swiper .swiper-button-prev::after {
          font-size: 16px;
          font-weight: 700;
        }
        .live-project-swiper .swiper-pagination-bullet {
          background: hsl(var(--muted-foreground));
          opacity: 0.5;
        }
        .live-project-swiper .swiper-pagination-bullet-active {
          background: hsl(var(--primary));
          opacity: 1;
        }
        .live-project-thumbs .swiper-slide-thumb-active img {
          opacity: 1;
          border-color: hsl(var(--primary));
        }
        .live-project-outer-pagination .swiper-pagination-bullet {
          background: hsl(var(--muted-foreground));
          opacity: 0.5;
          width: 8px;
          height: 8px;
          margin: 0 4px !important;
        }
        .live-project-outer-pagination .swiper-pagination-bullet-active {
          background: hsl(var(--primary));
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
