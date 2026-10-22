import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Zap } from "lucide-react";

export function AboutSection() {
  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description:
        "Building scalable, secure, and high-performance applications using the MERN Stack.",
    },
    {
      icon: Database,
      title: "Backend & API Development",
      description:
        "Developing robust RESTful APIs with secure authentication, role-based access control, and database integration.",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Optimizing frontend and backend performance to deliver fast, responsive, and efficient applications.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <Badge variant="outline" className="mb-4">About Me</Badge>
            <h2 className="text-4xl font-bold mb-6">
              Building Scalable Digital Solutions with
              <span className="text-gradient"> Passion & Precision</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I’m Mohamed Thawfeek, a Full Stack Developer based in India with over 4.5 years of experience building scalable, secure, and high-performance web applications. I specialize in MERN Stack development using React.js, Node.js, Express.js, and MongoDB, with expertise in RESTful APIs, JWT authentication, role-based access control, and database management.
              </p>
              <p>
                Throughout my career, I’ve contributed to production applications, including JagoPOS, a multi-tenant restaurant management and POS system, and Sanas Invite, a digital invitation and RSVP management platform. My experience covers end-to-end application development, payment gateway integration, real-time functionality, and cloud deployment.
              </p>
              <p>
                I’m passionate about solving complex technical challenges, writing clean and maintainable code, and continuously improving my development skills. Beyond my professional work, I explore emerging technologies and build personal projects, including an HRMS SaaS application, to expand my expertise.
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