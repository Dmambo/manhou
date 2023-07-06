import React from "react";
import twitter from "../../assets/twitter.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__container">
        <h2>Welcome to M.I.E.C</h2>
        <p>
          Experience the difference of working with a logistics provider with a
          decade-long legacy of excellence.
        </p>
        <p>
          From freight forwarding and warehousing to inventory management and
          distribution, our end-to-end services ensure seamless operations
          throughout the supply chain.
        </p>
      </div>
      <div className="socials">
        <div className="social">
          <div className="vertical-line"></div>
          <div className="social__img">
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
            <img src={instagram} alt="instagram" />
          </div>
          <div className="vertical-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
