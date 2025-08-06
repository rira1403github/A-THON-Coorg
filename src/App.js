import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import About from './components/About';
import Reason from './components/Reason';
import Navbar from './components/Navbar';
import Hero from './components/hero';
import Product from './components/Product';
import Contact from './components/contact';
import Footer from './components/footer';
import Collaborators from './components/Collaborator';
import Dealer from './components/Dealer';
import Testinomial from './components/Testinomial';
import FrameGallery from './components/FrameGallery';
import FloatingButton from './components/FloatingButton';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <FloatingButton />
              <section id="hero">
                <Hero />
              </section>
              <section id="frameGallery">
                <FrameGallery />
              </section>
              <section id="product">
                <Product />
              </section>
              <section id="about">
                <About />
              </section>
              <section id="Reason">
                <Reason />
              </section>
              <section id="Testinomial">
                <Testinomial />
              </section>
              <section id="contact">
                <Contact />
              </section>
              <section id="Collaborators">
                <Collaborators />
              </section>
              <section id="Dealer">
                <Dealer />
              </section>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;