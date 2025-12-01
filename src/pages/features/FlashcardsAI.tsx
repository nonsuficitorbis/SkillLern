import FeaturePageTemplate from '../../components/FeaturePageTemplate';
import { CreditCard } from 'lucide-react';

export default function FlashcardsAI() {
  return (
    <FeaturePageTemplate
      icon={CreditCard}
      title="Flashcards AI"
      subtitle="Auto-generate smart flashcards from your course materials for effective review"
      problem="Creating flashcards manually is tedious and time-consuming. Students often miss important concepts or create cards that aren't effective for memorization. Traditional flashcard apps use generic content that doesn't match what's actually taught in class."
      solution="Flashcards AI automatically generates question-and-answer pairs from your actual course materials. It creates cards that focus on key concepts, definitions, and relationships, with built-in spaced repetition to optimize retention."
      capabilities={[
        'Instant flashcard generation from notes, PDFs, or slides',
        'Creates effective Q&A pairs automatically',
        'Supports various card types: definitions, concepts, relationships, and applications',
        'Built-in spaced repetition algorithm for optimal review timing',
        'Customizable card difficulty and focus areas',
        'Track mastery level for each card',
        'Edit and refine AI-generated cards easily',
        'Export cards for offline study'
      ]}
      integration="Generate flashcards directly from your AI notes or original course materials. Practice with cards, then test deeper understanding with Quizzes AI or Chat Tutor. Add cards to your Study Calendar for scheduled review sessions."
      outcome="Students master course material faster with scientifically-proven spaced repetition. Spend time learning instead of card creation. See measurable improvements in retention and recall during exams."
      ctaText="Start Making Flashcards"
    />
  );
}
