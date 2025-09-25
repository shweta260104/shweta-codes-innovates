import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, MapPin, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email',
      value: 'jadhav26012004@gmail.com',
      href: 'mailto:jadhav26012004@gmail.com'
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Phone',
      value: '+91 8208568586',
      href: 'tel:+918208568586'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Dhule, Maharashtra, India',
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/shweta-jadhav-597493319',
      color: 'hover:text-blue-600'
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: 'GitHub',
      href: 'https://github.com/shweta260104',
      color: 'hover:text-gray-700'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next project? I'd love to hear from you and explore how we can work together.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 mb-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2 text-primary" />
                    Let's Connect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">
                    I'm always open to discussing new opportunities, innovative projects, and collaborations. Feel free to reach out through any of the channels below.
                  </p>

                  {/* Contact Info */}
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{info.label}</p>
                          {info.href ? (
                            <a 
                              href={info.href}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-sm text-muted-foreground">{info.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-medium text-foreground mb-3">Follow me on</p>
                    <div className="flex space-x-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 bg-muted rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:scale-110 ${social.color}`}
                          title={social.label}
                        >
                          {social.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <Card className="gradient-card shadow-card border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground">
                    Send me a message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@example.com"
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
                        onChange={handleInputChange}
                        placeholder="What's this about?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Tell me about your project or inquiry..."
                        className="min-h-[120px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-hover text-accent-foreground shadow-primary"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="gradient-card shadow-card border-0 max-w-3xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Whether you have a specific project in mind or just want to explore possibilities, I'm here to help turn your ideas into reality. Let's create something extraordinary together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-primary hover:bg-primary-dark text-primary-foreground shadow-primary"
                    onClick={() => window.open('mailto:jadhav26012004@gmail.com', '_blank')}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Me Directly
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('tel:+918208568586', '_blank')}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Me
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;