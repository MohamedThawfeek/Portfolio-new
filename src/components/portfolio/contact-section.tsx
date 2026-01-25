import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import {ClipLoader} from "react-spinners"
export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setLoader(true);
    emailjs
      .sendForm(
        "service_1j9iaal", // Your EmailJS service ID
        "template_qiv7ghi", // Your EmailJS template ID
        e.target as HTMLFormElement,
        "GS40acueC5ka8QHZp" // Your EmailJS public key
      )
      .then(() => {
        setLoader(false);
        // Success toast or logic
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        setLoader(false);
        console.log("error", error);

        // Error toast or logic
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "thawfeek96@gmail.com",
      href: "mailto:thawfeek96@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8248383211",
      href: "tel:+918248383211",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-4xl font-bold mb-6">
            Let's <span className="text-gradient">Work Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to
            life. I'm always excited to work on new challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm currently available for freelance work and new
                opportunities. Feel free to reach out if you'd like to discuss a
                project or just say hello.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <a
                      href={info.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="font-semibold mb-4">
                Let's connect on social media
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/MohamedThawfeek?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-thawfeek-346a23220"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/smart_thawfeek_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="card-hover animate-slide-in-right">
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    
                  />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  {!loader ? (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  ) : (
                    <ClipLoader size={20} color="#ffffff" />
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
