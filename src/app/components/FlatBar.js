"use client";
import React from 'react';
import styles from './css/FlatBar.module.css';

export default function FlatBar() {
  return (
    <div>
        <h1>FlatBar Bracing Connection Design</h1>
        <div className = {styles.overallDiv}>
            <DesignData />
            <DesignResults />
        </div>
    </div>
  )
}

export function DesignData(){
    return (
        <div className={styles.container}>
          <h1 className={styles.header}>Design Data</h1>
          <form>
            <div className={styles.formSection}>
              <div className={styles.formGroup}>
                <label htmlFor="tensionLoad">Tension Load:</label>
                <input type="number" id="tensionLoad" />
                <span className={styles.unit}>kN</span>
              </div>
    
              <div className={styles.formGroup}>
                <label htmlFor="plateWidth">Plate Width:</label>
                <input type="number" id="plateWidth" />
                <span className={styles.unit}>mm</span>
              </div>
    
              <div className={styles.formGroup}>
                <label htmlFor="plateThickness">Plate Thickness:</label>
                <input type="number" id="plateThickness" />
                <span className={styles.unit}>mm</span>
              </div>
            </div>
    
            <div className={styles.formSection}>
              <div className={styles.formGroup}>
                <label htmlFor="plateGrade">Plate Grade S:</label>
                <input type="number" id="plateGrade" />
                <span className={styles.unit}></span>
              </div>
    
              <div className={styles.formGroup}>
                <label htmlFor="boltDia">Bolt Diameter:</label>
                <input type="number" id="boltDia" />
                <span className={styles.unit}>mm</span>
              </div>
    
              <div className={styles.formGroup}>
                <label htmlFor="boltGrade">Bolt Grade:</label>
                <input type="number" id="boltGrade" />
              </div>
            </div>
    
            <div className={styles.formSection}>
              <button className={styles.calc} type="submit">Calculate</button>
            </div>
          </form>
        </div>
      );
}

export function DesignResults(){
    return(
        <div className={styles.container}>
            <h1 className={styles.header}>Design Results</h1>
        </div>
    )
}
