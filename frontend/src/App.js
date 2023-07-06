import React, { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Features from "./components/Features/Features";
import Quote from "./components/Quote/Quote";
// import Blog from "./components/Blog/Blog";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import ServiceMobile from "./components/Services/Mobile/ServiceMobile";

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

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      {isMobile ? <ServiceMobile /> : <Services />}
      <Features />
      <Quote />
      {/* <Blog /> */}
      <Subscribe />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
