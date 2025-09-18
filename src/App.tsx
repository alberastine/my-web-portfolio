import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { Toaster } from './components/ui/sonner';

export default function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
            <div className="min-h-screen bg-background">
                <Header />
                <main>
                    <HeroSection />
                    <AboutSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <ExperienceSection />
                    <ContactSection />
                </main>
                <Toaster />
            </div>
        </ThemeProvider>
    );
}
