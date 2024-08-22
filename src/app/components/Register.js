"use client";
import React, { useState } from 'react';
import "./css/Login.css"; // Assuming this is the same CSS file you're using for styling
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu_-yfSp2o55nA3H2V017sJu1FnLKVd5Y",
  authDomain: "structuralassistantweb.firebaseapp.com",
  projectId: "structuralassistantweb",
  storageBucket: "structuralassistantweb.appspot.com",
  messagingSenderId: "46101923490",
  appId: "1:46101923490:web:c91200594c1cca8c2e39fb",
  measurementId: "G-4C37805SB1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== retypePassword) {
      alert('Passwords do not match');
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('Successfully registered - please log in');
        navigate('/'); // Navigate to the login page after registration
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div id="container">
      <h1>Register for an Account</h1>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="retypePassword">Retype password:</label>
          <input
            type="password"
            id="retypePassword"
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit" id="registerButton">Register</button>
        </div>
      </form>
    </div>
  );
}
