"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// TypeWriter component
const TypeWriter = ({ texts }: { texts: string[] }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        setText(currentText.substring(0, text.length - 1));
        setTypingSpeed(50); // faster when deleting
      } else {
        setText(currentText.substring(0, text.length + 1));
        setTypingSpeed(150); // slower when typing
      }

      // If complete, start deleting
      if (!isDeleting && text === currentText) {
        setTimeout(() => setIsDeleting(true), 1500); // Wait before starting to delete
      } 
      // If deleted, move to next text
      else if (isDeleting && text === '') {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % texts.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, textIndex, texts, typingSpeed]);

  return (
    <div className="h-14 flex items-center justify-center">
      <span className="text-xl md:text-2xl text-primary font-medium">
        {text}
        <span className="inline-block w-1 h-6 ml-1 bg-primary animate-blink"></span>
      </span>
    </div>
  );
};

export default function Hero() {
  const typewriterTexts = [
    "Frontend Web Developer",
    "React & Next.js Developer",
    "Tailwind CSS UI Expert",
    "Building clean, modern, and responsive websites",
    "Turning Designs into Code"
  ];

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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative flex items-center min-h-screen py-16 pt-32 mb-16 mt-10">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <motion.div
        className="relative z-10 max-w-5xl w-full mx-auto text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Profile Image */}
        <motion.div 
          variants={itemVariants}
          className="mx-auto mb-8 overflow-hidden rounded-full w-48 h-48 md:w-60 md:h-60 border-4 border-primary/20 shadow-xl"
        >
          <Image 
            src="/images/Profile Picture.jpg" 
            alt="Muhammad Raheem"
            width={240}
            height={240}
            className="object-cover w-full h-full"
            priority
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl">
            Hi, I'm <span className="gradient-text">Muhammad Raheem</span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <TypeWriter texts={typewriterTexts} />
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-4 md:flex-row"
        >
          <Link href="/projects">
            <Button size="lg" className="gap-2">
              View Projects
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="gap-2">
              Contact Me
            </Button>
          </Link>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex items-center justify-center w-8 h-12 border-2 rounded-full border-muted-foreground/30">
            <motion.div
              className="w-1 h-2 rounded-full bg-primary"
              animate={{
                y: [0, 10, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}