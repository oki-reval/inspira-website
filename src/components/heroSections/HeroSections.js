import React from "react";
import "./HeroSections"; // impor file CSS untuk styling

const HeroSections = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Welcome to Inspira</h1>
        <p>Your partner for Social Media & Media Buying Solutions</p>
        <button className="cta-button">Get Started</button>
      </div>
    </section>
  );
};

export default HeroSections;
