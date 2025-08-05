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
      <div className="usp-container" data-aos="fade-up">
      <div className="usp-text">
        <h2 className="usp-heading">ASHVA SERIES</h2>
        <p className="usp-description">
          Some vehicles are built for the road. The <em>ASHVA</em> was built to leave it behind entirely. 
          The <em>ASHVA SERIES</em> is a PUREBRED Side-by-Side TRAIL MACHINE manufactured in India to tackle the most challenging off-road terrains & extreme environments. 
          Designed for unparalleled capability, the <em>ASHVA</em> built to deliver unprecedented adventures by accessing locations previously thought unreachable. 
          This robust vehicle embodies a spirit of a horse with soul of an explorer.
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