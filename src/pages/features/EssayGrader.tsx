import FeaturePageTemplate from '../../components/FeaturePageTemplate';
import { FileText } from 'lucide-react';

export default function EssayGrader() {
  return (
    <FeaturePageTemplate
      icon={FileText}
      title="Essay Grader"
      subtitle="Get detailed AI feedback on writing structure, clarity, and argumentation"
      problem="Students don't receive feedback on writing until after submission, missing opportunities to improve. Peer review is inconsistent. Waiting for professor feedback takes time, and by then it's too late to revise. Understanding what makes good writing is difficult without specific, actionable guidance."
      solution="Essay Grader provides immediate, detailed feedback on writing quality before you submit. Get rubric-style scoring on structure, clarity, argument strength, evidence use, and mechanics. Receive specific suggestions for improvement, not just generic comments."
      capabilities={[
        'Analyzes essay structure, thesis strength, and organization',
        'Evaluates clarity, coherence, and readability',
        'Assesses argument quality and evidence integration',
        'Checks grammar, mechanics, and style',
        'Provides rubric-style scoring across multiple dimensions',
        'Offers specific, actionable improvement suggestions',
        'Highlights areas of strength and weakness',
        'Supports multiple essay types and disciplines'
      ]}
      integration="Submit drafts to Essay Grader before turning in assignments. Discuss feedback with Chat Tutor for deeper explanations of suggestions. Track improvement over time as you apply feedback to multiple drafts."
      outcome="Students submit stronger essays with fewer errors and better arguments. Learn what good writing looks like through detailed, immediate feedback. Build writing skills progressively through iterative revision."
      ctaText="Get Essay Feedback"
    />
  );
}
