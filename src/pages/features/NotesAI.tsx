import FeaturePageTemplate from '../../components/FeaturePageTemplate';
import { BookOpen } from 'lucide-react';

export default function NotesAI() {
  return (
    <FeaturePageTemplate
      icon={BookOpen}
      title="Notes AI"
      subtitle="Transform lectures and readings into structured, organized notes instantly"
      problem="Students waste hours trying to condense dense readings and lecture recordings into useful notes. It's hard to know what's important, and manual note-taking during class means missing key points."
      solution="Notes AI analyzes your course materials and automatically generates well-structured notes with key concepts highlighted. It identifies main ideas, supporting details, and important terminology, filtering out redundant information."
      capabilities={[
        'Converts long readings and lecture recordings into structured notes',
        'Supports multiple document types: PDFs, slides, videos, and audio',
        'Highlights key concepts and terminology automatically',
        'Filters out noise and focuses on core content',
        'Organizes information with clear headings and bullet points',
        'Creates notes that match your learning style and preferences',
        'Allows customization of detail level and format',
        'Generates notes in seconds, not hours'
      ]}
      integration="Turn your AI-generated notes into flashcards and quizzes with one click. Use them as the foundation for Chat Tutor conversations, or generate audio recaps for on-the-go review."
      outcome="Students save hours of manual work while getting better, more comprehensive notes. Focus on understanding the material instead of struggling to capture it. Improve retention with notes that highlight exactly what matters."
      ctaText="Start Creating Notes"
    />
  );
}
