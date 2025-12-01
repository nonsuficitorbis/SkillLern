import FeaturePageTemplate from '../../components/FeaturePageTemplate';
import { Clock } from 'lucide-react';

export default function AudioRecap() {
  return (
    <FeaturePageTemplate
      icon={Clock}
      title="Audio Recap"
      subtitle="Listen to AI-generated audio summaries of your course materials"
      problem="Students don't have time to re-read entire chapters or watch hour-long lectures when reviewing. Commute time and gym time are wasted opportunities for studying. Some students learn better by listening than reading but lack audio versions of course content."
      solution="Audio Recap generates 6-45 minute audio summaries from your course materials or notes. Choose your desired length and focus areas. Listen during commutes, workouts, or any time you can't read. It's like having a personal podcast for each topic."
      capabilities={[
        'Generate audio summaries from any course material',
        'Configurable length: 6, 15, 30, or 45 minutes',
        'Choose focus: broad overview or specific topics',
        'Natural-sounding AI narration',
        'Variable playback speed',
        'Download for offline listening',
        'Ideal for auditory learners',
        'Perfect for mobile and on-the-go study'
      ]}
      integration="Create audio recaps from your AI notes, lecture recordings, or original materials. Listen while reviewing flashcards mentally. Use recaps as a preview before Tutor Me lessons or as a quick review before exams."
      outcome="Students make productive use of every moment. Turn commute time into study time. Reinforce learning through multiple modalities. Review more content in less time with condensed, focused summaries."
      ctaText="Create Your First Recap"
    />
  );
}
