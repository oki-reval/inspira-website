import React from 'react';
import './About.css';
import Ilustration2 from '../../assets/ilustrasi2.png'
const About = () => {
  return (
    <section className="about-us">
      <div className="about-image">
        <img src={Ilustration2} alt="About Us" />
      </div>
      <div className="about-content">
        <h2>
          <span className="highlight">About</span> Us
        </h2>
        <p>
          Inspira adalah perusahaan yang bergerak di bidang pengelolaan media sosial dan layanan media buying, hadir untuk membantu bisnis, personal branding, serta lembaga pemerintahan dan non-pemerintah untuk meningkatkan exposure digital dan meraih target audiens secara efektif. Kami memahami pentingnya digital presence yang tepat sasaran dalam dunia yang semakin terhubung, dan kami siap menjadi partner yang handal dalam membangun dan mengelola citra serta kampanye media.
        </p>
        <button className="read-more">
          READ MORE <span>&#10132;</span>
        </button>
      </div>
    </section>
  );
};

export default About;
