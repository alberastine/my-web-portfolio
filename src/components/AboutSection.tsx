import { Card, CardContent } from './ui/card';
import { GraduationCap, Globe, Heart } from 'lucide-react';

import '@/styles/AboutSection.css';

export function AboutSection() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-wrapper">
                    <div className="about-header">
                        <h2>ABOUT ME</h2>
                    </div>

                    <div className="about-grid">
                        <Card className="image-container">
                            <img src="/fronthero.png" alt="FRONTHERO" />
                        </Card>

                        <Card className="about-card">
                            <CardContent className="about-card-content">
                                <h3>My Journey</h3>
                                <p>
                                    As a dedicated BSIT student approaching my
                                    final year, I've immersed myself in the
                                    world of web development with a focus on
                                    creating meaningful digital experiences.
                                </p>
                                <p>
                                    My journey has been marked by consistent
                                    academic excellence, earning Dean's List
                                    recognition throughout my studies, and
                                    translating theoretical knowledge into
                                    practical solutions.
                                </p>
                                <p>
                                    I believe in writing clean, maintainable
                                    code and am always eager to learn new
                                    technologies that can enhance user
                                    experiences and solve real-world problems.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
