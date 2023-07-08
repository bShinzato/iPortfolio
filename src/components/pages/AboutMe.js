import React from 'react'
import CardItem from '../CardItem'
import '../Cards.css'
const AboutMe = () => {
  return (
    <div className="cards">
    <h1>About Me</h1>
    <p>Allow me to introduce myself as Brandon! Prior to delving into the world of coding, I proudly served in the Air Force. Subsequently, I pursued my education in Civil Engineering. The allure of coding captivated me due to its intricate nature and logical language. Moreover, I eagerly embraced the prospect of embarking on a new career path. Taking a leap of faith, I joined LEARN academy to bolster my journey towards becoming a Full Stack Developer. My passion for coding stems from its striking resemblances to my prior experiences, encompassing critical thinking, problem-solving, and collaborative endeavors with peers. On a personal note, I have a deep affection for exploring the world, immersing myself in new experiences, indulging in hobbies, and above all, constantly expanding my knowledge and skills. Below are clickable content to dive in and learn a little more about me.
    </p>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src="images/img-1.jpg"
                    text="I am a spontaneous adventurer that loves the outdoors ranging from camping, fishing, and traveling"
                    label="Adventures"
                    path="/adventures"
                    />
                    <CardItem
                    src="images/img-2.jpg"
                    text="I enjoy spending my free time with my family and friends"
                    label="Family"
                    path="/family"
                    />
                    <CardItem
                    src="images/img-3.jpg"
                    text="I love physical fitness, pushing myself to my limits"
                    label="Physical Fitness"
                    path="/physicalfitness"
                    />
                    <CardItem
                    src="images/img-4.jpg"
                    text="I enjoy the simple things in life. From learning to relaxing"
                    label="Hobbies"
                    path="/hobbies"
                    />
                </ul>
                    <h3>Technical/Soft Skills</h3>
                    <div className='listing'>
                      <ul className='child'>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Ruby</li>
                        <li>PostgreSQL</li>
                        <li>Postman</li>
                        <li>Git</li>
                        <li>Ruby on Rails</li>
                        <li>React</li>
                      </ul>
          
                      <ul className='child'>
                        <li>Time Management</li>
                        <li>Organization</li>
                        <li>Communication</li>
                        <li>Product Management</li>
                        <li>Critical Thinking</li>
                        <li>Adaptability</li>
                        <li>Leadership</li>
                        <li>Professionalism</li>
                        <li>Pair Programming</li>
                      </ul>
                    </div>
            </div>
        </div>
</div>
  )
}

export default AboutMe