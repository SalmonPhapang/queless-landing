import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Home } from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import { PartnerModal } from './components/PartnerModal';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = React.useState(false);
  const location = useLocation();

  // Helper to handle hash navigation from other pages
  const handleNavClick = (hash: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      window.location.href = `/${hash}`;
    } else {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-light font-sans text-dark overflow-x-hidden flex flex-col">
      <ScrollToTop />
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-primary">Queless</Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => handleNavClick('#features')} className="text-gray-600 hover:text-primary transition-colors">Features</button>
              <button onClick={() => handleNavClick('#how-it-works')} className="text-gray-600 hover:text-primary transition-colors">How it works</button>
              {/* Locations was pointing to #locations but that section didn't exist in original code, keeping it generic or removing if broken. 
                  Actually, looking at original code, #locations link existed but section didn't. 
                  I will keep it for consistency but it won't scroll anywhere. */}
              <button onClick={() => handleNavClick('#locations')} className="text-gray-600 hover:text-primary transition-colors">Locations</button>
              <button className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-full font-medium transition-colors shadow-lg shadow-primary/30">
                Get the App
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => handleNavClick('#features')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary">Features</button>
              <button onClick={() => handleNavClick('#how-it-works')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary">How it works</button>
              <button onClick={() => handleNavClick('#locations')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-primary">Locations</button>
              <button className="w-full mt-4 bg-primary text-white px-6 py-2 rounded-full font-medium">
                Get the App
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold text-secondary mb-4 block">Queless</span>
              <p className="text-gray-400 max-w-xs">
                South Africa's premier alcohol and food delivery service. 
                Drink responsibly.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white">About Us</Link></li>
                <li><Link to="/" className="hover:text-white">Careers</Link></li>
                <li>
                  <button 
                    onClick={() => setIsPartnerModalOpen(true)}
                    className="hover:text-white text-left focus:outline-none"
                  >
                    Become a Partner
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/" className="hover:text-white">Help Center</Link></li>
                <li><Link to="/terms-conditions" className="hover:text-white">Terms of Service</Link></li>
                <li><Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>&copy; {new Date().getFullYear()} Queless South Africa. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Partner Modal */}
      <AnimatePresence>
        {isPartnerModalOpen && (
          <PartnerModal onClose={() => setIsPartnerModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
