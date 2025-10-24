import React, { useRef } from 'react';
import { Carousel } from 'antd';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import '@/styles/ProjectsSection.css';

export function ProjectsSection() {
  const carouselRef = useRef<any>(null);

  const projects = [
    {
      title: 'Social Fitness Platform',
      subtitle: 'Collaboration with Rio Yamashita',
      description:
        'Collaborated with Rio Yamashita to develop a comprehensive fitness tracking and social networking platform. Built with React, TypeScript, and Node.js, featuring user profiles, workout tracking, and community features. Integrated Stripe for subscription payments and deployed on Azure for optimal performance.',
      image: '/workEXP.png',
      technologies: ['React', 'TypeScript', 'Node.js', 'Azure', 'Stripe', 'AntDesign'],
      liveUrl: '#',
      githubUrl: '#',
      highlights: ['40% reduction in manual billing', 'Secure payment integration', 'Azure deployment'],
    },
    {
      title: 'Team Nest',
      subtitle: 'Task Tracker',
      description:
        'Full-stack task management system with React, Node.js, and MongoDB. Features include personal/team task tracking, calendar integration, dashboards with charts, and planned Stripe subscriptions. Boosted team accountability and productivity.',
      image: '/teamnest.png',
      technologies: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'Vite', 'Tailwind CSS', 'deployed on Vercel'],
      liveUrl: '#',
      githubUrl: 'https://github.com/alberastine/centralized-bus-system',
      highlights: ['Team collaboration features', 'Interactive dashboards', 'Calendar integration'],
    },
    {
      title: 'BusCentralPh',
      subtitle: 'Ongoing Project',
      description:
        'Full-stack bus and employee management system built with React, TypeScript, Zustand, and Supabase. Features include employee monitoring, salary calculations, driver history, and centralized dashboard. Goal: improve operational safety and employee well-being.',
      image: '/buscentralph.png',
      technologies: ['React', 'TypeScript', 'Vite', 'Zustand', 'Supabase', 'deployed on Vercel'],
      liveUrl: '#',
      githubUrl: 'https://github.com/alberastine/taskTracker',
      highlights: ['Employee monitoring', 'Salary calculations', 'Operational safety focus'],
      isOngoing: true,
    },
    {
      title: 'Apex Suppply',
      subtitle: 'Free Lanced Project',
      description:
        'This POS system, built using Android Java (Groovy) and utilizing local storage through SharedPreferences, simplifies the process of taking orders, managing items, tracking sales, and maintaining inventory. It provides a dedicated interface designed for both cashiers and administrators.',
      image: '/apex_supply_logo.png',
      technologies: ['Android (Java)', 'Groovy', 'SharedPreferences', 'XML', 'Material Design Components', 'Gradle'],
      liveUrl: '#',
      githubUrl: 'https://github.com/alberastine/apex-supply-pos-system',
      highlights: ['Order Management', 'Sales Tracking', 'Inventory Tracking'],
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

        <div className="carousel-wrapper">
          {/* Navigation Buttons */}
          <button className="nav-btn left" onClick={() => carouselRef.current?.prev()}>
            <ChevronLeft size={28} />
          </button>

          <Carousel
            ref={carouselRef}
            autoplay
            dots
            infinite
            autoplaySpeed={2000}
            draggable
            className="projects-carousel"
            style={{ textAlign: 'center' }}
          >
            {projects.map((project, index) => (
              <div key={index} className="carousel-slide">
                <Card className="project-card fixed-size">
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} className="project-image" />
                    {project.isOngoing && <Badge className="project-badge">Ongoing</Badge>}
                  </div>

                  <div className="project-basic">
                    <h3>{project.title}</h3>
                    <p>{project.subtitle}</p>
                  </div>

                  <div className="project-hover">
                    <p className="project-description">{project.description}</p>

                    <div className="project-meta">
                      <div className="project-tech">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="project-tech-badge">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="project-highlights">
                        {project.highlights.map((highlight, i) => (
                          <div key={i} className="project-highlight">
                            <div className="dot" />
                            {highlight}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="project-actions">
                      <Button asChild size="sm" className="btn-primary">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="icon" /> Live Demo
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="btn-outline">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="icon" /> Code
                        </a>
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </Carousel>

          <button className="nav-btn right" onClick={() => carouselRef.current?.next()}>
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </section>
  );
}
