import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/shweta-profile.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 hero-gradient" />
      
      {/* Floating decorative shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full floating-shape" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-white/5 rounded-full floating-shape" />
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/20 rounded-full floating-shape" />
        <div className="absolute top-1/3 right-10 w-24 h-24 bg-white/10 rounded-full floating-shape" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-white space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full backdrop-blur-sm">
              <span className="text-sm font-medium">👋 Hello, I'm</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Shweta Jadhav
              <span className="block text-2xl md:text-3xl font-normal text-white/90 mt-2">
                Computer Engineering Student
              </span>
            </h1>

            <p className="text-xl text-white/90 max-w-xl">
              Full-Stack Developer | AI/ML Enthusiast | Innovative Digital Solutions
            </p>

            <p className="text-lg text-white/80 max-w-2xl">
              Passionate about creating user-friendly digital solutions with expertise in Java Full Stack Development and AI projects. Always eager to learn new technologies and tackle challenging problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent-hover text-accent-foreground shadow-elevated"
                onClick={() => scrollToSection('#portfolio')}
              >
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                onClick={() => scrollToSection('#contact')}
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glowing background */}
              <div className="absolute inset-0 bg-accent/30 rounded-full blur-3xl scale-110" />
              
              {/* Profile image container */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white/20 shadow-elevated">
                  <img 
                    src={profileImage}
                    alt="Shweta Jadhav - Computer Engineering Student"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating elements around image */}
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-medium text-sm shadow-elevated">
                  Available for hire
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full font-medium text-sm">
                  B.Tech 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </div>
    </section>
  );
};

export default Hero;