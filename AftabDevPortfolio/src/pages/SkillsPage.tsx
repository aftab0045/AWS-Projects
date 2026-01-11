import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CursorEffect from "@/components/CursorEffect";

const SkillsPage = () => {
  const skills = [
    // AWS Services with specific icons
    { name: "EC2", icon: "https://icon.icepanel.io/AWS/svg/Compute/EC2.svg", category: "AWS" },
    { name: "S3", icon: "https://icon.icepanel.io/AWS/svg/Storage/Simple-Storage-Service.svg", category: "AWS" },
    { name: "IAM", icon: "https://icon.icepanel.io/AWS/svg/Security-Identity-Compliance/IAM-Identity-Center.svg", category: "AWS" },
    { name: "VPC", icon: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/Virtual-Private-Cloud.svg", category: "AWS" },
    { name: "Route 53", icon: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/Route-53.svg", category: "AWS" },
    { name: "Lambda", icon: "https://icon.icepanel.io/AWS/svg/Compute/Lambda.svg", category: "AWS" },
    { name: "CloudWatch", icon: "https://icon.icepanel.io/AWS/svg/Management-Governance/CloudWatch.svg", category: "AWS" },
    { name: "SNS", icon: "https://icon.icepanel.io/AWS/svg/App-Integration/Simple-Notification-Service.svg", category: "AWS" },
    { name: "Auto Scaling", icon: "https://icon.icepanel.io/AWS/svg/Compute/EC2-Auto-Scaling.svg", category: "AWS" },
    { name: "EBS", icon: "https://icon.icepanel.io/AWS/svg/Storage/Elastic-Block-Store.svg", category: "AWS" },
    { name: "CloudFront", icon: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/CloudFront.svg", category: "AWS" },
    { name: "AWS CLI", icon: "https://icon.icepanel.io/AWS/svg/Developer-Tools/Command-Line-Interface.svg", category: "AWS" },
    { name: "Load Balancer", icon: "https://icon.icepanel.io/AWS/svg/Networking-Content-Delivery/Elastic-Load-Balancing.svg", category: "AWS" },
    // OS
    { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", category: "OS" },
    // DevOps
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "DevOps" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "DevOps" },
    { name: "Jenkins", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg", category: "DevOps" },
    { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", category: "DevOps" },
    { name: "Ansible", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg", category: "DevOps" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", category: "DevOps" },
    { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", category: "DevOps" },
    { name: "Nginx", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg", category: "DevOps" },
    // Scripting & Programming
    { name: "Bash", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", category: "Scripting" },
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Programming" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Programming" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", category: "Programming" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", category: "Programming" },
    // Frontend & Backend
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", category: "Frontend" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", category: "Backend" },
    // Database
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", category: "Database" },
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", category: "Database" },
    { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", category: "Database" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  // Group skills by category
  const categories = [...new Set(skills.map(s => s.category))];

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
              My Skills
            </motion.h2>

            {categories.map((category) => (
              <motion.div 
                key={category} 
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl font-semibold mb-6 text-primary">{category}</h3>
                <motion.div 
                  className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {skills
                    .filter(skill => skill.category === category)
                    .map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="flex flex-col items-center justify-center bg-card p-4 rounded-lg shadow-sm hover-effect border border-border"
                        variants={itemVariants}
                        whileHover={{ 
                          scale: 1.1, 
                          boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.3)" 
                        }}
                      >
                        <img 
                          src={skill.icon} 
                          alt={skill.name}
                          className="w-10 h-10 mb-2 object-contain"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                        <span className="text-xs font-medium text-center">{skill.name}</span>
                      </motion.div>
                    ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </motion.div>
  );
};

export default SkillsPage;
