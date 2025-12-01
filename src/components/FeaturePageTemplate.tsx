import { ReactNode } from 'react';
import { LucideIcon, CheckCircle } from 'lucide-react';
import HeroSection from './HeroSection';
import CTASection from './CTASection';

interface FeaturePageTemplateProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  capabilities: string[];
  integration?: string;
  outcome: string;
  ctaText: string;
  additionalContent?: ReactNode;
}

export default function FeaturePageTemplate({
  icon: Icon,
  title,
  subtitle,
  problem,
  solution,
  capabilities,
  integration,
  outcome,
  ctaText,
  additionalContent
}: FeaturePageTemplateProps) {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
              <Icon className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{title}</h1>
            <p className="text-xl text-gray-600">{subtitle}</p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-600 leading-relaxed">{problem}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
              <p className="text-gray-600 leading-relaxed">{solution}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Key Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start space-x-3 bg-white p-4 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {integration && (
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Works With the Platform</h3>
              <p className="text-gray-700 leading-relaxed">{integration}</p>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Result</h2>
          <p className="text-xl text-gray-600 leading-relaxed">{outcome}</p>
        </div>
      </section>

      {additionalContent}

      <CTASection
        title={`Start using ${title}`}
        subtitle="Join thousands of students already benefiting from this feature"
        primaryCTA={{ text: ctaText, link: '/signup' }}
        variant="gradient"
      />
    </div>
  );
}
