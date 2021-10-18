import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../Banner/images/slide-1.PNG'
import img2 from '../Banner/images/slide-2.PNG'
import img3 from '../Banner/images/slide-3.PNG'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img1}
      alt="First slide"
    />
    <Carousel.Caption>
      <p className="text-responsive">The best in modern
dentistry</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <p className="text-responsive">The best in modern
dentistry</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <p className="text-responsive">The best in modern
dentistry</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;