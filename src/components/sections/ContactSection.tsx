import { Linkedin, Calendar, MessageSquare } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

export function ContactSection() {
  return (
    <section id="contact" className="section-padding pb-24">
      <div className="content-container">
        <div className="section-divider mb-16" />
        
        <AnimatedSection>
          <h2>Get in Touch</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p>
            For inquiries about workshops, training, consulting engagements, or speaking opportunities 
            related to AI in education or business contexts, please reach out directly.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="flex items-center gap-6 mt-6">
            {/* TODO: Uncomment when Dr. Im sets up Calendly or similar scheduling tool
            <a
              href="https://calendly.com/your-link"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link inline-flex items-center gap-2"
            >
              <Calendar size={16} />
              Schedule a consultation
            </a>
            
            <span className="text-border">·</span>
            */}
            
            <a
              href="https://forms.gle/ZnbiqasrmNNzEZej6"
              target="_blank"
              rel="noopener noreferrer"
              className="accent-link inline-flex items-center gap-2"
            >
              <MessageSquare size={16} />
              Submit an inquiry
            </a>
            
            <span className="text-border">·</span>
            
            <a
              href="https://linkedin.com/in/tacksooim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent/80 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
