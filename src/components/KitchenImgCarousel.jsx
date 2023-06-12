import React from "react";
import { Carousel } from "react-bootstrap";

function KitchenImgCarousel(props) {
  const images = props.data;

  return (
    <div className="carousel-wrapper">
      <Carousel>
        {images.map((image, i) => (
          <Carousel.Item key={i}>
            <img className="carousel-img" src={image} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default KitchenImgCarousel;
