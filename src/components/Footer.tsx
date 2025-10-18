import { Github, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Kalu Eze Emmanuel
            </h3>
            <p className="text-muted-foreground">Frontend Engineer</p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/Eazicode"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background border border-border hover:bg-accent hover:border-primary transition-all"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="https://linkedin.com/in/kalu-eze-0142a6312"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background border border-border hover:bg-accent hover:border-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-foreground" />
            </a>
            <a
              href="mailto:Mistereze16@gmail.com"
              className="p-3 rounded-full bg-background border border-border hover:bg-accent hover:border-primary transition-all"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-foreground" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Kalu Eze Emmanuel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
