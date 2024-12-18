// src/pages/About.js
import React from "react";
import HeroSections from "../../components/heroSections";
import Motto from "../../components/motto/Motto";
import './Home.css'
import About from "../../components/about";
import Service from "../../components/services";
import Reason from "../../components/reason/Reason";

const Home = () => {
  return (
    <div className="home-container">
      <HeroSections />
      <Motto/>
      <About />
      <Service />
      <Reason />
    </div>
  );
};

export default Home;
