import { Link } from 'react-router-dom';

interface CTASectionProps {
  title: string;
  subtitle?: string;
  primaryCTA: {
    text: string;
    link: string;
  };
  secondaryCTA?: {
    text: string;
    link: string;
  };
  variant?: 'default' | 'gradient';
}

export default function CTASection({
  title,
  subtitle,
  primaryCTA,
  secondaryCTA,
  variant = 'default'
}: CTASectionProps) {
  const bgClass = variant === 'gradient'
    ? 'bg-gradient-to-r from-blue-600 to-cyan-600'
    : 'bg-blue-600';

  return (
    <div className={`${bgClass} py-16`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryCTA.link}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 font-semibold text-lg transition-all hover:scale-105 shadow-lg"
          >
            {primaryCTA.text}
          </Link>
          {secondaryCTA && (
            <Link
              to={secondaryCTA.link}
              className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-blue-600 font-semibold text-lg transition-all"
            >
              {secondaryCTA.text}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
