import FeaturePageTemplate from '../../components/FeaturePageTemplate';
import { Play } from 'lucide-react';

export default function TutorMe() {
  return (
    <FeaturePageTemplate
      icon={Play}
      title="Tutor Me"
      subtitle="Let AI walk you through the entire lesson, step-by-step"
      problem="Reading textbooks or slides feels passive and doesn't create the same understanding as a live lecture. When students miss class or need to revisit difficult topics, there's no structured way to be taught the material again. Self-paced learning often means getting lost without guidance."
      solution="Tutor Me transforms your course materials into a guided lecture experience. The AI acts like a personal instructor, walking you through topics step-by-step with explanations, examples, and embedded knowledge checks. It's like having office hours whenever you need them."
      capabilities={[
        'Transforms readings and slides into structured lesson sequences',
        'AI delivers instructor-like explanations and examples',
        'Step-by-step walkthrough of complex topics',
        'Pause anytime to ask questions and get clarifications',
        'Embedded knowledge checks assess understanding as you go',
        'Adjusts pace and explanation depth based on your responses',
        'Visual aids and diagrams integrated into lessons',
        'Create personalized learning milestones and track progress',
        'Resume lessons exactly where you left off',
        'Works for any subject and any level'
      ]}
      integration="Use Tutor Me as a complement to your regular classes or as a way to catch up on missed lectures. Questions that arise during lessons can be explored immediately with Chat Tutor. Generated lessons can be converted to Audio Recaps for mobile listening."
      outcome="Students gain deep, structured understanding of complex material. Learn at your own pace without feeling lost or overwhelmed. Experience the benefits of one-on-one instruction at scale. Build confidence through guided, interactive learning."
      ctaText="Start Your First Lesson"
      additionalContent={
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Adaptive Milestone Planning</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tutor Me doesn't just teach content—it designs a personalized learning plan with clear milestones and checkpoints. The AI monitors your progress and adjusts the plan based on your performance and understanding.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Each lesson builds on previous ones, ensuring you have the foundation needed before moving to more advanced concepts. It's structured learning that adapts to you.
              </p>
            </div>
          </div>
        </section>
      }
    />
  );
}
