import React, { useRef, useEffect } from 'react';
import './Testinomial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Testimonial = () => {
  const swiperRef = useRef(null);

  const handleVideoEnd = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="testimonial-section" data-aos="fade-up">
      <h2 className="testimonial-title">TESTIMONIALS</h2>
      <Swiper
        ref={swiperRef}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="testimonial-swiper"
      >
        <SwiperSlide>
          <div className="testimonial-slide">
            <div className="testimonial-video">
              <video
                width="100%"
                height="100%"
                autoPlay
                loop 
                muted
                playsInline
                controls
                onEnded={handleVideoEnd}
              >
                <source src="/videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="testimonial-text">
              "I am still processing what I’ve experienced! I am just loss of thoughts, it’s unbelievable what I’ve witnessed here. The vehicle was just gliding”
              <br />
              <span className="testimonial-author">– JEET TAPASWI</span>
              <span className='testimonial-author-line'>FOUNDER OF TAPASWI RACING</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
