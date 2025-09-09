import { Card, CardContent } from "./ui/card";
import { GraduationCap, Globe, Heart } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-accent/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, education, and what drives me as a developer.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    BSIT 4th Year Student at University of Southern Philippines Foundation (USPF), 
                    expected graduation 2026.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg mb-2">Passion</h3>
                  <p className="text-muted-foreground">
                    Passionate about improving code quality, user experience, and scalable app development.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg mb-2">Languages</h3>
                  <p className="text-muted-foreground">
                    English, Tagalog, Bisaya
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-xl mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a dedicated BSIT student approaching my final year, I've immersed myself 
                  in the world of web development with a focus on creating meaningful digital 
                  experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My journey has been marked by consistent academic excellence, earning Dean's 
                  List recognition throughout my studies, and translating theoretical knowledge 
                  into practical solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in writing clean, maintainable code and am always eager to learn 
                  new technologies that can enhance user experiences and solve real-world problems.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}