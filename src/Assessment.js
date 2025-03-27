import React from 'react';

function Assessment({ homeData, onSubmit }) {
  const handleAssessment = () => {
    // Simulated assessment process (replace with real backend processing)
    onSubmit({ materials: homeData.materials });
  };

  return (
    <div>
      <h2>Assessing Home at {homeData.address}</h2>
      <p>Building Material: {homeData.materials}</p>
      <div style={{ marginBottom: '20px' }}></div> {/* Adds space between Material and button */}
      <button onClick={handleAssessment}>Run Risk Assessment</button>
    </div>
  );
}

export default Assessment;
