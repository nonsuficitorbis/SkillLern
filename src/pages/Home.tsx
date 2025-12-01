import HeroSection from '../components/HeroSection';
import MetricsStrip from '../components/MetricsStrip';
import FeatureGrid from '../components/FeatureGrid';
import CTASection from '../components/CTASection';
import { BookOpen, CreditCard, ClipboardCheck, MessageCircle, Video, Mic, Calendar, FileText, Sparkles, Play, Image as ImageIcon, Clock } from 'lucide-react';

export default function Home() {
  const metrics = [
    { value: '92%', label: 'Students report improved grades' },
    { value: '500+', label: 'Institutions already using our platform' },
    { value: '2M+', label: 'Students reached through our community' }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Notes AI',
      description: 'Transform lectures and readings into structured, organized notes instantly.',
      link: '/features/notes'
    },
    {
      icon: CreditCard,
      title: 'Flashcards AI',
      description: 'Auto-generate smart flashcards from your course materials for effective review.',
      link: '/features/flashcards'
    },
    {
      icon: ClipboardCheck,
      title: 'Quizzes AI',
      description: 'Practice with AI-generated quizzes that adapt to your learning progress.',
      link: '/features/quizzes'
    },
    {
      icon: MessageCircle,
      title: 'Chat Tutor',
      description: 'Get instant answers and explanations from your personal AI tutor.',
      link: '/features/chat-tutor'
    },
    {
      icon: Play,
      title: 'Tutor Me',
      description: 'Experience guided AI lectures that walk you through complex topics step-by-step.',
      link: '/features/tutor-me'
    },
    {
      icon: Mic,
      title: 'Call with AI Tutor',
      description: 'Study hands-free with voice-enabled tutoring sessions.',
      link: '/features/call-tutor'
    },
    {
      icon: ImageIcon,
      title: 'Visual Q&A',
      description: 'Upload diagrams and images to ask questions about specific visual elements.',
      link: '/features/visuals'
    },
    {
      icon: Video,
      title: 'Record Live Lecture',
      description: 'Capture live classes and generate searchable notes with timestamps.',
      link: '/features/live-lecture'
    },
    {
      icon: FileText,
      title: 'Essay Grader',
      description: 'Get detailed feedback on writing structure, clarity, and argumentation.',
      link: '/features/essay-grader'
    },
    {
      icon: Clock,
      title: 'Audio Recap',
      description: 'Listen to AI-generated audio summaries of your course materials.',
      link: '/features/audio-recap'
    },
    {
      icon: Video,
      title: 'Explainer Video',
      description: 'Watch AI-created videos that break down complex topics visually.',
      link: '/features/explainer-video'
    },
    {
      icon: Calendar,
      title: 'Study Calendar',
      description: 'Smart scheduling that balances your workload and tracks progress.',
      link: '/features/calendar'
    }
  ];

  return (
    <div>
      <HeroSection
        title="Your AI study companion built on real class materials"
        subtitle="Get personalized tutoring, auto-generated study tools, and proven academic results. Transform how you learn with AI-powered notes, flashcards, quizzes, audio recaps, explainer videos, and more."
        primaryCTA={{ text: 'Start for Free', link: '/signup' }}
        secondaryCTA={{ text: 'Book a Demo', link: '/contact' }}
      />

      <MetricsStrip metrics={metrics} />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three simple steps to better grades and deeper understanding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Add Your Materials</h3>
              <p className="text-gray-600">
                Upload PDFs, slides, notes, or connect your LMS. Your AI tutor learns from your actual course content.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Generates Study Tools</h3>
              <p className="text-gray-600">
                Instantly create notes, flashcards, practice quizzes, audio recaps, and explainer videos from your materials.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Learn with Your AI Tutor</h3>
              <p className="text-gray-600">
                Chat, call, or watch AI lectures. Get personalized help via text and voice, plus a smart study calendar.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Every tool you need to succeed
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful AI features that adapt to your learning style and help you achieve better results
            </p>
          </div>

          <FeatureGrid features={features} />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why students love Spark Study
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Sparkles className="w-6 h-6 text-blue-600 mr-2" />
                <span className="font-semibold text-gray-900">Easier Exam Prep</span>
              </div>
              <p className="text-gray-700 italic">
                "This platform made studying for finals so much easier. The AI quizzes caught things I would have missed, and the audio recaps were perfect for my commute."
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Sparkles className="w-6 h-6 text-blue-600 mr-2" />
                <span className="font-semibold text-gray-900">Works With My Learning Style</span>
              </div>
              <p className="text-gray-700 italic">
                "Finally, a study tool that gets how I learn. The AI tutor explains things in different ways until it clicks, and I can call it when I'm stuck."
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <Sparkles className="w-6 h-6 text-blue-600 mr-2" />
                <span className="font-semibold text-gray-900">Best Investment for Success</span>
              </div>
              <p className="text-gray-700 italic">
                "My grades went up a full letter grade after I started using this. The study calendar keeps me organized and the flashcards are automatically perfect."
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Teachers</h3>
              <p className="text-gray-600 mb-6">
                Turn your class materials into interactive study experiences in minutes. Save hours on prep work while giving every student personalized support.
              </p>
              <a href="/for-teachers" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                Learn more →
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Institutions</h3>
              <p className="text-gray-600 mb-6">
                Bring safe, accurate AI to your campus with full control and analytics. Enterprise-grade security, compliance, and measurable results.
              </p>
              <a href="/for-institutions" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to upgrade your study game?"
        subtitle="Join thousands of students achieving better grades with less stress"
        primaryCTA={{ text: 'Start Free Today', link: '/signup' }}
        secondaryCTA={{ text: 'Watch Demo', link: '/demo' }}
        variant="gradient"
      />
    </div>
  );
}
