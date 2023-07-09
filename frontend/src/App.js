import React, { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Features from "./components/Features/Features";
import Quote from "./components/Quote/Quote";
// import Blog from "./components/Blog/Blog";
import Shop from "./components/shop/shop";
import Commerce from "./components/Commerce/Commerce";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import ServiceMobile from "./components/Services/Mobile/ServiceMobile";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check initial window size
    window.addEventListener("resize", handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up the event listener on unmount
    };
  }, []);


  const [route, setRoute] = useState('commerce');

  const navigateTo = (routeName) => {
    setRoute(routeName);
  };

  const renderComponent = () => {
    switch (route) {
      case 'commerce':
        return <Commerce navigateTo={navigateTo} />;
      case 'shop':
        return <Shop navigateTo={navigateTo} />;
      default:
        return null;
    }
  };

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      {isMobile ? <ServiceMobile /> : <Services />}
      <Features />
      <Quote />
      {/* <Blog /> */}

      {renderComponent()}
      <Subscribe />
      <Testimonials />
      <Footer />
    </div>
    </Router>
  );
}

export default App;
