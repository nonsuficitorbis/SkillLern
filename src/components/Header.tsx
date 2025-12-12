import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    setIsUserMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Spark Study</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900 font-medium">Home</Link>

            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 font-medium"
                onMouseEnter={() => setIsFeaturesOpen(true)}
                onMouseLeave={() => setIsFeaturesOpen(false)}
              >
                <span>Features</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isFeaturesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2"
                  onMouseEnter={() => setIsFeaturesOpen(true)}
                  onMouseLeave={() => setIsFeaturesOpen(false)}
                >
                  <Link to="/features" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">All Features</Link>
                  <Link to="/features/notes" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Notes AI</Link>
                  <Link to="/features/flashcards" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Flashcards AI</Link>
                  <Link to="/features/quizzes" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Quizzes AI</Link>
                  <Link to="/features/chat-tutor" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Chat Tutor</Link>
                  <Link to="/features/tutor-me" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Tutor Me</Link>
                </div>
              )}
            </div>

            <Link to="/for-teachers" className="text-gray-700 hover:text-gray-900 font-medium">For Teachers</Link>
            <Link to="/for-institutions" className="text-gray-700 hover:text-gray-900 font-medium">For Institutions</Link>
            <Link to="/mission" className="text-gray-700 hover:text-gray-900 font-medium">Our Mission</Link>
            <Link to="/principles" className="text-gray-700 hover:text-gray-900 font-medium">Our Principles</Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900 font-medium">Blog</Link>
            <Link to="/faq" className="text-gray-700 hover:text-gray-900 font-medium">FAQ</Link>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-medium"
                >
                  <User className="w-5 h-5" />
                  <span>{user.user_metadata?.name || user.email}</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 hover:text-gray-900 font-medium">Login</Link>
                <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            <Link to="/" className="block py-2 text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/features" className="block py-2 text-gray-700 hover:text-gray-900">Features</Link>
            <Link to="/for-teachers" className="block py-2 text-gray-700 hover:text-gray-900">For Teachers</Link>
            <Link to="/for-institutions" className="block py-2 text-gray-700 hover:text-gray-900">For Institutions</Link>
            <Link to="/mission" className="block py-2 text-gray-700 hover:text-gray-900">Our Mission</Link>
            <Link to="/principles" className="block py-2 text-gray-700 hover:text-gray-900">Our Principles</Link>
            <Link to="/blog" className="block py-2 text-gray-700 hover:text-gray-900">Blog</Link>
            <Link to="/faq" className="block py-2 text-gray-700 hover:text-gray-900">FAQ</Link>
            <div className="pt-4 space-y-2">
              {user ? (
                <>
                  <div className="py-2 text-gray-700 font-medium">
                    {user.user_metadata?.name || user.email}
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="block w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 text-center"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login" className="block py-2 text-gray-700 hover:text-gray-900">Login</Link>
                  <Link to="/signup" className="block py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-center">
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
