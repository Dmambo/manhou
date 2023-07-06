import React from 'react';
import truck from '../../assets/truck.gif'
import './Loader.css'


const Loader = () => {
  return (
    <div className='spinner'>
      <img src={truck} alt='gif' />
    </div>
  );
};

export default Loader;
