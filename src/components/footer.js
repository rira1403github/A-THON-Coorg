import React, { useState } from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaTwitch } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // const sections = [
    
  // ];

  return (
    <footer className="footer-section">
      {/* <div className="footer-columns">
        {sections.map((col, i) => (
          <div className="footer-col" key={i}>
            <div className="footer-col-header" onClick={() => handleToggle(i)}>
              <h4>{col.title}</h4>
              <span className="toggle-icon">{openIndex === i ? <FaMinus /> : <FaPlus />}</span>
            </div>
            <ul className={`footer-col-links ${openIndex === i ? 'open' : ''}`}>
              {col.links.map((link, j) => (
                <li key={j}>{link}</li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}

      <div className="social-footer">
        <div className="social-item"><FaFacebookF /> <span>FACEBOOK</span></div>
        <div className="social-item"><FaInstagram /> <span>INSTAGRAM</span></div>
        <div className="social-item"><FaLinkedinIn /> <span>LINKEDIN</span></div>
        <div className="social-item"><FaTwitch /> <span>TWITCH</span></div>
        <div className="social-item"><FaXTwitter /> <span>TWITTER</span></div>
        <div className="social-item"><FaYoutube /> <span>YOUTUBE</span></div>
      </div>

      <div className="footer-bottom">
        <div className="footer-links">
          <span>PRIVACY POLICY</span>
          <span>TERMS & CONDITIONS</span>
          <span>THOUGHT</span>
        </div>
        <p className="footer-copy">© 2025. A-THON ALLTERRIAN PVT. LTD. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
