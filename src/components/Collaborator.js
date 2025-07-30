import React from 'react';
import './Collaborator.css';

import logo1 from '../assets/C-image1.png';
import logo2 from '../assets/C-image2.png';
import logo3 from '../assets/C-image3.png';
import logo4 from '../assets/C-image4.png';
import logo5 from '../assets/C-image5.png';
import logo6 from '../assets/C-image6.png';
import logo7 from '../assets/C-image7.png';
import logo8 from '../assets/C-image8.png';

const logos = [
  { img: logo1, link: 'https://www.artpark.in/' },
  { img: logo2, link: 'https://twararobotics.in/' },
  { img: logo3, link: 'https://www.comradoaerospace.com/' },
  { img: logo4 },
  { img: logo5, link: 'https://www.tssindia.in/' },
  { img: logo6, link: 'https://cogostrucks.com/' },
  { img: logo7, link: 'https://campcochocolates.com/' },
  { img: logo8, link: 'https://precisionhubllc.com/' },
];

const Collaborators = () => {
  const doubledLogos = logos.concat(logos);

  return (
    <div className="collaborators-section">
      <h2 className="collab-heading">COLLABORATORS</h2>
      <div className="slider">
        <div className="slide-track">
          {doubledLogos.map((logo, index) => (
            <div className="slide" key={index}>
              <a href={logo.link} target="_blank" rel="noopener noreferrer">
                <img src={logo.img} alt={`collab-${index}`} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborators;
