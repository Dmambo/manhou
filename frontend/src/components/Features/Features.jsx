import React from "react";
import featureData from "./featureData";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Features.css";
// import quote from  '../../assets/quote.gif'



const Features = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="feature" id="features">
      <div className="features">
        <div className="feature__header">
          <h2>FEATURES</h2>
          <h4>Powering shipping and logistics</h4>
          {/* <img src={quote} alt="quote" /> */}
        </div>
        <div className="feature__content">
        <Slider {...settings}>
        {featureData.map((feature) => (
  <div className="feature__content__item" key={feature.title}>
    <h1>{feature.title}</h1>
    <p>
      {feature.description.length > 255
        ? `${feature.description.substring(0, 255)}...`
        : feature.description}
    </p>
  </div>
))}

        </Slider>
        </div>
      </div>
    </div>
  );
};

export default Features;
