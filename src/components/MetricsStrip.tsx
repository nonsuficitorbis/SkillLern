interface Metric {
  value: string;
  label: string;
}

interface MetricsStripProps {
  metrics: Metric[];
}

export default function MetricsStrip({ metrics }: MetricsStripProps) {
  return (
    <div className="bg-white py-12 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {metrics.map((metric, index) => (
            <div key={index}>
              <div className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</div>
              <div className="text-gray-600 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
