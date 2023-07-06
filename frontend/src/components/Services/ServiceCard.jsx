import React from "react";
import PropTypes from "prop-types";
import "./ServiceCard.css";

const ServiceCard = ({
  title,
  subtitle,
  description,
  number,
  servicepara,
  list,
}) => {
  return (
    <div className="service__card">
      <div className="card">
        <p className="title">
          <span className="number">{number}</span>
          {title}
        </p>
        {/* desktop */}
        <div className="card-hidden">
          <p className="title-in">{subtitle}</p>
          <p>{description}</p>
          <h3>{servicepara}</h3>
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <input
                  checked="checked"
                  className="checkbox-input"
                  type="checkbox"
                  id={`item${index}`}
                />
                <label htmlFor={`item${index}`}>{item}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card-border"></div>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  servicepara: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ServiceCard;
