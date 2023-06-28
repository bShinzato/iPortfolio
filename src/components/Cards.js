import React from 'react'
import CardItem from './CardItem.js'
import './Cards.css'

const Cards = () => {
  return (
    <div className="cards">
        <h1>About Me</h1>    
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
                </div>
            </div>
    </div>
  )
}

export default Cards