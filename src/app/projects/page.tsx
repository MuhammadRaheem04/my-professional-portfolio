import { Metadata } from 'next';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Projects | Muhammad Raheem',
  description: 'Explore the web development projects created by Muhammad Raheem using Next.js, React, TypeScript, and more',
};

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-16 mx-auto mt-16">
      <h1 className="mb-12 text-4xl font-extrabold text-center md:text-5xl">My Projects</h1>
      
      <div className="mb-12">
        <p className="max-w-3xl mx-auto text-lg text-center">
          Here are some of the projects I&apos;ve worked on. Each project represents different skills 
          and technologies I&apos;ve applied to solve real-world problems.
        </p>
      </div>
      
      {/* Filter - Client-side component would be implemented here */}
      <div className='flex justify-center'>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 w-full px-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      </div>
    </div>
  );
}