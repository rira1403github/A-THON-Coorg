import React, { useEffect, useState } from 'react';
import './Product.css';
import productBg from '../assets/Hero-img.png';
import secondProductBg from '../assets/Ashva-4s.png';
import ashvaTitle from '../assets/Ashva-text.png';
import ashvaTitle2 from '../assets/Ashva-4s-text.png';

const Product = () => {
  const [specs1, setSpecs1] = useState({ cc: 0, nm: 0, hp: 0 });
  const [specs2, setSpecs2] = useState({ cc: 0, nm: 0, hp: 0 });

  useEffect(() => {
    const interval1 = setInterval(() => {
      setSpecs1(prev => {
        if (prev.cc < 976) {
          return {
            cc: Math.min(prev.cc + 5, 976),
            nm: Math.min(prev.nm + 1, 84),
            hp: Math.min(prev.hp + 1, 101),
          };
        } else {
          clearInterval(interval1);
          return prev;
        }
      });
    }, 50);

    const interval2 = setInterval(() => {
      setSpecs2(prev => {
        if (prev.cc < 976) {
          return {
            cc: Math.min(prev.cc + 5, 976),
            nm: Math.min(prev.nm + 1, 84),
            hp: Math.min(prev.hp + 1, 101),
          };
        } else {
          clearInterval(interval2);
          return prev;
        }
      });
    }, 60);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  return (
    <>
      <div
        className="product-section"
        style={{ backgroundImage: `url(${productBg})` }}
        data-aos="fade-up"
      >
        <div className="drivetrain-buttons">
          <button>2WD</button>
          <button>4WD</button>
          <button>DIFF. LOCK</button>
        </div>

        <div className="spec-boxes">
          <div className="spec-item" data-aos="zoom-in">
            <p className="spec-value">{specs1.cc}<span className="unit"> CC</span></p>
            <p>4 STROKE V-TWIN</p>
          </div>
          <div className="spec-item" data-aos="zoom-in" data-aos-delay="100">
            <p className="spec-value">{specs1.nm}<span className="unit"> NM</span></p>
            <p>@ 5500 RPM</p>
          </div>
          <div className="spec-item" data-aos="zoom-in" data-aos-delay="200">
            <p className="spec-value">{specs1.hp}<span className="unit"> HP</span></p>
            <p>@ 6500 RPM</p>
          </div>
        </div>

        <div className="know-more" data-aos="zoom-in" data-aos-delay="300">
          <a
            href="/ASHVA-4X4.pdf"
            download="ASHVA-4X4-Brochure"
            className="know-more-button"
          >
            BROCHURE
          </a>
        </div>
        <div className='ashva-title'>
        <img src={ashvaTitle} alt="ASHVA 4X4" className="ashva-title-img" data-aos="fade" />
        </div>

      </div>

      <div
        className="product-section reversed"
        style={{ backgroundImage: `url(${secondProductBg})`, transform: 'scaleX(-1)' }}
        data-aos="fade-up"
      >
        <div className="drivetrain-buttons reversed-buttons" style={{ transform: 'scaleX(-1)' }}>
          <button>2WD</button>
          <button>4WD</button>
          <button>DIFF. LOCK</button>
        </div>

        <div className="spec-boxes reversed-specs" style={{ transform: 'scaleX(-1)', color: 'white' }}>
          <div className="spec-item" data-aos="zoom-in">
            <p className="spec-value">{specs2.cc}<span className="unit"> CC</span></p>
            <p>4 STROKE INLINE-4</p>
          </div>
          <div className="spec-item" data-aos="zoom-in" data-aos-delay="100">
            <p className="spec-value">{specs2.nm}<span className="unit"> NM</span></p>
            <p>@ 5200 RPM</p>
          </div>
          <div className="spec-item" data-aos="zoom-in" data-aos-delay="200">
            <p className="spec-value">{specs2.hp}<span className="unit"> HP</span></p>
            <p>@ 6300 RPM</p>
          </div>
        </div>

        <div className="reversed-know-more" style={{ transform: 'scaleX(-1)' }}>
          <a
            href="/ASHV-4S.pdf"
            download="ASHVA-4S-Brochure"
            className="reversed-know-more-button"
          >
            BROCHURE
          </a>
        </div>
        <div className='reversed-ashva-title'>
           <img src={ashvaTitle2} alt="ASHVA SERIES" className="ashva-title-img2" style={{ transform: 'scaleX(-1)' }}/>
        </div>
      </div>
    </>
  );
};

export default Product;