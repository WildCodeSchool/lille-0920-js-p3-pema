import React from "react";
import Slider from "react-slick";
import slide_one from "../../assets/images/slide_one.jpg";
import slide_two from "../../assets/images/slide_two.jpg";
import slide_three from "../../assets/images/slide_three.jpg";
import slide_four from "../../assets/images/slide_four.jpg";
import slide_five from "../../assets/images/slide_five.jpg";
import slide_six from "../../assets/images/slide_six.jpg";
const Carrousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 200
  };
  return (
    <div
      className="carrousel_wrapper"
      style={{
        height: '500px',
        overflow: "hidden"
      }}
    >
      <Slider {...settings}>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_one})`,
              height:'500px'
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_two})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_three})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_four})`,
              height: `${window.innerHeight}px`
            }}
          />
          <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_five})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
        </div>
        <div>
          <div
            className="carrousel_image"
            style={{
              background: `url(${slide_six})`,
              height: `${window.innerHeight}px`
            }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carrousel;
