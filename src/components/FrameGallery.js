import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import './FrameGallery.css';
import 'swiper/css/pagination';

import img1 from '../assets/Gimage1.jpg';
import img2 from '../assets/Gimage2.jpg';
import img3 from '../assets/Gimage3.jpg';
import img4 from '../assets/Gimage4.jpg';
import img5 from '../assets/Gimage5.jpg';
import img6 from '../assets/Gimage6.jpg';
import img7 from '../assets/Gimage7.jpg';

const images = [img1, img2, img3, img4, img5, img6, img7];

const UspSection = () => {
  return (
    <section className="usp-section" data-aos="fade-up">
      <h2 className="usp-heading">OUR USP</h2>
      <div className="usp-container" data-aos="fade-up">
      <div className="usp-text">
        <p className="usp-description">
          Forged in the heart of Karnataka, A-THON champions the spirit of Indian innovation as a premier off-road vehicle manufacturer.
          Our rugged, all-terrain vehicles are proudly <em>*Made in India*</em>, engineered with homegrown ingenuity to conquer the toughest landscapes.
          We don't just build machines; we drive a revolution in mobility, proving that the future of all-terrain exploration is born right here.
        </p>
      </div>

      <div className="usp-carousel" data-aos="fade-left" data-aos-delay="200">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="usp-swiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Slide ${index + 1}`} className="usp-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
    </section>
  );
};

export default UspSection;