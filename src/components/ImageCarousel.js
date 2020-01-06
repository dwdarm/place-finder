import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ImageCarousel = ({ images }) => {
  return(
    <Carousel centerMode={true}>
      {images.map(image => (
      <div key={image.src}>
        <img src={image.src}/>
      </div>
      ))}
    </Carousel>
  );
}

export default ImageCarousel;
