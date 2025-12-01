import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import LeadForm from '../components/LeadForm';
import CTASection from '../components/CTASection';
import { FileText, Presentation, BookOpen, ClipboardCheck, Users, BarChart3, Sparkles } from 'lucide-react';

export default function ForTeachers() {
  const teacherTools = [
    {
      icon: ClipboardCheck,
      title: 'Bulk Assignment Grader',
      description: 'Grade multiple student submissions quickly with consistent, detailed feedback. Save hours of repetitive grading work.'
    },
    {
      icon: FileText,
      title: 'Worksheet Generator',
      description: 'Create custom worksheets and practice materials from your teaching content in minutes, not hours.'
    },
    {
      icon: BookOpen,
      title: 'Lesson Plan Generator',
      description: 'Auto-generate structured, standards-aligned lesson plans from your curriculum goals and materials.'
    },
    {
      icon: Presentation,
      title: 'Presentation Creator',
      description: 'Build engaging slide decks from your teaching materials. Add visuals, examples, and activities automatically.'
    },
    {
      icon: FileText,
      title: 'Vocabulary Generator',
      description: 'Extract key terms and definitions from course materials to create vocabulary lists and study guides.'
    },
    {
      icon: ClipboardCheck,
      title: 'Multiple-Choice Quiz Generator',
      description: 'Generate assessment questions at various difficulty levels from your teaching materials.'
    }
  ];

  return (
    <div>
      <HeroSection
        title="Give every student AI-powered support without losing your voice"
        subtitle="Turn your class materials into interactive study experiences in minutes. Save hours on prep work while maintaining your teaching approach and giving students the personalized help they need."
        primaryCTA={{ text: 'Get Started', link: '/signup' }}
        secondaryCTA={{ text: 'Schedule a Demo', link: '/contact' }}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Teach with your own content
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform uses your actual teaching materials so students practice exactly what you're teaching. No generic content that misaligns with your curriculum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Your Materials, Your Approach</h3>
              <p className="text-gray-600">
                Upload your syllabi, slides, readings, and assignments. Students get AI help based on what you actually teach.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maintain Your Teaching Voice</h3>
              <p className="text-gray-600">
                The AI learns your teaching style and terminology, providing support that aligns with your instruction.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Students Practice What's Tested</h3>
              <p className="text-gray-600">
                Study materials and practice questions come from your content, so students prepare for your actual assessments.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Save hours of prep work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Automate time-consuming tasks so you can focus on teaching, not administrative work
            </p>
          </div>

          <FeatureGrid features={teacherTools} />

          <div className="mt-12 bg-white p-8 rounded-xl shadow-md">
            <p className="text-gray-700 text-center text-lg">
              Teachers report saving an average of <span className="font-bold text-blue-600">5-10 hours per week</span> on prep and grading tasks, giving them more time for direct student interaction and curriculum development.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your 24/7 AI teaching assistant
              </h2>
              <div className="space-y-4 mb-6">
                <div className="flex items-start space-x-3">
                  <Users className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Class AI Assistant</h3>
                    <p className="text-gray-600">
                      Students can message your class AI assistant anytime with questions. It's trained on your materials and guidelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Sparkles className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">LMS Integration</h3>
                    <p className="text-gray-600">
                      Embed directly into Canvas, Blackboard, Google Classroom, and more. Students access help without leaving your LMS.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FileText className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Editable AI Content</h3>
                    <p className="text-gray-600">
                      Review and tweak any AI-generated questions, flashcards, or worksheets to match your standards perfectly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">See where students struggle</h3>
              <p className="text-gray-700 mb-6">
                Analytics dashboards show you which concepts students ask about most, where they're getting stuck, and how they're performing on practice materials.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Question volume by topic</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Success rates on practice quizzes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Topics with highest difficulty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Student engagement and usage patterns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Built for genuine learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our AI is designed to explain and guide, not just give away answers. It supports authentic learning and academic integrity.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-md max-w-3xl mx-auto">
              <p className="text-gray-700 leading-relaxed">
                The platform includes guardrails that encourage students to think through problems rather than taking shortcuts. Teachers can review interaction logs, set boundaries on AI responses, and ensure the tool complements rather than replaces genuine learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get started today
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Tell us about your class and we'll help you get set up
            </p>
          </div>

          <LeadForm
            title="Request Teacher Access"
            subtitle="Fill out the form and we'll be in touch within 24 hours"
            fields={[
              { name: 'name', label: 'Full Name', type: 'text', required: true },
              { name: 'email', label: 'Email', type: 'email', required: true },
              { name: 'school', label: 'School/Institution', type: 'text', required: true },
              { name: 'subject', label: 'Subject(s) Taught', type: 'text', required: true },
              { name: 'students', label: 'Number of Students', type: 'number', required: false },
              { name: 'lms', label: 'LMS Used', type: 'select', required: false, options: ['Canvas', 'Blackboard', 'Google Classroom', 'D2L', 'Schoology', 'Other', 'None'] },
              { name: 'message', label: 'Tell us about your class', type: 'textarea', required: false }
            ]}
          />
        </div>
      </section>

      <CTASection
        title="Ready to transform your classroom?"
        subtitle="Join thousands of teachers already using AI to support their students"
        primaryCTA={{ text: 'Get Started', link: '/signup' }}
        variant="gradient"
      />
    </div>
  );
}
