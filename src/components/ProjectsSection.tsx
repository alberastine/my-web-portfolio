import { Card, CardContent, CardHeader } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';

export function ProjectsSection() {
    const projects = [
        {
            title: 'Social Fitness Platform',
            subtitle: 'Collaboration with Rio Yamashita',
            description:
                'Collaborated with Rio Yamashita to develop a comprehensive fitness tracking and social networking platform. Built with React, TypeScript, and Node.js, featuring user profiles, workout tracking, and community features. Integrated Stripe for subscription payments and deployed on Azure for optimal performance.',
            image: '/workEXP.png',
            technologies: [
                'React',
                'TypeScript',
                'Node.js',
                'Azure',
                'Stripe',
                'AntDesign',
            ],
            liveUrl: '#',
            githubUrl: '#',
            highlights: [
                '40% reduction in manual billing',
                'Secure payment integration',
                'Azure deployment',
            ],
        },
        {
            title: 'Team Nest',
            subtitle: 'Task Tracker',
            description:
                'Full-stack task management system with React, Node.js, and MongoDB. Features include personal/team task tracking, calendar integration, dashboards with charts, and planned Stripe subscriptions. Boosted team accountability and productivity.',
            image: '/teamnest.png',
            technologies: [
                'React',
                'Node.js',
                'MongoDB',
                'Chart.js',
                'Vite',
                'Tailwind CSS',
                'deployed on Vercel',
            ],
            liveUrl: '#',
            githubUrl: 'https://github.com/alberastine/centralized-bus-system',
            highlights: [
                'Team collaboration features',
                'Interactive dashboards',
                'Calendar integration',
            ],
        },
        {
            title: 'BusCentralPh',
            subtitle: 'Ongoing Project',
            description:
                'Full-stack bus and employee management system built with React, TypeScript, Zustand, and Supabase. Features include employee monitoring, salary calculations, driver history, and centralized dashboard. Goal: improve operational safety and employee well-being.',
            image: '/buscentralph.png',
            technologies: [
                'React',
                'TypeScript',
                'Vite',
                'Zustand',
                'Supabase',
                'deployed on Vercel',
            ],
            liveUrl: '#',
            githubUrl: 'https://github.com/alberastine/taskTracker',
            highlights: [
                'Employee monitoring',
                'Salary calculations',
                'Operational safety focus',
            ],
            isOngoing: true,
        },
    ];

    return (
        <section id="projects" className="py-20 bg-accent/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl mb-4">
                            Featured Projects
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A showcase of my recent work in web development,
                            demonstrating my skills in full-stack development
                            and problem-solving.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
                            >
                                <div className="relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />

                                    {project.isOngoing && (
                                        <Badge className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600">
                                            Ongoing
                                        </Badge>
                                    )}
                                </div>

                                <CardHeader>
                                    <div className="space-y-2">
                                        <h3 className="text-xl">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {project.subtitle}
                                        </p>
                                    </div>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="space-y-3">
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.map(
                                                (tech, techIndex) => (
                                                    <Badge
                                                        key={techIndex}
                                                        variant="outline"
                                                        className="text-xs"
                                                    >
                                                        {tech}
                                                    </Badge>
                                                )
                                            )}
                                        </div>

                                        <div className="space-y-1">
                                            {project.highlights.map(
                                                (highlight, highlightIndex) => (
                                                    <div
                                                        key={highlightIndex}
                                                        className="flex items-center text-xs text-muted-foreground"
                                                    >
                                                        <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                                                        {highlight}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex gap-2 pt-2">
                                        <Button size="sm" className="flex-1">
                                            <ExternalLink className="mr-1 h-3 w-3" />
                                            Live Demo
                                        </Button>
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            className="flex-1"
                                        >
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <Github className="mr-1 h-3 w-3" />
                                                Code
                                            </a>
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
