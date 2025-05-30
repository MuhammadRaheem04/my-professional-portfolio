"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import {
  Code,
  FileCode,
  Database,
  Globe,
  Layout,
  PaintBucket,
  Github,
  MonitorSmartphone,
  Terminal,
  PenTool
} from 'lucide-react';

interface TechStackProps {
  showLabels?: boolean;
  vertical?: boolean;
  compact?: boolean;
}

export default function TechStack({
}: TechStackProps) {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  // Merged technologies from all categories
  const technologies = [
    // Core Web
    { name: 'HTML5', icon: <Code className="w-full h-full text-[#E34F26]" />, color: '#E34F26' },
    { name: 'CSS3', icon: <PenTool className="w-full h-full text-[#1572B6]" />, color: '#1572B6' },
    { name: 'JavaScript', icon: <Code className="w-full h-full text-[#F7DF1E]" />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <FileCode className="w-full h-full text-[#3178C6]" />, color: '#3178C6' },

    // Frontend
    { name: 'React', icon: <Globe className="w-full h-full text-[#61DAFB]" />, color: '#61DAFB' },
    {name: 'Next.js', icon: <Layout className="w-full h-full text-[#888888]" />, color: '#888888'},

    // UI & Animation
    { name: 'Tailwind CSS', icon: <PaintBucket className="w-full h-full text-[#06B6D4]" />, color: '#06B6D4' },
    { name: 'ShadCN UI', icon: <PenTool className="w-full h-full text-[#000000]" />, color: '#000000' },
    { name: 'Framer Motion', icon: <MonitorSmartphone className="w-full h-full text-[#0055FF]" />, color: '#0055FF' },
    { name: 'DaisyUI', icon: <Layout className="w-full h-full text-[#5A0EF8]" />, color: '#5A0EF8' },

    // Tools & Integration
    { name: 'Stripe', icon: <Database className="w-full h-full text-[#635BFF]" />, color: '#635BFF' },
    { name: 'Clerk', icon: <Terminal className="w-full h-full text-[#6C47FF]" />, color: '#6C47FF' },
    { name: 'Sanity CMS', icon: <FileCode className="w-full h-full text-[#F03E2F]" />, color: '#F03E2F' },

    // Dev & Hosting
    { 
  name: 'Git & GitHub', 
  icon: <Github className="w-full h-full text-[#6e5494]" />, // updated
  color: '#6e5494' 
},
    { 
  name: 'Vercel', 
  icon: <Globe className="w-full h-full text-[#888888]" />, // updated
  color: '#888888' 
},
// Agentic AI
{
  name: 'Python',
  icon: <Terminal className="w-full h-full text-[#3776AB]" />,
  color: '#3776AB'
},
{
  name: 'Streamlit',
  icon: <MonitorSmartphone className="w-full h-full text-[#FF4B4B]" />,
  color: '#FF4B4B'
},
{
  name: 'Pandas',
  icon: <Database className="w-full h-full text-[#150458]" />,
  color: '#150458'
},
{
  name: 'OpenAI SDK',
  icon: <Code className="w-full h-full text-[#10A37F]" />,
  color: '#10A37F'
},
  ];

  const renderIcon = (tech: { name: string; icon: React.ReactNode; color: string }) => (
    <div
      className="flex flex-col items-center justify-center gap-2 p-4 transition-all duration-300 tech-card"
      style={{ borderBottom: `2px solid ${tech.color}` }}
    >
      <div className="relative w-12 h-12 mb-2">
        {tech.icon}
      </div>
      <span className="text-sm font-medium text-center">{tech.name}</span>
    </div>
  );

  return (
    <div ref={containerRef} className="w-full py-6">
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {technologies.map((tech) => (
          <TooltipProvider key={tech.name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.div
                  className="overflow-hidden"
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.4,
                        ease: "easeOut",
                      }
                    },
                  }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                >
                  {renderIcon(tech)}
                </motion.div>
              </TooltipTrigger>
              <TooltipContent>
                <p>{tech.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </motion.div>
    </div>
  );
}

