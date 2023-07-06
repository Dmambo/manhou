import React from "react";
import ServiceCard from "./ServiceCard";
import "./Services.css";

const Services = () => {
  const lists = [
    "Vehicle Transport",
    "Freight Forwarding",
    "Warehousing and Distribution",
    "Specialized Transportation",
    "Supply Chain Consulting",
    "Last-Mile Delivery",
    "Project Cargo Management",
  ];
  return (
    <div className="services">
      <div className="service__name">
        <h2>Our Services</h2>
      </div>
      <div className="service__section">
        <div className="card__section">
          <div className="cards">
            <ServiceCard
              number="01"
              title="Ware Housing"
              description="Our extensive fleet of flatbed trailers and specialized equipment allows us to handle a wide range of cargo, from large machinery and construction equipment to over sized industrial components. We meticulously plan and execute each transportation project, considering factors such as weight distribution, load securement, and route analysis to ensure the safe and efficient delivery of your valuable assets."
              subtitle="Flat bed and heavy haul"
              servicepara="Services we offer"
              list={lists}
            />
          </div>
          <div className="cards">
            <ServiceCard
              number="02"
              title="Ware housing"
              description="Our extensive fleet of flatbed trailers and specialized equipment allows us to handle a wide range of cargo, from large machinery and construction equipment to over sized industrial components. We meticulously plan and execute each transportation project, considering factors such as weight distribution, load securement, and route analysis to ensure the safe and efficient delivery of your valuable assets."
              subtitle="Flat bed and heavy haul"
              servicepara="Services we offer"
              list={lists}
            />
          </div>
          <div className="cards">
            <ServiceCard
              number="03"
              title="Flat bed and heavy haul"
              description="Our extensive fleet of flatbed trailers and specialized equipment allows us to handle a wide range of cargo, from large machinery and construction equipment to over sized industrial components. We meticulously plan and execute each transportation project, considering factors such as weight distribution, load securement, and route analysis to ensure the safe and efficient delivery of your valuable assets."
              subtitle="Flat bed and heavy haul"
              servicepara="Services we offer"
              list={lists}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
