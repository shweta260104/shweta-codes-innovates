import { GraduationCap, Code, Brain, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: 'React & Node.js', level: 90 },
    { name: 'Java & Spring Boot', level: 85 },
    { name: 'MongoDB & Databases', level: 80 },
    { name: 'AI/ML Basics', level: 75 },
    { name: 'Problem Solving', level: 95 },
    { name: 'Teamwork', level: 90 },
  ];

  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: 'Full-Stack Development',
      description: 'Experienced in modern web technologies including React, Node.js, and MongoDB'
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'AI/ML Projects',
      description: 'Working on innovative AI solutions and machine learning implementations'
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: 'Continuous Learning',
      description: 'Always eager to explore new technologies and expand technical expertise'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Team Collaboration',
      description: 'Strong communication skills and experience working in collaborative environments'
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know more about my background, skills, and passion for technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Bio and Education */}
            <div className="space-y-8">
              <Card className="gradient-card shadow-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Hi, I'm Shweta! 👋
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    I'm a passionate Computer Engineering student with a keen interest in Java Full Stack Development and AI projects. I enjoy creating innovative and user-friendly digital solutions, and I'm always eager to learn new technologies.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My journey in technology is driven by curiosity and the desire to solve real-world problems through code. I believe in continuous learning and staying updated with the latest technological advancements.
                  </p>
                </CardContent>
              </Card>

              <Card className="gradient-card shadow-card border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <GraduationCap className="h-6 w-6 text-primary mr-3" />
                    <h3 className="text-xl font-bold text-foreground">Education</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground">Bachelor of Technology (B.Tech)</h4>
                      <p className="text-muted-foreground">Computer Engineering</p>
                      <p className="text-sm text-muted-foreground">
                        SSVPS Bapusaheb Shivajirao Deore College of Engineering, Dhule
                      </p>
                      <p className="text-sm text-primary font-medium">Expected Graduation: 2026</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Skills and Highlights */}
            <div className="space-y-8">
              {/* Skills */}
              <Card className="gradient-card shadow-card border-0">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6">Technical Skills</h3>
                  <div className="space-y-4">
                    {skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-gradient-primary h-2 rounded-full transition-all duration-700 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((highlight, index) => (
                  <Card key={index} className="gradient-card shadow-card border-0 hover:shadow-elevated transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-primary mb-3">
                        {highlight.icon}
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                      <p className="text-sm text-muted-foreground">{highlight.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;