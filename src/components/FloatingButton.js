import React from 'react';
import './FloatingButton.css';

const FloatingButton = () => {
  const handleClick = () => {
    const productSection = document.getElementById('contact');
    if (productSection) {
      productSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button className="floating-btn" onClick={handleClick}>
      GET A QUOTE
    </button>
  );
};

export default FloatingButton;