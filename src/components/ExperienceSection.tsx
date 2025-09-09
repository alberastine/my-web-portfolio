import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, Trophy } from "lucide-react";

export function ExperienceSection() {
  const experience = {
    title: "Part-Time Web Developer",
    company: "FitBox",
    period: "March 2024 – June 2025",
    location: "Remote",
    description: "Built and deployed a responsive web platform for memberships and payments.",
    technologies: ["React", "TypeScript", "Node.js", "Azure", "Stripe"],
    achievements: [
      "Successfully built and deployed a comprehensive membership management system",
      "Integrated secure payment processing reducing manual billing by 40%",
      "Improved platform reliability and user experience through Azure deployment",
      "Collaborated with cross-functional teams to deliver features on schedule",
    ],
  };

  const awards = [
    {
      title: "Dean's Lister",
      description: "Consistently from 1st to 3rd year",
      icon: <Trophy className="h-5 w-5" />,
      color: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-300",
    },
    {
      title: "1st Place – Web Design Competition",
      description: "CCS Days 2023–2024",
      icon: <Trophy className="h-5 w-5" />,
      color: "bg-green-500/10 text-green-700 dark:text-green-300",
    },
    {
      title: "3rd Place – Web Design Competition",
      description: "CCS Days 2024–2025",
      icon: <Trophy className="h-5 w-5" />,
      color: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
    },
    {
      title: "Best Innovative Project Award",
      description: "IS Innovations & New Technologies (2023–2024)",
      icon: <Trophy className="h-5 w-5" />,
      color: "bg-purple-500/10 text-purple-700 dark:text-purple-300",
    },
  ];

  const softSkills = [
    "Strong problem-solving & attention to detail",
    "Collaborative team player",
    "Quick learner, adaptable",
    "Motivated to improve code quality & user experience",
    "Excellent communication skills",
    "Time management and project organization",
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">Experience & Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My professional experience, academic achievements, and the soft skills that drive my success.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Experience */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Professional Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="text-lg mb-2">{experience.title}</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {experience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {experience.company} • {experience.location}
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground">{experience.description}</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="text-sm mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {experience.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm mb-2">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {experience.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full mr-2 mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-accent/50 rounded-lg">
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Awards & Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Awards & Achievements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-accent/30 rounded-lg">
                    <div className={`p-2 rounded-lg ${award.color}`}>
                      {award.icon}
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{award.title}</h4>
                      <p className="text-sm text-muted-foreground">{award.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}