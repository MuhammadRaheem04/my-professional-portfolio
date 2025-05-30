import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import TechStack from '@/components/TechStack';
import Timeline from '@/components/Timeline';

export const metadata: Metadata = {
  title: 'Resume | Muhammad Raheem',
  description: 'Professional resume of Muhammad Raheem, web developer specializing in Next.js, React, TypeScript, and Tailwind CSS',
};

export default function ResumePage() {
  return (
    <div className="container px-4 py-16 mx-auto mt-16">
      <div className="flex flex-col items-center justify-between mb-12 md:flex-row">
        <h1 className="mb-6 text-4xl font-extrabold md:mb-0 md:text-5xl">My Resume</h1>
        <a href="/Raheem_Web_Developer_Resume.pdf" download>
          <Button size="lg" className="gap-2">
            <Download className="w-5 h-5" />
            Download PDF
          </Button>
        </a>
      </div>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
        <div className="col-span-2">
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Professional Summary</h2>
            <p className="text-lg">
              Passionate and detail-oriented web developer with expertise in creating modern,
              responsive web applications. Specializing in Next.js, React, TypeScript, and
              Tailwind CSS to deliver exceptional user experiences. Committed to writing clean,
              maintainable code and staying current with the latest web development trends.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Work Experience</h2>
            <Timeline />
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Education</h2>
            <div className="p-6 rounded-lg bg-primary/5">
              <h3 className="text-xl font-bold">Certified Agentic & Robotic AI Engineer (In Progress)</h3>
              <p className="mt-2 text-lg">GIAIC – Governor Initiative for AI & Computing, Karachi</p>
              <p className="mt-1 text-muted-foreground">Feb 2024 – Present</p>
              <p className="mt-4">
                Practical training in HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Tailwind CSS, Sanity CMS,
                Stripe, Clerk, Python, Streamlit, Pandas, and OpenAI Agents SDK. Building full-stack and AI-integrated projects.
              </p>
            </div>

            <div className="p-6 mt-6 rounded-lg bg-primary/5">
              <h3 className="text-xl font-bold">Bachelor of Laws (LLB)</h3>
              <p className="mt-2 text-lg">Federal Urdu University of Arts, Science & Technology, Karachi</p>
              <p className="mt-1 text-muted-foreground">2021 – Present</p>
              <p className="mt-4">
                Currently pursuing a 5-year law degree alongside technical education. Builds analytical and problem-solving skills beneficial in software development.
              </p>
            </div>
          </section>

        </div>

        <div>
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Skills</h2>
            <TechStack showLabels={true} vertical={true} />
          </section>

          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Languages</h2>
            <ul className="space-y-2">
              <li className="p-3 rounded-md bg-primary/5">English (Professional)</li>
              <li className="p-3 rounded-md bg-primary/5">Urdu (Native)</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold">Certifications</h2>
            <ul className="space-y-4">
              <li className="p-4 rounded-lg bg-primary/5">
                <h3 className="font-semibold">Certified Agentic & Robotic AI Engineer</h3>
                <p className="mt-1 text-sm text-muted-foreground">GIAIC, Karachi – In Progress</p>
              </li>
            </ul>
          </section>

        </div>
      </div>
    </div>
  );
}