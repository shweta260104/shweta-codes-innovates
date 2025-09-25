import { Code, Brain, Settings, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Full-Stack Development',
      description: 'End-to-end application development including front-end, back-end, and database integration using modern technologies like React, Node.js, and MongoDB.',
      features: [
        'Responsive Web Applications',
        'RESTful API Development',
        'Database Design & Integration',
        'Performance Optimization'
      ],
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI/ML Projects',
      description: 'Basic AI/ML solutions such as predictive models and automation tools to solve real-world problems with intelligent algorithms.',
      features: [
        'Predictive Modeling',
        'Data Analysis & Visualization',
        'Automation Solutions',
        'Machine Learning Integration'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: 'Spring Boot Applications',
      description: 'Robust backend systems for billing, management, or business applications using Java Spring Boot framework.',
      features: [
        'Enterprise Applications',
        'Microservices Architecture',
        'Business Logic Implementation',
        'System Integration'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I offer comprehensive development services to bring your digital ideas to life
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="gradient-card shadow-card border-0 hover:shadow-elevated transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white shadow-primary group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-primary hover:text-primary-foreground hover:bg-primary group/btn"
                    onClick={scrollToContact}
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="gradient-card shadow-card border-0 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how I can help you build something amazing. I'm always excited to work on new challenges and innovative solutions.
                </p>
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-primary"
                  onClick={scrollToContact}
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;