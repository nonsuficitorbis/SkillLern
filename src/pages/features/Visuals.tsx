import FeaturePageTemplate from '../../components/FeaturePageTemplate';
import { Image as ImageIcon } from 'lucide-react';

export default function Visuals() {
  return (
    <FeaturePageTemplate
      icon={ImageIcon}
      title="Visual Q&A"
      subtitle="Upload diagrams and images to ask questions about specific visual elements"
      problem="Many subjects rely heavily on diagrams, charts, and visual aids that are hard to understand from text alone. Students struggle to interpret complex visuals or need help with handwritten notes. Searching for help online doesn't work when the image is from a specific textbook or lecture."
      solution="Visual Q&A lets you upload images, diagrams, or handwritten notes and ask questions about specific elements within them. Point to regions of interest and get AI explanations based on your course materials and the visual context."
      capabilities={[
        'Upload images from textbooks, slides, or handwritten notes',
        'Point to specific regions or elements in the image',
        'Ask questions about diagrams, charts, graphs, and illustrations',
        'AI provides explanations based on both the image and course context',
        'Works with photos of whiteboards or handwritten work',
        'Supports scientific diagrams, anatomical charts, circuit diagrams, and more',
        'Get step-by-step explanations of visual processes',
        'Identify and label parts of complex diagrams'
      ]}
      integration="Upload images during Chat Tutor conversations or Tutor Me lessons to get visual explanations. Save annotated images to your notes for later reference. Create flashcards from diagram labels and relationships."
      outcome="Students gain deeper understanding of visual course material. No more struggling alone with confusing diagrams. Get immediate help interpreting charts, graphs, and illustrations critical to your coursework."
      ctaText="Start Asking Visual Questions"
    />
  );
}
