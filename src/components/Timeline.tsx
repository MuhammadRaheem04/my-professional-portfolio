"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const timelineData = [
  {
    id: 1,
    title: 'Agentic AI Developer (In Progress)',
    company: 'GIAIC – Quarter 4',
    date: 'May 2025 – Present',
    description:
      'Currently learning Agentic AI using Python and OpenAI Agents SDK. Developing intelligent agents for automation and reasoning tasks.',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 2,
    title: 'Python & Streamlit Developer',
    company: 'GIAIC – Quarter 3',
    date: 'Apr 2025',
    description:
      'Built learning projects using Python, Streamlit, Pandas, and UV. Developed logic-based tools like Data Sweeper and Secure Data Encryption App.',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 3,
    title: 'Frontend Developer (React & Next.js)',
    company: 'GIAIC – Quarter 2',
    date: 'Mar 2025',
    description:
      'Created responsive frontend projects using React.js, Next.js 15, Tailwind CSS, Sanity CMS, Clerk, and Stripe. Built and deployed a full-stack e-commerce website.',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 4,
    title: 'Web Development Fundamentals',
    company: 'GIAIC – Quarter 1',
    date: 'Feb 2024',
    description:
      'Learned HTML5, CSS3, JavaScript, and TypeScript. Laid strong foundation for building interactive and responsive web applications.',
    icon: <GraduationCap className="w-5 h-5" />,
  },
  {
    id: 5,
    title: 'LLB (Law Degree)',
    company: 'Federal Urdu University (FUUAST), Karachi',
    date: '2021 – Present',
    description:
      'Currently pursuing a 5-year Bachelor of Laws program while simultaneously advancing in the tech field through AI and web development training.',
    icon: <GraduationCap className="w-5 h-5" />,
  },
];


export default function Timeline() {
  const timelineRef = useRef(null);
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 });

  return (
    <div ref={timelineRef} className="relative">
      {/* Timeline line */}
      <div className="absolute top-0 left-[19px] bottom-0 w-px bg-border md:left-1/2 md:-translate-x-px" />
      
      <div className="space-y-12">
        {timelineData.map((item, i) => (
          <motion.div 
            key={item.id}
            className={cn(
              "flex flex-col relative",
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            )}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute z-10 flex items-center justify-center w-10 h-10 -translate-x-1/2 rounded-full bg-background border left-5 top-5 md:left-1/2">
              <div className="flex items-center justify-center w-6 h-6 text-white rounded-full bg-primary">
                {item.icon}
              </div>
            </div>
            
            {/* Content */}
            <div className={cn(
              "md:w-1/2",
              i % 2 === 0 ? "md:pr-12" : "md:pl-12"
            )}>
              <div className="p-5 ml-10 border rounded-lg shadow-sm md:ml-0">
                <div className="flex flex-col mb-1 sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                </div>
                <div className="mb-2 text-muted-foreground">{item.company}</div>
                <p>{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
