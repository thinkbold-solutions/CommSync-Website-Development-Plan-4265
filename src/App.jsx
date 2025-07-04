import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import BrandEngineering from './pages/services/BrandEngineering';
import CrisisCommunications from './pages/services/CrisisCommunications';
import CommSyncAcademy from './pages/services/CommSyncAcademy';
import PIONetwork from './pages/services/PIONetwork';
import PublicAffairs from './pages/services/PublicAffairs';
import Tampa from './pages/locations/Tampa';
import Florida from './pages/locations/Florida';
import Cheyenne from './pages/locations/Cheyenne';
import Wyoming from './pages/locations/Wyoming';
import Events from './pages/Events';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookieConsent from './components/CookieConsent';
import './App.css';

function App() {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem('cookieConsent');
    if (!hasConsented) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleCookieConsent = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowCookieConsent(false);
  };

  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/brand-engineering" element={<BrandEngineering />} />
              <Route path="/services/crisis-communications" element={<CrisisCommunications />} />
              <Route path="/services/commsync-academy" element={<CommSyncAcademy />} />
              <Route path="/services/pio-network" element={<PIONetwork />} />
              <Route path="/services/public-affairs" element={<PublicAffairs />} />
              <Route path="/locations/tampa" element={<Tampa />} />
              <Route path="/locations/florida" element={<Florida />} />
              <Route path="/locations/cheyenne" element={<Cheyenne />} />
              <Route path="/locations/wyoming" element={<Wyoming />} />
              <Route path="/events" element={<Events />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </main>
          <Footer />
          {showCookieConsent && (
            <CookieConsent onAccept={handleCookieConsent} />
          )}
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;