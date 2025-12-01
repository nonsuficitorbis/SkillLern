import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      title: 'How AI Tutoring Improves Student Outcomes: A Data-Driven Analysis',
      excerpt: 'We analyzed performance data from over 50,000 students to understand the real impact of AI tutoring on grades, retention, and confidence.',
      date: 'November 28, 2025',
      readTime: '8 min read',
      category: 'Research'
    },
    {
      title: '5 Ways Teachers Are Using AI to Save Time and Improve Engagement',
      excerpt: 'Real stories from educators about how AI tools are transforming their prep work, grading workflows, and student support strategies.',
      date: 'November 21, 2025',
      readTime: '6 min read',
      category: 'For Educators'
    },
    {
      title: 'Building Ethical AI for Education: Our Approach to Bias and Fairness',
      excerpt: 'An in-depth look at how we identify, measure, and mitigate bias in our AI models to ensure equitable learning experiences.',
      date: 'November 14, 2025',
      readTime: '10 min read',
      category: 'Ethics & Safety'
    },
    {
      title: 'Study Smarter, Not Harder: The Science Behind Effective AI Study Tools',
      excerpt: 'How spaced repetition, active recall, and adaptive learning principles are built into our platform to maximize retention.',
      date: 'November 7, 2025',
      readTime: '7 min read',
      category: 'Learning Science'
    },
    {
      title: 'Implementing AI at Scale: Lessons from 500+ Institutions',
      excerpt: 'What we\'ve learned from helping universities and districts deploy AI learning platforms successfully across thousands of students.',
      date: 'October 31, 2025',
      readTime: '9 min read',
      category: 'For Institutions'
    },
    {
      title: 'Voice-Enabled Learning: Why Audio Study Tools Are Game-Changers',
      excerpt: 'Exploring the benefits of audio recaps and voice tutoring for accessibility, mobile learning, and diverse learning styles.',
      date: 'October 24, 2025',
      readTime: '5 min read',
      category: 'Features'
    }
  ];

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Insights on AI in education, learning science, and student success
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <Link
                key={index}
                to={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-100 to-cyan-100"></div>
                <div className="p-6">
                  <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-3">
                    {post.category}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
