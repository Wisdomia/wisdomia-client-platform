'use client'

import React, { useEffect } from 'react'
import styles from './nextButton.module.css'
const NextButton = () => {
    useEffect(() => {
        const handleKeyPress = (event:any) => {
          if (event.key === 'Enter') {
            console.log('Enter key pressed');
          }
        };
    
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, []);

    return (
        <div className={styles.nextButtonContainer}>
            <button style={{ cursor: 'not-allowed' }} className={styles.customButton} onClick={() => { }}>
                Next
            </button>
            <span>press <span style={{ fontWeight: 'bold' }}>Enter ↵</span></span>
        </div>
    )
}

export default NextButton