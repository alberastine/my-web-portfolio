import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";

export function ProjectsSection() {
  const projects = [
    {
      title: "FitBox",
      subtitle: "Gym Company Platform",
      description: "Built a responsive membership and payment management system using React, TypeScript, Node.js, and Azure. Integrated Stripe for secure payments, reducing manual billing by 40%. Deployed on Azure, improving reliability and user experience.",
      image: "https://images.unsplash.com/photo-1612073584622-335da5fadd8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwZ3ltJTIwbWFuYWdlbWVudCUyMHBsYXRmb3JtfGVufDF8fHx8MTc1NzMyMTIxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "TypeScript", "Node.js", "Azure", "Stripe", "AntDesign"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["40% reduction in manual billing", "Secure payment integration", "Azure deployment"],
    },
    {
      title: "Team Nest",
      subtitle: "Task Tracker",
      description: "Full-stack task management system with React, Node.js, and MongoDB. Features include personal/team task tracking, calendar integration, dashboards with charts, and planned Stripe subscriptions. Boosted team accountability and productivity.",
      image: "https://images.unsplash.com/photo-1590402494693-bd0499aefe00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc1NzMxNzIzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Vite", "Tailwind CSS", "deployed on Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["Team collaboration features", "Interactive dashboards", "Calendar integration"],
    },
    {
      title: "BusCentralPh",
      subtitle: "Ongoing Project",
      description: "Full-stack bus and employee management system built with React, TypeScript, Zustand, and Supabase. Features include employee monitoring, salary calculations, driver history, and centralized dashboard. Goal: improve operational safety and employee well-being.",
      image: "https://images.unsplash.com/photo-1562168650-fb84fbb1e5b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXMlMjB0cmFuc3BvcnRhdGlvbiUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzU3MzE3MjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "TypeScript", "Vite", "Zustand", "Supabase", "deployed on Vercel"],
      liveUrl: "#",
      githubUrl: "#",
      highlights: ["Employee monitoring", "Salary calculations", "Operational safety focus"],
      isOngoing: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">Featured Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work in web development, demonstrating my skills in full-stack development and problem-solving.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.isOngoing && (
                    <Badge className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600">
                      Ongoing
                    </Badge>
                  )}
                </div>
                
                <CardHeader>
                  <div className="space-y-2">
                    <h3 className="text-xl">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.subtitle}</p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center text-xs text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
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