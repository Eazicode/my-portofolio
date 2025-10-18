import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { useTheme } from '@/contexts/ThemeContext';

const Index = () => {
  const { theme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#8b5cf6',
          borderRadius: 12,
          fontFamily: 'General Sans, system-ui, sans-serif',
        },
      }}
    >
      <div className="min-h-screen bg-background">
        <ThemeToggle />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </ConfigProvider>
  );
};

export default Index;
