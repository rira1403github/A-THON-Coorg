import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about" data-aos="fade-up">
      <div className="about-content">
        <div className="about-title-container">
          <h2 className="about-title">
            Here’s what makes<br />
            <span className="highlight">A-THON ALLTERRAIN</span>
            <div className="underline" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;perfect for you!
          </h2>
        </div>
        <div className="about-description-container">
          <p className="about-description">
            Forged in the heart of Karnataka, <strong>A-THON</strong> champions the spirit of Indian innovation as a premier off-road vehicle manufacturer.
            Our rugged, all-terrain vehicles are proudly <strong>*Made in India*</strong>, engineered with homegrown ingenuity to conquer the toughest landscapes.
            We don't just build machines; we drive a revolution in mobility, proving that the future of <strong>all-terrain</strong> exploration is born right here.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

