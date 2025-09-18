import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, Trophy } from 'lucide-react';
import '@/styles/ExperienceSection.css';

export function ExperienceSection() {
    const experience = {
        title: 'Part-Time Web Developer',
        company: 'Rio Yamashita',
        period: 'March 2024 – June 2025',
        location: 'Remote',
        description:
            'Collaborated with Rio Yamashita to build and maintain a cutting-edge fitness tracking and social networking platform for health enthusiasts.',
        technologies: ['React', 'TypeScript', 'Node.js', 'Azure', 'Stripe'],
        achievements: [
            'Developed and implemented a feature-rich social fitness platform with user profiles, workout tracking, and community features',
            'Built and integrated a secure payment system that processed over 1000+ monthly subscriptions',
            'Enhanced platform performance by implementing Azure CDN, reducing load times by 60%',
            'Worked closely with the client to iterate and improve features based on user feedback',
        ],
    };

    const awards = [
        {
            title: "Dean's Lister",
            description: 'Consistently from 1st to 3rd year',
            icon: <Trophy className="icon-sm" />,
            color: 'award-yellow',
        },
        {
            title: '1st Place – Web Design Competition',
            description: 'CCS Days 2023–2024',
            icon: <Trophy className="icon-sm" />,
            color: 'award-green',
        },
        {
            title: '3rd Place – Web Design Competition',
            description: 'CCS Days 2024–2025',
            icon: <Trophy className="icon-sm" />,
            color: 'award-blue',
        },
        {
            title: 'Best Innovative Project Award',
            description: 'IS Innovations & New Technologies (2023–2024)',
            icon: <Trophy className="icon-sm" />,
            color: 'award-purple',
        },
    ];

    const softSkills = [
        'Strong problem-solving & attention to detail',
        'Collaborative team player',
        'Quick learner, adaptable',
        'Motivated to improve code quality & user experience',
        'Excellent communication skills',
        'Time management and project organization',
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <div className="experience-header">
                    <h2>Experience & Achievements</h2>
                    <p>
                        My professional experience, academic achievements,
                        and the soft skills that drive my success.
                    </p>
                </div>

                <div className="experience-grid">
                    {/* Professional Experience */}
                    <Card className="card-full">
                        <CardHeader>
                            <CardTitle className="card-title">Professional Experience</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div>
                                <h3 className="experience-title">{experience.title}</h3>
                                <div className="experience-meta">
                                    <div className="meta-item">
                                        <Calendar className="icon-sm mr-2" />
                                        {experience.period}
                                    </div>
                                    <div className="meta-item">
                                        <MapPin className="icon-sm mr-2" />
                                        {experience.company} • {experience.location}
                                    </div>
                                </div>
                            </div>

                            <p className="experience-description">{experience.description}</p>

                            <div className="experience-details">
                                <div>
                                    <h4 className="details-subtitle">Technologies Used:</h4>
                                    <div className="tech-badges">
                                        {experience.technologies.map((tech, index) => (
                                            <Badge key={index} variant="outline" className="tech-badge">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="details-subtitle">Key Achievements:</h4>
                                    <ul className="achievements-list">
                                        {experience.achievements.map((achievement, index) => (
                                            <li key={index} className="achievement-item">
                                                <div className="dot" />
                                                {achievement}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Soft Skills */}
                    <Card className="card-full">
                        <CardHeader>
                            <CardTitle className="card-title">Soft Skills</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="soft-skills-grid">
                                {softSkills.map((skill, index) => (
                                    <div key={index} className="soft-skill-item">
                                        <div className="dot" />
                                        <span>{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Awards */}
                <Card>
                    <CardHeader>
                        <CardTitle className="card-title">Awards & Achievements</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="awards-grid">
                            {awards.map((award, index) => (
                                <div key={index} className="award-item">
                                    <div className={`award-icon ${award.color}`}>{award.icon}</div>
                                    <div>
                                        <h4 className="award-title">{award.title}</h4>
                                        <p className="award-description">{award.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
