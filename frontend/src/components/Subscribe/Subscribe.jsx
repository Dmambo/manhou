import React, { useState } from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import './Subscribe.css'

const Subscribe = () => {

    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [showPopup, setShowPopup] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handleSubscribe = async (e) => {
        e.preventDefault()
        setIsLoading(true);
       try {
        const data = { email: email }; // Create an object with the email property
        const response = await axios.post('https://miec.onrender.com/api/subscribe', data);
        console.log(response.data);

         // Show the popup message
      setShowPopup(true);
        // Reset the input field
        setEmail('');
       }
       catch (error) {
        console.log(error)
       }
       finally {
        setIsLoading(false);
       }
      };
      


      return (
        <div className='subscribe'>
          
          <div className='sub__content'>
            <div className='sub__text'>
              <h2>Subscribe to Newsletters</h2>
            </div>
            <div className='input'>
              <input
                type='text'
                placeholder='Enter your email address'
                value={email}
                onChange={handleEmailChange}
              />
              <button onClick={handleSubscribe}>Subscribe</button>
            </div>
            {isLoading && <div className='loaders'>
            <Loader /></div>}
          </div>
          {showPopup && (
  <div className="popup">
    <p>Email sent successfully!</p>
    <button onClick={() => setShowPopup(false)}>OK</button>
  </div>
)}
        </div>
      );
}

export default Subscribe