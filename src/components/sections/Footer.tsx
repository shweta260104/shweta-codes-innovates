import { Heart, Mail, Phone, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Mail className="h-4 w-4" />,
      href: 'mailto:jadhav26012004@gmail.com',
      label: 'Email'
    },
    {
      icon: <Phone className="h-4 w-4" />,
      href: 'tel:+918208568586',
      label: 'Phone'
    },
    {
      icon: <Linkedin className="h-4 w-4" />,
      href: 'https://www.linkedin.com/in/shweta-jadhav-597493319',
      label: 'LinkedIn'
    },
    {
      icon: <Github className="h-4 w-4" />,
      href: 'https://github.com/shweta260104',
      label: 'GitHub'
    }
  ];

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Description */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Shweta Jadhav</h3>
              <p className="text-white/90 leading-relaxed">
                Computer Engineering student passionate about creating innovative digital solutions through Full-Stack Development and AI projects.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-all duration-200 hover:scale-110"
                    title={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/90 hover:text-white transition-colors duration-200 text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get In Touch</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:jadhav26012004@gmail.com"
                  className="flex items-center text-white/90 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 mr-3" />
                  jadhav26012004@gmail.com
                </a>
                <a 
                  href="tel:+918208568586"
                  className="flex items-center text-white/90 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 mr-3" />
                  +91 8208568586
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              © {currentYear} Shweta Jadhav. All rights reserved.
            </p>
            <p className="text-white/80 text-sm flex items-center mt-4 md:mt-0">
              Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> and passion for technology
            </p>
            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 px-4 py-2 bg-white/20 rounded-lg text-sm hover:bg-white/30 transition-colors"
            >
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;