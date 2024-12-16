import React from 'react';
import './Service.css';
import Ilustrasi3 from '../../assets/ilustrasi3.png';
import Ilustrasi4 from '../../assets/ilustrasi4.png';
import Ilustrasi5 from '../../assets/ilustrasi5.png';

// Menambahkan gambar untuk setiap layanan
const services = [
  {
    id: 1,
    title: 'Social Media Management',
    description: [
      'Perencanaan dan strategi konten',
      'Pengelolaan akun media sosial',
      'Monitoring dan analisis performa',
      'Interaksi dan engagement dengan audiens',
    ],
    image: Ilustrasi3,
  },
  {
    id: 2,
    title: 'Media Buying',
    description: [
      'Perencanaan dan eksekusi iklan digital',
      'Pemilihan platform iklan terbaik (Facebook, Instagram, Google)',
    ],
    image: Ilustrasi4,
  },
  {
    id: 3,
    title: 'Content Creation',
    description: [
      'Pembuatan konten visual dan copywriting kreatif',
      'Video produksi untuk promosi dan edukasi',
    ],
    image: Ilustrasi5,
  },
];

const Service = () => {
  return (
    <section className="services">
      <h2>
        Our <span className="highlight">Service</span>
      </h2>
      <p className="service-intro">
        We provide tailored solutions designed to meet the unique needs of our clients. With a focus on quality, efficiency, and innovation, we ensure that every service we deliver achieves optimal results. Our services include:
      </p>
      <div className="service-cards">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.title} className="service-image" />
            <div className="service-content">
              <h3>{service.title}</h3>
              <ul>
                {service.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <button className="read-more">
                Read More <span>&#10132;</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
