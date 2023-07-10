import React from 'react'
import { Button } from './Button'
import { ButtonSecond } from './SecondButton'
import './HeroSection.css'
import'../App.css'

const HeroSection = () => {
  
  
  return (
    <div className='hero-container'>
        <video src="/videos/video-3.mp4" autoPlay loop muted />
        <h1>Brandon Shinzato</h1>
        <p>Junior Full Stack Developer</p>
  
        <div className="hero-btns">
        <ButtonSecond className='btns' buttonStyle='btn--primary' buttonSize='btn--small'>
                Dive In! <i class="fa-solid fa-fish-fins"></i>
        </ButtonSecond>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--small'>
                Contact Me <i class="fa-solid fa-envelope" />
        </Button>
        </div>
    </div>
  )
}

export default HeroSection