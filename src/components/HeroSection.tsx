import { Button } from './ui/button';
import { Download, Eye, Mail } from 'lucide-react';
import '@/styles/HeroSection.css';
import { useEffect, useState } from 'react';

const roles = [
    'Web Designer',
    'Front-End Web Developer',
    'Junior Full-Stack Developer',
];

export function HeroSection() {
    const [text, setText] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let typingSpeed = isDeleting ? 80 : 150; // faster when deleting

        const timer = setTimeout(() => {
            if (!isDeleting && charIndex < currentRole.length) {
                // typing forward
                setText((prev) => prev + currentRole.charAt(charIndex));
                setCharIndex(charIndex + 1);
            } else if (isDeleting && charIndex > 0) {
                // deleting backwards
                setText((prev) => prev.slice(0, -1));
                setCharIndex(charIndex - 1);
            } else if (!isDeleting && charIndex === currentRole.length) {
                // pause before deleting
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && charIndex === 0) {
                // move to next role
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, roleIndex]);

    return (
        <section id="hero" className="section-container">
            <div className="hero-container">
                <h1 className="label-greetings">Hi I'm</h1>
                <h1 className="label-name">JOMAR S. ALBERASTINE</h1>
                <div className="marquee-container">
                    <h1 className="label-profession">
                        {text}
                        <span className="cursor">|</span>
                    </h1>
                </div>

                <h1 className="label-description">
                    Hands-on Front-End Web Developer with React, TypeScript, and
                    Node.js expertise in creating user-friendly, scalable apps.
                    Experienced in building secure payment gateways, task
                    management tools, and membership sites.
                </h1>
            </div>
            <button
                className="about-me-button"
                onClick={() => {
                    const element = document.getElementById('about');
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                    }
                }}
            >
                MORE ABOUT ME
            </button>
        </section>
    );
}
