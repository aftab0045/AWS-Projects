import { Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/aftab-attar-344094268/", label: "LinkedIn" },
    { icon: <Github size={20} />, href: "https://github.com/aftab0045", label: "GitHub" },
    { icon: <Twitter size={20} />, href: "https://x.com/aftab_attar_", label: "Twitter" },
    { icon: <MediumIcon />, href: "https://medium.com/@aftabattar0045", label: "Medium" },
  ];
  
  return (
    <motion.footer 
      className="bg-secondary/50 py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a href="/" className="font-bold text-xl text-primary">
              Aftab Attar
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Now I'm doing Cloud ☁️
            </p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon w-10 h-10 rounded-full bg-card border border-border hover:bg-primary hover:text-white flex items-center justify-center transition-colors duration-300"
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-8 pt-4 border-t border-border text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-sm text-muted-foreground">
            © {currentYear} - Built with ❤️ by Aftab Attar
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
