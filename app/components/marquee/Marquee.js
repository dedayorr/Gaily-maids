import React from 'react'
import styles from './marquee.module.css';

const Marquee = ({text}) => {
  return (
    <div className={styles.marquee}>
    <div className={styles.marqueeContent}>{text}</div>
  </div>
  )
}

export default Marquee