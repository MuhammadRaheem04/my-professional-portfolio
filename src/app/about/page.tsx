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
    <div className="container px-4 py-16 mx-auto mt-12">
      <h1 className="mb-12 text-4xl font-extrabold text-center md:text-5xl">About Me</h1>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Muhammad Raheem</h2>
          <p className="mb-4 text-lg">
            I&apos;m a dedicated Frontend Developer and AI enthusiast based in Karachi, Pakistan. Currently pursuing the &quot;Certified Agentic & Robotic AI Engineer&quot; program at GIAIC, I specialize in building modern, responsive, and user-focused web applications.
          </p>
          <p className="mb-4 text-lg">
            My core stack includes <strong>Next.js, React.js, TypeScript, and Tailwind CSS</strong>. I&apos;ve built and deployed full-stack applications using real-world tools like <strong>Sanity CMS, Stripe, and Clerk</strong>, including a production-ready e-commerce platform.
          </p>
          <p className="mb-6 text-lg">
            I&apos;m also diving into <strong>Agentic AI</strong> development using <strong>Python and OpenAI Agents SDK</strong> — blending frontend experiences with intelligent automation. Passionate about continuous learning, I aim to grow into roles that combine UI/UX excellence with AI-powered features.
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

