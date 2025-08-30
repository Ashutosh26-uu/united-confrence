import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Papers from './components/Papers';
import Registration from './components/Registration';
import Venue from './components/Venue';
import Speakers from './components/Speakers';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import AboutPrayagraj from './components/AboutPrayagraj';
import ImportantDates from './components/ImportantDates';
import InteractiveElements from './components/InteractiveElements';
import OrganizingCommittee from './components/OrganizingCommittee';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/prayagraj" element={<AboutPrayagraj />} />
          <Route path="/about/committee" element={<OrganizingCommittee />} />
          <Route path="/dates" element={<ImportantDates />} />
          <Route path="/program/schedule" element={<div>Conference Schedule</div>} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/program/workshops" element={<div>Workshops</div>} />
          <Route path="/papers" element={<Papers />} />
          <Route path="/submission/guidelines" element={<div>Submission Guidelines</div>} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <InteractiveElements />
        <Footer />
      </div>
    </Router>
  );
}

export default App;