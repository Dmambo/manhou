import React, { useState } from "react";
import logo from "../../assets/logo.png";
import menu from '../../assets/menu.png'
import close from '../../assets/close.png'

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const makeCall = () => {
    // Replace `phone-number` with the actual phone number or call link
    const phoneNumber = "+918273773558";
    window.open(phoneNumber, "_blank");
    // console.log("make call")
  };

  return (
    <div className="navbar">
      <div className="logo">
        <a href="#home" className="logo active">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className={`nav__link ${isOpen ? "open" : ""}`}>
        <a href="#about" className="link active" onClick={closeMenu}>
          About
        </a>
        <a href="#services" className="link active" onClick={closeMenu}>
          Services
        </a>
        <a href="#features" className="link active" onClick={closeMenu}>
          Features
        </a>
        <a href="#testimonies" className="link active" onClick={closeMenu}>
          Testimonies
        </a>
        <a href="#blog" className="link active" onClick={closeMenu}>
          Blog
        </a>
        <a href="#request" className="link  request" onClick={makeCall}>
          Request a call
          <span>
            <button className="call">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                viewBox="0 0 32 32"
                height="32"
                fill="none"
                class="svg-icon"
              >
                <path
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke="#fff"
                  fill-rule="evenodd"
                  d="m24.8868 19.1288c-1.0274-.1308-2.036-.3815-3.0052-.7467-.7878-.29-1.6724-.1034-2.276.48-.797.8075-2.0493.9936-2.9664.3258-1.4484-1.055-2.7233-2.3295-3.7783-3.7776-.6681-.9168-.4819-2.1691.3255-2.9659.5728-.6019.7584-1.4748.4802-2.2577-.3987-.98875-.6792-2.02109-.8358-3.07557-.2043-1.03534-1.1138-1.7807-2.1694-1.77778h-3.18289c-.60654-.00074-1.18614.25037-1.60035.69334-.40152.44503-.59539 1.03943-.53345 1.63555.344 3.31056 1.47164 6.49166 3.28961 9.27986 1.64878 2.5904 3.84608 4.7872 6.43688 6.4356 2.7927 1.797 5.9636 2.9227 9.2644 3.289h.1778c.5409.0036 1.0626-.2 1.4581-.569.444-.406.6957-.9806.6935-1.5822v-3.1821c.0429-1.0763-.7171-2.0185-1.7782-2.2046z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </span>
        </a>
        <div className="quotebtns">
        <a href="#quote">
        <button className="quote" onClick={closeMenu}>Get a Quote</button>
        </a>
      </div>
      </div>
      <div className="quotebtn">
        <a href="#quote">
        <button className="quote">Get a Quote</button>
        </a>
      </div>
      <button
          className={`menu-icon ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <img src={isOpen ? close : menu} alt="Menu" />
        </button>
    </div>
  );
};

export default Navbar;
