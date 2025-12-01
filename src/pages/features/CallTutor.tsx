import FeaturePageTemplate from '../../components/FeaturePageTemplate';
import { Mic } from 'lucide-react';

export default function CallTutor() {
  return (
    <FeaturePageTemplate
      icon={Mic}
      title="Call with AI Tutor"
      subtitle="Study by talking, not typing—voice-enabled AI tutoring"
      problem="Typing questions on a phone or tablet can be cumbersome, especially when juggling textbooks and notes. Students with visual impairments or reading challenges need alternative ways to access help. Sometimes you just want to talk through a problem instead of writing it out."
      solution="Call with AI Tutor enables real-time voice conversations with your AI tutor. Speak naturally, ask questions out loud, and hear explanations in return. Perfect for hands-free study, accessibility needs, or when you learn better by listening and speaking."
      capabilities={[
        'Real-time voice input and output',
        'Natural conversation flow, just like talking to a human tutor',
        'Trained on your actual course materials',
        'Works hands-free for on-the-go study',
        'Supports accessibility needs for students with visual or reading challenges',
        'Instant clarifications and follow-up questions',
        'Seamlessly switches between voice and text modes',
        'Saves call transcripts for later review',
        'Ideal for quick clarification sessions before exams',
        'Available 24/7 from any device with a microphone'
      ]}
      integration="Call your AI tutor from your phone, tablet, or computer. Discuss quiz problems, ask about notes, or request lesson explanations—all by voice. Transcripts are automatically saved and can be reviewed later in text form or used to generate study materials."
      outcome="Students get help whenever and wherever they need it—while commuting, exercising, or relaxing. Learning becomes more accessible and flexible. Speaking through problems often leads to breakthroughs that typing can't match."
      ctaText="Start Your First Call"
      additionalContent={
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Common Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Study on the Go</h4>
                <p className="text-gray-600 text-sm">
                  Get help during your commute, while walking between classes, or anywhere you can't sit with a computer.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Accessibility</h4>
                <p className="text-gray-600 text-sm">
                  Students with visual impairments or reading challenges can access the full power of AI tutoring through voice.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-gray-900 mb-2">Quick Clarifications</h4>
                <p className="text-gray-600 text-sm">
                  Call with a quick question before an exam or discussion section when typing would take too long.
                </p>
              </div>
            </div>
          </div>
        </section>
      }
    />
  );
}
