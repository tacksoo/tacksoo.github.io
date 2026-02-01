import { AnimatedSection } from '@/components/AnimatedSection';

export function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="content-container">
        <div className="section-divider mb-16" />
        
        <AnimatedSection>
          <h2>Background</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p>
            Dr. Im is a Professor of Information Technology at{' '}
            <a
              href="https://www.ggc.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="body-link"
            >
              Georgia Gwinnett College
            </a>
            , specializing in how educational institutions and businesses can put AI to work. His focus areas include 
            AI-enhanced learning experiences, intelligent tutoring systems, automated business processes, and how 
            people adapt to working with AI.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p>
            In addition to his academic work, Dr. Im partners with schools, universities, and enterprises to find 
            practical AI applications that support people's work rather than replace it. His approach emphasizes 
            hands-on implementation, ethical considerations, and clear results in both classrooms and day-to-day operations.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-muted-foreground">
            Areas of focus include AI in education, business process automation, AI-enhanced learning design, 
            and helping teams adapt to AI.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
