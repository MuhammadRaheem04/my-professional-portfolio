import { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/lib/data';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Services | Muhammad Raheem',
  description: 'Professional web development services offered by Muhammad Raheem including frontend development, responsive design, and more',
};

export default function ServicesPage() {
  return (
    <div className="container px-4 py-16 mx-auto mt-16">
      <h1 className="mb-12 text-4xl font-extrabold text-center md:text-5xl">My Services</h1>
      
      <div className="mb-16">
        <p className="max-w-3xl mx-auto text-lg text-center">
          I offer a range of web development services to help bring your digital ideas to life.
          From responsive websites to complex web applications, I can help you create a strong online presence.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      
      <div className="p-8 mt-20 text-center rounded-lg bg-primary/5">
        <h2 className="mb-4 text-2xl font-bold md:text-3xl">Need a custom solution?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          If you don't see exactly what you're looking for, let's discuss your specific requirements.
          I'm always open to customizing my services to meet your unique needs.
        </p>
        <Link href="/contact">
          <Button size="lg" className="font-semibold">
            Get in Touch
          </Button>
        </Link>
      </div>
    </div>
  );
}
