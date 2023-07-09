import React from 'react';
import CommerceData from './CommerceData';
import './Commerce.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Commerce = ({ navigateTo }) => {
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



  const handleButtonClick = () => {
    navigateTo('shop');
  };
  return (
    <div className="commerce" id='commerce'>
      <div className="commerce__text">
        <h2>What we have in store</h2>
        <button className="store" id="store" onClick={handleButtonClick}>
          Visit our store
        </button>
      </div>
      <div className="commerces">
        <Slider {...settings}>
          {CommerceData.map((item) => (
            <div className="commerce__card" key={item.name}>
              <div className="commerce__image">
                <img src={item.image} alt="commerce" />
              </div>
              <div className="commerce__cardInfo">
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Commerce;
