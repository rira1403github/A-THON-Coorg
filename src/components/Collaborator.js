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
  { img: logo1, link: 'https://www.artpark.in/', height: 65, width: 300 },
  { img: logo2, link: 'https://twararobotics.in/', height: 60, width: 120 },
  { img: logo3, link: 'https://www.comradoaerospace.com/', height: 40, width: 160 },
  { img: logo4, height: 50, width: 130 },
  { img: logo5, link: 'https://www.tssindia.in/', height: 85, width: 150 },
  { img: logo6, link: 'https://cogostrucks.com/', height: 80, width: 185 },
  { img: logo7, link: 'https://campcochocolates.com/', height: 90, width: 120 },
  { img: logo8, link: 'https://precisionhubllc.com/', height: 120, width: 195 }
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
              {logo.link ? (
                <a href={logo.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={logo.img}
                    alt={`collab-${index}`}
                    className="logo-img"
                    style={{
                      height: `${logo.height}px`,
                      width: `${logo.width}px`,
                    }}
                  />
                </a>
              ) : (
                <img
                  src={logo.img}
                  alt={`collab-${index}`}
                  className="logo-img"
                  style={{
                    height: `${logo.height}px`,
                    width: `${logo.width}px`,
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborators;