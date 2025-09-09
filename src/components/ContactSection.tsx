import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Mail, Phone, Github, ExternalLink } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "jomarserafinalberastine@gmail.com",
      href: "mailto:jomarserafinalberastine@gmail.com",
      color: "bg-blue-500/10 text-blue-700 dark:text-blue-300",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "(63) 9311497407",
      href: "tel:+639311497407",
      color: "bg-green-500/10 text-green-700 dark:text-green-300",
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      value: "github.com/alberastine",
      href: "https://github.com/alberastine",
      color: "bg-purple-500/10 text-purple-700 dark:text-purple-300",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, collaborating on projects, 
              or just having a conversation about web development. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {contactInfo.map((contact, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className={`inline-flex p-4 rounded-full ${contact.color} mx-auto mb-3`}>
                    {contact.icon}
                  </div>
                  <CardTitle className="text-lg">{contact.label}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <a
                    href={contact.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {contact.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <h3 className="text-xl">Let's Work Together</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Whether you have a project in mind, need help with web development, 
                  or want to discuss potential opportunities, I'd love to hear from you. 
                  Let's create something amazing together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    onClick={() => window.open("mailto:jomarserafinalberastine@gmail.com", "_blank")}
                    className="w-full sm:w-auto"
                  >
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open("https://github.com/alberastine", "_blank")}
                    className="w-full sm:w-auto"
                  >
                    <Github className="mr-2 h-5 w-5" />
                    View GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}