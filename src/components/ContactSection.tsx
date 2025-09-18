import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Mail, Phone, Github } from 'lucide-react';
import '@/styles/ContactSection.css';

export function ContactSection() {
    const contactInfo = [
        {
            icon: <Mail className="icon-md" />,
            label: 'Email',
            value: 'jomarserafinalberastine@gmail.com',
            href: 'mailto:jomarserafinalberastine@gmail.com',
            color: 'contact-blue',
        },
        {
            icon: <Phone className="icon-md" />,
            label: 'Phone',
            value: '(63) 9311497407',
            href: 'tel:+639311497407',
            color: 'contact-green',
        },
        {
            icon: <Github className="icon-md" />,
            label: 'GitHub',
            value: 'github.com/alberastine',
            href: 'https://github.com/alberastine',
            color: 'contact-purple',
        },
    ];

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <div className="contact-section-header">
                    <h2>Get In Touch</h2>
                    <p>
                        I'm always open to discussing new opportunities,
                        collaborating on projects, or just having a conversation
                        about web development. Feel free to reach out!
                    </p>
                </div>

                {/* Contact Cards */}
                <div className="contact-grid">
                    {contactInfo.map((contact, index) => (
                        <Card key={index} className="contact-card">
                            <CardHeader className="contact-header">
                                <div
                                    className={`contact-icon ${contact.color}`}
                                >
                                    {contact.icon}
                                </div>
                                <CardTitle className="contact-title">
                                    {contact.label}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="contact-content">
                                <a
                                    href={contact.href}
                                    className="contact-link"
                                    target={
                                        contact.href.startsWith('http')
                                            ? '_blank'
                                            : undefined
                                    }
                                    rel={
                                        contact.href.startsWith('http')
                                            ? 'noopener noreferrer'
                                            : undefined
                                    }
                                >
                                    {contact.value}
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Call to Action */}
                <Card className="contact-cta-card">
                    <CardContent>
                        <div className="contact-cta">
                            <h3>Let's Work Together</h3>
                            <p>
                                Whether you have a project in mind, need help
                                with web development, or want to discuss
                                potential opportunities, I'd love to hear from
                                you. Let's create something amazing together!
                            </p>
                            <div className="cta-buttons">
                                <Button
                                    size="lg"
                                    onClick={() =>
                                        window.open(
                                            'mailto:jomarserafinalberastine@gmail.com',
                                            '_blank'
                                        )
                                    }
                                    className="cta-btn"
                                >
                                    <Mail className="icon-md mr-2" />
                                    Send Email
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() =>
                                        window.open(
                                            'https://github.com/alberastine',
                                            '_blank'
                                        )
                                    }
                                    className="cta-btn"
                                >
                                    <Github className="icon-md mr-2" />
                                    View GitHub
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
