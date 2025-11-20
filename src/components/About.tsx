import { motion } from 'framer-motion';
import { Card } from 'antd';
import { MapPin, GraduationCap, Phone, Mail } from 'lucide-react';

export const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <Card className="h-full border-border hover:border-primary transition-all">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Profile</h3>
              <p className="text-muted-foreground leading-relaxed">
                Results-driven Frontend Engineer with over 3 years of hands-on experience optimizing
                frontend applications for responsive design, SEO, and enhanced site performance. Eager
                to contribute to high-performing teams by delivering scalable, user-focused designs that
                fuel business growth and drive measurable success.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full border-border hover:border-primary transition-all">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Contact & Education</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>08038811917</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:Mistereze16@gmail.com" className="hover:text-primary transition-colors">
                    Mistereze16@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium text-foreground">BSc. in Physics</p>
                      <p className="text-sm text-muted-foreground">Federal University of Abeokuta</p>
                      <p className="text-sm text-muted-foreground">Oct 2020 – Jul 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
