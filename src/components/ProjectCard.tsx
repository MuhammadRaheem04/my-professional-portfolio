"use client"

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

interface ProjectType {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  features?: string[];
}

interface ProjectCardProps {
  project: ProjectType;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card 
        className="overflow-hidden transition-all duration-300 border group hover:shadow-md"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={project.image || "https://pixabay.com/get/g238e792584d8d56e2fd9f36f4e7d6e85b12b302365a894910fe5379832bbfcb8ac570fd84726fe59fa047fe1882bf012eccf7e07422039dcc0d4131c9f2e1ac5_1280.jpg"}
            alt={project.title}
            fill
            className={cn(
              "object-cover transition-transform duration-500",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
          <div className="absolute inset-0 transition-opacity bg-black/50 opacity-0 group-hover:opacity-100">
            <div className="flex items-center justify-center w-full h-full gap-4">
              {project.liveUrl && (
                <Button size="sm" variant="secondary" className="gap-1" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </Button>
              )}
              {project.githubUrl && (
                <Button size="sm" variant="outline" className="gap-1 bg-white/20" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
        
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">{project.title}</CardTitle>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardHeader>
        
        <CardContent className="pb-4">
          <CardDescription className="text-sm line-clamp-3">
            {project.description}
          </CardDescription>
        </CardContent>
        
        <CardFooter className="flex justify-between pt-0">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-1 hover:bg-transparent hover:underline p-0">
                View Details
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </DialogHeader>
              
              <div className="relative w-full h-64 overflow-hidden rounded-md">
                <Image
                  src={project.image || "https://pixabay.com/get/g238e792584d8d56e2fd9f36f4e7d6e85b12b302365a894910fe5379832bbfcb8ac570fd84726fe59fa047fe1882bf012eccf7e07422039dcc0d4131c9f2e1ac5_1280.jpg"}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <DialogDescription className="text-base">
                {project.longDescription || project.description}
              </DialogDescription>
              
              {project.features && (
                <div className="mt-4">
                  <h4 className="mb-2 text-sm font-semibold">Key Features:</h4>
                  <ul className="pl-5 space-y-1 text-sm list-disc">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="flex gap-4 mt-6">
                {project.liveUrl && (
                  <Button className="gap-2" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  </Button>
                )}
                {project.githubUrl && (
                  <Button variant="outline" className="gap-2" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      GitHub Repo
                    </a>
                  </Button>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </motion.div>
  );
}