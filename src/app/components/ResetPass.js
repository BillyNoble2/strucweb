"use client"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./css/Login.css"
import { initializeApp } from 'firebase/app';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';

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

export default function ResetPass() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();


    const handleResetPassword = (e) => {
        e.preventDefault();
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset email sent, please check your inbox.');
                navigate('/')
            })
            .catch((error) => {
                alert(`Error: ${error.message}`);
            });
    };

    return (
        <div id="container">
            <h1>Password Reset</h1>
            <form onSubmit={handleResetPassword}>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder='Email address.'
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </div>
                <div className="form-group">
                    <button type="submit" id="sendResetButton">Send reset email</button>
                </div>
            </form>
        </div>
    );
}
