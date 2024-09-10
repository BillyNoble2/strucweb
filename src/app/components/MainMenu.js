"use client";
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import styles from './css/MainMenu.module.css'; // Import CSS Module
import DropdownMenu from './DropdownMenu';

export default function MainMenu() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className="headerText">StructuralAssistant</h1>
        <DropdownMenu />
      </header>
      <main className={styles.mainContent}>
        <div className={styles.column}>
          <div className={styles.contentBox}>
            <MenuCard 
              title="Connections"
              button1Title="Flatbar Bracing"
              button2Title="CHS Bracing"
              button1Route="/flatbar"  // Define the routes for each button
              button2Route="/chs-bracing"
            />
          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.contentBox}>
          <MenuCard 
              title="Member Design"
              button1Title="Gable Post"
              button2Title="Gable Rafter"
              button1Route="/gable-post"  // Define the routes for each button
              button2Route="/gable-rafter"
            />

          </div>
        </div>
        <div className={styles.column}>
          <div className={styles.contentBox}>
          <MenuCard 
              title="Structural Analysis"
              button1Title="Column"
              button2Title="Beam"
              button1Route="/column"  // Define the routes for each button
              button2Route="/beam"
            />

          </div>
        </div>
      </main>
    </div>
  );
}

export function MenuCard({ title, button1Title, button2Title, button1Route, button2Route }) {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigation = (route) => {
    navigate(route); // Navigate to the specified route
  };

  return (
    <div>
      <h1>{title}</h1>
      <button 
        className={styles.menuButton}
        onClick={() => handleNavigation(button1Route)}
      >
        {button1Title}
      </button>
      <button 
        className={styles.menuButton}
        onClick={() => handleNavigation(button2Route)}
      >
        {button2Title}
      </button>
    </div>
  );
}
