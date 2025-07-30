// import React from 'react';
// import './FrameGallery.css';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// // Import your images
// import img1 from '../assets/G-image1.jpg';
// import img2 from '../assets/G-image2.jpg';
// import img3 from '../assets/G-image3.jpg';

// const frameData = [
//   {
//     image: img1,
//     heading: 'BOLD CAPABILITY. SUBTLE SOPHISTICATION.',
//     description: `Proving That True Off Road Capability Can Live In A Sanctuary Of Luxury, Premium Finishes, A Quiet Refined Ride And Sophisticated Details Throughout`,
//   },
//   {
//     image: img2,
//     heading: 'MADE FOR THE HARSHEST PATHS',
//     description: `From Mud And Rocky Ascents To Rivers And Dunes. Conquer It All`,
//   },
//   {
//     image: img3,
//     heading: 'ENGINEERED FOR UTILITY WITH 4 OCCUPANTS',
//     description: `Rugged Redesign For Four, While Keeping Its Brute Force Capability`,
//   },
// ];

// const FrameGallery = () => {
//   return (
//     <div className="frame-gallery-section" data-aos="fade-up">
//       <Swiper
//         slidesPerView={1}
//         spaceBetween={30}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           768: {
//             slidesPerView: 1,
//           },
//           1024: {
//             slidesPerView: 1,
//           },
//           1200: {
//             slidesPerView: 1,
//           },
//           1324: {
//             slidesPerView: 1,
//           },
//           1424: {
//             slidesPerView: 1,
//           },
//         }}
//         modules={[Pagination]}
//         className="frame-swiper"
//       >
//         {frameData.map((frame, index) => (
//           <SwiperSlide key={index}>
//             <div className="frame-card">
//               <h3 className="frame-title">{frame.title}</h3>
//               <img src={frame.image} alt={frame.title} className="frame-img" />
//               <h4 className="frame-heading">{frame.heading}</h4>
//               <p className="frame-description">{frame.description}</p>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default FrameGallery;


import React from 'react';
import './FrameGallery.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Images
import img1 from '../assets/G-image1.jpg';
import img2 from '../assets/G-image2.jpg';
import img3 from '../assets/G-image3.jpg';

const frameData = [
  {
    image: img1,
    heading: 'BOLD CAPABILITY. SUBTLE SOPHISTICATION.',
    description: `Proving That True Off Road Capability Can Live In A Sanctuary Of Luxury, Premium Finishes, A Quiet Refined Ride And Sophisticated Details Throughout`,
  },
  {
    image: img2,
    heading: 'MADE FOR THE HARSHEST PATHS',
    description: `From Mud And Rocky Ascents To Rivers And Dunes. Conquer It All`,
  },
  {
    image: img3,
    heading: 'ENGINEERED FOR UTILITY WITH 4 OCCUPANTS',
    description: `Rugged Redesign For Four, While Keeping Its Brute Force Capability`,
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
