import React from "react";
import { Zoom } from "react-slideshow-image";
import image3 from "../../imagesforcarousel/aimg-3.jpg";
import image4 from "../../imagesforcarousel/aimg-4.jpg";
import image5 from "../../imagesforcarousel/aimg-5.png";
import '../CarouselStyle.css'

const images = [image3, image4, image5];

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
    <h1>Some Pictures Of My Traveling</h1>
    <div className="carousel">
      <Slideshow />
    </div>
    </>
  );
}

export default Adventures;