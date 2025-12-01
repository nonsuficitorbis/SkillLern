import FeaturePageTemplate from '../../components/FeaturePageTemplate';
import { MessageCircle } from 'lucide-react';

export default function ChatTutor() {
  return (
    <FeaturePageTemplate
      icon={MessageCircle}
      title="Chat Tutor"
      subtitle="Your personal AI tutor built on your actual class materials"
      problem="Students get stuck on concepts outside of class hours when help isn't available. Office hours are limited, and generic tutoring doesn't address the specific way topics are taught in your course. Getting help often means waiting hours or days."
      solution="Chat Tutor provides instant, conversational help based on your real course materials. Ask questions in natural language and get explanations, clarifications, analogies, and step-by-step guidance tailored to your learning style. Available 24/7."
      capabilities={[
        'Natural back-and-forth conversation about course material',
        'Trained on your uploaded materials, not generic web content',
        'Explains concepts in multiple ways until you understand',
        'Provides analogies and real-world examples',
        'Offers incremental hints instead of giving away answers',
        'Supports multiple subjects simultaneously',
        'Inline comprehension checks to verify understanding',
        'Adapts explanation style to your learning preferences',
        'References specific sections of your course materials',
        'Available anytime, anywhere'
      ]}
      integration="Chat with your AI tutor while reviewing notes, working through flashcards, or taking practice quizzes. Ask follow-up questions about specific quiz problems or request deeper explanations of note sections. The tutor knows everything from your course materials."
      outcome="Students never stay stuck. Get immediate help that's specifically relevant to your course. Build genuine understanding through guided discovery rather than memorization. Increase confidence and reduce study anxiety with on-demand support."
      ctaText="Start Chatting with Your Tutor"
      additionalContent={
        <section className="py-16 bg-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Designed for Genuine Learning</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our AI tutor is built to support authentic learning, not enable shortcuts. It guides students to understanding through explanation and incremental hints, rather than simply providing answers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                For educators and institutions: The Chat Tutor complements classroom instruction and includes guardrails to discourage academic dishonesty. Teachers can review interaction logs and set boundaries on tutor responses.
              </p>
            </div>
          </div>
        </section>
      }
    />
  );
}
