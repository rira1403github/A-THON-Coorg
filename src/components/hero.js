// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Typewriter from 'typewriter-effect';
// import './hero.css';
// import img1 from '../assets/Hero-main.png';

// const heroData = [
//   { image: img1, text: "Experience Coorg Like Never Before." },
// ];

// const Hero = () => {
//   return (
//     <div className="hero-slider">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay
//         ]}
//         spaceBetween={0}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 1000 }}
//         navigation
//         pagination={{ clickable: true }}
//       >
//         {heroData.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="hero-slide"
//               style={{ backgroundImage: `url(${img1})`, transform: 'scaleX(-1)' }}
//             >
//               <div className="hero-blur-overlay"></div>
//               <div className="hero-dark-overlay"></div>
//               <div className="hero-overlay">
//                 <h1 className="hero-heading">INTRODUCING</h1>
//                 <h1 className="hero-head-typewriter">
//                   <Typewriter
//                     options={{
//                       strings: ['Bold. Tough. Unstoppable.'],
//                       autoStart: true,
//                       loop: true,
//                       delay: 120,
//                       deleteSpeed: 50,
//                       pauseFor: 5000,
//                     }}
//                   />
//                 </h1>

//                 {/* <p className="hero-subtitle">
//                   Create Your Outdoor Adventure. Discover With Us.
//                 </p> */}

//                 {/* <h2 className="hero-typewriter">
//                   <Typewriter
//                     options={{
//                       strings: [item.text],
//                       autoStart: true,
//                       loop: true,
//                       delay: 50,
//                       deleteSpeed: 20,
//                       pauseFor: 2500,
//                     }}
//                   />
//                 </h2> */}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Hero;





// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import Typewriter from 'typewriter-effect';
// import './hero.css';
// import img1 from '../assets/Hero-main.png';
// import ashvaLogo from '../assets/ashva.png';

// const heroData = [
//   { image: img1, text: "Experience Coorg Like Never Before." },
// ];

// const Hero = () => {
//   return (
//     <div className="hero-slider">
//       <Swiper
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={0}
//         slidesPerView={1}
//         loop={true}
//         autoplay={{ delay: 3000 }}
//         navigation
//         pagination={{ clickable: true }}
//       >
//         {heroData.map((item, index) => (
//           <SwiperSlide key={index}>
//             <div
//               className="hero-slide"
//               style={{ backgroundImage: `url(${item.image})`, transform: 'scaleX(-1)' }}
//             >
//               <div className="hero-blur-overlay"></div>
//               <div className="hero-dark-overlay"></div>
//               <div className="hero-overlay">
//                 <h1 className="hero-heading">INTRODUCING</h1>
//                 <img src={ashvaLogo} alt="Ashva Logo" className="ashva-logo" />
//                 <h1 className="hero-head-typewriter">
//                   <Typewriter
//                     options={{
//                       strings: ['Bold. Tough. Unstoppable.'],
//                       autoStart: true,
//                       loop: true,
//                       delay: 120,
//                       deleteSpeed: 50,
//                       pauseFor: 5000,
//                     }}
//                   />
//                 </h1>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Hero;




import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Typewriter from 'typewriter-effect';
import './hero.css';
import img1 from '../assets/Hero-main.png';
import ashvaLogo from '../assets/ashva.png';

const heroData = [
  { image: img1, text: "Experience Coorg Like Never Before." },
];

const Hero = () => {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation
        pagination={{ clickable: true }}
      >
        {heroData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero-slide"
              style={{
                backgroundImage: `url(${item.image})`,
                transform: 'scaleX(-1)',
              }}
            >
              <div className="hero-blur-overlay"></div>
              <div className="hero-dark-overlay"></div>
              <div className="hero-overlay">
                <div className="hero-content">
                  <h1 className="hero-heading">INTRODUCING</h1>
                  <img src={ashvaLogo} alt="Ashva Logo" className="hero-logo" />
                  <h1 className="hero-head-typewriter">
                    <Typewriter
                      options={{
                        strings: ['Bold. Tough. Unstoppable.'],
                        autoStart: true,
                        loop: true,
                        delay: 120,
                        deleteSpeed: 50,
                        pauseFor: 5000,
                      }}
                    />
                  </h1>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
