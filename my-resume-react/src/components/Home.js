import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { IParallax } from '@react-spring/parallax'
import styles from './styles.module.css'
import Navbar from './Navbar'
import "../App.css"



const Page = ({ offset, gradient, onClick }) => (
  <>

    <ParallaxLayer offset={offset} speed={0.2} onClick={onClick}>
      <div className={styles.slopeBegin} />
    </ParallaxLayer>

    <ParallaxLayer offset={offset} speed={0.6} onClick={onClick}>
      <div className={`${styles.slopeEnd} ${styles[gradient]}`} />
    </ParallaxLayer>

    <ParallaxLayer className={`${styles.container} ${styles.number}`} offset={offset} speed={0.3} onClick={onClick}>
      <h1>Hello;</h1>
      <h1>I'm Thanat Jumneanbun;</h1>
      <h1>I'm software engineer, Programmer;</h1>
    </ParallaxLayer>
  </>
)

const HomePage = (onClick) => {
  return (
    <ParallaxLayer >
      <div className="container" onClick={onClick}>
        <h1>Hello;</h1>
        <h1>I'm Thanat Jumneanbun;</h1>
        <h1>I'm software engineer, Programmer;</h1>
      </div>
    </ParallaxLayer>

  )
}

const HomePage2 = () => {
  return (
    <ParallaxLayer>
      <div className="container">
        <h1>Hello;</h1>
        <h1>xcasdasdasdasds</h1>
        <h1>I'm software engineer, Programmer;</h1>
      </div>
    </ParallaxLayer>

  )
}

export default function Home() {
  const parallax = useRef(null)

  const scroll = (to) => {
    if (parallax.current) {
      parallax.current.scrollTo(to)
    }
  }
  return (
    <div style={{ background: '#dfdfdf' }}>
      <Parallax className={styles.container} ref={parallax} pages={3} horizontal>
        <HomePage onClick={() => scroll(1)} />
        <HomePage2 onClick={() => scroll(2)} />
      </Parallax>
    </div>
  )
}
