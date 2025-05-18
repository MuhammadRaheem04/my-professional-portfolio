import './globals.css';
import { Inter } from 'next/font/google';
import { Metadata } from 'next';
import { ThemeProvider } from '@/Providers/ThemeProvider';
import { AnimationProvider } from '@/Providers/AnimationProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Muhammad Raheem | Web Developer Portfolio',
  description: 'Professional web developer specializing in Next.js, React, TypeScript, and Tailwind CSS',
  keywords: ['web developer', 'frontend developer', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Muhammad Raheem'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimationProvider>
            <div className="flex flex-col min-h-screen">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
