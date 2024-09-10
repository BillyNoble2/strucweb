"use client";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
//import styles from './css/DropdownMenu.modules.css';
import styles from './css/DropdownMenu.module.css';

export default function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/login'); // Redirect to login page after sign-out
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <div className={styles.dropdown}>
      <button onClick={handleToggle} className={styles.dropdownButton}>
        ☰ Menu
      </button>
      {isOpen && (
        <div className={styles.dropdownContent}>
            <button>Help</button>
            <button onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  );
}
