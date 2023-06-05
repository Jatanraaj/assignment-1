import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Slider() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block sliderimg'
        itemId={1}
        src='./images/Slider.webp'
        alt='...'
      >
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block sliderimg'
        itemId={2}
        src='./images/slider1.webp'
        alt='...'
      >

      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block sliderimg'
        itemId={3}
        src='./images/slider3.webp'
        alt='...'
      >
        <h5>Your Pets Our Pets</h5>
        <p>Get best varaities of Products and Services from our Website</p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}