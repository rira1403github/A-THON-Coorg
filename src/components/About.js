import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about" data-aos="fade-up">
      <div className="about-content">
        <h2 className="about-title">
          Here’s what makes<br />
          <span className="highlight">A-THON ALLTERRIAN</span> perfect for you!
          <div className="underline" />
        </h2>
        <p className="about-description">
          Whether you're planning a team challenge, a solo adventure, or a
          thrilling outdoor experience, <strong>Alternout</strong> is tailored for all types of explorers. 
          From off-road beast rides to team-building track events — we offer unforgettable, adrenaline-pumped drives
          that are as raw as they are rewarding.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
