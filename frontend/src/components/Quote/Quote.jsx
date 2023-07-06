import React, { useState} from 'react';
import axios from 'axios';
import Loader from '../Loader/Loader';
import quote from '../../assets/quote.gif'

import './Quote.css';

const Quote = () => {
  const [previewMode, setPreviewMode] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPreviewPop, setShowPreviewPop] = useState(false);


  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    email: '',
    phone: '',
    shippingOrigin: '',
    shippingDestination: '',
    shipmentType: '',
    cargoDescription: '',
    contactMethod: 'email',
  });



  const shipmentOptions = [
    { value: 'Select an option', label: 'select an option' },
    { value: 'Box Dimension 18*18*24 ($130)', label: 'Box Dimension 18*18*24 ($130)' },
    { value: 'Box Dimension 24*18*24 ($320)', label: 'Box Dimension 24*18*24 ($320)' },
    { value: 'Box Dimension 18*18*28 ($180)', label: 'Box Dimension 18*18*28 ($180)' },
    { value: 'Box Dimension 18*21*46 ($330)', label: 'Box Dimension 18*21*46 ($330)' },
    { value: 'Tonneau Barrel-50 ($330)', label: 'Tonneau Barrel-50 ($330)' },
    { value: 'Tonneau Barrel-53 ($380)', label: 'Tonneau Barrel-53 ($380)' },
    { value: 'Palet ($580)', label: 'Palet ($580)' },
    { value: 'Car ($2800)', label: 'Car ($2800)' },
    { value: 'SUV/Jeep ($3200)', label: 'SUV/Jeep ($3200)' },
    { value: 'Mattress ($280)', label: 'Mattress ($280)' },
  ];

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post('https://miec.onrender.com/api/sendemail', formData);
      console.log(response.data);
  
      // Show the popup message
      setShowPopup(true);
  
      // Reset the form data
      setFormData({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        phone: '',
        shippingOrigin: '',
        shippingDestination: '',
        shipmentType: '',
        cargoDescription: '',
        contactMethod: 'email',
      });
    } catch (error) {
      console.error(error);
    }
    finally {
      setIsLoading(false); // Set isLoading to false after the email request is complete
    }
  };
  


  const handlePreview = () => {
    if (window.innerWidth <= 768) {
      setShowPreviewPop(true);
    } else {
      setPreviewMode(true);
    }
  };

  const handleClosePreview = () => {
    setPreviewMode(false);
    setShowPreviewPop(false); // Set preview mode to false to hide the preview
  };

  return (
    <div className='quoter' id='quote'>
      <div className='quote__container'>
        <div className={`form ${previewMode ? 'preview-mode' : ''}`}>
        {isLoading && <div className='loader'>
            <Loader /></div>}
          <div className='quote__header'>
            <h2>REQUEST A QUOTE</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='firstName'>First Name:</label>
                <input type='text' id='firstName' value={formData.firstName} onChange={handleInputChange} required/>
              </div>
              <div className='form-group'>
                <label htmlFor='lastName'>Last Name:</label>
                <input type='text' id='lastName' value={formData.lastName} onChange={handleInputChange} required/>
              </div>
              <div className='form-group'>
                <label htmlFor='email'>Email Address:</label>
                <input type='email' id='email' value={formData.email} onChange={handleInputChange} required/>
              </div>
            </div>
            <div className='form-row'>
              <div className='form-group'>
                <label htmlFor='companyName'>Company Name:</label>
                <input type='text' id='companyName' value={formData.companyName} onChange={handleInputChange} required/>
              </div>
                <div className='form-group'>
                <label htmlFor='phone'>Phone Number:</label>
                <input type='tel' id='phone' value={formData.phone} onChange={handleInputChange} required/>
              </div>
              <div className='form-group'>
              <label htmlFor='shipmentType'>Type of Shipment:</label>
              <select id='shipmentType' value={formData.shipmentType} onChange={handleInputChange}  required>
                {shipmentOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            </div>
            <div className='form-row'>
  
            </div>
            <div className='form-row'>
   
            </div>

            <div className='form-group'>
              <label htmlFor='shippingOrigin'>Shipping Origin:</label>
              <textarea id='shippingOrigin' rows='4' value={formData.shippingOrigin} onChange={handleInputChange} 
              maxLength={100}
              required/>
            </div>
            <div className='form-group'>
              <label htmlFor='shippingDestination'>Shipping Destination:</label>
              <textarea
                id='shippingDestination'
                rows='4'
                value={formData.shippingDestination}
                onChange={handleInputChange}
                maxLength={100}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='cargoDescription'>cargoDescription:</label>
              <textarea id='cargoDescription' rows='4' value={formData.cargoDescription} onChange={handleInputChange} 
              maxLength={100}
              required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='contactMethod'>Preferred Method of Contact:</label>
              <select id='contactMethod' value={formData.contactMethod} onChange={handleInputChange}>
                <option value='email'>Email</option>
                <option value='phone'>Phone</option>
              </select>
            </div>
            <div className='btns'>
            <button type='button' className='preview-button' onClick={handlePreview}>
            Preview
          </button>
          <button type='submit' className='submitbtn' >
              Request Quote
            </button>
            </div>
            {showPreviewPop && (
            <div className='popup'>
              <p>Available only on desktop view.</p>
              <button onClick={() => setShowPreviewPop(false)}>OK</button>
            </div>
          )}

            {showPopup && (
  <div className="popup">
    <p>Email sent successfully!</p>
    <button onClick={() => setShowPopup(false)}>OK</button>
  </div>
)}

            
          </form>
        </div>
        <div className='quote__text'>
          <div className='quota'>
            <div className='quota__header'>
              <h2>Quote</h2>
              <p>Custom quote for Elite services</p>
            </div>
            <div className='quota__text'>
              <p>
                At M.I.E.C we understand the importance of tailoring our services to your unique needs. Contact us
                today for a custom quote that addresses your specific logistics requirements
              </p>
            </div>
            <div className="animation">
              <img src={quote} alt='quote' />
</div>


          </div>
          {previewMode && (
          <div className='form-preview-overlay'>
            <div className='form-preview-modal'>
           <div className='row'> <p>
              <strong>First Name: </strong><span> {formData.firstName}</span>
            </p>
            <p>
              <strong>Last Name: </strong><span> {formData.lastName}</span>
            </p></div>
           <div className='row'>
           <p>
              <strong>Company Name: </strong><span> {formData.companyName}</span>
            </p>
            <p>
              <strong>Email Address: </strong><span> {formData.email}</span>
            </p>
           </div>
           <div className='row'>
           <p>
              <strong>Phone Number: </strong><span> {formData.phone}</span>
            </p>
            <p>
              <strong>Type of Shipment: </strong><span> {formData.shipmentType}</span>
            </p>
           </div>
           
            <div className='long__text'>
            <p>
              <strong>Shipping Origin: </strong><span> {formData.shippingOrigin}</span>
            </p>
            <p>
              <strong>Shipping Destination: </strong><span > {formData.shippingDestination}</span>
            </p>
            <p>
              <strong>Description of Cargo: </strong><span> {formData.cargoDescription}</span>
            </p>
    
            </div>
            <p>
              <strong>Preferred Method of Contact: </strong><span> {formData.contactMethod}</span>
            </p>
            <button type='button' className='previewbutton' onClick={handleClosePreview}>
             Close Preview
          </button>
          </div>
          </div>


               )} 
        </div>


      </div>
    </div>
  );
};

export default Quote;
