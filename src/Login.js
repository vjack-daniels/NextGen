import React, { useState } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const [isCreatingAccount, setIsCreatingAccount] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState(''); // New state for email in "Create Account" mode

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      onLogin();
    } else {
      alert('Invalid username or password');
    }
  };

  const handleCreateAccount = (e) => {
    e.preventDefault();
    // Add account creation logic here
    alert('Account created successfully!');
    setIsCreatingAccount(false);
  };

  return (
    <div className="login-container">
      <h2>{isCreatingAccount ? 'Create Account' : 'Login'}</h2>
      <form onSubmit={isCreatingAccount ? handleCreateAccount : handleLogin}>
        {isCreatingAccount && (
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        )}
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">
          {isCreatingAccount ? 'Create Account' : 'Login'}
        </button>
      </form>
      <p className="toggle-form-text">
        {isCreatingAccount ? 'Already have an account?' : "Don't have an account?"}{' '}
        <span
          className="toggle-link"
          onClick={() => setIsCreatingAccount(!isCreatingAccount)}
        >
          {isCreatingAccount ? 'Login here' : 'Create Account'}
        </span>
      </p>
    </div>
  );
}

export default Login;
