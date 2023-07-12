import React from 'react';
import './shop.css';

const Shop = ({ navigateTo }) => {
  return (
    <div className="shop" id="shop">
      <p><strong>We are currently in production.</strong></p>
        <p>Our shop will be available soon.</p>
        
  <div className="gearbox">
  <div className="overlay"></div>
    <div className="gear one">
      <div className="gear-inner">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
    <div className="gear two">
      <div className="gear-inner">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
    <div className="gear three">
      <div className="gear-inner">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
    <div className="gear four large">
      <div className="gear-inner">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </div>
  </div>

      <button onClick={() => navigateTo('commerce')}
      className='back'>Go back</button>
    </div>
  );
};

export default Shop;
