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
function hobbies () {
    return (
        <>
          <h1 className="fade-in-text">Some Hobbies I Enjoy!</h1>
              <div className="carousel">
                  <Slideshow />
                      <p className="fade-in-text">I appreciate the simple things in life. I find so much joy in the little pleasures that surround me. When it comes to my hobbies, I like to divide them into two categories: the ones that take me outdoors and the ones that keep me cozy indoors. Exploring the great outdoors brings me immense happiness. I love going sightseeing, going on long drives to ease my mind, camping under the stars, and eating at food festivals. On the flip side, I also enjoy those laid-back moments at home. Nothing beats a good binge-watching session on Netflix, getting lost in a captivating personal growth book, playing video games, pursuing further education, and to honing my skills in coding. </p>
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
                        src="images/img-2.jpg"
                        text="I enjoy spending my free time with my family and friends"
                        label="Family and Friends"
                        path="/family"
                        />
                        <CardItem
                        src="images/img-3.jpg"
                        text="I love physical fitness, pushing myself to my limits"
                        label="Physical Fitness"
                        path="/physicalfitness"
                        />
                    </ul>
                </div>
            </div>
    </div>
        </>
    )
    
}

export default hobbies