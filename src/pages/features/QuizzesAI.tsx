import FeaturePageTemplate from '../../components/FeaturePageTemplate';
import { ClipboardCheck } from 'lucide-react';

export default function QuizzesAI() {
  return (
    <FeaturePageTemplate
      icon={ClipboardCheck}
      title="Quizzes AI"
      subtitle="Practice with AI-generated quizzes that adapt to your learning progress"
      problem="Students need practice tests to prepare effectively, but textbook questions don't always match what's covered in class. Creating your own practice questions is difficult and doesn't test blind spots you might not know exist."
      solution="Quizzes AI generates comprehensive practice tests from your actual course content. Questions adapt to your performance, focusing on areas that need improvement. Get instant feedback and explanations for every answer."
      capabilities={[
        'Auto-generates practice tests from course materials',
        'Multiple question types: multiple choice, true/false, short answer, and fill-in-blank',
        'Adaptive difficulty that adjusts to your performance',
        'Randomized questions for repeated practice',
        'Instant feedback with detailed explanations',
        'Performance tracking shows strengths and weaknesses',
        'Timed quiz mode simulates real exam conditions',
        'Unlimited practice with fresh question variations'
      ]}
      integration="Create quizzes from your AI notes or uploaded materials. Review missed questions with Chat Tutor for deeper explanations. Schedule regular practice sessions using the Study Calendar to ensure consistent preparation."
      outcome="Students enter exams with confidence, having practiced extensively on material that matches what's actually being tested. Identify and address knowledge gaps before test day. Improve scores through targeted, repeated practice."
      ctaText="Start Practicing with Quizzes"
    />
  );
}
