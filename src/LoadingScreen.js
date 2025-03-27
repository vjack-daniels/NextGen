import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
          onFinish(); // Call onFinish once loading is complete
          return oldProgress;
        }
        const newProgress = Math.min(oldProgress + Math.random() * 20, 100);
        return newProgress;
      });
    }, 500);
  }, [onFinish]);

  return (
    <div className="loading-screen">
      <h2>Analyzing the Data...</h2>
      <div className="progress-bar">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{Math.round(progress)}%</p>
    </div>
  );
};

export default LoadingScreen;
