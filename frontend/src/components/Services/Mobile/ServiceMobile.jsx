import React from 'react'
import './ServiceMobile.css'

const ServiceMobile = () => {
  return (
    <div className='mobile'>
        <div className="service__name">
    <h2>Our Services</h2>
  </div>

    <div className="service__card__mobile">
    <div className='service__offer'>
      <h3>Services we Offer</h3>
    </div>
    <div className='service__list'>
      <ul>
        <li><span>
                <input
                  checked="checked"
                  className="checkbox-input"
                  type="checkbox"
                />
              </span>Vehicle Transport</li>
        <li><span>
                <input
                  checked="checked"
                  className="checkbox-input"
                  type="checkbox"
                />
              </span>Freight Forwarding</li>
        <li><span>
                <input
                  checked="checked"
                  className="checkbox-input"
                  type="checkbox"
                />
              </span>Warehousing and Distribution</li>
        <li><span>
                <input
                  checked="checked"
                  className="checkbox-input"
                  type="checkbox"
                />
              </span>Specialized Transportation</li>
        <li><span>
                <input
                  checked="checked"
                  className="checkbox-input"
                  type="checkbox"
                />
              </span>Supply Chain Consulting</li>
        <li><span>
                <input
                  checked="checked"
                  className="checkbox-input"
                  type="checkbox"
                />
              </span>Last-Mile Delivery</li>
        <li><span>
                <input
                  checked="checked"
                  className="checkbox-input"
                  type="checkbox"
                />
              </span>Project Cargo Management</li>
        <li><span>
                <input
                  checked="checked"
                  className="checkbox-input"
                  type="checkbox"
                />
              </span>Customs Clearance & Excise</li>
        <li><span>
                <input
                  checked="checked"
                  className="checkbox-input"
                  type="checkbox"
                />
              </span>Transportation</li>
        <li><span>
                <input
                  checked="checked"
                  className="checkbox-input"
                  type="checkbox"
                />
              </span>Consulting</li>
        <li><span>
                <input
                  checked="checked"
                  className="checkbox-input"
                  type="checkbox"
                />
              </span>Ground Transport</li>
        <li><span>
                <input
                  checked="checked"
                  className="checkbox-input"
                  type="checkbox"
                />
              </span>Logistics</li>
        <li><span>
                <input
                  checked="checked"
                  className="checkbox-input"
                  type="checkbox"
                />
              </span>Supply Chain</li>
      </ul>
    </div>
    <div className="card__mobile">
        <p className="title">
            <span className="number">01</span>
            Ware Housing
        </p>
        <p className="title">
            <span className="number">02</span>
            Global Forwarding
        </p>
        <p className="title">
            <span className="number">03</span>
            Flat bed and heavy haul
        </p>
        
    </div>
   
    </div>
  
  </div>
  )
}

export default ServiceMobile