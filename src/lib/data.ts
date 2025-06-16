// We don't import React components directly in this file
// as it's a regular TypeScript file, not TSX

// Define interfaces
export interface ProjectType {
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

export interface ServiceType {
  id: number;
  title: string;
  description: string;
  iconName: string; // Store icon name instead of component
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Full-Stack E-Commerce Website",
    description: "A full-featured e-commerce platform built with Next.js, TypeScript, Tailwind CSS and Sanity.",
    longDescription: "A modern e-commerce platform that provides a seamless shopping experience. Built with Next.js App Router for optimized performance and SEO, TypeScript for type safety, and Tailwind CSS for responsive design. Includes user authentication, product filtering, cart functionality, and payment integration.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "Sanity", "Clerk", "Zustand"],
    image: "https://i.ibb.co/fYrXpyc3/Ecomerce-web-img.png",
    liveUrl: "https://full-stack-e-commerce-website-built.vercel.app/",
    githubUrl: "https://github.com/MuhammadRaheem04/Full-Stack-E-Commerce-Website-built-with-Next.js-15",
    features: [
      "Responsive design for all device sizes",
      "Product catalog with advanced filtering",
      "User authentication and profiles",
      "Shopping cart with persistent storage",
      "Secure checkout with Stripe integration",
      "Order tracking and history"
    ]
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern portfolio website showcasing web development projects and skills.",
    longDescription: "A professionally designed portfolio website to showcase web development skills and projects. Built with Next.js App Router for fast page transitions, TypeScript for code reliability, and Tailwind CSS for custom styling and a contact form with email integration.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    image: "https://i.ibb.co/RkKCCVMF/portfolio.png",
    liveUrl: "https://muhammad-raheem-personal-portfolio-website.vercel.app/",
    githubUrl: "https://github.com/MuhammadRaheem04/My-Personal-Portfolio-website-by-Muhammad-Raheem",
    features: [
      "Modern UI design with dark/light mode",
      "Animated page transitions",
      "Project showcase with filtering",
      "Responsive layout for all devices",
      "Integrated contact form",
      "Performance optimized with Next.js"
    ]
  },
  // {
  //   id: 3,
  //   title: "E-Commerce Website",
  //   description: "A collaborative task management application for teams with real-time updates.",
  //   longDescription: "A comprehensive task management application designed for team collaboration with real-time updates. Built with Next.js, TypeScript, and Tailwind CSS. Features drag-and-drop task organization, user assignments, due dates, and real-time notifications. Includes project boards and team management functionality.",
  //   tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
  //   image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  //   liveUrl: "https://taskmanager-demo.com",
  //   githubUrl: "https://github.com/muhammadraheem/task-manager",
  //   features: [
  //     "Drag-and-drop task organization",
  //     "User roles and permissions",
  //     "Task assignment and due date tracking",
  //     "Real-time notifications",
  //     "Project and team management",
  //     "Activity logs and dashboards"
  //   ]
  // },
];

export const services: ServiceType[] = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Creating modern, responsive user interfaces with React, Next.js, and TypeScript. I focus on building fast, accessible, and visually appealing websites that provide an excellent user experience across all devices.",
    iconName: "Layout",
  },
  {
    id: 2,
    title: "Responsive Web Design",
    description: "Developing websites that look and function perfectly on all devices - from desktops to smartphones. Using modern CSS techniques like Flexbox, Grid, and responsive design principles to ensure your site looks great everywhere.",
    iconName: "Smartphone",
  },
  {
    id: 3,
    title: "Next.js Development",
    description: "Building high-performance web applications with Next.js that leverage server-side rendering, static site generation, and the App Router for optimal performance and SEO. Creating seamless user experiences with fast page transitions.",
    iconName: "Code",
  },
  {
    id: 4,
    title: "CMS Integration",
    description: "Integrating headless CMS solutions like Sanity, Contentful, or Strapi to provide easy content management. Creating custom content models and editing interfaces that make updating your website simple and efficient.",
    iconName: "FileCode",
  },
  {
    id: 5,
    title: "UI/UX Design Implementation",
    description: "Translating design mockups into fully functional websites with pixel-perfect accuracy. Implementing modern UI components, animations, and interactions that enhance user experience while maintaining performance.",
    iconName: "PaintBucket",
  },
  {
    id: 6,
    title: "E-commerce Solutions",
    description: "Building online stores and e-commerce platforms with secure payment processing, product management, and user accounts. Creating seamless shopping experiences that convert visitors into customers.",
    iconName: "Globe",
  }
];

