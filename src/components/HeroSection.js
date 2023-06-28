import React from 'react'
import { Button } from './Button'
import './HeroSection.css'
import'../App.css'

const HeroSection = () => {
  return (
    <div className='hero-container'>
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <h1>Brandon Shinzato</h1>
        <p>Junior Full Stack Developer</p>
        <p>Dive In and Get To Know Me</p>
        <div className="hero-btns">
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
                Let's go!
            </Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Contact Me <i class="fa-solid fa-envelope" />
            </Button>
        </div>
    </div>
  )
}

export default HeroSection