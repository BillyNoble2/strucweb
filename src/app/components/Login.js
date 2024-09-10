"use client";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/Login.css";
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

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

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is already authenticated
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate('/mainmenu'); // Redirect to MainMenu if user is already signed in
      }
    });

    return () => unsubscribe(); // Cleanup subscription on component unmount
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Signed in successfully:", user);
        navigate('/MainMenu'); // Navigate to MainMenu using react-router-dom
      })
      .catch((error) => {
        alert('Incorrect login details!');
        console.log("Error signing in:", error.message);
      });
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const handleResetClick = () => {
    navigate('/resetpass');
  };

  return (
    <div id="container">
      <h1>Structural Assistant</h1>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
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
          <button type="submit" id="loginButton">Login</button>
        </div>
      </form>
      <a onClick={handleRegisterClick} href="#">Register for an account</a>
      <a onClick={handleResetClick} href="#">Forgotten password?</a>
    </div>
  );
}
