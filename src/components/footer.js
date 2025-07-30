import React from 'react';
import './footer.css';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  // const [openIndex, setOpenIndex] = useState(null);

  return (
    <footer className="footer-section">
      <div className="footer-top">
        <h2>“REACH THE UNREACHABLE”</h2>
      </div>
      <div className="social-footer">
        <a href="https://www.facebook.com/people/A-thon/61567067664336/?rdid=KhKFvb5di8wMmWAe&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FcND9rTs3aHFeZcEi" target="_blank" rel="noopener noreferrer" className="social-item">
        <FaFacebookF /> <span>FACEBOOK</span>
        </a>
        <a href="https://www.instagram.com/athon_allterrain/" target="_blank" rel="noopener noreferrer" className="social-item">
        <FaInstagram /> <span>INSTAGRAM</span>
        </a>
        <a href="https://www.linkedin.com/company/athonat/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="social-item">
        <FaLinkedinIn /> <span>LINKEDIN</span>
        </a>
        <a href="https://x.com/ATHON1705" target="_blank" rel="noopener noreferrer" className="social-item">
        <FaXTwitter /> <span>TWITTER</span>
        </a>
        <a href="https://www.youtube.com/@a-thon" target="_blank" rel="noopener noreferrer" className="social-item">
        <FaYoutube /> <span>YOUTUBE</span>
        </a>
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
