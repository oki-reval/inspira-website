// src/pages/About.js
import React from "react";
import HeroSections from "../../components/heroSections";
import Motto from "../../components/motto/Motto";
import './Home.css'
import About from "../../components/about";
import Service from "../../components/services";
import Reason from "../../components/reason/Reason";
import MediaCenter from "../../components/media_center";
import BlogPublication from "../../components/blog_publication";

const Home = () => {
  return (
    <div className="home-container">
      <HeroSections />
      <Motto/>
      <About />
      <Service />
      <Reason />
      <MediaCenter />
      <BlogPublication />
    </div>
  );
};

export default Home;
