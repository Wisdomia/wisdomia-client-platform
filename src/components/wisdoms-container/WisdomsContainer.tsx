import React from 'react'
import styles from './wisdomsContainer.module.css'
import NextButton from '../next-button/NextButton'

const WisdomsContainer = () => {
  return (
    <div className={styles.wisdomsContainer}>
      <span>This is some placeholder Wisdom that you should respect. Thats it for now. More Comming soon!</span>
      <div className={styles.buttons}>
        <NextButton/>
        <span></span>
      </div>
    </div>
  )
}

export default WisdomsContainer