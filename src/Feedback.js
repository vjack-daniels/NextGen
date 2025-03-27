import React, { useState } from 'react';
import './Feedback.css';

function Feedback({ onSubmitFeedback }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitFeedback({ name, email, message });
    alert("Thank you for your feedback!");
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="feedback-container">
      <h2>Customer Feedback</h2>
      <p className="feedback-intro">We appreciate your feedback! Please fill out the form below.</p> {/* Added class for spacing */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Feedback:</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
}

export default Feedback;
