import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Database, Wrench, Globe } from 'lucide-react';

import '@/styles/SkillSection.css';

export function SkillsSection() {
    const skillCategories = [
        {
            title: 'TypeScript',
            img: '/icons/1.png',
        },
        {
            title: 'PhP',
            img: '/icons/2.png',
        },
        {
            title: 'JavaScript',
            img: '/icons/3.png',
        },
        {
            title: 'Html',
            img: '/icons/4.png',
        },
        {
            title: 'Css',
            img: '/icons/5.png',
        },
        {
            title: 'Github',
            img: '/icons/6.png',
        },
        {
            title: 'Rreact',
            img: '/icons/7.png',
        },
        {
            title: 'Zustand',
            img: '/icons/8.png',
        },
        {
            title: 'Shadcn UI',
            img: '/icons/9.png',
        },
        {
            title: 'Ant Design',
            img: '/icons/10.png',
        },
        {
            title: 'Flowbite',
            img: '/icons/11.png',
        },
        {
            title: 'Node.js',
            img: '/icons/12.png',
        },
        {
            title: 'Figma',
            img: '/icons/13.png',
        },
        {
            title: 'VsCode',
            img: '/icons/14.png',
        },
        {
            title: 'Postman',
            img: '/icons/15.png',
        },
        {
            title: 'Rest API',
            img: '/icons/16.png',
        },
        {
            title: 'JWT',
            img: '/icons/17.png',
        },
        {
            title: 'MongoDB',
            img: '/icons/18.png',
        },
        {
            title: 'Supabase',
            img: '/icons/19.png',
        },

        {
            title: 'Azure',
            img: '/icons/20.png',
        },
        {
            title: 'git',
            img: '/icons/21.png',
        },
    ];

    return (
        <section id="skills" className="section-skill-container">
            <div className="skills-container">
                <div className="skills-wrapper">
                    <div className="skills-header">
                        <h2>TECHNICAL SKILLS</h2>
                        <p>Technologies and tools</p>
                    </div>
                    <div className="skills-grid">
                        {skillCategories.map((skill, index) => (
                            <Card key={index} className="skill-card">
                                <div className="skill-content">
                                    <img
                                        src={skill.img}
                                        alt={skill.title}
                                        className="skill-img"
                                    />
                                    <span className="skill-title">
                                        {skill.title}
                                    </span>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
