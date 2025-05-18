"use client"

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';

const timelineData = [
  {
    id: 1,
    title: 'Senior Web Developer',
    company: 'Tech Solutions Inc.',
    date: '2022 - Present',
    description: 'Led frontend development for multiple high-profile projects using Next.js, TypeScript, and Tailwind CSS. Improved site performance by 40% through code optimization.',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Digital Innovations',
    date: '2020 - 2022',
    description: 'Developed responsive web applications using React and modern CSS. Implemented state management with Redux and collaborated closely with design teams.',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 3,
    title: 'Junior Web Developer',
    company: 'Web Crafters',
    date: '2018 - 2020',
    description: 'Created and maintained websites for clients across various industries. Specialized in responsive design and accessibility compliance.',
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    id: 4,
    title: 'Computer Science Degree',
    company: 'University of Computer Science',
    date: '2014 - 2018',
    description: 'Bachelor of Science in Computer Science with focus on web technologies and software development.',
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
