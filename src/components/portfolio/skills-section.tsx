import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import AWS from "@/assets/skils/AWS.svg"
import CSS from "@/assets/skils/CSS.svg"
import Electron from "@/assets/skils/electron.svg"
import Express from "@/assets/skils/express.svg"
import Firebase from "@/assets/skils/firebase.svg"
import GCP from "@/assets/skils/GCP.svg"
import Git from "@/assets/skils/Git.svg"
import GitHub from "@/assets/skils/github.svg"
import JS from "@/assets/skils/JS.svg"
import MongoDB from "@/assets/skils/mongodb.svg"
import NextJS from "@/assets/skils/nextjs.svg"
import Node from "@/assets/skils/nodejs.svg"
import Prisma from "@/assets/skils/prisma.svg"
import React from "@/assets/skils/react-js.svg"
import ReactNative from "@/assets/skils/react-native.svg"
import Redux from "@/assets/skils/redux.svg"
import Tailwind from "@/assets/skils/tailwindcss.svg"
import TypeScript from "@/assets/skils/typescript.svg"
import Vite from "@/assets/skils/vitejs.svg"
import Stripe from "@/assets/skils/stripe.svg"
import Pussy from "@/assets/skils/logo-light.png"
import JWT from "@/assets/skils/JWT.svg"
import OAuthLogo from "@/assets/skils/Oauth.svg"
import PostMan from "@/assets/skils/postman.svg"


type Skill = {
  name: string;
  mark: string;
};

const skillFrontend = [
  {
    category: "Frontend",
    skills: [
      {
        name: "JavaScript", mark: JS,
      },
      { name: "React", mark: React, },
      { name: "Vite.js", mark: Vite, },
      { name: "Next.js", mark: NextJS, },
      { name: "TypeScript", mark: TypeScript, },
      { name: "CSS", mark: CSS, },
      { name: "Tailwind CSS", mark: Tailwind, },
      { name: "Redux", mark: Redux, },
      { name: "React Native", mark: ReactNative, },
      { name: "Electron", mark: Electron, },
    ]
  },

];

const skillBackend = [

  {
    category: "Backend",
    skills: [
      { name: "Node.js", mark: Node, },
      { name: "Express.js", mark: Express, },
      { name: "MongoDB", mark: MongoDB, },
      { name: "Prisma", mark: Prisma, },
      { name: "PostgreSQL", mark: AWS, },
      { name: "OAuth", mark: OAuthLogo, },
      { name: "JWT", mark: JWT, },
      { name: "PostMan", mark: PostMan, },
    ]
  },

];

const skillTools = [
  {
    category: "Tools & Others",
    skills: [
      { name: "GitHub", mark: GitHub, },
      { name: "Git", mark: Git, },
      { name: "Firebase", mark: Firebase, },
      { name: "AWS", mark: AWS, },
      { name: "GCP", mark: GCP, },
      { name: "Stripe", mark: Stripe, },
      { name: "Pussy", mark: Pussy, },
      { name: "FCM", mark: Firebase, },


    ]
  }
];

const achievements = [
  { number: "3+", label: "Years Experience" },
  { number: "2+", label: "Projects Completed" },
  { number: "2+", label: "Happy Clients" },
  { number: "99%", label: "Success Rate" },
];

export function SkillsSection() {
  const renderSkillCards = (items: Skill[], copyId: string) => {
    return items.map((skill, index) => (
      <Card
        key={`${copyId}-${skill.name}-${index}`}
        title={skill.name}
        className="group flex h-24 w-28 shrink-0 items-center justify-center rounded-2xl border-border/60 bg-card/75 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card sm:h-28 sm:w-36"
      >
        <CardContent className="flex h-full w-full flex-col items-center justify-center gap-3 p-3">
          <div className="relative flex h-10 w-12 items-center justify-center" aria-hidden="true">
            <img
              src={skill.mark}
              alt=""
              draggable="false"
              className={`skill-logo-image relative z-[1] h-10 w-10 object-contain transition-all duration-300 ${skill.name === "GitHub" ? "github-logo-image" : ""
                }`}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
          <span className="max-w-full truncate text-center text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground sm:text-[10px]">
            {skill.name}
          </span>
        </CardContent>
      </Card>
    ))
  };

  const renderMarqueeRow = (
    items: Skill[],
    label: string,
    animationDelay: string,
  ) => (
    <div
      className="skills-marquee-viewport relative left-1/2 w-screen -translate-x-1/2 overflow-hidden border-y border-border/40 py-7"
      aria-label={label}
    >
      <div
        className="skills-marquee-track flex w-max"
        style={{ animationDelay }}
      >
        <div className="skills-marquee-copy flex w-max min-w-[100vw] shrink-0 items-center justify-evenly gap-4 px-2">
          {renderSkillCards(items, `${label}-first`)}
        </div>
        <div
          className="skills-marquee-copy flex w-max min-w-[100vw] shrink-0 items-center justify-evenly gap-4 px-2"
          aria-hidden="true"
        >
          {renderSkillCards(items, `${label}-duplicate`)}
        </div>
      </div>
    </div>
  );


  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">Skills & Expertise</Badge>
          <h2 className="text-4xl font-bold mb-6">
            Technical <span className="text-gradient">Proficiency</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools
            I use to bring ideas to life.
          </p>
        </div>

        {/* Continuously scrolling technology-logo banners */}
        <div className="mb-16 space-y-2">
          {renderMarqueeRow(
            skillFrontend[0].skills,
            "Frontend technologies",
            "0s",
          )}
          {renderMarqueeRow(
            skillBackend[0].skills,
            "Backend technologies",
            "-8s",
          )}
          {renderMarqueeRow(
            skillTools[0].skills,
            "Tools and platforms",
            "-16s",
          )}
        </div>

        <style>{`
          @keyframes skills-marquee-scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .skills-marquee-track {
            animation: skills-marquee-scroll 32s linear infinite;
            will-change: transform;
          }

          .skill-logo-image {
            filter: grayscale(1);
            opacity: 0.62;
          }

          .dark .skill-logo-image {
            filter: grayscale(1) brightness(0) invert(1);
          }

          .group:hover .skill-logo-image {
            filter: none;
            opacity: 1;
          }

          .group:hover .github-logo-image {
            filter: brightness(0) invert(1);
            opacity: 1;
          }

          .skills-marquee-viewport {
            background-color: hsl(var(--background));
            background-image:
              linear-gradient(hsl(var(--border) / 0.18) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--border) / 0.18) 1px, transparent 1px);
            background-size: 32px 32px;
          }

          .skills-marquee-viewport::before,
          .skills-marquee-viewport::after {
            position: absolute;
            z-index: 2;
            top: 0;
            bottom: 0;
            width: min(7vw, 5rem);
            content: "";
            pointer-events: none;
          }

          .skills-marquee-viewport::before {
            left: 0;
            background: linear-gradient(to right, hsl(var(--background)), transparent);
          }

          .skills-marquee-viewport::after {
            right: 0;
            background: linear-gradient(to left, hsl(var(--background)), transparent);
          }

          .skills-marquee-viewport:hover .skills-marquee-track,
          .skills-marquee-viewport:focus-within .skills-marquee-track {
            animation-play-state: paused;
          }

          @media (prefers-reduced-motion: reduce) {
            .skills-marquee-viewport {
              overflow-x: auto;
            }

            .skills-marquee-track {
              animation: none;
              transform: none;
            }

            .skills-marquee-copy[aria-hidden="true"] {
              display: none;
            }
          }
        `}</style>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center animate-fade-in">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {achievement.number}
              </div>
              <div className="text-muted-foreground">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
