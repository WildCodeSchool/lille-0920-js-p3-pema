import React from "react";
import Slider from "react-slick";
import slide_one from "../../assets/images/Header/slide_one.jpg";
import slide_two from "../../assets/images/Header/slide_two.jpg";
import slide_three from "../../assets/images/Header/slide_three.jpg";
import slide_four from "../../assets/images/Header/slide_four.jpg";
import slide_five from "../../assets/images/Header/slide_five.jpg";
import slide_six from "../../assets/images/Header/slide_six.jpg";
//import '../../styled-components/header/carrousel.css'
import { CarrouselWrapper, CarrouselImage} from '../../styled-components/header/Carrousel.js';

const Carrousel = () => {
  //Set carrousel settings 
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 200
  };
  return (
    <CarrouselWrapper
      style={{
        height: '695px',
        overflow: "hidden",
        
      }}
    >
      <Slider {...settings}>
        <div>
          <CarrouselImage
            style={{
              background: `url(${slide_one})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <CarrouselImage
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <CarrouselImage
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <CarrouselImage
            style={{
              background: `url(${slide_four})`,
              height: `${window.innerHeight}px`
            }}
          />
          <div>
          <CarrouselImage
            style={{
              background: `url(${slide_five})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        </div>
        <div>
          <CarrouselImage
            style={{
              background: `url(${slide_six})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
    </CarrouselWrapper>
  );
};

export default Carrousel;
