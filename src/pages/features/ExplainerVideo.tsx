import FeaturePageTemplate from '../../components/FeaturePageTemplate';
import { Video } from 'lucide-react';

export default function ExplainerVideo() {
  return (
    <FeaturePageTemplate
      icon={Video}
      title="Explainer Video"
      subtitle="Watch AI-created videos that break down complex topics visually"
      problem="Some concepts are hard to grasp from text alone. Students struggle with abstract ideas that need visual representation. YouTube explanations often don't match the specific way topics are taught in your course. Creating your own visual aids is time-consuming and requires design skills."
      solution="Explainer Video creates short, visual explanations of complex topics from your course materials. AI converts concepts into animations, diagrams, and visual sequences that make abstract ideas concrete and memorable."
      capabilities={[
        'Auto-generates explainer videos from course materials',
        'Visual animations that illustrate abstract concepts',
        'Step-by-step visual breakdowns of processes',
        'Customizable video length and depth',
        'Narration synchronized with visuals',
        'Ideal for visual learners',
        'Works for any subject: science, math, humanities, business',
        'Share videos with study groups'
      ]}
      integration="Generate explainer videos for topics you find confusing. Watch videos as a preview before Tutor Me lessons or after Chat Tutor explanations to reinforce understanding. Use videos as quick refreshers before exams."
      outcome="Students understand difficult concepts faster through visual learning. Complex ideas become clear when illustrated. Build stronger mental models with multi-modal explanations. Remember content longer with visual associations."
      ctaText="Create Your First Video"
    />
  );
}
