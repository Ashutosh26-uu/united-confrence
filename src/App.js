import React from 'react';
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
import OrganizingCommittee from './components/OrganizingCommittee';
import InteractiveElements from './components/InteractiveElements';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutPrayagraj />
      <ImportantDates />
      <Papers />
      <Registration />
      <Venue />
      <Speakers />
      <OrganizingCommittee />
      <Sponsors />
      <InteractiveElements />
      <Footer />
    </div>
  );
}

export default App;