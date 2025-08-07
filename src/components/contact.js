//Google Sheet Link
// https://docs.google.com/spreadsheets/d/1UV84Q04FFC29ScwxAIrGTIMeFVhkIlG6P7bnMQnoZPM/edit?gid=0#gid=0

import React, { useEffect } from 'react';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();

    const url =
      'https://script.google.com/macros/s/AKfycbzAUyiBnURdW5C0hSp3ikWKRfcGJt0CpWZ0BZEp-rA-Q6kMr6FNbXlGmI61h-agwTuxfQ/exec';

    const formData = new URLSearchParams();
    formData.append('Name', e.target.name.value);
    formData.append('Email', e.target.email.value);
    formData.append('Phone', e.target.phone.value);
    formData.append('Vehicle', e.target.vehicle.value);
    formData.append('Message', e.target.message.value);

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    })
      .then((res) => res.text())
      .then((data) => {
        alert(data);
        e.target.reset();
      })
      .catch((error) => {
        console.error('Error submitting form:', error);
        alert('Something went wrong. Please try again later.');
      });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container" data-aos="fade-up">
        <div className="contact-info">
          <h3>Telephone</h3>
          <p>
            <a href="tel:+919740025534" style={{ textDecoration: 'none', color: 'inherit' }}>
              <FaPhoneAlt /> (+91) &nbsp;9740025534
            </a>
          </p>

          <h3>Location</h3>
          <p>
            <a
              href="https://www.google.com/maps?q=308,+1st+Floor,+100+Feet+Rd,+Indira+Nagar+1st+Stage,+Stage+1,+Indiranagar,+Bengaluru,+Karnataka+560038"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              308, 1st Floor, 100 Feet Rd,<br />
              Indira Nagar 1st Stage, Stage 1,<br />
              Indiranagar, Bengaluru, Karnataka 560038
            </a>
          </p>

          <h3>Email</h3>
          <p>
            <a href="mailto:sales@a-thonallterrain.com" style={{ textDecoration: 'none', color: 'inherit' }}>
              <FaEnvelope /> sales@a-thonallterrain.com
            </a>
          </p>
        </div>

        <div className="contact-divider"></div>

        <div className="contact-form">
          <h2>GET A QUOTE</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-row">
              <input type="text" name="name" placeholder="Full Name" required />
            </div>

            <div className="input-row">
              <input type="email" name="email" placeholder="Email Address" required />
              <input type="tel" name="phone" placeholder="Mobile Number" />
            </div>

            <div className="input-row">
              <select name="vehicle" required>
                <option value="">Select Vehicle</option>
                <option value="ASHVA 4x4">ASHVA 4x4</option>
                <option value="ASHVA 4S">ASHVA 4S</option>
              </select>
            </div>

            <textarea name="message" placeholder="Message..." rows="5" ></textarea>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;