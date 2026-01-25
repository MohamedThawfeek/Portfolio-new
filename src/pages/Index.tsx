import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/portfolio/hero-section";
import { AboutSection } from "@/components/portfolio/about-section";
import { ServicesSection } from "@/components/portfolio/services-section";
import { ProjectsSection } from "@/components/portfolio/projects-section";
import { SkillsSection } from "@/components/portfolio/skills-section";
import { BlogSection } from "@/components/portfolio/blog-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import Resume from "@/assets/My Resume.pdf";

const Index = () => {
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = Resume; // Use the imported PDF
    link.download = "Mohamed_Thawfeek_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = (move = "contact") => {
    const element = document.getElementById(move);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation onContactScroll={scrollToContact} onDownloadCV={handleDownloadCV} />
      <main>
        <HeroSection onContactScroll={scrollToContact} />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <SkillsSection />
        <BlogSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2024 Mohamed Thawfeek. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
