import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";

const MediumIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
);

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState<{ x: number; y: number; size: number; opacity: number; speed: number }[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 100 }).map(() => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.5 + 0.1
      }));
      setStars(newStars);
    };

    generateStars();
    window.addEventListener("resize", generateStars);
    
    return () => {
      window.removeEventListener("resize", generateStars);
    };
  }, []);

  useEffect(() => {
    const animateStars = () => {
      setStars(prevStars => 
        prevStars.map(star => ({
          ...star,
          y: star.y <= 0 ? window.innerHeight : star.y - star.speed
        }))
      );
    };
    
    const intervalId = setInterval(animateStars, 30);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, delay: 0.3, ease: "easeOut" }
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, delay: 0.6, ease: "easeOut" }
    },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const socialVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.8
      }
    }
  };

  const socialItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: { 
      scale: 1.2,
      transition: { duration: 0.2 }
    }
  };

  const calculateParallax = (strength: number = 0.02) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    const deltaX = (mousePosition.x - centerX) * strength;
    const deltaY = (mousePosition.y - centerY) * strength;
    
    return { x: deltaX, y: deltaY };
  };

  return (
    <motion.div
      className="flex flex-col min-h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <CursorEffect />
      <Navbar />
      <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Animated stars background */}
        <div className="absolute inset-0 -z-20">
          {stars.map((star, index) => (
            <motion.div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                top: star.y,
                left: star.x,
                width: star.size,
                height: star.size,
                opacity: star.opacity
              }}
            />
          ))}
        </div>
        
        {/* Gradient background with parallax effect */}
        <motion.div 
          className="absolute inset-0 hero-gradient opacity-10 -z-10"
          animate={calculateParallax(0.01)}
          transition={{ type: "spring", damping: 15 }}
        ></motion.div>
        
        <motion.div 
          className="absolute inset-0 bg-grid-white/[0.2] -z-10"
          animate={calculateParallax(0.02)}
          transition={{ type: "spring", damping: 15 }}
        ></motion.div>
        
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col items-center text-center z-10">
          {/* Profile Image */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden bg-gradient-to-br from-primary to-accent p-1">
              <img
                src="/lovable-uploads/aftabPhoto.jpeg"
                alt="Aftab Attar"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </motion.div>

          <motion.div 
            className="mb-6"
            initial="hidden"
            animate="visible"
            variants={titleVariants}
          >
            <p className="text-lg mb-3 text-muted-foreground">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Aftab Attar
            </h1>
            <div className="flex justify-center">
              <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
          </motion.div>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold mb-6"
            initial="hidden"
            animate="visible"
            variants={subtitleVariants}
          >
            <span className="text-foreground">Cloud & DevOps Engineer</span>
          </motion.h2>
          
          <motion.p 
            className="text-muted-foreground max-w-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            I design, deploy, and manage scalable cloud infrastructure with modern 
            DevOps practices and a passion for automation.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial="hidden"
            animate="visible"
            variants={buttonVariants}
          >
            <motion.div whileHover="hover" variants={buttonVariants}>
              <Button className="btn-primary relative overflow-hidden group" asChild>
                <Link to="/projects">
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full opacity-10 group-hover:w-32 group-hover:h-32 -z-10"></span>
                  View Projects
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover="hover" variants={buttonVariants}>
              <Button variant="outline" className="btn-secondary relative overflow-hidden group" asChild>
                <Link to="/contact">
                  <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-primary rounded-full opacity-10 group-hover:w-32 group-hover:h-32 -z-10"></span>
                  Contact Me
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex justify-center gap-6 mb-12"
            variants={socialVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.a
              href="https://www.linkedin.com/in/aftab-attar-344094268/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover-effect"
              aria-label="LinkedIn"
              variants={socialItemVariants}
              whileHover="hover"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/aftab0045"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover-effect"
              aria-label="GitHub"
              variants={socialItemVariants}
              whileHover="hover"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://x.com/aftab_attar_"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover-effect"
              aria-label="Twitter"
              variants={socialItemVariants}
              whileHover="hover"
            >
              <Twitter size={24} />
            </motion.a>
            <motion.a
              href="https://medium.com/@aftabattar0045"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon hover-effect"
              aria-label="Medium Blog"
              variants={socialItemVariants}
              whileHover="hover"
            >
              <MediumIcon />
            </motion.a>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hover-effect"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{ scale: 1.2 }}
        >
          <Link to="/about">
            <ChevronDown size={32} className="text-primary animate-bounce" />
          </Link>
        </motion.div>
      </section>
      <Footer />
    </motion.div>
  );
};

export default HomePage;
