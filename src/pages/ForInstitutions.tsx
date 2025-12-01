import HeroSection from '../components/HeroSection';
import LeadForm from '../components/LeadForm';
import CTASection from '../components/CTASection';
import { Shield, Lock, BarChart3, Settings, CheckCircle, Users, Cloud, FileCheck } from 'lucide-react';

export default function ForInstitutions() {
  return (
    <div>
      <HeroSection
        title="Institution-ready AI learning platform"
        subtitle="Bring safe, accurate AI to your campus with full control and analytics. Enterprise-grade security, compliance, and measurable results for universities, districts, and educational organizations."
        primaryCTA={{ text: 'Schedule a Demo', link: '#contact' }}
        secondaryCTA={{ text: 'View Trust Center', link: '/trust-center' }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven results at scale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Leading institutions are already seeing measurable improvements in student outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">87%</div>
              <div className="text-gray-700 font-medium">of students report improved grades after adoption</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">3.2x</div>
              <div className="text-gray-700 font-medium">increase in student confidence with course material</div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-xl text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-700 font-medium">institutions where students use our platform</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Institutional Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Academic Performance</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Average grade improvement of 0.5-1.0 letter grades</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Reduced failure rates in challenging courses</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Higher student retention and engagement</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Operational Efficiency</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Faculty save 5-10 hours per week on repetitive tasks</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Reduced demand on tutoring centers and office hours</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Better use of existing educational resources</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Safety, accuracy, and ethics built in
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Institutional-grade AI that meets your standards for responsible use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <FileCheck className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">High Accuracy</h3>
              <p className="text-gray-600 mb-4">
                Less than 2% hallucination rate even on very long, complex documents. Our AI stays grounded in your actual course materials.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Tested on 100,000+ document corpus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Regular accuracy audits and improvements</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Supports Learning, Not Cheating</h3>
              <p className="text-gray-600 mb-4">
                AI designed with guardrails that encourage authentic learning and discourage academic shortcuts.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Guides rather than gives direct answers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Integrity check tools for faculty</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <Users className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bias Mitigation</h3>
              <p className="text-gray-600 mb-4">
                Inclusive design that serves diverse learners without perpetuating biases or stereotypes.
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Regular bias audits and corrections</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Culturally responsive content generation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise governance and IT
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full control, seamless integration, and enterprise-grade infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <Settings className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">SSO & Access Control</h3>
              <p className="text-gray-600 text-sm">
                Enterprise SSO with SAML/OAuth, domain whitelisting, role-based access control, and centralized user management.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <FileCheck className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">LMS Integration</h3>
              <p className="text-gray-600 text-sm">
                Seamless embedding in Canvas, Blackboard, Google Classroom, D2L, Schoology, and more. Auto-sync rosters and assignments.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <Cloud className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Private Hosting Options</h3>
              <p className="text-gray-600 text-sm">
                Isolated tenant environments, private cloud deployment, upgraded AI reasoning models, and custom safety controls.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <BarChart3 className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Analytics Dashboards</h3>
              <p className="text-gray-600 text-sm">
                Real-time engagement metrics, usage patterns, ROI tracking, and academic performance correlations.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <FileCheck className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Integrity Tools</h3>
              <p className="text-gray-600 text-sm">
                Tools to check whether student work was generated by the platform, with detailed interaction logs for faculty review.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <Settings className="w-10 h-10 text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Custom Configurations</h3>
              <p className="text-gray-600 text-sm">
                Tailor AI behavior, content policies, and feature availability to match your institutional guidelines and values.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Security and compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet your institution's requirements with comprehensive security and privacy measures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <Lock className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Data Protection</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>End-to-end encryption for data in transit and at rest</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Regular third-party security audits</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Data residency options for regional compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Granular data retention and deletion controls</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <Shield className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Compliance Certifications</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>SOC 2 Type II certified</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>FERPA compliant for student data privacy</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>COPPA compliant for child safety</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>WCAG 2.1 AA accessibility standards</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>HECVAT and VPAT documentation available</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="/trust-center"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              View Complete Trust Center →
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Talk to our team
            </h2>
            <p className="text-xl text-gray-600">
              Schedule a personalized demo and discuss your institution's specific needs
            </p>
          </div>

          <LeadForm
            title="Request an Enterprise Demo"
            subtitle="Tell us about your institution and we'll schedule a call within 24 hours"
            fields={[
              { name: 'name', label: 'Full Name', type: 'text', required: true },
              { name: 'email', label: 'Work Email', type: 'email', required: true },
              { name: 'role', label: 'Role', type: 'select', required: true, options: ['Administrator', 'District Leader', 'Department Head', 'Faculty', 'IT Leader', 'Other'] },
              { name: 'institution', label: 'Institution Name', type: 'text', required: true },
              { name: 'students', label: 'Total Student Population', type: 'number', required: false },
              { name: 'timeline', label: 'Implementation Timeline', type: 'select', required: false, options: ['Immediate', '1-3 months', '3-6 months', '6+ months', 'Just exploring'] },
              { name: 'message', label: 'What are you hoping to achieve?', type: 'textarea', required: false }
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Transform learning outcomes at your institution"
        subtitle="Join leading universities and districts using AI to improve student success"
        primaryCTA={{ text: 'Schedule Demo', link: '#contact' }}
        variant="gradient"
      />
    </div>
  );
}
