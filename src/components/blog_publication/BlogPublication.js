import React from 'react';
import './BlogPublication.css';
import blog1 from '../../assets/images/image1.png'
import blog2 from '../../assets/images/image2.png'
import blog3 from '../../assets/images/image3.png'


const BlogPublication = () => {
  const blogs = [
    {
      title: 'Optimalkan Bisnis Anda dengan Strategi Terbaru',
      description: 'Pelajari cara meningkatkan performa bisnis menggunakan strategi dan alat terbaru.',
      image: blog1,
    },
    {
      title: 'Inovasi Teknologi untuk Masa Depan',
      description: 'Temukan berbagai inovasi teknologi yang akan mempengaruhi industri dalam 5 tahun ke depan.',
      image: blog2,
    },
    {
      title: 'Mengelola Tim Efektif di Era Digital',
      description: 'Tips dan trik mengelola tim yang efektif dengan memanfaatkan teknologi digital.',
      image: blog3,
    },
  ];

  return (
    <section className="blog-publication">
      <h2 className="blog-title">
        Our latest <span className="highlight">blog & publication</span>
      </h2>
      <div className="blog-cards">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img
              src={blog.image}
              alt={blog.title}
              className="blog-image"
            />
            <div className="card-content">
              <h3 className="blog-card-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <button className="more-button">More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogPublication;
