import FeaturePageTemplate from '../../components/FeaturePageTemplate';
import { Video } from 'lucide-react';

export default function LiveLecture() {
  return (
    <FeaturePageTemplate
      icon={Video}
      title="Record Live Lecture"
      subtitle="Capture live teaching sessions and generate searchable notes with timestamps"
      problem="Taking notes during lectures means missing what the professor says. Recording audio or video creates files that are hard to search through later. Students who miss class struggle to catch up without comprehensive notes."
      solution="Record Live Lecture captures your classes in real-time and automatically generates structured notes, summaries, and key takeaways. Timestamps link notes back to specific moments in the recording so you can jump to any point instantly."
      capabilities={[
        'Real-time audio or video capture of live classes',
        'Automatic transcription and note generation',
        'Timestamp-linked notes for quick navigation',
        'Key concept extraction and summarization',
        'Searchable transcripts to find specific topics',
        'Ask questions tied to specific timestamps',
        'Generate flashcards and quizzes from lecture content',
        'Share notes with study groups while keeping recordings private'
      ]}
      integration="Recorded lectures become part of your course materials library. Use Chat Tutor to ask questions about specific lecture moments. Convert lecture notes into flashcards, quizzes, or audio recaps for comprehensive study materials."
      outcome="Never miss important points during lectures. Review any part of a class instantly with timestamp-linked notes. Help classmates by sharing generated notes. Study more effectively with searchable, structured lecture content."
      ctaText="Start Recording Lectures"
    />
  );
}
