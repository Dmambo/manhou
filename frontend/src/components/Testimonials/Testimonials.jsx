import React from 'react';
import Data from './Data';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Testimonials.css';

const Testimonials = () => {
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
    <div className='testimonial' id='testimonies'>
      <div className='testimonial__content'>
        <div className='testimonial__text'>
        <h2>Testimonials</h2>
        <p>WHAT OUR CLIENTS AND PARTNERS SAY ABOUT US</p>
        </div>
        <Slider {...settings}>
          {Data.map((item, index) => (
            <div className='testimonial__contents' key={index}>
              <p>{item.testimonial}</p>
              <img src={item.image} alt='img' />
              <h3>{item.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
