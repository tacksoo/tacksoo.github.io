import { AnimatedSection } from '@/components/AnimatedSection';

export function EngagementsSection() {
  return (
    <section className="section-padding">
      <div className="content-container">
        <div className="section-divider mb-16" />
        
        <AnimatedSection>
          <h2>Recent Engagements</h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-muted-foreground">
            Recent work includes training faculty and IT professionals on integrating AI into 
            their workflows, advising C-level business leaders on AI strategy and adoption, 
            and speaking as an invited panelist on AI in education.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
