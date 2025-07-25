import React, { useEffect } from 'react';
import './Reason.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import {
  FaHandshake, FaHeadset, FaUsers, FaGlobe
} from 'react-icons/fa';

const reasons = [
  {
    icon: <FaHandshake />,
    title: 'Tried and Trusted',
    desc: 'Trusted by over 20 million global travellers.',
  },
  {
    icon: <FaHeadset />,
    title: 'Reliable Support',
    desc: '24/7 support via phone, email or chat.',
  },
  {
    icon: <FaUsers />,
    title: 'One-stop Travel Partner',
    desc: 'Complete travel solutions at one place.',
  },
  {
    icon: <FaGlobe />,
    title: 'Global Reach',
    desc: 'Services available across the globe.',
  },
];

const ReasonSection = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section className="reason-section">
      <h2 className="reason-heading" data-aos="fade-up">Reason For Choosing Us</h2>

      {/* Desktop Grid */}
      <div className="reason-grid">
        {reasons.map((item, index) => (
          <div className="reason-card" data-aos="fade-up" data-aos-delay={index * 100} key={index}>
            <div className="reason-icon">{item.icon}</div>
            <h3 className="reason-title">{item.title}</h3>
            <p className="reason-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile Swiper */}
      <div className="reason-slider">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1.1}
          breakpoints={{
            768: { slidesPerView: 2.5 },
          }}
        >
          {reasons.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="reason-card">
                <div className="reason-icon">{item.icon}</div>
                <h3 className="reason-title">{item.title}</h3>
                <p className="reason-desc">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ReasonSection;
