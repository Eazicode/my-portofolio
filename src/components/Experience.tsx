import { motion } from "framer-motion";
import { Card, Timeline } from "antd";
import { Briefcase, ExternalLink } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Frontend Engineer",
      company: "STAYTROVE",
      period: "Aug 2025",
      description: [
        "Translated Figma/UI designs into pixel-perfect layouts using modern frontend technologies",
        "Collaborated with design and product team to deliver user-friendly interfaces",
        "Applied version control (Git/GitHub) for effective codebase management",
        "Utilized TailwindCSS for efficient styling and rapid prototyping",
        "Developed responsive web application (Landing Page, Terms & Conditions, Privacy Policy)",
      ],
      link: "http://web.staytrove.com",
    },
    {
      title: "Frontend Engineer",
      company: "VORTEXCORE",
      period: "Feb 2025",
      description: [
        "Built fully responsive interface with Tailwind CSS and media queries",
        "Developed animated hero sections with strategic CTAs",
        "Structured SEO-friendly service pages for improved discoverability",
        "Integrated backend APIs for dynamic, real-time content updates",
        "Optimized performance through lazy loading and image compression",
      ],
      link: "https://www.vortexcore.ca",
    },
    {
      title: "Stanbic IBTC Blue Intern",
      company: "STANBIC IBTC",
      period: "Jul 2024 – Oct 2024",
      description: [
        "Assisted in preparing market research reports and daily stock market summaries",
        "Managed account opening processes with proper KYC procedures",
        "Tested and provided feedback on online trading platform updates",
        "Updated client investment portfolios and maintained databases",
        "Supported stock performance tracking and financial statement analysis",
      ],
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Work Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="border-border hover:border-primary transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-muted-foreground flex items-start gap-2"
                        >
                          <span className="text-primary mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {exp.link && (
                      <a
                        href={exp.link}
                        target="_blank"
                        className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
                      >
                        Project Link <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
