import React from 'react';
import './Dealer.css';
import dealerLogo from '../assets/ASX-logo.png';
import { FaMapMarkerAlt } from 'react-icons/fa';

const Dealer = () => {
  return (
    <div className="dealer-section" data-aos="fade-up">
      <div className="dealer-title">DEALER</div>
      <div className="dealer-content">
        <img src={dealerLogo} alt="ASX Motodrome Logo" className="dealer-logo" data-aos="zoom-in" />
        <div className="dealer-details" data-aos="fade-left">
          <h2>ASX MOTODROME</h2>
          <div className="location-wrapper">
            <FaMapMarkerAlt className="location-icon" />
            <p>
              next to AL Miraj Convention Centre,<br />
              Shauharda Layout, Hoskote,<br />
              Karnataka 562114
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dealer;
