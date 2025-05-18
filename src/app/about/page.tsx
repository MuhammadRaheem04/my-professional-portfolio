import { Metadata } from 'next';
import Image from 'next/image';
import Timeline from '@/components/Timeline';
import TechStack from '@/components/TechStack';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Me | Muhammad Raheem',
  description: 'Learn more about Muhammad Raheem, a professional web developer specializing in Next.js, React, TypeScript, and Tailwind CSS',
};

export default function AboutPage() {
  return (
    <div className="container px-4 py-16 mx-auto mt-16">
      <h1 className="mb-12 text-4xl font-extrabold text-center md:text-5xl">About Me</h1>
      
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Muhammad Raheem</h2>
          <p className="mb-4 text-lg">
            I'm a passionate web developer focused on creating clean, modern, and responsive websites.
            With expertise in Next.js, React, TypeScript, and Tailwind CSS, I build web applications
            that deliver exceptional user experiences.
          </p>
          <p className="mb-6 text-lg">
            My journey in web development started several years ago, and I've since worked on a variety of
            projects ranging from small business websites to complex web applications. I'm constantly learning
            and staying up-to-date with the latest technologies and best practices in the field.
          </p>
          <div className="flex gap-4">
            <Link href="/resume">
              <Button variant="default" size="lg">View Resume</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">Contact Me</Button>
            </Link>
          </div>
        </div>
        
        <div className="relative flex items-center justify-center overflow-hidden rounded-lg h-80 md:h-auto">
          <div className="w-[400px] h-full max-w-md max-h-md">
            <Image
              src="/images/Profile Picture.jpg"
              alt="Muhammad Raheem"
              width={400}
              height={400}
              className="object-cover rounded-lg shadow-md"
              priority
            />
          </div>
        </div>
      </div>
      
      <section className="mt-24">
        <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">My Skills</h2>
        <TechStack showLabels={true} />
      </section>
      
      <section className="mt-24">
        <h2 className="mb-12 text-3xl font-bold text-center md:text-4xl">My Journey</h2>
        <Timeline />
      </section>
    </div>
  );
}

