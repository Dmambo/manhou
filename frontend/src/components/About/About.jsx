import React from "react";
import aboutimg from "../../assets/aboutimg.png";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__name">
        <h2>About Us</h2>
      </div>
      <div className="about__me">
        <div className="image-container">
          <img src={aboutimg} alt="about-img" className="about__image" />
        </div>
        <div className="about__text">
          <h3>
            <span className="company">
              <h2>MANHOU IMPORT EXPORT COMPANY</h2>
            </span>
          </h3>
          <p className="para">
            a top-notch transportation company with a proven track record
            spanning over a decade, our logistics website stands as a trusted
            partner in providing top-notch transportation and supply chain
            solutions. We pride ourselves on our extensive industry experience
            and unwavering commitment to delivering reliable, efficient, and
            cost-effective logistics services. At our core, we understand the
            intricate complexities of managing the movement of goods and
            materials. Leveraging our expertise, we offer a comprehensive range
            of logistics solutions tailored to meet the unique needs of our
            clients. From freight forwarding and warehousing to inventory
            management and distribution, our end-to-end services ensure seamless
            operations throughout the supply chain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
