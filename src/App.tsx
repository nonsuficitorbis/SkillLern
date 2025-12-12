import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import NotesAI from './pages/features/NotesAI';
import FlashcardsAI from './pages/features/FlashcardsAI';
import QuizzesAI from './pages/features/QuizzesAI';
import ChatTutor from './pages/features/ChatTutor';
import TutorMe from './pages/features/TutorMe';
import CallTutor from './pages/features/CallTutor';
import Visuals from './pages/features/Visuals';
import LiveLecture from './pages/features/LiveLecture';
import EssayGrader from './pages/features/EssayGrader';
import AudioRecap from './pages/features/AudioRecap';
import ExplainerVideo from './pages/features/ExplainerVideo';
import Calendar from './pages/features/Calendar';
import ForTeachers from './pages/ForTeachers';
import ForInstitutions from './pages/ForInstitutions';
import Mission from './pages/Mission';
import Principles from './pages/Principles';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/features/notes" element={<NotesAI />} />
            <Route path="/features/flashcards" element={<FlashcardsAI />} />
            <Route path="/features/quizzes" element={<QuizzesAI />} />
            <Route path="/features/chat-tutor" element={<ChatTutor />} />
            <Route path="/features/tutor-me" element={<TutorMe />} />
            <Route path="/features/call-tutor" element={<CallTutor />} />
            <Route path="/features/visuals" element={<Visuals />} />
            <Route path="/features/live-lecture" element={<LiveLecture />} />
            <Route path="/features/essay-grader" element={<EssayGrader />} />
            <Route path="/features/audio-recap" element={<AudioRecap />} />
            <Route path="/features/explainer-video" element={<ExplainerVideo />} />
            <Route path="/features/calendar" element={<Calendar />} />
            <Route path="/for-teachers" element={<ForTeachers />} />
            <Route path="/for-institutions" element={<ForInstitutions />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/principles" element={<Principles />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
