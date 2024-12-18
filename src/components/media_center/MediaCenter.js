import React, { useState } from 'react';
import './MediaCenter.css';
import illustration from '../../assets/ilustrasi7.png';

const MediaCenter = () => {
  const [openDropdown, setOpenDropdown] = useState(1); // Dropdown pertama terbuka secara default

  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <section className="media-center">
      <div className="content">
        {/* Bagian Kiri: Gambar */}
        <div className="illustration">
            <h2 className="title">
            Media Center <span className="highlight">Package</span>
            </h2>
            <img
                src={illustration} // Sesuaikan path gambar
                alt="Media Center Illustration"
            />
        </div>

        {/* Bagian Kanan: Dropdowns */}
        <div className="details">
            <button className="dropdown-head">
                Package Options & Prices
            </button>
          {/* Dropdown 1 */}
            <div className="dropdown">
                <button
                className="dropdown-button"
                onClick={() => toggleDropdown(1)}
                >
                Media Center All Package
                </button>
                {openDropdown === 1 && (
                <div className="dropdown-content">
                    <p className="price-section">
                    Harga: <span className="price">Rp 2.500.000</span>
                    </p>
                    <hr className="divider" />
                    <ul className="feature-list">
                    <li>Meningkatkan Transparansi dan Akuntabilitas</li>
                    <li>Efisiensi Komunikasi dan Pengelolaan Krisis</li>
                    </ul>
                </div>
                )}
            </div>

          {/* Dropdown 2 */}
          <div className="dropdown">
            <button
              className="dropdown-button"
              onClick={() => toggleDropdown(2)}
            >
              Media & Social Media Monitoring
            </button>
            {openDropdown === 2 && (
              <div className="dropdown-content">
                <p className="price-section">
                  Harga: <span className="price">Rp 5.000.000</span>
                </p>
                <hr className="divider" />
                <ul className="feature-list">
                  <li>Mengelola Reputasi dan Citra Publik</li>
                  <li>Memperluas Jangkauan Komunikasi</li>
                </ul>
              </div>
            )}
        </div>

          {/* Dropdown 3 */}
          <div className="dropdown">
            <button
              className="dropdown-button"
              onClick={() => toggleDropdown(3)}
            >
              Media Buying
            </button>
            {openDropdown === 3 && (
              <div className="dropdown-content">
                <p className="price-section">
                  Harga: <span className="price">Rp 10.000.000</span>
                </p>
                <hr className="divider" />
                <ul className="feature-list">
                  <li>Strategi Manajemen Krisis Lanjutan</li>
                  <li>Pelatihan dan Konsultasi Khusus</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaCenter;
