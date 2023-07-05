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

function Adventures() {
  return (
    <>
    <h1 className="fade-in-text">Some Pictures Of My Travels</h1>
    <div className="carousel">
      <Slideshow />
      <p className="fade-in-text">I am a spontaneous person who loves traveling to new destinations and immersing myself in the local culture. I enjoy trying exotic foods, relaxing at an onsen, finding unmarked beaches, and exploring underwater caves. Adventure is always on my agenda, as long as it's safe. </p>
    </div>
    </>
  );
}

export default Adventures;