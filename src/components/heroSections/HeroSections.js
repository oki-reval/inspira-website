import React from "react";
import "./HeroSections.css"; // impor file CSS untuk styling
import illustration from "../../assets/Illustrasi.png";

const HeroSections = () => {
  return (
    <section className="inspira-container">

      {/* Bagian Kiri */}
      <div className="inspira-content">
        <h1 className="inspira-title">INSPIRA</h1>
        <h2 className="inspira-subtitle">
          Social Media & Media Buying Solutions
        </h2>
        <p className="inspira-description">
          "Meningkatkan transparansi, citra positif keterhubungan dengan
          masyarakat"
        </p>
        <button className="contact-button">CONTACT US &#9654;</button>
      </div>

      {/* Bagian Kanan - Ilustrasi */}
      <div className="inspira-content" >
        <img src={illustration} alt="Illustration" className="responsive-img" />
      </div>
    </section>

  );
};

export default HeroSections;
