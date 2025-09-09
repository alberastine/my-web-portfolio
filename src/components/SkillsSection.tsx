import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Code, Database, Wrench, Globe } from "lucide-react";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-5 w-5" />,
      skills: ["TypeScript", "JavaScript", "PHP", "Java App", "HTML", "CSS"],
      color: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
    },
    {
      title: "Frontend",
      icon: <Globe className="h-5 w-5" />,
      skills: ["React", "Zustand", "shadcn/ui", "Ant Design", "Flowbite", "React Icons"],
      color: "bg-green-500/10 text-green-700 dark:text-green-300",
    },
    {
      title: "Backend & Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["Node.js", "Express", "MongoDB", "Azure", "Supabase"],
      color: "bg-purple-500/10 text-purple-700 dark:text-purple-300",
    },
    {
      title: "Tools & Other",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Git", "GitHub", "Postman", "Figma", "Stripe Integration", "JWT Auth", "RESTful APIs"],
      color: "bg-orange-500/10 text-orange-700 dark:text-orange-300",
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">Technical Skills</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with to build modern web applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      {category.icon}
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`${category.color} transition-all hover:scale-105`}
                      >
                        {skill}
                      </Badge>
                    ))}
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