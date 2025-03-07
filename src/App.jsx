import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DrBotanist from './pages/Dr. Botanist';
import AboutPage from './pages/About';
import HelpCenter from './pages/HelpCenter';
import PlantCareGuidePage from './pages/PlantCareGuidePage';
import Navbar from './pages/Navbar';

// Main Plant Care App Component
function PlantCareApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="app-container">
        {!isLoggedIn ? (
          <LoginPage onLogin={handleLoginSuccess} />
        ) : (
          <MainApp />
        )}
      </div>
    </Router>
  );
}

// Main App Component for Logged-In Users
function MainApp() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Dr. Botanist" element={<DrBotanist />} />
        <Route path="/care" element={<PlantCareGuidePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/help" element={<HelpCenter />} />
      </Routes>
    </div>
  );
}

export default PlantCareApp;
