import React, { useRef, useEffect } from 'react';
import './Testinomial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video1 from '../assets/Videos/video1.mp4';

import img1 from '../assets/TP-1.webp';
import img2 from '../assets/TP-2.webp';
import img3 from '../assets/TP-3.webp';
import img4 from '../assets/TP-4.webp';

const articleData = [
  {
    img: img1,
    title: 'IISc, state govt-backed venture launches first All-Terrain Vehicle',
    link: 'https://share.google/BiH5nCcveS2XIjYAk',
    text: 'Read Full Article →',
  },
  {
    img: img2,
    title: 'Ashva 6x6 & Ashva 4x4 Showcased At Invest Karnataka Global Summit',
    link: 'https://share.google/CcspLloZec0PDXGKh',
    text: 'View Full Coverage →',
  },
  {
    img: img4,
    title: 'Home-Grown ATV Showcased at International Auto Show 2024',
    link: 'https://share.google/IekuoF1oIcjzxCSW0',
    text: 'View Full Story →',
  },
  {
    img: img3,
    title: 'India’s First ATV Designed to Rejuvenate Agriculture',
    link: 'https://share.google/WMMvPCiaisjo323e1',
    text: 'Read on Lokmat Times →',
  }
];

const Testimonial = () => {
  const swiperRef = useRef(null);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const videoElement = videoRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoElement.play();
        } else {
          videoElement.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoElement) observer.observe(videoElement);
    return () => {
      if (videoElement) observer.unobserve(videoElement);
    };
  }, []);

  return (
    <div className="testimonial-section" data-aos="fade-up">
      <h2 className="testimonial-title">A-THON in Spotlight</h2>

      <div className="testimonial-preview-container">
        {articleData.map((item, index) => (
          <div className="testimonial-preview-card" key={index}>
            <img src={item.img} alt="Preview" />
            <h3>{item.title}</h3>
            <a href={item.link} target="_blank" rel="noreferrer">{item.text}</a>
          </div>
        ))}
      </div>

      <div className="testimonial-mobile-carousel">
        <Swiper
          ref={swiperRef}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2.5 },
          }}
          className="testimonial-swiper"
        >
          {articleData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-preview-card">
                <img src={item.img} alt="Preview" />
                <h3>{item.title}</h3>
                <a href={item.link} target="_blank" rel="noreferrer">{item.text}</a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

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
                ref={videoRef}
                width="100%"
                height="100%"
                autoPlay
                muted
                loop
                playsInline
                controls
                onEnded={handleVideoEnd}
              >
                <source src={video1} type="video/mp4" />
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
