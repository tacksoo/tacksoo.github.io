import { AnimatedSection } from '@/components/AnimatedSection';

interface ServiceItemProps {
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  delay?: number;
}

function ServiceItem({ title, description, linkText, linkHref, delay = 0 }: ServiceItemProps) {
  return (
    <AnimatedSection delay={delay} className="mb-10 last:mb-0">
      <h3 className="mb-3">{title}</h3>
      <p className="mb-2">
        {description}
      </p>
      <a
        href={linkHref}
        className="accent-link text-sm"
      >
        {linkText}
      </a>
    </AnimatedSection>
  );
}

export function ServicesSection() {
  const services = [
    {
      title: 'AI Integration Workshops',
      description: `Customized sessions for educational leaders and business executives exploring AI applications. Topics include AI-enhanced curriculum design, personalized learning, business process automation, improving customer service, and readiness assessment. Sessions can be tailored for K-12 administrators, higher education faculty, or business leadership teams. Designed for groups of 10-30 participants.`,
      linkText: 'Inquire about availability',
      linkHref: '#contact',
    },
    {
      title: 'Implementation Consulting',
      description: `Advisory work for institutions and organizations rolling out AI tools. Work includes identifying the best opportunities in instruction or operations, selecting the right tools, designing change management processes, training staff, and measuring results. Experience spans educational technology platforms, learning management systems, customer service automation, and workflow improvement. Typical engagements span 4-8 months.`,
      linkText: 'Schedule consultation',
      linkHref: '#contact',
    },
    {
      title: 'AI Training & Workflow Adoption',
      description: `Hands-on training programs for teams adapting their workflows and adopting AI tools. Drawing on years of teaching experience, Dr. Im designs practical, skills-focused sessions that help staff build confidence with AI applications. Training covers tool selection, prompt engineering, workflow integration, and guidelines for responsible AI use. Available as single-day intensives or multi-session programs.`,
      linkText: 'Inquire about training',
      linkHref: '#contact',
    },
    /* TODO: Uncomment when Dr. Im has guides ready
    {
      title: 'Practical Guides & Frameworks',
      description: `Evidence-based resources for leaders implementing AI in educational or business settings. Each guide provides step-by-step approaches, decision frameworks, and real-world case studies from successful implementations.`,
      linkText: 'View available guides',
      linkHref: '#resources',
    },
    */
  ];

  return (
    <section id="services" className="section-padding">
      <div className="content-container">
        <div className="section-divider mb-16" />
        
        <AnimatedSection>
          <h2>Services</h2>
        </AnimatedSection>

        {services.map((service, index) => (
          <ServiceItem
            key={service.title}
            {...service}
            delay={0.1 + index * 0.05}
          />
        ))}
      </div>
    </section>
  );
}
