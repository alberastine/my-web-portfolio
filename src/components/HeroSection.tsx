import { Button } from "./ui/button";
import { Download, Eye, Mail } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20 bg-accent/30"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-accent p-1">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center">
                <img
                  src="/hero-profile.jpg"
                  alt="Jomar S. Alberastine"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Jomar S. Alberastine
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-6">
            Front-End Web Developer | Junior Full-Stack Developer
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
            Hands-on Front-End Web Developer with React, TypeScript, and Node.js expertise 
            in creating user-friendly, scalable apps. Experienced in building secure payment 
            gateways, task management tools, and membership sites.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="w-full sm:w-auto"
            >
              <Eye className="mr-2 h-5 w-5" />
              View Projects
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                // In a real app, this would download the resume
                alert("Resume download would be implemented here");
              }}
              className="w-full sm:w-auto"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}