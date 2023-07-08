import React from "react";
import { Zoom } from "react-slideshow-image";
import image1 from "../../imagesforcarousel/aimg-1.jpg";
import image2 from "../../imagesforcarousel/aimg-2.jpg";
import image3 from "../../imagesforcarousel/aimg-3.jpg";
import image4 from "../../imagesforcarousel/aimg-4.jpg";
import image5 from "../../imagesforcarousel/aimg-5.png";
import image6 from "../../imagesforcarousel/aimg-6.jpg";
import image7 from "../../imagesforcarousel/aimg-7.jpg";
import image8 from "../../imagesforcarousel/aimg-8.jpg";
import image9 from "../../imagesforcarousel/aimg-9.jpg";
import '../CarouselStyle.css'
import './AdventuresStyle.css'
import CardItem from '../CardItem.js'
import '../Cards.css'

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} style={{ width: "100%" }} src={each} />
        ))}
      </Zoom>
    </div>
  );
};

function family() {
    return (
            <>
            <h1 className="fade-in-text">Family And Friends!</h1>
            <div className="carousel">
                <Slideshow />
                    <p className="fade-in-text">I firmly believe in the incredible value of investing time in the company of my beloved family and friends. They are the heart of my motivation in achieving new goals and milestones. Throughout my life, I have forged bonds with friends who have became a part of my extended family. They bring more than just joyous companionship; they also serve as invaluable mentors, guiding me on the path to personal growth and fulfillment. Together, we create a powerful support system that propels me towards realizing my true potential. </p>
            </div>
            <div className="cards">   
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
            </>
    )
}

export default family