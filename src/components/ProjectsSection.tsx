import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import '@/styles/ProjectsSection.css';

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
        <section id="projects" className="projects-section">
            <div className="container">
                <div className="projects-header">
                    <h2>Featured Projects</h2>
                    <p>
                        A showcase of my recent work in web development,
                        demonstrating my skills in full-stack development
                        and problem-solving.
                    </p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <Card key={index} className="project-card">
                            <div className="project-image-wrapper">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                {project.isOngoing && (
                                    <Badge className="project-badge">Ongoing</Badge>
                                )}
                            </div>

                            <div className="project-basic">
                                <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                            </div>

                            <div className="project-hover">
                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="project-meta">
                                    <div className="project-tech">
                                        {project.technologies.map(
                                            (tech, techIndex) => (
                                                <Badge
                                                    key={techIndex}
                                                    variant="outline"
                                                    className="project-tech-badge"
                                                >
                                                    {tech}
                                                </Badge>
                                            )
                                        )}
                                    </div>

                                    <div className="project-highlights">
                                        {project.highlights.map(
                                            (highlight, highlightIndex) => (
                                                <div
                                                    key={highlightIndex}
                                                    className="project-highlight"
                                                >
                                                    <div className="dot" />
                                                    {highlight}
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div className="project-actions">
                                    <Button asChild size="sm" className="btn-primary">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <ExternalLink className="icon" />
                                            Live Demo
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" size="sm" className="btn-outline">
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Github className="icon" />
                                            Code
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
