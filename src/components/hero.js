import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Typewriter from 'typewriter-effect';
import './hero.css';
import img1 from '../assets/coorg1.jpeg';
import img2 from '../assets/coorg2.jpeg';
import img3 from '../assets/coorg3.jpeg';
import img4 from '../assets/coorg4.jpeg';

const heroData = [
  { image: img1, text: "Experience Coorg Like Never Before" },
  { image: img2, text: "Thrilling Off-Road Adventures Await" },
  { image: img3, text: "Explore the Untamed Trails" },
  { image: img4, text: "Drive Through Nature’s Heart" },
];

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  return (
    <div className="hero-slider">
      {/* <div className="vertical-nav">
        {[1, 2, 3, 4].map((n, i) => (
          <div
            key={i}
            className="nav-dot"
            onClick={() => scrollToSection(`section-${n}`)}
          >
            0{n}
          </div>
        ))}
      </div> */}

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 6000 }}
        navigation
        pagination={{ clickable: true }}
      >
        {heroData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="hero-blur-overlay"></div>
              <div className="hero-dark-overlay"></div>
              <div className="hero-overlay">
                <h1 className="hero-heading">ADVENTURE</h1>
                <p className="hero-subtitle">
                  Create Your Outdoor Adventure. Discover With Us.
                </p>
                <h2 className="hero-typewriter">
                  <Typewriter
                    options={{
                      strings: [item.text],
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 50,
                      pauseFor: 4000,
                    }}
                  />
                </h2>
              </div>

              {/* <div className="bottom-labels">
                {[
                  "Be yourself with new emotion",
                  "Create Your Outdoor Adventure. Discover With Us.",
                  "Be yourself with new emotion",
                  "With new emotion. Be yourself",
                ].map((text, i) => (
                  <div
                    key={i}
                    className={`label-item ${i === 0 ? 'active-label' : ''}`}
                  >
                    <span className="dot"></span>
                    <p>{text}</p>
                  </div>
                ))}
              </div> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
