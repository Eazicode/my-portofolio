import { motion } from "framer-motion";
import { Card, Timeline } from "antd";
import { Briefcase, ExternalLink } from "lucide-react";

export const Experience = () => {
  const experiences = [
    {
      title: "Frontend Engineer",
      company: "STAYTROVE",
      period: "MAY 2025 -  AUG 2025",
      description: [
        "Designed and developed a flexible role-based access control (RBAC) system, enabling permission management for admin users and enhancing and ensuring that only authorized personnel had access to sensitive data and functionalities.",
        " Implemented server-side pagination to efficiently handle large datasets and reduce load times. This ensures a smooth user experience even with thousands of properties, crucial for scalability",
        "Developed a secure authentication flow, implementing  server-side session management to persist and validate user login state across protected routes and browser sessions.",
        "Ensured accurate and safe payment handling by implementing idempotent transaction logic, protecting users from double billing and enhancing trust in the platform.",
        "Reduced initial load time by 40% through strategic code-splitting, lazy loading, and React Suspense, significantly improving frontend performance and user experience.",
      ],
      link: "http://web.staytrove.com",
    },
    {
      title: "Frontend Engineer",
      company: "VORTEXCORE",
      period: "JAN 2025 - APR 2025",
      description: [
        "Architectured and developed admin dashboards with real-time charts and data tables, driving operational efficiency and enabling data-driven decision-making across teams.",
        "Built scalable, reusable UI components in React + TypeScript, enabling faster development and consistent design across cross-functional client projects.",
        "Implemented comprehensive frontend observability for API integrations, including metrics, latency, cache hit ratios, and error distribution, facilitating proactive performance optimization and debugging",
        "Designed a scalable API consumption layer with typed contracts, error boundaries, retry logic, and intelligent caching, enabling dynamic, real-time content updates while maintaining predictable rendering and fault-tolerant UI behavior.",
        "Troubleshoot, debugged application codes and resolved 80% of reported bugs within stipulated timelines to improve functionality and performance. ",
      ],
      link: "https://www.vortexcore.ca",
    },
    {
      title: "Junior Engineer",
      company: "STANBIC IBTC HOLDING PLC",
      period: "Jul 2024 – Oct 2024",
      description: [
        "Collaborated with designers to develop visually appealing and intuitive user interfaces for a seamless browsing experience.",
        "Utilized various Reactjs/Nextjs front-end frameworks for efficient application development and seamless integration of UI components.",
        "Assisting in testing and providing feedback on updates on Stanbic IBTC Stockbrokers online trading platforms.",
        " Increased website accessibility by ensuring compliance with WCAG 2.0 guidelines and incorporating ARIA attributes.",
        "Developed reusable components and libraries for future use, accelerating development processes and maintaining consistency across projects.",
        "Participated in agile development processes through regular stand-ups, sprint planning sessions, reviews, and retrospectives",
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
                <div>
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                    <div className="flex gap-5">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <Briefcase className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-5">
                          <p className="text-primary font-medium">
                            {exp.company}
                          </p>
                          <span className="text-sm text-muted-foreground">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
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
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
