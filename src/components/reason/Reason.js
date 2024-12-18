import React from 'react';
import './Reason.css';
import illustration from '../../assets/ilustrasi6.png'; // Pastikan path gambar benar

const Reason = () => {
  return (
    <section className="reason">
        <h2 className="title">
              Why Do You Need a <span className="highlight">Media Center</span>?
        </h2>
        <div className="content">
          {/* Bagian kiri - gambar */}
          <div className="image-section">
            <img
              src={illustration}
              alt="Media Center Illustration"
              className="illustration-image"
            />
          </div>

          {/* Bagian kanan - list benefit */}
          <div className="benefit-section">
            <ul className="benefit-list">
              <li>
                Meningkatkan Transparansi dan Akuntabilitas
              </li>
              <li>
                Mengelola Reputasi dan Citra Publik
              </li>
              <li>
                Efisiensi Komunikasi dan Pengelolaan Krisis
              </li>
              <li>
                Memperluas Jangkauan Komunikasi
              </li>
            </ul>
          </div>
      </div>
    </section>
  );
};

export default Reason;
