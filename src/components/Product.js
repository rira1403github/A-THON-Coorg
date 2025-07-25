import React from 'react';
import './Product.css';
import car1 from '../assets/coorg1.jpeg';
import car2 from '../assets/coorg2.jpeg';
import car3 from '../assets/coorg3.jpeg';
import car4 from '../assets/coorg4.jpeg';

const carData = [
  {
    img: car1,
    title: 'Ashva 4x4',
    desc: 'Ultimate off-road experience with advanced suspension.',
  },
  {
    img: car2,
    title: 'TrailBlazer X',
    desc: 'Tame wild terrain with rugged performance and control.',
  },
  {
    img: car3,
    title: 'Beast Rider',
    desc: 'Massive torque with desert rally capability.',
  },
  {
    img: car4,
    title: 'Nomad Cruiser',
    desc: 'Luxury meets dirt track in this all-terrain beast.',
  },
];

const CarProducts = () => {
  return (
    <section className="car-products-section">
      <h2 className="section-title">Our Off-Road Lineup</h2>
      <p className="section-subtitle">Engineered for performance in every terrain</p>
      
      <div className="car-grid">
        {carData.map((car, index) => (
          <div className="car-card" key={index} data-aos="fade-up">
            <img src={car.img} alt={car.title} className="car-image" />
            <div className="car-info">
              <h3>{car.title}</h3>
              <p>{car.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarProducts;