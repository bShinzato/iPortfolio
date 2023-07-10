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
    <p>Allow me to introduce myself as Brandon! Prior to delving into the world of coding, I proudly served in the Air Force. Subsequently, I pursued my education in Civil Engineering. The allure of coding captivated me due to its intricate nature and logical language. Moreover, I eagerly embraced the prospect of embarking on a new career path. Taking a leap of faith, I joined LEARN academy to bolster my journey towards becoming a Full Stack Developer. My passion for coding stems from its striking resemblances to my prior experiences, encompassing critical thinking, problem-solving, and collaborative endeavors with peers. On a personal note, I have a deep affection for exploring the world, immersing myself in new experiences, indulging in hobbies, and above all, constantly expanding my knowledge and skills.
    </p>
    </div>
  <div className="cards">
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src="images/img-1.jpg"
                    text="I am a spontaneous adventurer that loves the outdoors ranging from camping, fishing, and traveling"
                    label="Adventures"
                    // path="/adventures"
                    />
                    <CardItem
                    src="images/img-2.jpg"
                    text="I enjoy spending my free time with my family and friends"
                    label="Family"
                    // path="/family"
                    />
                    <CardItem
                    src="images/img-3.jpg"
                    text="I love physical fitness, pushing myself to my limits"
                    label="Physical Fitness"
                    // path="/physicalfitness"
                    />
                    <CardItem
                    src="images/img-4.jpg"
                    text="I enjoy the simple things in life. From learning to relaxing"
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