import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";

const ExperiencePage = () => {
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
        <section className="section-padding">
          <div className="container mx-auto px-4">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Experience
            </motion.h2>
            
            <div className="max-w-3xl mx-auto">
              <motion.div 
                className="relative pl-8 sm:pl-32 py-6 group"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <div className="flex flex-col sm:flex-row items-start mb-1 group-hover:text-primary transition-colors duration-200">
                  <div className="absolute left-0 sm:left-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div className="h-full w-px bg-border absolute top-24 left-10 z-0"></div>
                  </div>
                  
                  <Card className="w-full sm:ml-16 card-hover border border-border">
                    <CardHeader>
                      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                        <div>
                          <CardTitle>Web Developer Intern</CardTitle>
                          <CardDescription>NoQs Digital Pvt. Ltd.</CardDescription>
                        </div>
                        <div className="text-sm bg-muted text-muted-foreground px-3 py-1 rounded-full w-fit">
                          JAN 2024 - FEB 2024
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>
                          Built responsive user interfaces using React JS and modern web technologies.
                        </li>
                        <li>
                          Collaborated with senior developers to implement new features and fix bugs.
                        </li>
                        <li>
                          Integrated REST APIs with frontend components to create dynamic web applications.
                        </li>
                        <li>
                          Participated in code reviews and implemented feedback to improve code quality.
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
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

export default ExperiencePage;
