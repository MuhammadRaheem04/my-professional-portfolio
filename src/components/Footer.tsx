import Link from 'next/link';
import Image from 'next/image';
import { Github, Linkedin, Code, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/90 backdrop-blur-sm">
      <div className="container px-4 py-16 mx-auto">
        {/* Main Footer Section */}
        <div className="grid grid-cols-1 gap-10 mb-12 md:grid-cols-4">
          <div className="col-span-1 space-y-6 md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image 
                  src="/images/logo.svg" 
                  alt="Muhammad Raheem - Web Developer"
                  width={40}
                  height={40}
                />
              </div>
              <h3 className="text-2xl font-bold gradient-text">Muhammad Raheem</h3>
            </div>
            
            <p className="text-muted-foreground">
              Professional web developer specializing in modern, responsive websites 
              with Next.js, React, Tailwind CSS, and TypeScript.
            </p>
            
            <div className="flex items-center gap-2">
              <div className="flex p-1 rounded-lg bg-primary/5">
                <a
                  href="https://github.com/MuhammadRaheem04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-all rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad04raheem/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 transition-all rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:raheemshar59@gmail.com"
                  className="p-2 transition-all rounded-md text-muted-foreground hover:text-primary hover:bg-primary/10"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary hover-underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="flex items-center gap-2 text-muted-foreground hover:text-primary hover-underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="flex items-center gap-2 text-muted-foreground hover:text-primary hover-underline">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="flex items-center gap-2 text-muted-foreground hover:text-primary hover-underline">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center gap-2 text-muted-foreground hover:text-primary hover-underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 mt-0.5 text-primary/70" />
                <a href="mailto:raheemshar59@gmail.com" className="hover:text-primary">
                  raheemshar59@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 text-primary/70" />
                <span>Karachi, Pakistan</span>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Code className="w-5 h-5 mt-0.5 text-primary/70" />
                <span>Frontend Developer</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 text-center border-t">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Muhammad Raheem. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}