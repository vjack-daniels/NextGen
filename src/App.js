import React, { useState } from 'react';
import Login from './Login';
import HomeInput from './HomeInput';
import Assessment from './Assessment';
import LoadingScreen from './LoadingScreen';
import Result from './Result';
import Feedback from './Feedback';
import Upgrade from './Upgrade';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login status
  const [showUpgradePage, setShowUpgradePage] = useState(false); // Toggle upgrade page
  const [homeData, setHomeData] = useState(null);
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true); // Set the login status to true on successful login
  };

  const handleDataSubmit = (data) => {
    setHomeData(data);
  };

  const handleAssessmentSubmit = (assessment) => {
    setIsLoading(true);
    setTimeout(() => {
      const disasterProofDesign = `Based on the input that you have provided, we have identified certain risks and proposed solutions for each.`;
      setResult(disasterProofDesign);
      setIsLoading(false);
    }, 3000);
  };

  const handleGoToFeedback = () => {
    setShowFeedback(true);
  };

  const handleFeedbackSubmit = (feedbackData) => {
    console.log("Feedback submitted:", feedbackData);
    setShowFeedback(false);
  };

  const handleHomeClick = () => {
    // Reset states to show HomeInput page
    setShowUpgradePage(false);
    setIsLoading(false);
    setShowFeedback(false);
    setResult(null); // Ensures the Result page is not shown
    setHomeData(null); // Reset homeData to display HomeInput page
  };

  return (
    <div className="App" style={{ backgroundImage: `url('/background-image.jpg')` }}>
      <header className="App-header">
        {isLoggedIn && <span className="welcome-text">Welcome Freemium User</span>}
        <h1>3rD Gen Safety</h1>
        {isLoggedIn && (
          <div className="button-container">
            <button className="home-button" onClick={handleHomeClick}>
              Home
            </button>
            <button className="upgrade-button" onClick={() => setShowUpgradePage(true)}>
              Upgrade
            </button>
          </div>
        )}
      </header>
      <main className="App-main">
        <div className="card">
          {showUpgradePage ? (
            <Upgrade /> // Show Upgrade page when showUpgradePage is true
          ) : !isLoggedIn ? (
            <Login onLogin={handleLogin} />
          ) : !homeData ? (
            <HomeInput onSubmit={handleDataSubmit} />
          ) : !result && !isLoading ? (
            <Assessment
              homeData={homeData}
              onSubmit={handleAssessmentSubmit}
            />
          ) : isLoading ? (
            <LoadingScreen />
          ) : result && !showFeedback ? (
            <Result result={result} onGoToFeedback={handleGoToFeedback} />
          ) : (
            showFeedback && <Feedback onSubmitFeedback={handleFeedbackSubmit} />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
