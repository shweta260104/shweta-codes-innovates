import { ExternalLink, Github, Zap, Home } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Portfolio = () => {
  const projects = [
    {
      title: 'Retail Pulse Billing App',
      description: 'A comprehensive billing application built with Java Spring Boot featuring an AI voice agent for automated customer support. Streamlines retail operations with intelligent automation.',
      icon: <Zap className="h-6 w-6" />,
      technologies: ['Java', 'Spring Boot', 'AI Voice Agent', 'MySQL', 'REST API'],
      features: [
        'Automated billing system',
        'AI-powered customer support',
        'Voice recognition integration',
        'Real-time inventory tracking',
        'Customer management system'
      ],
      category: 'Full-Stack + AI',
      status: 'Completed',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Full Stack Airbnb Clone',
      description: 'A responsive web application for listing, booking, and managing rental properties. Built with modern web technologies emphasizing user experience and responsive design.',
      icon: <Home className="h-6 w-6" />,
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind CSS'],
      features: [
        'Property listing & search',
        'Booking management system',
        'User authentication',
        'Responsive design',
        'Interactive maps integration'
      ],
      category: 'Full-Stack Web',
      status: 'Completed',
      gradient: 'from-green-500 to-teal-600'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="portfolio" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore my recent projects showcasing full-stack development and AI integration
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="gradient-card shadow-card border-0 hover:shadow-elevated transition-all duration-300 group overflow-hidden"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center text-white shadow-primary`}>
                      {project.icon}
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <Badge 
                        variant="default" 
                        className="text-xs bg-green-500/10 text-green-700 hover:bg-green-500/20"
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      variant="default"
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary-dark text-primary-foreground"
                      onClick={scrollToContact}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1"
                      onClick={scrollToContact}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Projects Teaser */}
          <div className="text-center">
            <Card className="gradient-card shadow-card border-0 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  More Projects Coming Soon!
                </h3>
                <p className="text-muted-foreground mb-6">
                  I'm constantly working on new projects and learning new technologies. Check back regularly for updates, or get in touch to discuss custom development work.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-primary"
                    onClick={scrollToContact}
                  >
                    Discuss a Project
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open('https://github.com/shweta260104', '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View GitHub
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

export default Portfolio;