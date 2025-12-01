import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const studentFAQs = [
    {
      question: 'How does the AI tutor work?',
      answer: 'The AI tutor is trained on your actual course materials—the readings, slides, and notes you upload. When you ask a question, it provides explanations and guidance based specifically on your course content, not generic information from the web.'
    },
    {
      question: 'Is this platform considered cheating?',
      answer: 'Our platform is designed to support genuine learning, not replace it. The AI guides you toward understanding through explanations and incremental hints rather than simply giving answers. However, always follow your institution\'s academic integrity policies and ask your instructor if you\'re unsure about using any study tool.'
    },
    {
      question: 'How much does it cost?',
      answer: 'We offer a free tier with core features. Premium plans with advanced features like voice tutoring, unlimited AI interactions, and priority support start at a student-friendly monthly rate. Many institutions provide access to students at no cost.'
    },
    {
      question: 'What subjects does it support?',
      answer: 'The platform works across all subjects and academic levels. Whether you\'re studying biology, literature, mathematics, computer science, business, or any other field, the AI can help with your specific course materials.'
    },
    {
      question: 'Can I use this on my phone?',
      answer: 'Yes! The platform is fully responsive and works on phones, tablets, and computers. Features like Audio Recap and Call with AI Tutor are especially great for mobile learning.'
    }
  ];

  const teacherFAQs = [
    {
      question: 'How do I upload my course materials?',
      answer: 'You can upload PDFs, slides, documents, and other files directly through the dashboard. You can also connect your LMS (Canvas, Blackboard, etc.) to automatically sync materials and assignments.'
    },
    {
      question: 'Can I control what the AI tells my students?',
      answer: 'Yes. You can review AI-generated content, set boundaries on how the AI responds, and configure the level of help provided. You also have access to interaction logs to see what students are asking.'
    },
    {
      question: 'How much time does this really save?',
      answer: 'Teachers report saving 5-10 hours per week on average through automated grading, worksheet generation, and reduced repetitive questions during office hours.'
    },
    {
      question: 'Does it integrate with my LMS?',
      answer: 'Yes! We integrate with Canvas, Blackboard, Google Classroom, D2L, Schoology, and other major learning management systems. Students can access the platform directly from your LMS course page.'
    }
  ];

  const institutionFAQs = [
    {
      question: 'What compliance certifications do you have?',
      answer: 'We are SOC 2 Type II certified, FERPA compliant, COPPA compliant, and meet WCAG 2.1 AA accessibility standards. We provide HECVAT and VPAT documentation upon request.'
    },
    {
      question: 'How do you ensure data security and privacy?',
      answer: 'We use end-to-end encryption, regular third-party security audits, and granular access controls. Student data is never sold or shared. Institutions maintain full ownership and control of their data.'
    },
    {
      question: 'Can we deploy this privately on our infrastructure?',
      answer: 'Yes. We offer private cloud deployment options with isolated tenant environments for institutions that require on-premises or private hosting.'
    },
    {
      question: 'What kind of analytics and reporting do you provide?',
      answer: 'Administrators get real-time dashboards showing engagement metrics, usage patterns, academic performance correlations, and ROI data. Faculty can see topic-level analytics showing where students struggle most.'
    }
  ];

  const FAQSection = ({ title, faqs }: { title: string; faqs: Array<{ question: string; answer: string }> }) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const globalIndex = title === 'For Students' ? index : title === 'For Teachers' ? studentFAQs.length + index : studentFAQs.length + teacherFAQs.length + index;
          const isOpen = openIndex === globalIndex;

          return (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                    isOpen ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-6 pb-6">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our AI learning platform
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQSection title="For Students" faqs={studentFAQs} />
          <FAQSection title="For Teachers" faqs={teacherFAQs} />
          <FAQSection title="For Institutions" faqs={institutionFAQs} />

          <div className="mt-12 bg-blue-50 p-8 rounded-xl text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Still have questions?</h3>
            <p className="text-gray-700 mb-4">
              Our support team is here to help
            </p>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-semibold transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
