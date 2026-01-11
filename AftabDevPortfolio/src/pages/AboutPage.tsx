import { Briefcase, GraduationCap, Heart, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";

const AboutPage = () => {
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
      <main className="flex-1 pt-24">
        <section className="section-padding bg-secondary/30">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>
            
            <div className="max-w-4xl mx-auto">
              <motion.div 
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold">Cloud & DevOps Engineer</h3>
                
                <p className="text-muted-foreground text-lg">
                  I'm a passionate Cloud & DevOps Engineer focused on building scalable, 
                  reliable, and automated infrastructure solutions. With strong foundations 
                  in AWS services and modern DevOps practices, I help organizations 
                  streamline their deployment pipelines and optimize cloud costs.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
                  <motion.div 
                    className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm hover-effect"
                    whileHover={{ scale: 1.05 }}
                  >
                    <GraduationCap className="text-primary mb-2" size={32} />
                    <h4 className="font-medium">Education</h4>
                    <p className="text-sm text-center text-muted-foreground">Computer Engineering</p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm hover-effect"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Briefcase className="text-primary mb-2" size={32} />
                    <h4 className="font-medium">Experience</h4>
                    <p className="text-sm text-center text-muted-foreground">Cloud & DevOps</p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm hover-effect"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Heart className="text-primary mb-2" size={32} />
                    <h4 className="font-medium">Interests</h4>
                    <p className="text-sm text-center text-muted-foreground">Cube Solving, Chess, Travelling</p>
                  </motion.div>
                </div>
                
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button className="btn-primary hover-effect" asChild>
                    <a href="/contact">Contact Me</a>
                  </Button>
                  <Button variant="outline" className="btn-secondary hover-effect" asChild>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2" size={16} />
                      View Resume
                    </a>
                  </Button>
                  <Button variant="secondary" className="hover-effect" asChild>
                    <a href="/resume.pdf" download>
                      <FileText className="mr-2" size={16} />
                      Download CV
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default AboutPage;
