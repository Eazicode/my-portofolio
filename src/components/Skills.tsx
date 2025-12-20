import { motion } from 'framer-motion';
import { Tag } from 'antd';

export const Skills = () => {
  const skills = {
    languages: ['JavaScript', 'TypeScript'],
    frameworks: [
      'ReactJS',
      'NextJS',
      'Tailwind CSS',
      'Bootstrap',
      'Material UI (MUI)',
      'Styled Components',
      'Radix',
      'Shadcn',
      'Tanstack',
      'Ant Design',
    ],
    tools: ['Git', 'GitHub', 'Figma'],
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-background to-accent/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Technical Skills</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
        </motion.div>

        <div className="space-y-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              {skills.languages.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Tag className="px-4 py-2 text-base bg-primary/10 border-primary/30 text-primary">
                    {skill}
                  </Tag>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-3">
              {skills.frameworks.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Tag className="px-4 py-2 text-base bg-card border-border hover:border-primary transition-all">
                    {skill}
                  </Tag>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.tools.map((skill) => (
                <motion.div key={skill} variants={itemVariants}>
                  <Tag className="px-4 py-2 text-base bg-accent/50 border-border hover:border-primary transition-all">
                    {skill}
                  </Tag>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
