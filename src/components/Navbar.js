import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav className={`navbar ${visible ? '' : 'hidden'}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src="/Logo-Athon.png" alt="Logo" />
        </div>

        <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-item"
              onClick={closeMobileMenu}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-item"
              onClick={closeMobileMenu}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="product"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-item"
              onClick={closeMobileMenu}
            >
              PRODUCT
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="nav-item"
              onClick={closeMobileMenu}
            >
              GET A QUOTE
            </Link>
          </li>
        </ul>

        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
