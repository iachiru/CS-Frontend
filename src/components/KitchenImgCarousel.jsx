import React from "react";
import { Carousel } from "react-bootstrap";

function KitchenImgCarousel(props) {
  const images = props.data;

  return (
    <>
      <Carousel>
        {images.map((image, i) => (
          <Carousel.Item key={i}>
            <img className="d-block" src={image} alt="First slide" />
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}

export default KitchenImgCarousel;
