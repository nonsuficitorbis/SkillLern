import HeroSection from '../components/HeroSection';
import CTASection from '../components/CTASection';
import { Target, Users, Shield, Sparkles } from 'lucide-react';

export default function Mission() {
  return (
    <div>
      <HeroSection
        title="Our Mission"
        subtitle="Expanding access to high-quality, personalized learning for every student"
      />

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We believe every student deserves access to personalized, high-quality learning support, regardless of their background, location, or resources. Our mission is to use advanced AI technology to bridge educational gaps and empower learners worldwide.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
              <div className="bg-blue-50 p-6 rounded-xl">
                <Target className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Core Goal</h3>
                <p className="text-gray-700">
                  Leverage cutting-edge AI to make personalized learning accessible to every student, breaking down barriers of cost, geography, and availability that limit educational opportunity.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl">
                <Users className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Supporting Educators</h3>
                <p className="text-gray-700">
                  Provide teachers with powerful tools that save time and amplify their impact, allowing them to focus on what matters most: connecting with students and delivering transformative instruction.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Our Values</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Improvement</h3>
                  <p className="text-gray-700">
                    We're committed to constantly advancing our AI study tool through research, feedback, and innovation. We listen to students, teachers, and institutions to build the most effective learning platform possible.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Security, Privacy, and Fairness First</h3>
                  <p className="text-gray-700">
                    These are non-negotiable. We build with security and privacy at the foundation, not as an afterthought. We actively work to identify and eliminate biases, ensuring our platform serves all learners equitably.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe and Age-Appropriate Learning</h3>
                  <p className="text-gray-700">
                    We're committed to creating safe, age-appropriate learning environments. Our platform includes guardrails, content filters, and oversight tools to ensure student safety and align with institutional policies.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Educational Equity</h3>
                  <p className="text-gray-700">
                    We believe technology should reduce, not increase, educational inequality. We work to ensure our platform is accessible to learners with diverse needs, backgrounds, and learning styles.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Looking Forward</h3>
              <p className="text-gray-700 leading-relaxed">
                As AI technology evolves, so does our commitment to responsible, effective use in education. We partner with educators, researchers, and policymakers to ensure our platform serves the best interests of learners while upholding the highest standards of safety, privacy, and academic integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Join us in transforming education"
        subtitle="Be part of making personalized learning accessible to everyone"
        primaryCTA={{ text: 'Get Started', link: '/signup' }}
        secondaryCTA={{ text: 'Learn More', link: '/principles' }}
        variant="gradient"
      />
    </div>
  );
}
