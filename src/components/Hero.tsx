import { motion } from "framer-motion";
import { Button } from "antd";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99] as any,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-background to-accent/10">
      <motion.div
        className="max-w-4xl w-full text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Frontend Engineer
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent"
        >
          Kalu Eze Emmanuel
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Results-driven Frontend Engineer with over 2 years of hands-on
          experience optimizing frontend applications for responsive design,
          SEO, and enhanced site performance.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <Button
            type="primary"
            size="large"
            icon={<Mail className="w-4 h-4" />}
            className="h-12 px-8 bg-primary hover:opacity-90"
            href="mailto:Mistereze16@gmail.com"
          >
            Contact Me
          </Button>
          <Button
            size="large"
            icon={<Download className="w-4 h-4" />}
            className="h-12 px-8"
            href="./my-resume.pdf"
            target="_blank"
          >
            Download CV
          </Button>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center"
        >
          <a
            href="https://github.com/Eazicode"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:border-primary transition-all"
          >
            <Github className="w-5 h-5 text-foreground" />
          </a>
          <a
            href="https://linkedin.com/in/kalu-eze-0142a6312"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card border border-border hover:bg-accent hover:border-primary transition-all"
          >
            <Linkedin className="w-5 h-5 text-foreground" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
