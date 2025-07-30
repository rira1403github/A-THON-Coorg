import React, { useEffect, useState } from 'react';
import './Reason.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

import madeInIndia from '../assets/India.png';
import { FaTruck, FaTools, FaShippingFast } from 'react-icons/fa';

const ReasonSection = () => {
  const [reasons, setReasons] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 800 });

    // Stub: Replace with actual fetch API if needed
    const fetchedData = [
      {
        icon: <img src={madeInIndia} alt="Made in India" className="reason-img" />,
        title: 'Made in India',
        desc: 'Proudly manufactured in India.',
      },
      {
        icon: <FaTruck />,
        title: 'Doorstep Delivery',
        desc: 'Enjoy the convenience of vehicle delivery right to your doorstep.',
      },
      {
        icon: <FaTools />,
        title: 'Home Front Maintenance Support',
        desc: 'Reliable vehicle care delivered directly to your home.',
      },
      {
        icon: <FaShippingFast />,
        title: '48-Hour Spare Part Delivery',
        desc: 'From factory to doorstep in just 48 hours — guaranteed.',
      },
    ];
    setReasons(fetchedData);
  }, []);

  return (
    <section className="reason-section">
      <h2 className="reason-heading" data-aos="fade-up">
        WHY A-THON
      </h2>

      {/* Desktop Grid View */}
      <div className="reason-grid">
        {reasons.map((item, index) => (
          <div
            className="reason-card"
            data-aos="fade-up"
            data-aos-delay={index * 100}
            key={index}
          >
            <div className="reason-icon">{item.icon}</div>
            <h3 className="reason-title">{item.title}</h3>
            <p className="reason-desc">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Mobile Swiper View */}
      <div className="reason-slider">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
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
