import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AbstractsPage from './pages/AbstractsPage';
import RegistrationPage from './pages/RegistrationPage';
import ProgramPage from './pages/ProgramPage';
import SpeakersPage from './pages/SpeakersPage';
import VenuePage from './pages/VenuePage';
import SponsorsPage from './pages/SponsorsPage';
import ContactPage from './pages/ContactPage';
import NewsPage from './pages/NewsPage';
import useDarkMode from './hooks/useDarkMode';

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abstracts" element={<AbstractsPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/venue" element={<VenuePage />} />
          <Route path="/sponsors" element={<SponsorsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
        <Footer />
      </div>
   </Router>
 );
}



export default App;
