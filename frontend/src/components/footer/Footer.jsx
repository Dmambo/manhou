import React from 'react'

import './Footer.css'
const Footer = () => {
  return (
    <footer>
      
        <div className='footer__text'>
          <h3>Manhou Import
          Export Company LLC
          </h3>
          <p>Experience the difference of working with a logistics provider with a decade-long legacy<br /> of excellence.</p>
        </div>
        <div className='footer'>
    
        <div className='footer__contents'>
          <div className='footer__content'>
            
            <div className='footer__enquiry'>
              <h2>Work Enquiry</h2>
              <p>Interested in <span className='underline'>working with us?</span></p>
              <p>Email:<span className='underline down'>manhouimportexport@outlook.com</span></p>
            </div>
            <div className='stay'>
              <h2>Stay in touch</h2>
            <div className='input'>
              <input
                type='text'
                placeholder='Enter your email address'
                value='email'
                
              />
              
            </div>
            <button className='join'>Join our subscriber list</button>
            </div>
            <div className='footer__map'>
              <h2>Our Locations</h2>
              <p><span className='bold'>KINSHASA: </span> No. 2 Nguma,Commune/Mont-Ngufuta Quartier/Mazal</p>
              <p><span className='bold'>United State: </span>128 N Saginaw Bivd Fort Worth tx 76179</p>
            </div>
          </div>
        </div>
      </div>

      <div className='footer__end'>
        <div className='footer__end__left'>
          <p>© 2021 Manhou Import Export Company LLC. All rights reserved.</p>
        </div>

        <div className='footer__end__right'>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>

        </div>
      </div>
    </footer>
  )
}

export default Footer