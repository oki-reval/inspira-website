import React from "react";
import './Motto.css';
import innovationIcon from "../../assets/icon/ic-inovation.png";
import professionalIcon from "../../assets/icon/ic-profesioanlisme.png";
import confidenceIcon from "../../assets/icon/ic-confidence.png";

const Motto =()=>{
    return(
    <div className="inspira-features">
      <div className="feature-card">
        <img src={innovationIcon} alt="Innovation" className="feature-icon" />
        <h3>Innovation</h3>
        <p>
          Kami terus berinovasi untuk memberikan solusi kreatif dan relevan
          bagi setiap klien.
        </p>
      </div>

      <div className="feature-card">
        <img
          src={professionalIcon}
          alt="Professional"
          className="feature-icon"
        />
        <h3>Professional</h3>
        <p>
          Kami menjaga kualitas layanan dengan komitmen dan integritas yang
          tinggi.
        </p>
      </div>

      <div className="feature-card">
        <img
          src={confidenceIcon}
          alt="Confidence"
          className="feature-icon"
        />
        <h3>Confidence</h3>
        <p>
          Kami membangun hubungan jangka panjang dengan klien melalui
          transparansi dan hasil yang terukur.
        </p>
      </div>
    </div>
    )
}

export default Motto;