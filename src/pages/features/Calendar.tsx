import FeaturePageTemplate from '../../components/FeaturePageTemplate';
import { Calendar as CalendarIcon } from 'lucide-react';

export default function Calendar() {
  return (
    <FeaturePageTemplate
      icon={CalendarIcon}
      title="Study Calendar"
      subtitle="Smart scheduling that balances your workload and tracks progress"
      problem="Students struggle to manage studying for multiple classes with overlapping deadlines. Cramming happens because there's no clear plan. It's hard to know how much time to allocate to each subject. Tracking progress manually is tedious and often abandoned."
      solution="Study Calendar automatically builds a personalized study schedule based on your due dates, exam days, and learning goals. It balances workload across subjects, sends reminders, and tracks your progress toward milestones."
      capabilities={[
        'Auto-generates study schedules from syllabi and due dates',
        'Balances workload across multiple courses',
        'Allocates optimal time for each subject based on difficulty',
        'Integrates with LMS calendars for automatic updates',
        'Schedules review sessions using spaced repetition',
        'Sends reminders for study sessions and deadlines',
        'Tracks progress toward milestones and goals',
        'Adjusts schedule dynamically based on your pace',
        'Visualizes upcoming workload and exam density',
        'Prevents cramming with early preparation prompts'
      ]}
      integration="The calendar coordinates all platform features. It schedules flashcard review sessions, quiz practice, Tutor Me lessons, and Audio Recap listening. See your entire study plan in one place and track completion."
      outcome="Students stay organized and on track without stress. Eliminate cramming and last-minute panic. Feel in control of your workload with a clear, realistic plan. Achieve better results through consistent, distributed practice."
      ctaText="Build Your Study Schedule"
    />
  );
}
