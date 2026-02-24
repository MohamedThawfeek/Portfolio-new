import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "Vite.js", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Next.js", level: 60, color: "from-gray-700 to-gray-900" },
        // { name: "TypeScript", level: 90, color: "from-blue-600 to-blue-400" },
        { name: "CSS", level: 95, color: "from-green-500 to-green-600" },
        { name: "Tailwind CSS", level: 92, color: "from-teal-400 to-cyan-500" },
        { name: "Redux", level: 90, color: "from-purple-500 to-pink-500" },
        { name: "React Native.js (Mobile App Development)", level: 80, color: "from-green-500 to-green-600" },
        { name: "Electron JS (Desktop App Development)", level: 50, color: "from-yellow-500 to-orange-500" },
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 88, color: "from-green-500 to-green-600" },
        { name: "Express.js", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "MongoDB", level: 82, color: "from-green-400 to-green-600" },
        { name: "Prisma", level: 80, color: "from-yellow-500 to-orange-500" },
        { name: "PostgreSQL", level: 78, color: "from-blue-600 to-indigo-600" },
      ]
    },
    {
      category: "Tools & Others",
      skills: [
        { name: "Git & GitHub", level: 90, color: "from-orange-500 to-red-500" },
        { name: "Firebase", level: 75, color: "from-blue-500 to-blue-600" },
        { name: "AWS", level: 70, color: "from-yellow-500 to-orange-500" },
        { name: "GCP", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "Stripe Payments System", level: 80, color: "from-teal-400 to-cyan-500" },
        { name: "Aurora Payment System", level: 80, color: "from-green-500 to-green-600" },
        { name: "Pussy SMS System", level: 70, color: "from-green-500 to-green-600" },
        { name: "FCM (Firebase Cloud Messaging)", level: 85, color: "from-gray-600 to-gray-800" },
        { name: "Cursor AI", level: 80, color: "from-yellow-500 to-orange-500" },
        { name: "Antigravity AI", level: 80, color: "from-yellow-500 to-orange-500" },
        { name: "Git Copilot AI", level: 80, color: "from-yellow-500 to-orange-500" },


      ]
    }
  ];

  const achievements = [
    { number: "3+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "5+", label: "Happy Clients" },
    { number: "99%", label: "Success Rate" },
  ];

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

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="card-hover">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress
                          value={skill.level}
                          className="h-2"
                        />
                        <div
                          className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

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