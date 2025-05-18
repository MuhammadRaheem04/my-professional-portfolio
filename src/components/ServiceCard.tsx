"use client"

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { 
  Code, Database, Globe, Smartphone, PenTool, Wrench, 
  Settings, Layout, Circle
} from 'lucide-react';
import { ServiceType } from '@/lib/data';
import React from 'react';

interface ServiceCardProps {
  service: ServiceType;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  // Function to render the correct icon based on the icon name
  const renderIcon = () => {
    switch (service.iconName) {
      case 'Code':
        return <Code className="w-6 h-6" />;
      case 'Database':
        return <Database className="w-6 h-6" />;
      case 'Globe':
        return <Globe className="w-6 h-6" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6" />;
      case 'PenTool':
        return <PenTool className="w-6 h-6" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6" />;
      case 'Settings':
        return <Settings className="w-6 h-6" />;
      case 'Layout':
        return <Layout className="w-6 h-6" />;
      default:
        return <Circle className="w-6 h-6" />;
    }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card className="h-full transition-all border hover:shadow-md">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <div 
            className={cn(
              "flex items-center justify-center w-12 h-12 rounded-md",
              "bg-primary/10 text-primary"
            )}
          >
            {renderIcon()}
          </div>
          <CardTitle className="text-xl">{service.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{service.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}