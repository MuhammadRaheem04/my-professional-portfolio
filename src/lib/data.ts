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
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.",
    longDescription: "A modern e-commerce platform that provides a seamless shopping experience. Built with Next.js App Router for optimized performance and SEO, TypeScript for type safety, and Tailwind CSS for responsive design. Includes user authentication, product filtering, cart functionality, and payment integration.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/muhammadraheem/ecommerce-platform",
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
    longDescription: "A professionally designed portfolio website to showcase web development skills and projects. Built with Next.js App Router for fast page transitions, TypeScript for code reliability, and Tailwind CSS for custom styling. Features smooth animations with Framer Motion and a contact form with email integration.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80",
    liveUrl: "https://portfolio-demo.com",
    githubUrl: "https://github.com/muhammadraheem/portfolio-website",
    features: [
      "Modern UI design with dark/light mode",
      "Animated page transitions",
      "Project showcase with filtering",
      "Responsive layout for all devices",
      "Integrated contact form",
      "Performance optimized with Next.js"
    ]
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A collaborative task management application for teams with real-time updates.",
    longDescription: "A comprehensive task management application designed for team collaboration with real-time updates. Built with Next.js, TypeScript, and Tailwind CSS. Features drag-and-drop task organization, user assignments, due dates, and real-time notifications. Includes project boards and team management functionality.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/muhammadraheem/task-manager",
    features: [
      "Drag-and-drop task organization",
      "User roles and permissions",
      "Task assignment and due date tracking",
      "Real-time notifications",
      "Project and team management",
      "Activity logs and dashboards"
    ]
  },
  {
    id: 4,
    title: "Real Estate Listings",
    description: "A modern real estate platform with property listings and advanced search functionality.",
    longDescription: "A comprehensive real estate platform for property listings and search. Implemented with Next.js for fast page loads, TypeScript for type safety, and Tailwind CSS for responsive design. Features include map integration, advanced search filters, saved favorites, and agent contact forms.",
    tags: ["Next.js", "TypeScript", "Google Maps API", "ShadCN UI"],
    image: "https://pixabay.com/get/g92402e07594a7f44559f8fbdb5bb74056a9c021f246d8742bf1371408b1e759f032cc0f22b6cd605682b7345981c0860353930d0e0807cc929109d70c254719f_1280.jpg",
    liveUrl: "https://realestate-demo.com",
    githubUrl: "https://github.com/muhammadraheem/real-estate",
    features: [
      "Interactive property maps with Google Maps API",
      "Advanced search with multiple filters",
      "Property details with image galleries",
      "Save favorite properties",
      "Contact agents through forms",
      "Responsive design for mobile and desktop"
    ]
  },
  {
    id: 5,
    title: "Food Delivery App",
    description: "A food delivery application with restaurant listings, order tracking, and payment processing.",
    longDescription: "A complete food delivery solution allowing users to browse restaurants, place orders, and track delivery in real-time. Built with Next.js, TypeScript, and Tailwind CSS. Includes restaurant search, menu customization, cart management, secure checkout, and delivery tracking.",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "Stripe"],
    image: "https://pixabay.com/get/g8368ded07b93d7de9868ff8c5d51db6e6686905f75cec8648f1ec8c2d0d6d3bffb93e306457654921076054d5c1a0ae71d5f88fb59db29a0f703161b8323fe1f_1280.jpg",
    liveUrl: "https://fooddelivery-demo.com",
    githubUrl: "https://github.com/muhammadraheem/food-delivery",
    features: [
      "Restaurant search and filtering",
      "Menu browsing with item customization",
      "Order cart and checkout process",
      "Secure payment processing",
      "Real-time order tracking",
      "Order history and reordering"
    ]
  },
  {
    id: 6,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for managing social media accounts and analytics.",
    longDescription: "An all-in-one social media management dashboard that helps users schedule posts, monitor engagement, and analyze performance across multiple platforms. Built with Next.js, TypeScript, and Tailwind CSS. Features include post scheduling, analytics visualization, engagement tracking, and content calendar management.",
    tags: ["React", "TypeScript", "Chart.js", "ShadCN UI"],
    image: "https://pixabay.com/get/gb699fe876a3278b9ec2f8c0023dc4d7fd5e7a40e203b58e5a3313947c468965fbbae955ef5aec27f1dfec052844b89d853675485baf965a114576133a138caa9_1280.jpg",
    liveUrl: "https://socialdashboard-demo.com",
    githubUrl: "https://github.com/muhammadraheem/social-dashboard",
    features: [
      "Multi-platform social media management",
      "Post scheduling and content calendar",
      "Performance analytics with visualizations",
      "Engagement tracking and reporting",
      "Audience insights and demographics",
      "Export functionality for reports"
    ]
  },
  {
    id: 7,
    title: "Health & Fitness Tracker",
    description: "A health and fitness tracking application with custom workout plans and nutrition monitoring.",
    longDescription: "A comprehensive health and fitness application that allows users to track workouts, monitor nutrition, and set personalized fitness goals. Built with Next.js, TypeScript, and Tailwind CSS. Features include workout logging, nutrition tracking, progress visualization, and personalized recommendations.",
    tags: ["Next.js", "TypeScript", "D3.js", "MongoDB"],
    image: "https://pixabay.com/get/g8823ae513cca4cd13f3ca567b9c96b860f6ddd9b7a0215b134fb23c6441d8d4234b40457e758f5a947a33ab308f769c811ca83ce665cdfba326d5803e19a478f_1280.jpg",
    liveUrl: "https://fitnesstracker-demo.com",
    githubUrl: "https://github.com/muhammadraheem/fitness-tracker",
    features: [
      "Customizable workout plans",
      "Nutrition tracking and meal planning",
      "Progress tracking with charts and graphs",
      "Goal setting and achievement tracking",
      "Personalized recommendations",
      "Integration with fitness devices"
    ]
  },
  {
    id: 8,
    title: "Learning Management System",
    description: "An educational platform with course management, student tracking, and content delivery.",
    longDescription: "A comprehensive learning management system for educational institutions and online courses. Built with Next.js, TypeScript, and Tailwind CSS. Features include course creation, student enrollment, content delivery, assignment submission, grading, and progress tracking.",
    tags: ["Next.js", "MongoDB", "TypeScript", "AWS S3"],
    image: "https://pixabay.com/get/gd3387a97b5d36f5085e3db4c00442fcd0fcff0461028af63e7fce81d4c379fa133feadb67924deecdc992b1fb00162a0bb843ec190b3f2e83365d268ce5067d0_1280.jpg",
    liveUrl: "https://lms-demo.com",
    githubUrl: "https://github.com/muhammadraheem/learning-management",
    features: [
      "Course creation and management",
      "Student enrollment and user roles",
      "Content delivery with various media types",
      "Assignment submission and grading",
      "Progress tracking and reporting",
      "Discussion forums and messaging"
    ]
  },
  {
    id: 9,
    title: "Blog Platform with CMS",
    description: "A modern blog platform with content management system built with Next.js and Sanity CMS.",
    longDescription: "A full-featured blog platform with an integrated content management system. Built with Next.js for the frontend and Sanity.io for the CMS. Includes rich text editing, image optimization, categories and tags, search functionality, and SEO optimization.",
    tags: ["Next.js", "Sanity CMS", "TypeScript", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1556742212-5b321f3c261b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    liveUrl: "https://blog-cms-demo.com",
    githubUrl: "https://github.com/muhammadraheem/blog-platform",
    features: [
      "Rich text editing with Sanity Studio",
      "Image optimization and management",
      "Categories, tags, and related posts",
      "Search functionality",
      "SEO optimization",
      "Social sharing and comments"
    ]
  },
  {
    id: 10,
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with real-time updates, forecasts, and historical data.",
    longDescription: "An interactive weather dashboard providing current conditions, forecasts, and historical weather data. Built with Next.js, TypeScript, and Tailwind CSS. Features include location search, current weather display, multi-day forecasts, hourly predictions, and weather maps.",
    tags: ["Next.js", "TypeScript", "Weather API", "Chart.js"],
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80",
    liveUrl: "https://weather-demo.com",
    githubUrl: "https://github.com/muhammadraheem/weather-dashboard",
    features: [
      "Location search and geolocation",
      "Current weather conditions display",
      "Multi-day weather forecasts",
      "Hourly weather predictions",
      "Interactive weather maps",
      "Historical weather data access"
    ]
  }
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

