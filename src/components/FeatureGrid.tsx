import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3 | 4;
}

export default function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4'
  };

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols[columns]} gap-8`}>
      {features.map((feature, index) => {
        const Icon = feature.icon;
        const content = (
          <>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            {feature.link && (
              <div className="mt-4">
                <span className="text-blue-600 font-medium hover:text-blue-700">
                  Learn more →
                </span>
              </div>
            )}
          </>
        );

        return feature.link ? (
          <Link
            key={index}
            to={feature.link}
            className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:border-blue-200"
          >
            {content}
          </Link>
        ) : (
          <div
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-200"
          >
            {content}
          </div>
        );
      })}
    </div>
  );
}
