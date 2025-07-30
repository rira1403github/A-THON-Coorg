import React, { useEffect } from 'react';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container" data-aos="fade-up">
        <div className="contact-info">
          <h3>Telephone</h3>
          <p><FaPhoneAlt /> (+91) &nbsp;9740025534</p>

          <h3>Location</h3>
          <p><FaMapMarkerAlt /> BENGALURU, KA</p>

          <h3>Email</h3>
          <p><FaEnvelope /> sales@a-thonallterrain.com</p>
        </div>

        <div className="contact-divider"></div>

        <div className="contact-form">
          <h2>GET A QUOTE</h2>
          <form>
            <div className="input-row">
              <input type="text" placeholder="Full Name" required />
            </div>
            <div className="input-row">
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Mobile Number" />
            </div>
            <textarea placeholder="Message..." rows="5" required></textarea>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;