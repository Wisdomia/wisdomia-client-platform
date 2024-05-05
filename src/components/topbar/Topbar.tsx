import Image from 'next/image'
import React from 'react'
import styles from './topbar.module.css'

const Topbar = () => {
  return (
    <div className={styles.topbar}>
    <Image style={{padding:'2rem'}} src={'/token.png'} width={130} height={130} alt="token-wisdomia" />
    <span>Wisdomia</span>
    <span style={{color:'transparent',pointerEvents:"none"}}>_____</span>
    </div>
  )
}

export default Topbar