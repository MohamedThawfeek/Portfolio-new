import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import type { Swiper as SwiperClass } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

import { liveProjects } from "@/data/live-project";
import NotFound from "./NotFound";

const LiveProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  const liveProject = liveProjects.find((project) => project.slug === slug);

  if (!liveProject) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <span className="text-xl font-bold text-gradient">Thawfeek</span>
        </div>
      </header>

      <main>
        {/* Top section: full-width image slider */}
        <section className="container mx-auto px-6 pt-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, Thumbs]}
            // pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            thumbs={{ swiper: thumbsSwiper }}
            loop={liveProject.images.length > 1}
            className="live-project-detail-swiper rounded-2xl overflow-hidden border border-border shadow-xl"
          >
            {liveProject.images.map((image, index) => (
              <SwiperSlide key={index}>
                <img
                  src={image}
                  alt={`${liveProject.title} screenshot ${index + 1}`}
                  className="w-full h-[280px] sm:h-[420px] lg:h-[560px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {liveProject.images.length > 1 && (
            <Swiper
              modules={[Thumbs]}
              onSwiper={setThumbsSwiper}
              watchSlidesProgress
              slidesPerView={4}
              spaceBetween={12}
              breakpoints={{
                640: { slidesPerView: 5 },
                1024: { slidesPerView: 6 },
              }}
              className="live-project-detail-thumbs mt-3"
            >
              {liveProject.images.map((image, index) => (
                <SwiperSlide key={index} className="cursor-pointer">
                  <img
                    src={image}
                    alt={`${liveProject.title} thumbnail ${index + 1}`}
                    className="w-full h-16 md:h-20 object-cover rounded-lg border border-border opacity-60 transition-opacity"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </section>

        {/* Summary */}
        <section className="container mx-auto px-6 mt-12">
          {/* <Badge variant="outline" className="mb-4">
            {liveProject.badge}
          </Badge> */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{liveProject.title}</h1>
          {/* <p className="text-muted-foreground text-lg max-w-3xl mb-6">{liveProject.tagline}</p> */}

          <div className="flex flex-wrap gap-2 mb-8">
            {liveProject.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          {/* {
            liveProject?.demoUrl ? <div className="flex flex-wrap gap-3 mb-16">
              <Button asChild>
                <a

                  href={liveProject?.demoUrl} target="_blank"

                  rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Live Link
                </a>
              </Button>
              <Button variant="outline" asChild>
              <a href={liveProject.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                Source Code
              </a>
            </Button>
            </div> : null
          } */}

        </section>

        {/* Full description */}
        <section className="container mx-auto px-6 pb-24">
          <div className="w-full">
            <h2 className="text-2xl font-semibold mb-4">About this project</h2>
            <div className="text-muted-foreground leading-relaxed space-y-4 whitespace-pre-line">
              {liveProject.fullDescription}
            </div>
          </div>
        </section>
      </main>

      <style>{`
        .live-project-detail-swiper .swiper-button-next,
        .live-project-detail-swiper .swiper-button-prev {
          color: hsl(var(--primary));
          background: hsl(var(--background) / 0.75);
          width: 44px;
          height: 44px;
          border-radius: 9999px;
        }
        .live-project-detail-swiper .swiper-button-next::after,
        .live-project-detail-swiper .swiper-button-prev::after {
          font-size: 18px;
          font-weight: 700;
        }
        .live-project-detail-swiper .swiper-pagination-bullet {
          background: hsl(var(--muted-foreground));
          opacity: 0.5;
        }
        .live-project-detail-swiper .swiper-pagination-bullet-active {
          background: hsl(var(--primary));
          opacity: 1;
        }
        .live-project-detail-thumbs .swiper-slide-thumb-active img {
          opacity: 1;
          border-color: hsl(var(--primary));
        }
      `}</style>
    </div>
  );
};

export default LiveProjectDetail;
