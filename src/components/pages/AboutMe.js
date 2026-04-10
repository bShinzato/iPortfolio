import React from 'react'
import CardItem from '../CardItem'
import '../Cards.css'
import Skills from '../Skills'
import '../Skills.css'

const AboutMe = () => {

  return (
<>
<div className='aboutme-hp'>
    <h1>About Me</h1>
    <p>I am a developer who enjoys building modern web applications with React, Tailwind CSS, and a focus on clean user experience. I am passionate about technology, but I also care a lot about the business side of projects, like strategy, operations, and solving real problems that matter. I like creating things that are practical, scalable, and useful, while continuing to grow my skills as both a developer and problem solver. My goal is to combine technical ability with my business degree to deliver a strong mindset for innovation, adaptability, and long term value.
    </p>
    </div>
  <div className="cards">
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src="images/img-1.jpg"
                    text="Traveling"
                    label="Adventures"
                    // path="/adventures"
                    />
                    <CardItem
                    src="images/img-2.jpg"
                    text="Family & Friends"
                    label="Family"
                    // path="/family"
                    />
                    <CardItem
                    src="images/img-3.jpg"
                    text="Stay Healthy"
                    label="Physical Fitness"
                    // path="/physicalfitness"
                    />
                    <CardItem
                    src="images/img-4.jpg"
                    text="Coding & Games & Cars"
                    label="Hobbies"
                    // path="/hobbies"
                    />
                </ul>
            </div>
         </div>
  </div>
        <section>
          <h1>Skills</h1>
        <div className='entire-content-skills'>
          <Skills />
        </div>
        </section>
</>
  )
}

export default AboutMe