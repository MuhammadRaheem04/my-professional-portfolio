import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { projects, services } from '@/lib/data';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Hero Section */}
      <Hero />
      
      {/* Tech Stack Section */}
      <section className="mb-24">
        <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">My Tech Stack</h2>
        <TechStack />
      </section>
      
      {/* Featured Projects Section */}
      <section className="mb-24">
        <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/projects">
            <Button size="lg" className="font-semibold">
              View All Projects
            </Button>
          </Link>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="mb-24">
        <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl">My Services</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.slice(0, 4).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/services">
            <Button size="lg" className="font-semibold">
              All Services
            </Button>
          </Link>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 mb-12 text-center rounded-lg bg-primary/5">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to work together?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Let&apos;s discuss how I can help bring your web project to life.
        </p>
        <Link href="/contact">
          <Button size="lg" className="font-semibold">
            Contact Me
          </Button>
        </Link>
      </section>
    </div>
  );
}
