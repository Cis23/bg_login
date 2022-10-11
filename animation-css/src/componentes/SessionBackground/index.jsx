import styles from '../../styles/SessionBackground.module.css'
import React, { useEffect, useState } from 'react';

import {randomLinearGradientX, randomLinearGradientY} from "./randomLinearGradient";

export const createLiY = (height,background, delay, duration, TimingFunction) => {
  return [
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    {
      line: <li></li>
    },
    
  ]
}
 

const SessionBackground = () => {
  const lineY = createLiY()
  console.log(lineY)
  return (
    <div className={styles.container }>
      <ul id={styles.lines_y} className={styles.lines}>{
        lineY.map(actual => actual.line)
      }</ul>
      <ul id={styles.lines_x} className={styles.lines}></ul>
    </div>
  )
}

export default SessionBackground