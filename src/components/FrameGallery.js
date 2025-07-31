import React from 'react';
import './FrameGallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import img1 from '../assets/G-image1.jpg';
import img2 from '../assets/G-image2.jpg';
import img3 from '../assets/G-image3.jpg';

const frameData = [
  {
    image: img1,
    heading: 'BOLD CAPABILITY. SUBTLE SOPHISTICATION.',
    description: `ASHVA 4X4 XTR blurs the line between power and adventure, tearing through the wild while hauling a full trailer—no limits, just relentless momentum.`,
  },
  {
    image: img2,
    heading: 'MADE FOR THE HARSHEST PATHS',
    description: `With ASHVA 4X4 XTR’s double wishbone suspension, every ride is smooth—whether you're blazing rugged trails or gliding through the city, comfort and control come standard, so you’re always ready for the next adventure.`,
  },
  {
    image: img3,
    heading: 'ENGINEERED FOR UTILITY WITH 4 OCCUPANTS',
    description: `The ASHVA 4S stands apart as a true adventure machine built not just for thrilling solo rides, but for unforgettable shared experiences.`,
  },
];

const FrameGallery = () => {
  return (
    <div className="frame-gallery-section" data-aos="fade-up">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        modules={[Pagination, Autoplay]}
        className="frame-swiper"
      >
        {frameData.map((frame, index) => (
          <SwiperSlide key={index}>
            <div className="frame-card">
              <div className="frame-image-container">
                <img src={frame.image} alt={frame.heading} className="frame-img" />
              </div>
              <div className="frame-text">
                <h4 className="frame-heading">{frame.heading}</h4>
                <p className="frame-description">{frame.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FrameGallery;

