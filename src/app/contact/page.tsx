import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact | Muhammad Raheem',
  description: 'Get in touch with Muhammad Raheem for your web development needs',
};

export default function ContactPage() {
  return (
    <div className="container px-4 py-16 mx-auto mt-16">
      <h1 className="mb-12 text-4xl font-extrabold text-center md:text-5xl">Contact Me</h1>
      
      <div className="mb-16">
        <p className="max-w-3xl mx-auto text-lg text-center">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          Feel free to reach out through the form below or connect with me on social media.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
        <div>
          <h2 className="mb-6 text-2xl font-bold">Get In Touch</h2>
          <ContactForm />
        </div>
        
        <div>
          <h2 className="mb-6 text-2xl font-bold">Connect With Me</h2>
          <div className="p-6 rounded-lg bg-primary/5">
            <div className="mb-6">
              <h3 className="mb-2 text-lg font-semibold">Location</h3>
              <p>Available for remote work worldwide</p>
            </div>
            
            <div className="mb-6">
              <h3 className="mb-2 text-lg font-semibold">Time Zone</h3>
              <p>UTC+5 (Pakistan Standard Time)</p>
            </div>
            
            <div className="mb-8">
              <h3 className="mb-2 text-lg font-semibold">Email</h3>
              <p>contact@muhammadraheem.com</p>
            </div>
            
            <h3 className="mb-4 text-lg font-semibold">Social Profiles</h3>
            <div className="flex flex-col gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 transition-colors rounded-md hover:bg-primary/10"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 transition-colors rounded-md hover:bg-primary/10"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              
              <a 
                href="https://wa.me/1234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 p-3 transition-colors rounded-md hover:bg-primary/10"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
