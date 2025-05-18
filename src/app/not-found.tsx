import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center min-h-[70vh] px-4 py-16 mx-auto text-center">
      <h1 className="mb-6 text-6xl font-extrabold">404</h1>
      <h2 className="mb-8 text-2xl font-bold">Page Not Found</h2>
      <p className="max-w-md mb-12 text-lg">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/">
        <Button size="lg" className="gap-2">
          <Home className="w-5 h-5" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
}