import HeroSection from '../components/HeroSection';
import FeatureGrid from '../components/FeatureGrid';
import CTASection from '../components/CTASection';
import { BookOpen, CreditCard, ClipboardCheck, MessageCircle, Video, Mic, Calendar, FileText, Play, Image as ImageIcon, Clock, Presentation, FileQuestion, Users } from 'lucide-react';

export default function Features() {
  const studyCreationTools = [
    {
      icon: BookOpen,
      title: 'Notes AI',
      description: 'Convert lectures and readings into structured, organized notes with key highlights.',
      link: '/features/notes'
    },
    {
      icon: CreditCard,
      title: 'Flashcards AI',
      description: 'Instant flashcard generation from any course material with spaced repetition support.',
      link: '/features/flashcards'
    },
    {
      icon: ClipboardCheck,
      title: 'Quizzes AI',
      description: 'Practice tests auto-generated from your content with performance tracking.',
      link: '/features/quizzes'
    },
    {
      icon: Video,
      title: 'Explainer Video',
      description: 'AI-created videos that visualize complex topics for better understanding.',
      link: '/features/explainer-video'
    }
  ];

  const tutoringExperiences = [
    {
      icon: MessageCircle,
      title: 'Chat Tutor',
      description: 'Conversational AI that answers questions based on your actual course materials.',
      link: '/features/chat-tutor'
    },
    {
      icon: Play,
      title: 'Tutor Me',
      description: 'Guided lecture mode that walks through material step-by-step like a real instructor.',
      link: '/features/tutor-me'
    },
    {
      icon: Mic,
      title: 'Call with AI Tutor',
      description: 'Voice-enabled tutoring for hands-free learning and accessibility.',
      link: '/features/call-tutor'
    },
    {
      icon: Video,
      title: 'Record Live Lecture',
      description: 'Capture live teaching sessions and generate searchable notes with timestamps.',
      link: '/features/live-lecture'
    },
    {
      icon: Clock,
      title: 'Audio Recap',
      description: 'Listen to 6-45 minute audio summaries generated from your course materials.',
      link: '/features/audio-recap'
    },
    {
      icon: ImageIcon,
      title: 'Visual Q&A',
      description: 'Upload diagrams or handwritten notes and ask questions about specific elements.',
      link: '/features/visuals'
    }
  ];

  const organizationTools = [
    {
      icon: Calendar,
      title: 'Study Calendar',
      description: 'Smart scheduling that balances workload and tracks milestone progress.',
      link: '/features/calendar'
    },
    {
      icon: FileText,
      title: 'Essay Grader',
      description: 'AI feedback on writing structure, clarity, and argumentation with rubric scoring.',
      link: '/features/essay-grader'
    }
  ];

  const teacherTools = [
    {
      icon: FileQuestion,
      title: 'Bulk Assignment Grader',
      description: 'Grade multiple student submissions quickly with consistent, detailed feedback.'
    },
    {
      icon: FileText,
      title: 'Worksheet Generator',
      description: 'Create custom worksheets and practice materials from your teaching content.'
    },
    {
      icon: BookOpen,
      title: 'Lesson Plan Generator',
      description: 'Auto-generate structured lesson plans aligned with your curriculum goals.'
    },
    {
      icon: Presentation,
      title: 'Presentation Creator',
      description: 'Build engaging slide decks from your teaching materials in minutes.'
    },
    {
      icon: Users,
      title: 'Class AI Assistant',
      description: '24/7 AI teaching assistant trained on your materials and guidelines.'
    }
  ];

  return (
    <div>
      <HeroSection
        title="Every tool your students need, powered by AI"
        subtitle="A comprehensive platform that transforms how students learn and how teachers teach, all built on your actual course materials."
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Study Creation Tools</h2>
            <p className="text-lg text-gray-600 mb-8">
              Transform course materials into effective study resources instantly
            </p>
            <FeatureGrid features={studyCreationTools} columns={4} />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tutoring Experiences</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get personalized help through chat, voice, video, and audio
            </p>
            <FeatureGrid features={tutoringExperiences} />
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Planning & Organization</h2>
            <p className="text-lg text-gray-600 mb-8">
              Stay on track with smart scheduling and progress tracking
            </p>
            <FeatureGrid features={organizationTools} columns={2} />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">For Teachers</h2>
            <p className="text-lg text-gray-600 mb-8">
              Save hours on prep work while providing better support to every student
            </p>
            <FeatureGrid features={teacherTools} />
          </div>
        </div>
      </section>

      <CTASection
        title="Experience the complete platform"
        subtitle="See how all these features work together to transform learning"
        primaryCTA={{ text: 'Start for Free', link: '/signup' }}
        secondaryCTA={{ text: 'Talk to Our Team', link: '/contact' }}
        variant="gradient"
      />
    </div>
  );
}
