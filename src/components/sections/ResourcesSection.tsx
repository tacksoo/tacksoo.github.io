import { AnimatedSection } from '@/components/AnimatedSection';

interface GuideItemProps {
  title: string;
  description: string;
  linkHref: string;
  delay?: number;
}

function GuideItem({ title, description, linkHref, delay = 0 }: GuideItemProps) {
  return (
    <AnimatedSection delay={delay} className="mb-8 last:mb-0">
      <h3 className="mb-2 text-lg">{title}</h3>
      <p className="text-muted-foreground mb-2 text-base">
        {description}
      </p>
      <a
        href={linkHref}
        target="_blank"
        rel="noopener noreferrer"
        className="body-link text-sm"
      >
        Access guide →
      </a>
    </AnimatedSection>
  );
}

export function ResourcesSection() {
  const guides = [
    {
      title: "AI in Education: A Leader's Implementation Guide",
      description: "Practical framework for K-12 and higher education administrators evaluating AI tools for personalized learning, assessment, and administrative efficiency. Includes vendor evaluation criteria and pilot program design.",
      linkHref: 'https://yourname.gumroad.com/l/ai-education-guide',
    },
    {
      title: 'Business Process Automation with AI: A Strategic Approach',
      description: 'Methods for identifying automation opportunities, calculating ROI, managing workforce transition, and measuring success across customer service, operations, and knowledge work.',
      linkHref: 'https://yourname.gumroad.com/l/business-automation-guide',
    },
    {
      title: 'Designing AI-Enhanced Learning Experiences',
      description: 'Evidence-based approaches for educators and instructional designers integrating AI tutoring, adaptive assessments, and intelligent feedback systems while maintaining pedagogical integrity.',
      linkHref: 'https://yourname.gumroad.com/l/ai-learning-design',
    },
  ];

  return (
    <section id="resources" className="section-padding">
      <div className="content-container">
        <div className="section-divider mb-16" />
        
        <AnimatedSection>
          <h2>Selected Guides</h2>
        </AnimatedSection>

        {guides.map((guide, index) => (
          <GuideItem
            key={guide.title}
            {...guide}
            delay={0.1 + index * 0.05}
          />
        ))}
      </div>
    </section>
  );
}
