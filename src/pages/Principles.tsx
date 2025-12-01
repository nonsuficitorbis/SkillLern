import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import { CheckCircle } from 'lucide-react';

export default function Principles() {
  const principles = [
    {
      title: 'Assist, Not Replace, Educators',
      description: 'Our AI amplifies the work of teachers, never attempts to replace human instruction. We build tools that save educators time and extend their reach while preserving the essential role of the teacher-student relationship.'
    },
    {
      title: 'Inclusive and Unbiased Design',
      description: 'We actively work to identify and eliminate biases in our AI models. Our platform is designed to serve learners of all backgrounds, abilities, and learning styles without perpetuating stereotypes or discrimination.'
    },
    {
      title: 'Privacy and Data Protection First',
      description: 'Student data is sacred. We implement industry-leading security measures, give institutions full control over data, and never sell or share personal information. Privacy is built into every feature from the ground up.'
    },
    {
      title: 'Accuracy and Reliability',
      description: 'We maintain high standards for AI accuracy and continuously test against hallucinations and errors. Students and teachers can trust that our platform delivers reliable, factual information grounded in actual course materials.'
    },
    {
      title: 'Encourage Authentic Learning',
      description: 'Our AI is designed to guide students toward understanding, not provide shortcuts. We discourage academic dishonesty through thoughtful design and provide tools for educators to maintain academic integrity.'
    },
    {
      title: 'Adaptive to Individual Needs',
      description: 'Every learner is unique. Our platform adapts to different learning styles, paces, and preferences, ensuring each student gets the personalized support they need to succeed.'
    },
    {
      title: 'Educational Equity and Accessibility',
      description: 'We work to reduce educational inequality by making high-quality learning support accessible regardless of economic resources. Our platform meets WCAG accessibility standards and supports diverse learner needs.'
    },
    {
      title: 'Respect for Intellectual Property',
      description: 'We respect the intellectual property of educators and content creators. Course materials uploaded to our platform remain the property of instructors and institutions, and are used solely to support their students.'
    },
    {
      title: 'Safe, Age-Appropriate Experiences',
      description: 'Student safety is paramount. We implement content filtering, moderation, and guardrails appropriate for educational environments. Our platform is COPPA compliant and designed with child safety in mind.'
    },
    {
      title: 'Alignment with Institutional Policies',
      description: 'We provide institutions with controls to ensure our platform aligns with their academic integrity policies, codes of conduct, and educational values. Administrators can customize AI behavior and boundaries.'
    },
    {
      title: 'Transparency and Accountability',
      description: 'We\'re transparent about how our AI works, its limitations, and how we use data. We provide educators with visibility into student interactions and maintain clear accountability for platform behavior.'
    }
  ];

  return (
    <div>
      <HeroSection
        title="Our Principles"
        subtitle="The values that guide how we build and deploy AI for education"
      />

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              These principles govern every decision we make about product design, feature development, and platform behavior. They ensure our AI serves the best interests of learners, educators, and institutions.
            </p>
          </div>

          <div className="space-y-6">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {index + 1}. {principle.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Principles in Practice
            </h3>
            <p className="text-gray-700 leading-relaxed text-center">
              These aren't just words on a page. Every feature we build, every model we train, and every partnership we pursue is evaluated against these principles. When we face difficult tradeoffs, these values guide our decisions.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Experience principled AI in education"
        subtitle="See how our values translate into features that support authentic learning"
        primaryCTA={{ text: 'Explore Features', link: '/features' }}
        secondaryCTA={{ text: 'Read Our Mission', link: '/mission' }}
        variant="gradient"
      />
    </div>
  );
}
